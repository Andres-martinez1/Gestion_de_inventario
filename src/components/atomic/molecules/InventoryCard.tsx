import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@heroui/react";

interface InventoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
  textColor?: string;
  iconBgColor?: string;
}

const InventoryCard = ({
  title,
  description,
  imageUrl,
  onClick,
  textColor = "text-gray-800",
  iconBgColor = "bg-gray-100",
}: Readonly<InventoryCardProps>) => {
  return (
    <Card className="mt-5 mr-2 h-full shadow-md border border-gray-200 rounded-lg p-4 flex flex-col justify-between ml-5">
      <CardHeader className="flex items-center gap-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBgColor}`}
        >
          <Image
            alt={title}
            height={40}
            width={40}
            src={imageUrl}
            className="object-contain w-20 h-20"
          />
        </div>
        <div className="flex-1">
          <p className="text-md font-semibold text-wrap">{title}</p>
        </div>
      </CardHeader>

      <Divider />

      <CardBody className="flex-1">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardBody>

      <Divider />

      <CardFooter>
        <button
          onClick={onClick}
          className={`font-semibold ${textColor} hover:underline transition`}
        >
          Ver más →
        </button>
      </CardFooter>
    </Card>
  );
};

export default InventoryCard;
