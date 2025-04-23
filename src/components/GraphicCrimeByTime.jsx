import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import delitosData from '../data/delitos.json';

export const GraphicCrimeByTime = ({ comuna, barrio }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filtrado = delitosData.filter((d) => {
      const comunaValida = comuna
        ? d.comuna?.toString().trim().toLowerCase() ===
          comuna.toString().trim().toLowerCase()
        : true;
      const barrioValido = barrio
        ? d.barrio?.toString().trim().toLowerCase() ===
          barrio.toString().trim().toLowerCase()
        : true;
      return comunaValida && barrioValido;
    });

    const porFranja = {};
    filtrado.forEach((item) => {
      const franja = item.franja;
      if (!porFranja[franja]) porFranja[franja] = 0;
      porFranja[franja] += item.cantidad;
    });

    const resultado = Object.entries(porFranja)
      .map(([franja, cantidad]) => ({
        franja: `${franja}:00`,
        cantidad,
      }))
      .sort((a, b) => parseInt(a.franja) - parseInt(b.franja));

    setData(resultado);
  }, [comuna, barrio]);

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="franja" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cantidad" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
