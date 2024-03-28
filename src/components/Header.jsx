import React, { useState } from "react";

import "./Header.css";

const Header = () => {
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showFaqPopup, setShowFaqPopup] = useState(false);



  const handleAboutClick = () => {
    setShowAboutPopup(true);
  };

  const handleFaqClick = () => {
    setShowFaqPopup(true);
  };

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isOpen = !faq.isOpen;
        } else {
          faq.isOpen = false;
        }
        return faq;
      })
    );
  };

  const [faqs, setFaqs] = useState([
    {
      question: "🚂 How fast can I book a train?",
      answer:
        "As fast as a bullet train! 🚆 Just hop onto our platform, select your route, and we'll have you booked in no time. Remember, early birds get the best seats!",
      isOpen: false,
    },
    {
      question: "🎟 Can I change my journey after booking?",
      answer:
        "Absolutely! Life is full of surprises, and so are we. 🎩 Change your travel plans easily within our app. Flexibility comes standard here at BebRails!",
      isOpen: false,
    },
    {
      question: "👪 Is there a family discount available?",
      answer:
        "Yes! Families that ride together, save together. 👨‍👩‍👧‍👦 Check our family pack section for discounts and make your family trips more enjoyable and affordable.",
      isOpen: false,
    },
    {
      question: "🛄 What's the deal with luggage?",
      answer:
        "Pack up all your cares and woes (and bags), there's plenty of room! 🧳 Just make sure it fits in the overhead compartment or at the end of your coach.",
      isOpen: false,
    },
    {
      question: "🕓 How accurate are the train timings?",
      answer:
        "Our trains are as punctual as a Swiss watch. ⏱️ We strive to ensure they're on time, every time, giving you one less thing to worry about!",
      isOpen: false,
    },
    {
      question: "🍔 Can I order food on the train?",
      answer:
        "Choo-choose from our delightful on-board menu! 🍴 Whether you're craving a snack or a meal, we've got you covered. Just don't miss your stop because the food's too good!",
      isOpen: false,
    },
  ]);

  return (
    <div className="fixed top-0 left-0 w-full h-24 z-10">
      <header className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-white">
        <div className="flex space-x-1 items-center">
          <h1 className="text-3xl font-bold text-[#00df9a]">BebRails.</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex">
            <li
              className="p-4 font-bold cursor-pointer hover:text-[#00df9a] transition duration-300 ease-in-out"
              onClick={handleAboutClick}
            >
              About
            </li>
            <li
              className="p-4 font-bold cursor-pointer hover:text-[#00df9a] transition duration-300 ease-in-out"
              onClick={handleFaqClick}
            >
              FAQ
            </li>
          </ul>
        </nav>
      </header>

      {showAboutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-gray-800 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-8 rounded-lg shadow-xl overflow-y-auto"
            style={{ maxHeight: "80vh" }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              All Aboard BebRails 🚉
            </h2>
            <div className="mb-8">
              <p className="text-white mb-4">
                Choo-choo-choose <span className="text-accent">BebRails</span>{" "}
                for a journey filled with joy, comfort, and the best views a
                window seat can offer! 🌄 We ensure you won't just reach your
                destination; you'll arrive with a smile so big, it'll rival our
                locomotives. 😄 Whether you're in for the long haul or just a
                quick skip down the tracks, trust us, your experience will be
                nothing short of legendary. 🏰✨
              </p>
            </div>
            <button
              className="btn-close"
              onClick={() => setShowAboutPopup(false)}
            >
              Close Station 🚉
            </button>
          </div>
        </div>
      )}

      {showFaqPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-gray-800 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-8 rounded-lg shadow-xl overflow-y-auto"
            style={{ maxHeight: "80vh" }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              FAQs - Discover Your Answers 🕵️‍♂️
            </h2>
            <div className="mb-8">
              <ul className="faq-list space-y-6">
                {" "}
                {/* Increased spacing between questions */}
                {faqs.map((faq, index) => (
                  <li key={index} className="cursor-pointer mb-2">
                    {" "}
                    {/* Added bottom margin */}
                    <div
                      className="flex items-center justify-between"
                      onClick={() => toggleFaq(index)}
                    >
                      <p className="font-bold text-accent">{faq.question}</p>
                      <span className="text-accent">
                        {faq.isOpen ? "−" : "+"}
                      </span>
                    </div>
                    {faq.isOpen && (
                      <div className="mt-2 text-gray-300 transition-height duration-500 ease-in-out">
                        {faq.answer}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="btn-close"
              onClick={() => setShowFaqPopup(false)}
            >
              Close the Inquiry 📚
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
