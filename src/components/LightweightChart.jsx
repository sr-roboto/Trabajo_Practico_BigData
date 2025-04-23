import React, { useEffect, useRef } from 'react';
import { createChart, LineSeries } from 'lightweight-charts'; // IMPORTANTE: LineSeries

import delitosData from '../data/delitos.json';

const LightweightChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { type: 'solid', color: '#fff' },
        textColor: 'black',
      },
    });

    const data = delitosData;
    const filtrados = data.filter(
      (d) => d.subtipo === 'Muertes por siniestros viales'
    );

    const conteoPorMes = {};
    filtrados.forEach((item) => {
      const mes = item.mes;
      conteoPorMes[mes] = (conteoPorMes[mes] || 0) + item.cantidad;
    });

    const ordenMeses = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];

    const seriesData = ordenMeses.map((mes, i) => ({
      time: `2023-${String(i + 1).padStart(2, '0')}-01`,
      value: conteoPorMes[mes] || 0,
    }));

    const lineSeries = chart.addSeries(LineSeries, {
      color: '#2962FF',
      lineWidth: 2,
    });

    lineSeries.setData(seriesData);

    chart.timeScale().fitContent();

    const resizeObserver = new ResizeObserver(() => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className="w-full"
      style={{ height: '400px' }}
    />
  );
};

export default LightweightChart;
