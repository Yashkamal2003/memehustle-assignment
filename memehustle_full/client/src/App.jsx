import React from "react";
import MemeForm from "./components/MemeForm";
import MemeGallery from "./components/MemeGallery";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <header className="p-4 text-center text-3xl font-bold text-neon-pink">
        MemeHustle
      </header>
      <main className="p-4 grid gap-8 grid-cols-1 md:grid-cols-2">
        <MemeForm />
        <MemeGallery />
      </main>
    </div>
  );
}

export default App;