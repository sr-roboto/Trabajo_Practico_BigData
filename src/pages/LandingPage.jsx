import React from 'react';
import * as d3 from 'd3';
import primer from '../assets/csv/1- share-of-the-world-population-with-at-least-basic-education.csv';

function LandingPage() {
  d3.csv(primer).then((data) => {
    console.log(data);
  });
  return (
    <div>
      <div>holaaa</div>
    </div>
  );
}

export default LandingPage;
