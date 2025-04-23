import { EvolutionCrimePage } from './EvolutionCrimePage';
import { CrimeByTimePage } from './CrimeByTimePage';
import { CrimeComparisonPage } from './CrimeComparisonPage';
import { AnnualCrimeNeighborhoodsPage } from './AnnualCrimeNeighborhoodsPage';
import { useState } from 'react';
import NavBar from '../components/NavBar';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('evolution-crime');

  return (
    <div className="mx-auto">
      
      <NavBar />

      <div className="mt-7 px-6">
        <div className='p-4 bg-white rounded-lg shadow-[0px_2px_10px_2px_#9b9b9b]'>
          <p className='text-lg font-semibold text-gray-900'>Este dashboard interactivo ofrece un análisis visual detallado de los delitos registrados en la Ciudad Autónoma de Buenos Aires durante el año 2023, a partir de datos públicos provistos por el portal “Buenos Aires Data”. La información ha sido organizada y clasificada según los principales tipos de delitos —robos, hurtos, homicidios, amenazas, lesiones y hechos vinculados a la vialidad—, permitiendo así una visión estructurada del fenómeno delictivo en la ciudad. <br />
            El objetivo principal del dashboard es facilitar la comprensión de cómo se distribuyen y evolucionan estos delitos tanto en el tiempo como en el espacio urbano. A través de gráficos dinámicos, se busca identificar patrones de comportamiento delictivo, detectar zonas con mayor incidencia y analizar los horarios y períodos del año donde se concentran los picos de criminalidad. Esta herramienta está orientada no solo a quienes trabajan con datos o seguridad pública, sino también al público general interesado en conocer de forma clara y accesible la situación delictiva de la ciudad. En definitiva, el dashboard apunta a brindar una base sólida para la toma de decisiones, la prevención del delito y la concientización ciudadana.</p>
        </div>
      </div>

      <div className="bg-white space-y-4 p-6 rounded-lg shadow-[0px_2px_10px_2px_#9b9b9b] m-6">
        <div className="flex space-x-1 border-b">
          <button
            onClick={() => setActiveTab('evolution-crime')}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'evolution-crime'
                ? 'bg-sky-600 text-white'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Gráficos de Delitos evolución mensual
          </button>
          <button
            onClick={() => setActiveTab('crime-time')}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'crime-time'
                ? 'bg-sky-600 text-white'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Delitos por franja horarias
          </button>
          <button
            onClick={() => setActiveTab('crime-comparison')}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'crime-comparison'
                ? 'bg-sky-600 text-white'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Comparativa de robo y hurto
          </button>
          <button
            onClick={() => setActiveTab('annual-crime-neighborhoods')}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${activeTab === 'annual-crime-neighborhoods'
                ? 'bg-sky-600 text-white'
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
