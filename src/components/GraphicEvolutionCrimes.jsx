import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import delitosData from '../data/delitos.json';

const subtipoOptions = [
  'Muertes por siniestros viales',
  'Lesiones por siniestros viales',
  'Lesiones Dolosas',
  'Amenazas',
  'Hurto total',
  'Robo total',
  'Hurto automotor',
  'Robo automotor',
  'Homicidio Doloso',
];

export const GraphicEvolutionCrimes = ({ onMaxChange }) => {
  const [selectedSubtipo, setSelectedSubtipo] = useState(subtipoOptions[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFiltrada = delitosData.filter(
      (d) => d.subtipo === selectedSubtipo
    );

    const grouped = {};
    dataFiltrada.forEach((item) => {
      const date = item.fecha.split('T')[0];
      if (!grouped[date]) {
        grouped[date] = {
          date,
          cantidad: 0,
          barrios: new Set(),
        };
      }
      grouped[date].cantidad += item.cantidad;
      grouped[date].barrios.add(item.barrio);
    });

    const series = Object.values(grouped)
      .map((item) => ({
        date: item.date,
        cantidad: item.cantidad,
        barrios: Array.from(item.barrios).join(', '),
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    setData(series);

    const maxItem = series.reduce(
      (max, curr) => (curr.cantidad > max.cantidad ? curr : max),
      series[0]
    );
    if (onMaxChange) onMaxChange(maxItem);
  }, [selectedSubtipo]);
  return (
    <div className="w-full">
      <div className="mb-2">
        <select
          className="p-2 border rounded"
          value={selectedSubtipo}
          onChange={(e) => setSelectedSubtipo(e.target.value)}
        >
          {subtipoOptions.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorCantidad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="cantidad"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorCantidad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
