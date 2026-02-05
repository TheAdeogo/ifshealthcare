import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a frontend demo, so no email was sent.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-ifs-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-200">We'd love to hear from you. Reach out to us for any inquiries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-ifs-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    5a Eunice Tutorial Close,<br />
                    Gbagada Phase II,<br />
                    Gbagada, Lagos
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-ifs-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+234-812 820 8855</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@ifshealthcare.com</p>
                </div>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="mt-8 bg-gray-200 w-full h-64 rounded-xl flex items-center justify-center text-gray-500 border border-gray-300">
               <span className="flex items-center gap-2"><MapPin size={20}/> Interactive Lagos Map</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg h-fit border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ifs-red focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ifs-red focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ifs-red focus:border-transparent outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ifs-red focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-ifs-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition-colors flex items-center justify-center shadow-md"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;