import { useState } from "react";
import useSearchStore from "../../store/useSearchStore";
import HistoryTab from "./HistoryTab";
import PopularTab from "./PopularTab";

interface TabNavigationProps {
  onSearch: (q: string) => void;
}

const TabNavigation = ({ onSearch }: TabNavigationProps) => {

  const { history, analytics } = useSearchStore();
  const [activeTab, setActiveTab] = useState<'history' | 'popular'>('history');

  const tabs = [
    { id: 'history', label: 'Recent Searches' },
    { id: 'popular', label: 'Popular' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'history':
        return <HistoryTab history={history} onSearch={onSearch} />;
      case 'popular':
        return <PopularTab analytics={analytics} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
    <div className="border-b">
      <nav className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
    <div className="p-4">{renderTabContent()}</div>
    </div>
  );
};

export default TabNavigation; 