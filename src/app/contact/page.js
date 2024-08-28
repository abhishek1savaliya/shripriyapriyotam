const ContactPage = () => {
    return (
      <div className="min-h-screen bg-gray-100 mt-3 mb-3 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  