
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPinIcon, ClockIcon, UserIcon, BuildingIcon } from "lucide-react";
import { getEventById } from "@/data/mockEvents";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = getEventById(eventId || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <p className="mb-8">The event you are looking for does not exist or has been removed.</p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Event Hero */}
      <div className="relative rounded-lg overflow-hidden mb-12">
        <img
          src={event.imageUrl || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-8 text-white w-full">
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="mr-2 h-5 w-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="mr-2 h-5 w-5" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Event Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">About This Event</h2>
          <div className="prose max-w-none">
            {event.detailedDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Speakers Section */}
          <h2 className="text-2xl font-bold mt-12 mb-6">Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {event.speakers.map((speaker) => (
              <Card key={speaker.id}>
                <CardContent className="flex items-start space-x-4 p-6">
                  <img
                    src={speaker.imageUrl || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{speaker.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{speaker.company}</p>
                    <p className="text-gray-700">{speaker.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Sidebar */}
        <div>
          <Card>
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-bold">Registration</h3>
              <p className="text-gray-600">
                {event.isPast
                  ? "This event has already taken place. Check out our upcoming events."
                  : "Secure your spot at this event by registering now."}
              </p>
              <div className="space-y-4">
                {!event.isPast && (
                  <Link to="/register" className="w-full block">
                    <Button className="w-full">Register Now</Button>
                  </Link>
                )}
                <Link to="/subscribe" className="w-full block">
                  <Button variant="outline" className="w-full">
                    Subscribe for Updates
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Share This Event</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
