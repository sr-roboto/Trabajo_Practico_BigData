import React, { useState } from 'react';
import { GraphicCrimeComparasion } from '../components/GraphicCrimeComparison';

export function CrimeComparisonPage() {
  const [filtro, setFiltro] = useState('anual');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Comparativa de Robo Total vs Hurto Total
      </h1>

      <GraphicCrimeComparasion filtro={filtro} />
    </div>
  );
}
