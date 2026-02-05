import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Cost', traditional: 100, ifs: 65 },
  { name: 'Time', traditional: 100, ifs: 40 },
  { name: 'Efficiency', traditional: 50, ifs: 95 },
  { name: 'Analytics', traditional: 20, ifs: 90 },
];

const StatsChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-80 w-full">
      <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 text-center">Optimized Performance with IFS Analytics</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend />
          <Bar dataKey="traditional" name="Industry Avg" fill="#94a3b8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="ifs" name="IFS Solution" fill="#b91c1c" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;