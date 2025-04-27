interface BadgeProps {
    label: string
  }
  
  export const Badge = ({ label }: BadgeProps) => (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
      {label}
    </span>
  )
  