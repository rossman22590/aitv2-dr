'use client';

import React, { useState, useEffect } from 'react';
import { Chat } from '@/components/chat/chat';
import { Header } from '@/components/chat/site-header';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResearchPage() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const hasSeenWarning = localStorage.getItem('hasSeenResearchWarning');
    if (!hasSeenWarning) {
      setShowWarning(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hasSeenResearchWarning', 'true');
    setShowWarning(false);
  };

  return (
    <main className="flex flex-col h-screen items-center p-4 bg-[#f6f6f3]">
      <Header />
      <Chat id="research" initialMessages={[]} />
      
      <AnimatePresence>
        {showWarning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-2xl shadow-2xl max-w-md"
            >
              <h2 className="text-2xl font-bold mb-4 text-pink-800">Heads Up!</h2>
              <p className="mb-6 text-pink-700 leading-relaxed">
                Higher breadth and depth settings will take 10+ minutes to execute. 
                Your patience during the research process is greatly appreciated. 
                The results will be worth the wait!
              </p>
              <button 
                onClick={handleAccept}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
              >
                I understand, let's get started!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// 'use client';

// import { Chat } from '@/components/chat/chat';
// import { Header } from '@/components/chat/site-header';

// export default function ResearchPage() {
//   return (
//     <main className="flex flex-col h-screen items-center p-4 bg-[#f6f6f3]">
//       <Header />
//       <Chat id="research" initialMessages={[]} />
//     </main>
//   );
// }
