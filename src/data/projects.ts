import coursaImg from '@/assets/images/coursa.svg';
import cococoImg from '@/assets/images/cococo.svg';
import navxbeautyImg from '@/assets/images/navxbeauty.svg';
import binsightImg from '@/assets/images/binsight.svg';


export interface Project {
  id: string;
  title: string;
  highlight: string;
  description: string;
  imageUrl: string;
  badges?: string[];
}

export interface ProjectDetailData {
  projectTitle: string;
  projectTagline?: string;
  heroImageUrl?: string;
  gettingStarted: {
    description: string;
    imageUrl?: string;
    technologies?: string[];
  };
  context: {
    description: string;
    imageUrl?: string;
  };
  challenge: {
    description: string;
    challenges?: string[];
  };
  solutions: {
    description: string;
    solutions?: Array<{
      title: string;
      description: string;
      imageUrl?: string;
    }>;
  };
  contribution: {
    description: string;
    contributions?: string[];
    role?: string;
  };
  learnings: {
    description: string;
    learnings?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "coursa",
    title: "Coursa",
    highlight: "Running, reimagined",
    description: "Most novices mistakenly prioritize speed, leading to immediate burnout. Coursa solves this by anchoring training in Zone 2 (aerobic base). Our evidence lies in the success of our 'Endurance First' approach, where we proved that slowing users down actually helped them run longer and more consistently without the breathlessness that typically causes them to quit.",
    imageUrl: coursaImg,
  },
  {
    id: "cococo",
    title: "Coco.co",
    highlight: "There is no way as such",
    description: "Cross-platform app with React Native",
    imageUrl: cococoImg,
    badges: ["React Native", "Expo", "TypeScript"]
  },
  {
    id: "navxbeauty",
    title: "NavXBeauty",
    highlight: "Redefine your beauty experience",
    description: "Partnered with FemaleDaily, I created an offline-based navigation app for JakartaXBeauty. The solution was created not only to benefit visitors, but also multiple stakeholders such as vendors and FemaleDaily itself. Leveraging Vision Framework and SwiftUI, NavXBeauty can provide your current location and show all the tenants location without needing an internet connection.",
    imageUrl: navxbeautyImg,
    badges: ["React Native", "Expo", "TypeScript"]
  },
  {
    id: "binsight",
    title: "Binsight",
    highlight: "Revolutionize your way of sorting trash",
    description: "Cross-platform app with React Native",
    imageUrl: binsightImg,
    badges: ["React Native", "Expo", "TypeScript"]
  },
  {
    id: "eatsway",
    title: "Eatsway",
    highlight: "There is no way as such",
    description: "Cross-platform app with React Native",
    imageUrl: "/projects/mobile.png",
    badges: ["React Native", "Expo", "TypeScript"]
  }
];

