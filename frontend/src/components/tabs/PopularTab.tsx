import type { AnalyticsItem } from '../../store/useSearchStore';

interface PopularTabProps {
  analytics: AnalyticsItem[];
}

const PopularTab = ({ analytics }: PopularTabProps) => {
  return (
    <div className="space-y-2">
      <p className="text-gray-500">Most popular searches:</p>
      {history.length === 0 ? (
        <p className="text-gray-500">No search data available</p>
      ) : (
        analytics.map((item: AnalyticsItem) => (
          <div key={item.id} className="p-2 bg-gray-50 rounded">
            <p className="font-medium">{item.query}</p>
            <p className="text-sm text-gray-500">Searched {item.count} times</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PopularTab;
