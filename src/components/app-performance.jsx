import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'Jan', server: 400, client: 240 },
  { name: 'Feb', server: 300, client: 139 },
  { name: 'Mar', server: 200, client: 980 },
  { name: 'Apr', server: 278, client: 390 },
  { name: 'May', server: 189, client: 480 },
  { name: 'Jun', server: 239, client: 380 },
];

export function AppPerformance() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Server Response Time</h3>
          <p className="text-sm text-gray-500">Average: 250ms</p>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}ms`}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="server"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Client-side Performance</h3>
          <p className="text-sm text-gray-500">Average Load Time: 1.2s</p>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}ms`}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="client"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Error Rate</h3>
          <p className="text-sm text-gray-500">Last 30 days</p>
        </div>
        <div>
          <div className="text-4xl font-bold">0.12%</div>
          <p className="text-xs text-gray-500">-0.05% from last month</p>
        </div>
      </div>
    </div>
  );
}
