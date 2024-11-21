export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' }); // Handle non-POST requests
    }
  
    const { password } = req.body;
  
    const COMMON_PASSWORD = 'donate123'; // Common password stored securely
  
    if (!password) {
      return res.status(400).json({ message: 'Password is required' }); // Handle missing password
    }
  
    if (password === COMMON_PASSWORD) {
      return res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }
  }
  