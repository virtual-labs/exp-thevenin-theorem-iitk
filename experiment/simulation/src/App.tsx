import React, { useState } from 'react';
import { ArrowUp, ArrowDown, CircuitBoard, Zap } from 'lucide-react';
import SuperpositionSimulation from './components/SuperpositionSimulation';
import TheveninSimulation from './components/TheveninSimulation';

function App() {
  const [selectedTheorem, setSelectedTheorem] = useState<'superposition' | 'thevenin'>('superposition');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Circuit Theory Simulator</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedTheorem('superposition')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedTheorem === 'superposition'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                <CircuitBoard size={20} />
                Superposition Theorem
              </button>
              <button
                onClick={() => setSelectedTheorem('thevenin')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedTheorem === 'thevenin'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                <Zap size={20} />
                Thevenin's Theorem
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {selectedTheorem === 'superposition' ? (
          <SuperpositionSimulation />
        ) : (
          <TheveninSimulation />
        )}
      </main>
    </div>
  );
}

export default App;