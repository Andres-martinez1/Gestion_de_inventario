export const ReportTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="mb-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
  