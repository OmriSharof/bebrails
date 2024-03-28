import React, { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const [showFaqPopup, setShowFaqPopup] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleAboutClick = () => {
        setShowAboutPopup(true);
    };

    const handleFaqClick = () => {
        setShowFaqPopup(true);
    };

    const toggleFaq = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.isOpen = !faq.isOpen;
            } else {
                faq.isOpen = false;
            }
            return faq;
        }));
    };

    const [faqs, setFaqs] = useState([
        {
            question: 'What is BebRails?',
            answer: 'BebRails is a modern web framework for building efficient applications.',
            isOpen: false,
        },
        {
            question: 'How do I start with BebRails?',
            answer: 'You can start by reading the official documentation or following tutorials.',
            isOpen: false,
        },
        // Add more FAQs here
    ]);

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">BebRails.</h1>
            <ul className='flex'>
                <li className='p-4 font-bold cursor-pointer' onClick={handleAboutClick}>About</li>
                <li className='p-4 font-bold cursor-pointer' onClick={handleFaqClick}>FAQ</li>
            </ul>
            {showAboutPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-green-300 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">About BebRails</h2>
                        <p>At BebRails, we're dedicated to providing you with the latest updates, schedules, and essential information to make your railway journey seamless and enjoyable. Whether you're a daily commuter, a leisure traveler, or a railway enthusiast, BebRails is here to assist you every step of the way.</p>
                        <button className="mt-4 px-4 py-2 bg-[#00df9a] text-white rounded mx-auto block" onClick={() => setShowAboutPopup(false)}>Close</button>
                    </div>
                </div>
            )}
            {showFaqPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-green-300 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">FAQs - Reach the answer you are seeking by clicking on the question</h2>
                        <ul className="list-disc pl-5 space-y-3">
                            {faqs.map((faq, index) => (
                                <li key={index} className="cursor-pointer">
                                    <p className="font-bold" onClick={() => toggleFaq(index)}>{faq.question}</p>
                                    {faq.isOpen && <p className="mt-2">{faq.answer}</p>}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-[#00df9a] text-white rounded mx-auto block" onClick={() => setShowFaqPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