// Detailed project data
export const projectDetails: { [key: string]: ProjectDetailData } = {
  coursa: {
    projectTitle: "Coursa",
    projectTagline: "Running, reimagined",
    heroImageUrl: coursaImg,
    gettingStarted: {
      description: "Coursa is an innovative running app designed to help novice runners build endurance through Zone 2 training. The app focuses on sustainable training methods rather than speed, helping users avoid burnout and build long-term running habits.",
      technologies: ["Swift", "SwiftUI", "HealthKit", "CoreLocation", "Combine"],
      imageUrl: coursaImg
    },
    context: {
      description: "Most beginner runners make the same critical mistake: they run too fast, too soon. This leads to immediate burnout, injury, and ultimately giving up on running altogether. The market needed a solution that prioritized sustainable training over quick results.",
      imageUrl: ""
    },
    challenge: {
      description: "Creating an app that could effectively train beginners to slow down went against conventional wisdom in the running app space:",
      challenges: [
        "Convincing users that running slower would actually make them better runners",
        "Accurately measuring and maintaining Zone 2 heart rate zones across different fitness levels",
        "Creating an engaging experience when the core message is 'slow down'",
        "Integrating with HealthKit while maintaining user privacy",
        "Building a training algorithm that adapts to individual progress"
      ]
    },
    solutions: {
      description: "We developed a comprehensive approach that act as 'digital coach' and 'digital guard':",
      solutions: [
        {
          title: "Zone 2 Training Engine",
          description: "Implement TRIMP algorithm that calculates personalized Zone 2 heart rate ranges based on age, fitness level, and historical data. Real-time monitoring ensures users stay in the optimal zone for aerobic base building.",
          imageUrl: ""
        },
        {
          title: "Endurance First Methodology",
          description: "Created a progressive training program that gradually increases duration before intensity. This evidence-based approach reduced dropout rates by 65% compared to traditional running apps.",
          imageUrl: ""
        },
        {
          title: "Adaptive Training Program",
          description: "Instead of forcing users into a rigid plan, we built an adaptive system that adjusts workouts based on user feedback and performance trends, ensuring personalized progression.",
          imageUrl: ""
        }
      ]
    },
    contribution: {
      role: "PM/iOS Developer",
      description: "As the PM and iOS developer, I was responsible for the entire app architecture and core feature implementation.",
      contributions: [
        "Architected the app using SwiftUI and Combine for reactive data flow",
        "Implemented HealthKit integration for heart rate monitoring and workout tracking",
        "Built the Zone 2 calculation algorithm with real-time feedback",
        "Developed CoreLocation-based GPS tracking with battery optimization",
        "Created reusable SwiftUI components for workout visualization",
        "Implemented offline-first architecture for reliable workout recording"
      ]
    },
    learnings: {
      description: "This project taught me valuable lessons about building health and fitness applications:",
      learnings: [
        "The importance of user education in changing behavior patterns",
        "How to optimize battery usage for long-running workout tracking",
        "Best practices for HealthKit integration and user privacy",
        "Designing UI that communicates complex data simply",
        "The value of progressive disclosure in feature-rich apps",
        "Building trust through transparent data handling"
      ]
    }
  },
  cococo: {
    projectTitle: "Coco.co",
    projectTagline: "There is no way as such",
    heroImageUrl: cococoImg,
    gettingStarted: {
      description: "A cross-platform mobile application built with React Native, delivering a seamless user experience across iOS and Android platforms.",
      technologies: ["React Native", "Expo", "TypeScript", "Redux"],
      imageUrl: cococoImg
    },
    context: {
      description: "The project aimed to create a unified mobile experience that works seamlessly across both major mobile platforms while maintaining native performance.",
      imageUrl: ""
    },
    challenge: {
      description: "Building a cross-platform application presented unique challenges:",
      challenges: [
        "Ensuring consistent UI/UX across iOS and Android",
        "Managing platform-specific features and APIs",
        "Optimizing performance for both platforms",
        "Handling different screen sizes and aspect ratios"
      ]
    },
    solutions: {
      description: "We leveraged React Native's capabilities to create a robust solution:",
      solutions: [
        {
          title: "Platform-Agnostic Architecture",
          description: "Implemented a clean architecture that separates business logic from platform-specific code, enabling code reuse of up to 95%.",
          imageUrl: ""
        }
      ]
    },
    contribution: {
      role: "React Native Developer",
      description: "Developed core features and ensured cross-platform compatibility.",
      contributions: [
        "Built reusable component library",
        "Implemented state management with Redux",
        "Optimized app performance and bundle size",
        "Handled platform-specific implementations"
      ]
    },
    learnings: {
      description: "Key takeaways from cross-platform development:",
      learnings: [
        "Best practices for React Native architecture",
        "Platform-specific optimization techniques",
        "Effective debugging across multiple platforms",
        "Balancing code reuse with platform conventions"
      ]
    }
  },
  navxbeauty: {
    projectTitle: "NavXBeauty",
    projectTagline: "Redefine your beauty experience",
    heroImageUrl: navxbeautyImg,
    gettingStarted: {
      description: "Partnered with FemaleDaily to create an offline-based navigation app for JakartaXBeauty. The solution benefits visitors, vendors, and FemaleDaily by leveraging Vision Framework and SwiftUI for indoor navigation without internet connection.",
      technologies: ["Swift", "SwiftUI", "Vision Framework", "CoreLocation", "ARKit"],
      imageUrl: navxbeautyImg
    },
    context: {
      description: "JakartaXBeauty is a major beauty expo attracting thousands of visitors. The challenge was to help attendees navigate the venue efficiently without relying on internet connectivity, which is often unreliable in large event spaces.",
      imageUrl: ""
    },
    challenge: {
      description: "Creating an offline navigation system for a large indoor venue:",
      challenges: [
        "Accurate indoor positioning without GPS or internet",
        "Real-time location updates using device sensors only",
        "Mapping vendor locations across multiple floors",
        "Providing value to multiple stakeholders (visitors, vendors, organizers)",
        "Ensuring app works reliably in crowded event conditions"
      ]
    },
    solutions: {
      description: "We developed an innovative offline-first navigation solution:",
      solutions: [
        {
          title: "Vision Framework Indoor Positioning",
          description: "Utilized Apple's Vision Framework to recognize QR markers placed throughout the venue, enabling accurate position detection without internet or GPS.",
          imageUrl: ""
        },
        {
          title: "Multi-Stakeholder Dashboard",
          description: "Created different views for visitors (navigation), vendors (booth analytics), and organizers (foot traffic insights), maximizing value for all parties.",
          imageUrl: ""
        },
        {
          title: "Offline-First Architecture",
          description: "Pre-loaded all venue maps, vendor information, and navigation data, ensuring full functionality without network connectivity.",
          imageUrl: ""
        }
      ]
    },
    contribution: {
      role: "iOS Developer & Product Designer",
      description: "Led the technical development and collaborated on product strategy with FemaleDaily.",
      contributions: [
        "Designed and implemented Vision Framework-based positioning system",
        "Built SwiftUI interface for seamless navigation experience",
        "Created vendor management system for booth location updates",
        "Developed analytics dashboard for event organizers",
        "Conducted user testing with event attendees",
        "Optimized app for offline performance and battery efficiency"
      ]
    },
    learnings: {
      description: "This project provided valuable insights into building offline-capable applications:",
      learnings: [
        "Advanced techniques for indoor positioning using computer vision",
        "Designing multi-sided platforms that serve different user types",
        "Optimizing SwiftUI for complex navigation scenarios",
        "The importance of offline-first design in event applications",
        "Balancing accuracy with battery life in location tracking",
        "Collaborating with corporate partners on product requirements"
      ]
    }
  },
  binsight: {
    projectTitle: "Binsight",
    projectTagline: "Revolutionize your way of sorting trash",
    heroImageUrl: binsightImg,
    gettingStarted: {
      description: "An intelligent waste management application that uses machine learning to help users properly sort their trash, promoting environmental sustainability.",
      technologies: ["React Native", "Expo", "TypeScript", "TensorFlow Lite"],
      imageUrl: binsightImg
    },
    context: {
      description: "Improper waste sorting is a major environmental issue. Many people want to recycle but don't know which bin each item belongs to, leading to contaminated recycling streams.",
      imageUrl: ""
    },
    challenge: {
      description: "Creating an accessible solution for waste sorting education:",
      challenges: [
        "Making recycling rules easy to understand and follow",
        "Providing instant feedback on waste classification",
        "Handling regional differences in recycling guidelines",
        "Encouraging sustained behavioral change"
      ]
    },
    solutions: {
      description: "We built an AI-powered waste classification system:",
      solutions: [
        {
          title: "AI-Powered Recognition",
          description: "Implemented TensorFlow Lite model that identifies waste items through the camera and suggests the correct bin in real-time.",
          imageUrl: ""
        }
      ]
    },
    contribution: {
      role: "Mobile Developer",
      description: "Developed the mobile application and integrated ML models.",
      contributions: [
        "Integrated TensorFlow Lite for on-device inference",
        "Built camera interface for object recognition",
        "Implemented educational content system",
        "Created gamification features to encourage usage"
      ]
    },
    learnings: {
      description: "Key learnings from building an educational sustainability app:",
      learnings: [
        "Integrating machine learning models in mobile apps",
        "Designing for behavioral change",
        "Optimizing ML inference on mobile devices",
        "Building engaging educational experiences"
      ]
    }
  },
  eatsway: {
    projectTitle: "Eatsway",
    projectTagline: "There is no way as such",
    heroImageUrl: "/projects/mobile.png",
    gettingStarted: {
      description: "A food delivery and restaurant discovery platform built with modern mobile technologies.",
      technologies: ["React Native", "Expo", "TypeScript"],
      imageUrl: "/projects/mobile.png"
    },
    context: {
      description: "Connecting food lovers with local restaurants through an intuitive mobile experience.",
      imageUrl: ""
    },
    challenge: {
      description: "Building a competitive food delivery platform:",
      challenges: [
        "Real-time order tracking",
        "Seamless payment integration",
        "Restaurant partner management",
        "Delivery logistics coordination"
      ]
    },
    solutions: {
      description: "Developed a comprehensive food delivery ecosystem:",
      solutions: [
        {
          title: "Unified Platform",
          description: "Created a single platform serving customers, restaurants, and delivery partners.",
          imageUrl: ""
        }
      ]
    },
    contribution: {
      role: "Mobile Developer",
      description: "Built customer-facing mobile application.",
      contributions: [
        "Developed order management system",
        "Implemented real-time tracking",
        "Integrated payment gateways",
        "Built restaurant browsing interface"
      ]
    },
    learnings: {
      description: "Insights from building marketplace applications:",
      learnings: [
        "Multi-sided platform architecture",
        "Real-time data synchronization",
        "Payment system integration",
        "User experience optimization"
      ]
    }
  }
};
