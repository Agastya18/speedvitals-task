import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import PerformanceGraph from './components/PerformanceGraph';

const metricOptions = [
  { value: 'lcp', label: 'Largest Contentful Paint' },
  { value: 'cls', label: 'Cumulative Layout Shift' },
];

const deviceOptions = [
  { value: 'desktop', label: 'Desktop' },
  { value: 'mobile', label: 'Mobile' },
];

function App() {
  const [metric, setMetric] = useState('lcp');
  const [device, setDevice] = useState('desktop');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(
          `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [metric, device]);

  const getMetricTitle = () => {
    const metricLabel = metricOptions.find(m => m.value === metric)?.label;
    const deviceLabel = deviceOptions.find(d => d.value === device)?.label;
    return `${metricLabel} - ${deviceLabel}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Performance Report
        </h1>

        <div className="flex justify-center space-x-4 mb-8">
          <Dropdown
            label="Metric"
            value={metric}
            onChange={setMetric}
            options={metricOptions}
          />
          <Dropdown
            label="Device"
            value={device}
            onChange={setDevice}
            options={deviceOptions}
          />
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 py-8">
            {error}
          </div>
        )}

        {!loading && !error && data && (
          <PerformanceGraph
            data={data}
            title={getMetricTitle()}
          />
        )}
      </main>
    </div>
  );
}

export default App;