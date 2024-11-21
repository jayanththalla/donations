// pages/create.js
import DonationForm from '../components/DonationForm'; // Adjust path if necessary
import Navbar from '../components/Navbar';

export default function Create() {
  return (
    
    <div>
<Navbar />
      {/* <h1 className="text-center text-3xl font-semibold mb-8">Donate Items</h1> */}
      <DonationForm />  {/* This renders the ItemList component */}
    </div>
  );
}
