import React from 'react';
import grafico2 from '../assets/images/grafico2.png';
export function AnnualCrimeNeighborhoodsPage() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        {/* <div className="mb-4">
          <h3 className="text-lg font-medium">Recent Feedback</h3>
          <p className="text-sm text-gray-500">Latest user comments</p>
        </div> */}
        <div>
          <div className="space-y-4">
            <img src={grafico2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
