import React, { useState } from 'react';
import {
  Gift,
  Building,
  Heart,
  ArrowRight,
  CircleCheck,
} from 'lucide-react';
import { 
    Home, 
    List, 
    UserPlus, 
    Info, 
    Mail, 
    Phone, 
    Facebook, 
    Twitter, 
    Instagram 
  } from 'lucide-react';
import LoginPage from './Login';
import DonationForm from './DonationForm';

const DonationShareHomePage = () => {
  const [currentView, setCurrentView] = useState('home'); // Manage the current view

  // Conditional rendering based on currentView
  if (currentView === 'LoginPage') {
    return <LoginPage />;
  }

  if (currentView === 'donationForm') {
    return <DonationForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
            Donate Smartly, <br />Impact Directly
          </h1>
          <p className="text-gray-600 text-lg">
            Connect with local orphanages and old age homes. Transform your unused items into meaningful support.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentView('LoginPage')} // Navigate to ItemList
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center shadow-lg"
            >
              List Your Donations <ArrowRight className="ml-2" />
            </button>
            <button
              onClick={() => setCurrentView('donationForm')} // Navigate to DonationForm
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center shadow-lg"
            >
              Create Account <CircleCheck className="ml-2" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/download.png"
            alt="Donation Illustration"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800">How DonationShare Works</h2>
          <p className="text-gray-600 mt-4">Simple, Direct, Impactful</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Gift className="text-blue-600" size={48} />,
              title: 'List Your Donations',
              description: 'Easily upload items you want to donate',
            },
            {
              icon: <Building className="text-blue-600" size={48} />,
              title: 'Connect with Institutions',
              description: 'Verified orphanages and old age homes browse donations',
            },
            {
              icon: <Heart className="text-blue-600" size={48} />,
              title: 'Direct Impact',
              description: 'Items go directly to those who need them most',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="mb-8 text-blue-100">Join thousands transforming unused items into hope</p>
          <button
            onClick={() => setCurrentView('donationForm')} // Navigate to DonationForm
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition shadow-lg"
          >
            Create Account
          </button>
        </div>
      </section>
      <footer className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 py-12 shadow-lg">
        <div className="container mx-auto px-6 md:flex md:justify-between space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 md:w-1/3 animate-fade-in">
            <div className="flex items-center mb-4">
              {/* <Home className="mr-3 text-blue-600" size={32} /> */}
              {/* <h3 className="text-3xl font-bold text-blue-800">DonationShare</h3> */}
              <a 
          href="/" 
          className="flex items-center space-x-3 text-white font-bold text-2xl 
          transform hover:scale-105 transition-transform duration-300"
        >
          <img 
            src="https://e7.pngegg.com/pngimages/600/250/png-clipart-donation-computer-icons-gift-charity-offers-miscellaneous-text.png" 
            alt="Hope Link Logo" 
            className="w-12 h-12 rounded-full border-2 border-white "
          />
          <span className="text-3xl font-bold text-blue-700">Hope Link</span>
        </a>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Connecting kind hearts with those in need. Together, we can create a direct impact through meaningful donations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0 md:w-1/3 hover:translate-x-1 transition-transform">
            <h4 className="text-xl font-semibold mb-4 text-blue-700 flex items-center">
              <List className="mr-2 text-blue-600" size={24} />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[ 
                { icon: <Home size={20} className="mr-2 text-blue-500" />, label: "Home", href: "#" },
                { icon: <List size={20} className="mr-2 text-blue-500" />, label: "List Donations", href: "#" },
                { icon: <UserPlus size={20} className="mr-2 text-blue-500" />, label: "Create Account", href: "#" },
                { icon: <Info size={20} className="mr-2 text-blue-500" />, label: "About Us", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3 space-y-4">
            <h4 className="text-xl font-semibold text-blue-700 flex items-center">
              <Mail className="mr-2 text-blue-600" size={24} />
              Contact Us
            </h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <Mail className="mr-2 text-blue-500" size={20} />
                <a 
                  href="mailto:contact@donationshare.com" 
                  className="hover:text-blue-600 transition-colors"
                >
                  contact@donationshare.com
                </a>
              </p>
              <p className="flex items-center text-gray-600">
                <Phone className="mr-2 text-blue-500" size={20} />
                +123 456 7890
              </p>
            </div>

            {/* Social Icons with Hover Effects */}
            <div className="flex space-x-4 mt-4">
              {[ 
                { Icon: Facebook, color: "text-blue-700 hover:text-blue-900" },
                { Icon: Twitter, color: "text-blue-500 hover:text-blue-700" },
                { Icon: Instagram, color: "text-pink-600 hover:text-pink-800" }
              ].map(({Icon, color}, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className={`${color} transition-all transform hover:scale-110`}
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright with Animation */}
        <div className="text-center mt-10 text-gray-500 animate-bounce-slow">
          © {new Date().getFullYear()} DonationShare. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DonationShareHomePage;
