import { EvolutionCrimePage } from './EvolutionCrimePage';
import { CrimeByTimePage } from './CrimeByTimePage';
import { CrimeComparisonPage } from './CrimeComparisonPage';
import { AnnualCrimeNeighborhoodsPage } from './AnnualCrimeNeighborhoodsPage';
import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('evolution-crime');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Informe de Análisis de Delitos 2023
      </h1>
      <div className="space-y-4">
        <div className="flex space-x-1 border-b">
          <button
            onClick={() => setActiveTab('evolution-crime')}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'evolution-crime'
                ? 'bg-white border border-b-0 border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Gráficos de Delitos evolución mensual
          </button>
          <button
            onClick={() => setActiveTab('crime-time')}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'crime-time'
                ? 'bg-white border border-b-0 border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Delitos por franja horarias
          </button>
          <button
            onClick={() => setActiveTab('crime-comparison')}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'crime-comparison'
                ? 'bg-white border border-b-0 border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Comparativa de robo y hurto
          </button>
          <button
            onClick={() => setActiveTab('annual-crime-neighborhoods')}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
              activeTab === 'annual-crime-neighborhoods'
                ? 'bg-white border border-b-0 border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            10 barrios con mas delitos anual
          </button>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          {activeTab === 'evolution-crime' && <EvolutionCrimePage />}
          {activeTab === 'crime-time' && <CrimeByTimePage />}
          {activeTab === 'crime-comparison' && <CrimeComparisonPage />}
          {activeTab === 'annual-crime-neighborhoods' && (
            <AnnualCrimeNeighborhoodsPage />
          )}
        </div>
      </div>
    </div>
  );
}
