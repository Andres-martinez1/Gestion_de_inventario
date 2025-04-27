interface SubtitleProps {
    text: string;
  }
  
  export const Subtitle = ({ text }: SubtitleProps) => (
    <p className="text-gray-600 text-sm">{text}</p>
  );
  