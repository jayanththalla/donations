import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://jay:jayanththalla33@cluster0.qfpuofn.mongodb.net/donations?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB URI
const MONGODB_DB = "donations"; // Replace with your database name

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI); // No need for deprecated options
  await client.connect();

  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { item, quantity, description, name, phone, timestamp, imageUrl } = req.body;

    // Validate required fields
    if (!item || !quantity || !name || !phone) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    // Validate imageUrl (optional but must be a valid URL if provided)
    if (imageUrl && !/^https?:\/\/[^\s]+$/.test(imageUrl)) {
      return res.status(400).json({ message: "Invalid image URL" });
    }

    try {
      const { db } = await connectToDatabase();

      // Prepare the donation data
      const newDonation = {
        item,
        quantity: parseInt(quantity, 10), // Ensure quantity is a number
        description: description || "No description provided",
        name,
        phone,
        imageUrl: imageUrl || null, // Include image URL or set to null
        createdAt: timestamp || new Date().toISOString(),
      };

      // Insert into the database
      const result = await db.collection('donations').insertOne(newDonation);

      // Return the inserted document's ID
      res.status(201).json({
        message: 'Donation added successfully',
        donationId: result.insertedId,
      });
    } catch (error) {
      console.error('Failed to add donation:', error);
      res.status(500).json({ error: 'Failed to add donation' });
    }
  } else if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const donations = await db.collection('donations').find({}).toArray();
      res.status(200).json({ items: donations });
    } catch (error) {
      console.error('Failed to fetch donations:', error);
      res.status(500).json({ error: 'Failed to fetch donations' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
