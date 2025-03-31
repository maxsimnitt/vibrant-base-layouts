
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedEventProps {
  id: string;
  title: string;
  date: string;
  location: string;
  time: string;
  description: string;
  imageUrl?: string;
}

const FeaturedEvent = ({
  id,
  title,
  date,
  location,
  time,
  description,
  imageUrl,
}: FeaturedEventProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="flex flex-col justify-center p-6 space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <div className="space-y-2 my-4">
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="mr-2 h-5 w-5" />
                <span>{date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="mr-2 h-5 w-5" />
                <span>{location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ClockIcon className="mr-2 h-5 w-5" />
                <span>{time}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600">{description}</p>
          <div className="flex space-x-4">
            <Link to={`/events/${id}`} className="w-full md:w-auto">
              <Button className="w-full">Learn More</Button>
            </Link>
            <Link to="/register" className="w-full md:w-auto">
              <Button variant="outline" className="w-full">Register</Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default FeaturedEvent;
