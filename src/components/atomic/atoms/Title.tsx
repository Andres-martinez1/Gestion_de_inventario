interface TitleProps {
    text: string;
  }
  
  export const Title = ({ text }: TitleProps) => (
    <h1 className="text-3xl font-bold text-black">{text}</h1>
  );
  