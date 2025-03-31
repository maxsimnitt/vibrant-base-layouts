
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeaturedEvent from "@/components/FeaturedEvent";
import EventCard from "@/components/EventCard";
import { getFeaturedEvent, getUpcomingEvents } from "@/data/mockEvents";

const LandingPage = () => {
  const featuredEvent = getFeaturedEvent();
  const upcomingEvents = getUpcomingEvents().filter(event => event.id !== featuredEvent.id).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connect. Share. Grow.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join industry-leading events that bring together speakers, companies, and attendees from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100">
                Register as Speaker/Company
              </Button>
            </Link>
            <Link to="/subscribe">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Subscribe to Updates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Most Recent Event</h2>
          <FeaturedEvent
            id={featuredEvent.id}
            title={featuredEvent.title}
            date={featuredEvent.date}
            location={featuredEvent.location}
            time={featuredEvent.time}
            description={featuredEvent.description}
            imageUrl={featuredEvent.imageUrl}
          />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link to="/past-events">
              <Button variant="ghost">View Past Events</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                time={event.time}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Whether you're looking to speak at our events, represent your company, or simply stay updated with the latest happenings, we have something for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Register Now
              </Button>
            </Link>
            <Link to="/subscribe">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
