import React, { useState } from 'react';
import { Upload, Info, CheckCircle, XCircle } from 'lucide-react';

export default function DonationForm() {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // State for image URL
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setItem('');
    setQuantity('');
    setDescription('');
    setName('');
    setPhone('');
    setImageUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const donationData = {
        item,
        quantity,
        description,
        name,
        phone,
        imageUrl, // Include the image URL in the data
        timestamp: new Date().toISOString(),
      };

      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donationData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message });
        resetForm();
      } else {
        setStatus({ type: 'error', message: result.message || 'Submission failed' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Donation Portal</h2>
        <p className="text-gray-500 flex items-center justify-center">
          <Info className="mr-2 text-blue-500" size={18} />
          Your donation makes a difference
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
        </div>

        {/* Item */}
        <div>
          <label className="block text-gray-700 mb-2">Item Name</label>
          <input
            type="text"
            placeholder="What would you like to donate?"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            min="1"
            placeholder="How many items?"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="Additional details about your donation"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300 min-h-[100px]"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 mb-2">Item Image URL</label>
          <input
            type="url"
            placeholder="Enter the image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 text-white rounded-lg transition duration-300 flex items-center justify-center ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
          }`}
        >
          {isLoading ? (
            <span>Processing...</span>
          ) : (
            <>
              <Upload className="mr-2" size={20} />
              Donate Now
            </>
          )}
        </button>

        {/* Status Message */}
        {status && (
          <div
            className={`mt-4 p-3 rounded-lg flex items-center ${
              status.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle className="mr-2" size={20} />
            ) : (
              <XCircle className="mr-2" size={20} />
            )}
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
