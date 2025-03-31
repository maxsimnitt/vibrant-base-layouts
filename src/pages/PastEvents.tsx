
import { useState } from "react";
import EventCard from "@/components/EventCard";
import { getPastEvents } from "@/data/mockEvents";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const PastEvents = () => {
  const pastEvents = getPastEvents();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = pastEvents.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Past Events</h1>
      
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-12">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search past events..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              time={event.time}
              description={event.description}
              imageUrl={event.imageUrl}
              isPast={true}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No past events found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PastEvents;
