// pages/donate.js
import LoginPage from '../components/Login'; // Adjust path if necessary
import Navbar from '../components/Navbar';

export default function Donate() {
  return (
    
    <div>
     <Navbar />
      {/* <h1 className="text-center text-3xl font-semibold mb-8">Donate Items</h1> */}
      <LoginPage />  {/* This renders the ItemList component */}
    </div>
  );
}
