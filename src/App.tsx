// src/app.tsx
import React, { useEffect } from 'react';
import { RingLoader } from './components/RingLoader';
import CompoundPresentation from './components/CompoundPresentation';

const App: React.FC = () => {
  useEffect(() => {
    // Scroll to bottom after a short delay to ensure content is rendered
    window.scrollTo(0, document.documentElement.scrollHeight);
  }, []);
  return (
    <>
      <RingLoader mode="fullpage" />
      <div className="min-h-screen flex flex-col bg-GRID text-[#f43257] bg-[#e8e8e8]">
        {/* resto do app */}
        <CompoundPresentation />
      </div>
    </>
  );
};

export default App;
