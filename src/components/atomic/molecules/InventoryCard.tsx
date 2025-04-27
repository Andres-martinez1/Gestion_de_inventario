import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

interface InventoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  textColor?: string;
  iconBgColor?: string;
  imageSizeClass?: string;
}

const InventoryCard = ({
  title,
  description,
  imageUrl,
  link,
  textColor = "text-gray-800",
  iconBgColor = "bg-gray-100",
}: Readonly<InventoryCardProps>) => {
  return (
    <Card className="w-full h-full shadow-md border border-gray-200 rounded-lg p-4 flex flex-col justify-between">
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
        <Link
          isExternal
          showAnchorIcon
          href={link}
          className={`font-semibold ${textColor}`}
        >
          Ver más
        </Link>
      </CardFooter>
    </Card>
  );
};

export default InventoryCard;
