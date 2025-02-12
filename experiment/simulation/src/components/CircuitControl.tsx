import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface CircuitControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
}

export default function CircuitControl({
  label,
  value,
  onChange,
  step = 1
}: CircuitControlProps) {
  return (
    <div className="flex items-center gap-4">
      <label className="w-24 font-medium">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-24 px-2 py-1 border rounded-md"
        />
        <div className="flex flex-col">
          <button
            onClick={() => onChange(value + step)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ArrowUp size={16} />
          </button>
          <button
            onClick={() => onChange(value - step)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}