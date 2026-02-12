import ProjectDetail from './ProjectDetail';

const ExampleProject = () => {
  return (
    <ProjectDetail
      projectTitle="Shopee Food"
      projectTagline="Revolutionizing food delivery experience for millions of users"
      gettingStarted={{
        description: "Shopee Food is a comprehensive food delivery platform integrated within the Shopee ecosystem. This project aimed to create a seamless ordering experience for customers while providing powerful tools for restaurant partners.",
        technologies: ["React Native", "TypeScript", "Redux", "Node.js", "PostgreSQL", "AWS"],
        imageUrl: "/images/shopee-food-hero.png"
      }}
      context={{
        description: "In 2020, the food delivery market was growing rapidly in Southeast Asia. Shopee identified an opportunity to leverage its existing user base and logistics network to enter this competitive space. The challenge was to build a product that could compete with established players while maintaining Shopee's reputation for quality and reliability.",
        imageUrl: "/images/shopee-food-context.png"
      }}
      challenge={{
        description: "Creating a food delivery platform from scratch presented several unique challenges that required innovative solutions and careful planning.",
        challenges: [
          "Integrating with existing Shopee infrastructure while maintaining performance",
          "Building a real-time order tracking system that could handle thousands of concurrent orders",
          "Creating an intuitive UI/UX that appeals to both tech-savvy and traditional users",
          "Ensuring food quality through optimized delivery routes and time management",
          "Managing the complex relationship between customers, restaurants, and delivery partners"
        ]
      }}
      solutions={{
        description: "We approached these challenges with a combination of technical innovation and user-centered design:",
        solutions: [
          {
            title: "Real-time Order Tracking",
            description: "Implemented WebSocket-based real-time updates with fallback to polling for older devices. This ensured all users could track their orders regardless of device capabilities.",
            imageUrl: "/images/shopee-food-tracking.png"
          },
          {
            title: "Smart Restaurant Recommendations",
            description: "Built a recommendation engine using machine learning that considers user preferences, order history, location, and current promotions to suggest relevant restaurants.",
            imageUrl: "/images/shopee-food-recommendations.png"
          },
          {
            title: "Optimized Checkout Flow",
            description: "Reduced checkout steps from 5 to 3 by pre-filling user data from Shopee account and implementing one-tap payment options, resulting in 40% faster order completion.",
            imageUrl: "/images/shopee-food-checkout.png"
          }
        ]
      }}
      contribution={{
        role: "Senior iOS Developer",
        description: "As the senior iOS developer on the team, I was responsible for architecting and implementing key features of the mobile application.",
        contributions: [
          "Designed and implemented the real-time order tracking system using WebSocket and CoreLocation",
          "Led the development of the restaurant discovery and search functionality",
          "Optimized app performance, reducing initial load time by 60%",
          "Implemented offline capabilities allowing users to browse restaurants without internet",
          "Mentored 3 junior developers and conducted code reviews",
          "Collaborated with design team to create reusable UI components library"
        ]
      }}
      learnings={{
        description: "This project taught me valuable lessons about building scalable mobile applications and working in a fast-paced environment:",
        learnings: [
          "The importance of optimizing for low-end devices in emerging markets",
          "How to balance feature richness with app performance and size",
          "Effective strategies for real-time data synchronization in mobile apps",
          "The value of user research in driving product decisions",
          "Building maintainable code architecture for large-scale applications",
          "Managing technical debt while meeting aggressive deadlines"
        ]
      }}
    />
  );
};

export default ExampleProject;
