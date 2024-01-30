import React from 'react';

export default function Contactus() {
  return (
    <div className='bg-gradient-to-r from-purple-400 to-orange-100 min-h-screen'>
      <div className="container mx-auto mt-8 px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="p-8 bg-white shadow-lg rounded-lg mt-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-700">
                Feel free to contact us using the information below:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Email: <a href="mailto:syedgulshera2@gmail.com" className="text-blue-500 hover:underline">syedgulshera2@gmail.com</a></li>
                <li>Phone: <a href="tel:+923071001460" className="text-blue-500 hover:underline">+92 307-1001460</a></li>
                <li>Address: Gulshan e Ravi C Block Plot-366</li>
              </ul>
            </div>
            {/* Send Us a Message */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form action="#" method="post" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
                  <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
                  <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" defaultValue={""} />
                </div>
                <div className="col-span-2 flex justify-center">
                  <button className="bg-gradient-to-r from-purple-700 to-orange-500 text-white px-6 py-3 rounded-md hover:from-purple-800 hover:to-orange-600 transition duration-300">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          {/* Embedded Google Map */}
          <div className="p-8 bg-white shadow-lg rounded-lg mt-4 mb-2">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.9948318785664!2d74.2823133247864!3d31.55175644559212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190335c6e4c053%3A0x767b0c3aaf1efe68!2sPlot%2088%2C%20Thoker%20Niaz%20Baig%20Block%20C%20Gulshan-e-Ravi%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705688284786!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title='Google Map'
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
