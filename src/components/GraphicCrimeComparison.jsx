import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import delitosData from '../data/delitos.json';

export function GraphicCrimeComparasion({ filtro }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filtrados = delitosData.filter(
      (d) =>
        (d.subtipo === 'Hurto total' || d.subtipo === 'Robo total') &&
        (filtro === 'anual'
          ? true
          : new Date(d.fecha).getFullYear() === new Date().getFullYear())
    );

    const agrupados = {};
    filtrados.forEach((item) => {
      const fecha = new Date(item.fecha);
      const clave =
        filtro === 'anual'
          ? `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(
              2,
              '0'
            )}`
          : fecha.toISOString().split('T')[0];

      if (!agrupados[clave]) {
        agrupados[clave] = { date: clave, hurto: 0, robo: 0 };
      }

      if (item.subtipo === 'Hurto total') {
        agrupados[clave].hurto += item.cantidad;
      } else if (item.subtipo === 'Robo total') {
        agrupados[clave].robo += item.cantidad;
      }
    });

    const resultado = Object.values(agrupados).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    setData(resultado);
  }, [filtro]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorHurto" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRobo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="hurto"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorHurto)"
          name="Hurto total"
        />
        <Area
          type="monotone"
          dataKey="robo"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorRobo)"
          name="Robo total"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
