import React from 'react';

interface ObservationTableProps {
  observations: Array<any>;
}

export default function ObservationTable({ observations }: ObservationTableProps) {
  if (observations.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No observations recorded yet. Add some observations to see them here.
      </div>
    );
  }

  const headers = Object.keys(observations[0]).filter(key => key !== 'timestamp');

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {observations.map((obs, idx) => (
            <tr key={idx}>
              {headers.map((header) => (
                <td
                  key={header}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {typeof obs[header] === 'number'
                    ? obs[header].toFixed(4)
                    : obs[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}