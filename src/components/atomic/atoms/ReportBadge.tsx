export const ReportBadge = ({ label, color = "green" }: { label: string; color?: string }) => {
    const bgColor = {
      green: "bg-green-100 text-green-800",
      yellow: "bg-yellow-100 text-yellow-800",
      purple: "bg-purple-100 text-purple-800",
      blue: "bg-blue-100 text-blue-800",
      gray: "bg-gray-100 text-gray-800"
    }[color];
  
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${bgColor}`}>{label}</span>;
  };
  