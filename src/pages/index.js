import Navbar from '../components/Navbar';
import ItemList from '../components/ItemList';
import DonationForm from '../components/DonationForm';
import DonationShareHomePage from '../components/Home'
export default function Home() {
  return (
    <div>
      <Navbar />
      <DonationShareHomePage/>
      {/* <Footer/> */}
    </div>
  );
}
