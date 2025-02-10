// src/app.tsx
import React from 'react';
import { RingLoader } from './components/RingLoader';
import CompoundPresentation from './components/CompoundPresentation';

const App: React.FC = () => {
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
