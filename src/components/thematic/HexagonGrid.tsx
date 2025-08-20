import { motion } from 'framer-motion';
import './HexagonGrid.css';

interface HexagonItem {
  title: string;
  isCenter?: boolean;
  position: 'top' | 'topRight' | 'bottomRight' | 'bottom' | 'bottomLeft' | 'topLeft' | 'center';
  bgColor: string;
  borderColor: string;
}

export const HexagonGrid = () => {
  const hexItems: HexagonItem[] = [
    {
      title: "AirQC",
      isCenter: true,
      position: 'center',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-600'
    },
    {
      title: "AQ monitoring, chemical analysis, SA",
      position: 'top',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-600'
    },
    {
      title: "Emission inventory and emission projection",
      position: 'topRight',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-600'
    },
    {
      title: "Dispersion modeling",
      position: 'bottomRight',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-600'
    },
    {
      title: "Integrated air pollution control: demonstration",
      position: 'bottom',
      bgColor: 'bg-yellow-100',
      borderColor: 'border-yellow-600'
    },
    {
      title: "Meteorology and climate science",
      position: 'bottomLeft',
      bgColor: 'bg-teal-100',
      borderColor: 'border-teal-600'
    },
    {
      title: "Impact assessment: health and ecosystem",
      position: 'topLeft',
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-600'
    }
  ];

  const renderHexagon = (item: HexagonItem) => (
    <div 
      className={`hexagon-container ${item.position} ${item.isCenter ? 'center-hex' : ''}`}
    >
      <div className={`hexagon ${item.bgColor} ${item.borderColor}`}>
        <div className="hexagon-content">
          <span className={`text-[#1e3a8a] ${item.isCenter ? 'font-bold text-3xl' : 'text-sm'}`}>
            {item.title}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-16">Core research activities</h2>
        <div className="relative h-[700px]">
          <div className="honeycomb-grid">
            {hexItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: item.isCenter ? 0 : index * 0.1,
                  ease: "easeOut"
                }}
              >
                {renderHexagon(item)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
