import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(data.message);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          destination: "",
          service: "",
          message: "",
        });
      } else {
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-20 py-12"
      style={{
        backgroundImage: "url('/images/Group.png')",
      }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-xl md:text-4xl font-bold md:font-bold text-blue-700 mb-3 md:mb-4">
            Enquiry
          </h2>
          <p className="text-sm md:text-lg text-black font-normal md:font-medium leading-relaxed">
            Ready to embark on your <span className="font-medium">journey?</span> We're here to help!
            Fill out the form below, and one of our expert consultants will get in
            touch with you shortly to discuss your aspirations and how Up Scholar Hub
            can assist you in achieving them.
          </p>
        </div>

        {/* Form Section */}
        <div
          className="w-full md:w-1/2 p-8 rounded-xl shadow-lg"
          style={{ backgroundColor: "#E1EAF9" }}
        >
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name:"
              className="p-2 md:p-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address:"
              className="p-2 md:p-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="p-2 md:p-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="p-2 md:p-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="" disabled>
                Preferred country / Destination:
              </option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
              <option value="UK">UK</option>
              <option value="Canada">Finland</option>
              <option value="Canada">Sweden</option>
              <option value="Canada">Europe</option>
              
            </select>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Service of Interest:"
              className="p-2 md:p-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message/Query:"
              className="p-2 md:p-3 rounded-md bg-white border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {successMsg && (
              <p className="text-green-600 font-medium">{successMsg}</p>
            )}
            {errorMsg && (
              <p className="text-red-600 font-medium">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
