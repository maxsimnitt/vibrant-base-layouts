
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  time: string;
  description: string;
  imageUrl?: string;
  isPast?: boolean;
}

const EventCard = ({
  id,
  title,
  date,
  location,
  time,
  description,
  imageUrl,
  isPast = false,
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPinIcon className="mr-2 h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <ClockIcon className="mr-2 h-4 w-4" />
            <span>{time}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/events/${id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
