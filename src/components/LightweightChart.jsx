import React, { useEffect, useRef, useState } from 'react';
import { createChart, CrosshairMode, AreaSeries } from 'lightweight-charts';
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

const LightweightChart = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const areaSeriesRef = useRef(null);
  const [selectedSubtipo, setSelectedSubtipo] = useState(subtipoOptions[0]);
  const [maxDataInfo, setMaxDataInfo] = useState(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Crear el gráfico
    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { type: 'solid', color: '#fff' },
        textColor: 'black',
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });

    // Crear la serie de tipo Área
    areaSeriesRef.current = chartRef.current.addSeries(AreaSeries, {
      lineColor: '#2962FF',
      topColor: '#2962FF',
      bottomColor: 'rgba(41, 98, 255, 0.28)',
    });

    // Observador de redimensionamiento
    const resizeObserver = new ResizeObserver(() => {
      chartRef.current.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chartRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (!areaSeriesRef.current) return;

    // Filtrar los datos por el subtipo seleccionado
    const dataFiltrada = delitosData.filter(
      (d) => d.subtipo === selectedSubtipo
    );

    // Agrupar los datos por fecha
    const groupedData = {};
    dataFiltrada.forEach((item) => {
      const time = item.fecha.split('T')[0]; // YYYY-MM-DD
      if (!groupedData[time]) {
        groupedData[time] = {
          time,
          value: 0,
          barrios: new Set(),
        };
      }
      groupedData[time].value += item.cantidad;
      groupedData[time].barrios.add(item.barrio);
    });

    // Preparar los datos para la serie
    const seriesData = Object.values(groupedData)
      .map((item) => ({
        time: item.time,
        value: item.value,
        barrios: Array.from(item.barrios).join(', '),
      }))
      .sort((a, b) => new Date(a.time) - new Date(b.time));

    // Establecer los datos en la serie
    areaSeriesRef.current.setData(seriesData);
    chartRef.current.timeScale().fitContent();

    // Encontrar el día con más casos
    const maxItem = seriesData.reduce(
      (max, item) => (item.value > max.value ? item : max),
      seriesData[0]
    );

    setMaxDataInfo(maxItem);
  }, [selectedSubtipo]);

  return (
    <div className="w-full">
      <div className="mb-2">
        <select
          value={selectedSubtipo}
          onChange={(e) => setSelectedSubtipo(e.target.value)}
          className="p-2 border rounded"
        >
          {subtipoOptions.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
      <div ref={chartContainerRef} style={{ height: '400px' }} />
      {maxDataInfo && (
        <div className="mt-4 text-blue-700 font-semibold bg-blue-50 p-3 rounded shadow">
          🟦 El día con más casos fue el <strong>{maxDataInfo.time}</strong> en{' '}
          <strong>{maxDataInfo.barrios}</strong> con{' '}
          <strong>{maxDataInfo.value}</strong> casos.
        </div>
      )}
    </div>
  );
};

export default LightweightChart;
