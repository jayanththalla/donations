import { useEffect, useState } from 'react';
import {
  Image as ImageIcon,
  Boxes,
  Info,
  Phone,
  ClipboardList,
  AlertTriangle,
} from 'lucide-react';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/donations');
        if (!response.ok) throw new Error('Failed to fetch donations');
        const data = await response.json();
        setItems(data.items || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center space-x-3 p-8 text-blue-600">
        <Boxes className="animate-spin" size={32} />
        <span>Loading Donations...</span>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center">
        <AlertTriangle className="mr-2 text-red-500" size={24} />
        <span>{error}</span>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center mb-6">
        <ClipboardList className="mr-3 text-blue-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-800">Available Donations</h2>
      </div>

      {items.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <ImageIcon size={48} className="mx-auto mb-4 text-blue-300" />
          <p>No donations available</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.item}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="flex items-center justify-center bg-gray-200 h-48 text-gray-500">
                  <ImageIcon size={48} />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-700 mb-2">{item.item}</h3>
                <p className="text-gray-600 mb-2">{item.description || 'No description provided'}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p className="flex items-center">
                    <Boxes className="mr-2 text-blue-500" size={16} />
                    Quantity: {item.quantity}
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-2 text-blue-500" size={16} />
                    Contact: {item.name} ({item.phone})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
