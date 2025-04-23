import React, { useState, useEffect } from 'react';
import { ResponsiveContainer } from 'recharts';
import { GraphicCrimeByTime } from '../components/GraphicCrimeByTime';
import delitosData from '../data/delitos.json';

export function CrimeByTimePage() {
  const [comuna, setComuna] = useState('');
  const [barrio, setBarrio] = useState('');
  const [comunasList, setComunasList] = useState([]);
  const [barriosList, setBarriosList] = useState([]);
  const [maxItem, setMaxItem] = useState(null);

  // Filtrar barrios según la comuna seleccionada
  useEffect(() => {
    // Obtener todas las comunas y barrios disponibles
    const comunas = new Set();
    const barriosPorComuna = {};

    delitosData.forEach((item) => {
      if (item.comuna) comunas.add(item.comuna);
      if (item.barrio && item.comuna) {
        if (!barriosPorComuna[item.comuna]) {
          barriosPorComuna[item.comuna] = new Set();
        }
        barriosPorComuna[item.comuna].add(item.barrio);
      }
    });

    // Establecer las comunas y barrios disponibles
    setComunasList(Array.from(comunas));
    setBarriosList(
      barriosPorComuna[comuna] ? Array.from(barriosPorComuna[comuna]) : []
    );
  }, [comuna]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-1 bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-medium pb-2">Seleccionar Comuna</h3>
          <select
            id="comuna"
            value={comuna}
            onChange={(e) => {
              setComuna(e.target.value);
              setBarrio(''); // Resetear barrio al seleccionar una nueva comuna
            }}
            className="p-2 border rounded-md w-full"
          >
            <option value="">Todas</option>
            {comunasList.map((comunaOption) => (
              <option key={comunaOption} value={comunaOption}>
                Comuna {comunaOption}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-start mt-4">
          <h3 className="text-sm font-medium pb-2">Seleccionar Barrio</h3>
          <select
            id="barrio"
            value={barrio}
            onChange={(e) => setBarrio(e.target.value)}
            className="p-2 border rounded-md w-full"
            disabled={!comuna} // Deshabilitar el selector de barrios si no hay comuna seleccionada
          >
            <option value="">Todos</option>
            {barriosList.length > 0 ? (
              barriosList.map((barrioOption) => (
                <option key={barrioOption} value={barrioOption}>
                  {barrioOption}
                </option>
              ))
            ) : (
              <option value="">Selecciona una comuna primero</option>
            )}
          </select>
        </div>
      </div>

      <div className="col-span-3 bg-white p-4 rounded-lg border shadow-sm">
        {maxItem ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="bg-white p-4 rounded-lg border shadow-sm">
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
          </div>
        ) : (
          <div className="col-span-3 text-center text-sm text-gray-500">
            Seleccioná una comuna y un barrio para ver los datos
          </div>
        )}
        <ResponsiveContainer width="100%" height={300}>
          <GraphicCrimeByTime
            comuna={comuna}
            barrio={barrio}
            onMaxChange={setMaxItem}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
}
