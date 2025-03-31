
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  time: string;
  description: string;
  detailedDescription: string;
  imageUrl?: string;
  speakers: Speaker[];
  isPast: boolean;
}

export interface Speaker {
  id: string;
  name: string;
  company: string;
  bio: string;
  imageUrl?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Tech Innovation Summit 2023",
    date: "November 15, 2023",
    location: "San Francisco, CA",
    time: "9:00 AM - 5:00 PM",
    description: "Join us for the premier tech innovation event of the year, featuring industry leaders and cutting-edge presentations.",
    detailedDescription: `
    Join us for the premier tech innovation event of the year, featuring industry leaders and cutting-edge presentations.
    
    The Tech Innovation Summit brings together the brightest minds in technology to discuss emerging trends, share insights, and showcase innovative solutions that are shaping the future. Attendees will have the opportunity to network with industry leaders, participate in interactive workshops, and gain valuable knowledge to stay ahead in the rapidly evolving tech landscape.
    
    Key topics include:
    - Artificial Intelligence and Machine Learning
    - Blockchain Technology
    - Cloud Computing
    - Cybersecurity
    - Digital Transformation
    - Internet of Things (IoT)
    
    Don't miss this opportunity to be part of the conversation that's driving the future of technology!
    `,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    speakers: [
      {
        id: "s1",
        name: "Dr. Sarah Chen",
        company: "TechFuture Inc.",
        bio: "Leading AI researcher with over 15 years of experience in machine learning applications.",
        imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        id: "s2",
        name: "Michael Rodriguez",
        company: "InnovateTech",
        bio: "CTO and blockchain expert specializing in enterprise applications of distributed ledger technology.",
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    ],
    isPast: true
  },
  {
    id: "2",
    title: "Global Marketing Conference 2024",
    date: "March 28, 2024",
    location: "New York, NY",
    time: "10:00 AM - 6:00 PM",
    description: "Explore the latest in digital marketing strategies, brand development, and consumer engagement.",
    detailedDescription: `
    Explore the latest in digital marketing strategies, brand development, and consumer engagement at the Global Marketing Conference 2024.
    
    This premier marketing event brings together marketing professionals, brand strategists, and industry innovators to discuss the latest trends and best practices in the field. From digital marketing tactics to brand storytelling, this conference offers valuable insights for professionals at all levels.
    
    What you'll experience:
    - Expert-led sessions on digital marketing, content strategy, and brand development
    - Interactive workshops and hands-on learning opportunities
    - Networking events with industry leaders and peers
    - Exhibition showcasing cutting-edge marketing tools and technologies
    
    Whether you're a seasoned marketing professional or just starting your career, the Global Marketing Conference offers something for everyone interested in the ever-evolving world of marketing.
    `,
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    speakers: [
      {
        id: "s3",
        name: "Jessica Thompson",
        company: "Brand Builders",
        bio: "Creative director with expertise in brand storytelling and consumer engagement strategies.",
        imageUrl: "https://randomuser.me/api/portraits/women/68.jpg"
      },
      {
        id: "s4",
        name: "David Kim",
        company: "Digital Impact",
        bio: "Digital marketing strategist specializing in data-driven campaigns and ROI optimization.",
        imageUrl: "https://randomuser.me/api/portraits/men/75.jpg"
      }
    ],
    isPast: false
  },
  {
    id: "3",
    title: "Healthcare Innovation Forum",
    date: "May 15, 2024",
    location: "Boston, MA",
    time: "9:00 AM - 4:00 PM",
    description: "Discover breakthrough technologies and approaches transforming the healthcare industry.",
    detailedDescription: `
    Discover breakthrough technologies and approaches transforming the healthcare industry at the Healthcare Innovation Forum.
    
    This important gathering brings together healthcare professionals, technology innovators, and policy experts to explore how emerging technologies are revolutionizing patient care, medical research, and healthcare delivery systems.
    
    The forum will feature:
    - Keynote presentations from leading healthcare innovators
    - Panel discussions on telehealth, AI in medicine, and personalized healthcare
    - Demonstrations of cutting-edge medical technologies
    - Networking opportunities with healthcare leaders and technology providers
    
    Join us as we explore how innovation is shaping the future of healthcare and improving patient outcomes worldwide.
    `,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    speakers: [
      {
        id: "s5",
        name: "Dr. James Wilson",
        company: "MedTech Innovations",
        bio: "Pioneer in medical device technology with a focus on wearable health monitoring systems.",
        imageUrl: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      {
        id: "s6",
        name: "Dr. Emily Chen",
        company: "Healthcare AI Labs",
        bio: "Researcher specializing in AI applications for diagnostic imaging and personalized medicine.",
        imageUrl: "https://randomuser.me/api/portraits/women/33.jpg"
      }
    ],
    isPast: false
  },
  {
    id: "4",
    title: "Sustainable Business Summit",
    date: "October 10, 2023",
    location: "Seattle, WA",
    time: "9:30 AM - 5:30 PM",
    description: "Learn how businesses are implementing sustainable practices to drive growth and positive environmental impact.",
    detailedDescription: `
    Learn how businesses are implementing sustainable practices to drive growth and positive environmental impact at the Sustainable Business Summit.
    
    This summit brings together business leaders, sustainability experts, and innovative companies to share strategies for building environmentally responsible and socially conscious businesses. Discover how sustainability initiatives can drive business growth while making a positive impact on the planet.
    
    Key focus areas:
    - Circular economy principles and implementation
    - Sustainable supply chain management
    - ESG (Environmental, Social, and Governance) reporting
    - Green technology and renewable energy solutions
    - Consumer engagement with sustainable brands
    
    Join us to connect with like-minded professionals and gain actionable insights for making your business more sustainable.
    `,
    imageUrl: "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?q=80&w=2070&auto=format&fit=crop",
    speakers: [
      {
        id: "s7",
        name: "Robert Green",
        company: "EcoSolutions Corp",
        bio: "Sustainability consultant helping Fortune 500 companies implement eco-friendly practices.",
        imageUrl: "https://randomuser.me/api/portraits/men/40.jpg"
      },
      {
        id: "s8",
        name: "Sophia Martinez",
        company: "Circular Innovations",
        bio: "Expert in circular economy models and sustainable product design.",
        imageUrl: "https://randomuser.me/api/portraits/women/51.jpg"
      }
    ],
    isPast: true
  },
  {
    id: "5",
    title: "Future of Work Conference",
    date: "April 18, 2024",
    location: "Austin, TX",
    time: "9:00 AM - 5:00 PM",
    description: "Explore how AI, remote work, and changing organizational structures are reshaping the workplace.",
    detailedDescription: `
    Explore how AI, remote work, and changing organizational structures are reshaping the workplace at the Future of Work Conference.
    
    This forward-thinking conference examines the rapidly evolving nature of work in the digital age. From remote work policies to AI integration in the workplace, join us as we discuss the trends and technologies that are transforming how we work.
    
    Topics include:
    - Remote and hybrid work best practices
    - AI and automation in the workplace
    - Building inclusive and diverse teams
    - Skills development for the future workforce
    - Workplace wellness and employee satisfaction
    
    Whether you're a manager adapting to new work models or an employee navigating a changing career landscape, this conference offers valuable insights into the future of work.
    `,
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    speakers: [
      {
        id: "s9",
        name: "Thomas Anderson",
        company: "Future Workplace",
        bio: "Workplace strategist specializing in remote work policies and digital collaboration.",
        imageUrl: "https://randomuser.me/api/portraits/men/60.jpg"
      },
      {
        id: "s10",
        name: "Lisa Johnson",
        company: "HR Innovations",
        bio: "Human resources expert focusing on workforce development in the era of automation.",
        imageUrl: "https://randomuser.me/api/portraits/women/22.jpg"
      }
    ],
    isPast: false
  }
];

export const getFeaturedEvent = (): Event => {
  const upcomingEvents = events.filter(event => !event.isPast);
  return upcomingEvents[0] || events[0];
};

export const getPastEvents = (): Event[] => {
  return events.filter(event => event.isPast);
};

export const getUpcomingEvents = (): Event[] => {
  return events.filter(event => !event.isPast);
};

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};
