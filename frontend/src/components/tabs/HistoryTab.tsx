import type { HistoryItem } from '../../store/useSearchStore';

interface HistoryTabProps {
  history: HistoryItem[];
  onSearch: (query: string) => void;
}

const HistoryTab = ({ history, onSearch }: HistoryTabProps) => {
  return (
    <div className="space-y-1">
      {history.length === 0 ? (
        <p className="text-gray-500">No History</p>
      ) : (
        history.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSearch(item.query)}
            className="text-blue-600 cursor-pointer hover:underline p-2 hover:bg-gray-50 rounded"
          >
            {item.query}
            <span className="text-sm text-gray-400 ml-2">
              ({new Date(item.timestamp).toLocaleTimeString()})
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryTab; 