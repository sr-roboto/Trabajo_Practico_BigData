import { useState } from 'react';
import { ResponsiveContainer } from 'recharts';
import { GraphicEvolutionCrimes } from '../components/GraphicEvolutionCrimes';

export function EvolutionCrimePage() {
  const [maxItem, setMaxItem] = useState(null);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {maxItem ? (
        <>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Casos totales</h3>
            </div>
            <div>
              <p className="text-2xl font-bold">{maxItem.total}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Día con más casos</h3>
            </div>
            <div>
              <div className="text-2xl font-bold">{maxItem.date}</div>
              <p className="text-xs text-gray-500">
                Total de casos: {maxItem.cantidad}
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm col-span-2">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Barrios afectados</h3>
            </div>
            <div>
              <div className="text-base font-semibold">{maxItem.barrios}</div>
              <p className="text-xs text-gray-500">
                Barrios con reportes el {maxItem.date}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="col-span-4 text-center text-sm text-gray-500">
          Seleccioná un subtipo para ver los datos
        </div>
      )}

      <div className="col-span-4 bg-white p-4 rounded-lg border shadow-sm">
        <ResponsiveContainer width="100%">
          <GraphicEvolutionCrimes onMaxChange={setMaxItem} />
        </ResponsiveContainer>
      </div>
    </div>
  );
}
