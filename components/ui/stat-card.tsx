interface StatCardProps {
  label: string;
  percentage: number;
  description: string;
}

export function StatCard({ label, percentage, description }: StatCardProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <span className="text-[#f6569e]">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-[#f6569e] h-2 rounded-full" 
          style={{width: `${percentage}%`}}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}