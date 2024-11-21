// pages/donate.js
import ItemList from '../components/ItemList'; // Adjust path if necessary
import Navbar from '../components/Navbar';

export default function Donate() {
  return (
    
    <div>
     <Navbar />
      {/* <h1 className="text-center text-3xl font-semibold mb-8">Donate Items</h1> */}
      <ItemList />  {/* This renders the ItemList component */}
    </div>
  );
}
