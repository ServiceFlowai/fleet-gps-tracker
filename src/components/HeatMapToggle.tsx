import React from 'react';

interface HeatMapToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const HeatMapToggle: React.FC<HeatMapToggleProps> = ({ enabled, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(!enabled)}
      className={`p-2 rounded ${enabled ? 'bg-red-500' : 'bg-green-500'} text-white`}
    >
      {enabled ? 'Disable Heat Map' : 'Enable Heat Map'}
    </button>
  );
};

export default HeatMapToggle;