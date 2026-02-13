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
    title: "Apple Academy Project",
    highlight: "Worry free travelling experience",
    description: "Parents have their own concerns when booking a travel arrangement, especially with children and weather conditions. In this project, I was tasked to elevate their experience on top of existing travel app.",
    imageUrl: cococoImg,
    badges: ["UIKit", "Swift", "SwiftLint", "SwiftUI", "MVVM"]
  },
  {
    id: "navxbeauty",
    title: "NavXBeauty",
    highlight: "Redefine your beauty experience",
    description: "Partnered with FemaleDaily, I created an offline-based navigation app for JakartaXBeauty. The solution was created not only to benefit visitors, but also multiple stakeholders such as vendors and FemaleDaily itself. Leveraging Vision Framework and SwiftUI, NavXBeauty can provide your current location and show all the tenants location without needing an internet connection.",
    imageUrl: navxbeautyImg,
    badges: ["Swift", "SwiftUI", "Vision"]
  },
  {
    id: "binsight",
    title: "Binsight",
    highlight: "Revolutionize your way of sorting trash",
    description: "An intelligent waste detection app that elevate CoreML and Vision Framework from Apple, promoting environmental sustainability.",
    imageUrl: binsightImg,
    badges: ["Vision", "CoreML", "Liner", "Swift", "SwiftUI"]
  },
//   {
//     id: "eatsway",
//     title: "Eatsway",
//     highlight: "Worry free travelling experience",
//     description: "Cross-platform app with React Native",
//     imageUrl: "/projects/mobile.png",
//     badges: ["React Native", "Expo", "TypeScript"]
//   }
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
        "Building a training algorithm that adapts to individual progress",
        "Validate user problem with limited time constraint and user transparency"
      ]
    },
    solutions: {
      description: "We developed a comprehensive approach that act as 'digital coach' and 'digital guard':",
      solutions: [
        {
          title: "Zone 2 Training Engine",
          description: "Implement TRIMP algorithm that calculates personalized training load based on age, fitness level, and historical data. Real-time monitoring ensures users stay in the optimal zone for aerobic base building.",
          imageUrl: ""
        },
        {
          title: "Endurance First Methodology",
          description: "Created a progressive training program that gradually increases or decreases duration before intensity. This evidence-based approach reduced dropout rates by 65% compared to traditional running apps.",
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
      description: "As the PM and iOS developer, I was responsible for the entire product envision and core feature implementation.",
      contributions: [
        "Created reusable SwiftUI components for progress visualization",
        "Plan and conduct user testing with real novice runner to improve experience",
        "Validate concept by conducting wizard-of-oz testing method",
        "Gather product requirement and translate into technical features",
        "Documented the app development process and product decisions"
      ]
    },
    learnings: {
      description: "This project taught me valuable lessons about managing an app development throughout the entire lifecycle while also contribute as developer:",
      learnings: [
        "The importance of user understanding user needs",
        "Ensuring proper user testing without taking bias into account",
        "Sprint planning and management under tight schedule constraint",
        "Implement various concept testing method given certain condition to validate product idea"
      ]
    }
  },
  cococo: {
    projectTitle: "Apple Academy Project",
    projectTagline: "Worry free travelling experience",
    heroImageUrl: cococoImg,
    gettingStarted: {
      description: "Parents have their own concerns when booking a travel arrangement, especially with children and weather conditions. In this project, I was tasked to elevate their experience on top of existing travel app.",
      technologies: ["UIKit", "Swift", "SwiftLint", "SwiftUI", "MVVM"],
      imageUrl: cococoImg
    },
    context: {
      description: "The project aimed to enhance a mobile travelling application to alleviate parental concerns during trips. By integrating features that ensure safety, convenience, and real-time updates, the app provides a comprehensive solution for families on the go.",
      imageUrl: ""
    },
    challenge: {
      description: "Elevate user experience in travelling safety:",
      challenges: [
        "Limited features addressing parental concerns",
        "Huge codebase with limited documentation",
        "Unfamiliar technical stack and pipeline",
        "Creating micro interaction to make sure smooth UX"
      ]
    },
    solutions: {
      description: "We leveraged UIKit and Swift to create a robust solution:",
      solutions: [
        {
          title: "Safety Badge",
          description: "Marked trip and accommodation with safety badge to give reassurance to parent when booking travel arrangement.",
          imageUrl: ""
        },
        {
          title: "Elevated Micro Interaction",
          description: "Implement various animation (ken-burns, fade in/out, parallax) to make sure the user experience is smooth and delightful for parents demographic.",
          imageUrl: ""
        }
      ]
    },
    contribution: {
      role: "iOS Developer",
      description: "Developed core features and ensured smooth user experience.",
      contributions: [
        "Built reusable components",
        "Implemented micro interaction and animation using SwiftUI and UIKit",
        "Document and improve existing codebase for better maintainability",
      ]
    },
    learnings: {
      description: "Key takeaways from the project:",
      learnings: [
        "Best practices for UIKit and Swift architecture",
        "MVVM and delegate pattern implementation",
        "Effective debugging using Xcode Instruments",
        "Implemented clean code principles in a large codebase",
      ]
    }
  },
  navxbeauty: {
    projectTitle: "NavXBeauty",
    projectTagline: "Redefine your beauty experience",
    heroImageUrl: navxbeautyImg,
    gettingStarted: {
      description: "Partnered with FemaleDaily to create an offline-based navigation app for JakartaXBeauty. The solution benefits visitors, vendors, and FemaleDaily by leveraging Vision Framework and SwiftUI for indoor navigation without internet connection.",
      technologies: ["Swift", "SwiftUI", "Vision Framework"],
      imageUrl: navxbeautyImg
    },
    context: {
      description: "JakartaXBeauty is a major beauty expo attracting thousands of visitors. The challenge was to help attendees navigate the venue efficiently without relying on internet connectivity, which is often unreliable in large event spaces while also maintaining vendor visibility.",
      imageUrl: ""
    },
    challenge: {
      description: "Creating an offline navigation system for a large indoor venue:",
      challenges: [
        "Accurate indoor positioning without GPS or internet",
        "Mapping vendor locations across multiple floors",
        "Providing value to multiple stakeholders (visitors, vendors, organizers)",
        "Ensuring app works reliably in crowded event conditions",
        "Create an effective map that can guide user towards specific location with other vendor visibility in mind",
        "Making the solution scalable and extendable, without adding more task to FemaleDaily staff"
      ]
    },
    solutions: {
      description: "We developed an innovative offline-first navigation solution:",
      solutions: [
        {
          title: "Vision Framework Indoor Positioning",
          description: "Utilized Apple's Vision Framework to recognize QR markers placed throughout the venue and scan existing floorplan, enabling accurate position detection without internet or GPS.",
          imageUrl: ""
        },
        {
          title: "Multi-Stakeholder Aware Navigation System",
          description: "Created a navigation app that provides guidance towards user navigation without compromising other vendor's visibility.",
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
      role: "iOS Developer & Product Manager",
      description: "Contribute to the technical development and collaborated on product strategy with FemaleDaily.",
      contributions: [
        "Designed and implemented Vision Framework-based positioning system",
        "Built SwiftUI interface for seamless navigation experience",
        "Created vendor management system for booth location updates",
        "Conducted user testing with event attendees",
        "Optimized app for offline performance and battery efficiency"
      ]
    },
    learnings: {
      description: "This project provided valuable insights into building offline-capable applications:",
      learnings: [
        "OCR and floorplan recognition using Vision Framework",
        "Designing multi-sided platforms that serve different user types",
        "Optimizing SwiftUI for complex navigation scenarios",
        "The importance of offline-first design in event applications",
        "Collaborating with corporate partners on product requirements"
      ]
    }
  },
  binsight: {
    projectTitle: "Binsight",
    projectTagline: "Revolutionize your way of sorting trash",
    heroImageUrl: binsightImg,
    gettingStarted: {
      description: "An intelligent waste detection app that elevate CoreML and Vision Framework from Apple, promoting environmental sustainability.",
      technologies: ["Vision", "CoreML", "Liner", "Swift", "SwiftUI"],
      imageUrl: binsightImg
    },
    context: {
      description: "Deciding which bin to throw waste is often confusing, leading to improper sorting and environmental harm. Binsight aims to educate users on correct waste disposal through real-time ML-powered classification, making recycling easy and accessible for everyone.",
      imageUrl: ""
    },
    challenge: {
      description: "Creating an accessible solution for waste sorting education:",
      challenges: [
        "Create a real-time waste classification system",
        "Making waste category easy to understand and follow",
        "Create a solution that can be used anywhere anytime",
      ]
    },
    solutions: {
      description: "We built an ML-powered waste classification system:",
      solutions: [
        {
          title: "ML-Powered Recognition",
          description: "Implemented CoreML model that identifies waste items through the camera and suggests the correct bin in real-time.",
          imageUrl: ""
        }
      ]
    },
    contribution: {
      role: "ML Developer",
      description: "Research and test various machine learning models and techniques for waste classification.",
      contributions: [
        "Testing various machine learning models and frameworks to ensure feasibility",
        "Create an optimized image cropping system to ensure fast and lightweight process",
      ]
    },
    learnings: {
      description: "This project taught me how to utilize CoreML and Vision Framework:",
      learnings: [
        "Integrating on-device machine learning models in iOS app",
        "Optimizing ML inference on mobile devices",
      ]
    }
  },
//   eatsway: {
//     projectTitle: "Eatsway",
//     projectTagline: "There is no way as such",
//     heroImageUrl: "/projects/mobile.png",
//     gettingStarted: {
//       description: "A food delivery and restaurant discovery platform built with modern mobile technologies.",
//       technologies: ["React Native", "Expo", "TypeScript"],
//       imageUrl: "/projects/mobile.png"
//     },
//     context: {
//       description: "Connecting food lovers with local restaurants through an intuitive mobile experience.",
//       imageUrl: ""
//     },
//     challenge: {
//       description: "Building a competitive food delivery platform:",
//       challenges: [
//         "Real-time order tracking",
//         "Seamless payment integration",
//         "Restaurant partner management",
//         "Delivery logistics coordination"
//       ]
//     },
//     solutions: {
//       description: "Developed a comprehensive food delivery ecosystem:",
//       solutions: [
//         {
//           title: "Unified Platform",
//           description: "Created a single platform serving customers, restaurants, and delivery partners.",
//           imageUrl: ""
//         }
//       ]
//     },
//     contribution: {
//       role: "Mobile Developer",
//       description: "Built customer-facing mobile application.",
//       contributions: [
//         "Developed order management system",
//         "Implemented real-time tracking",
//         "Integrated payment gateways",
//         "Built restaurant browsing interface"
//       ]
//     },
//     learnings: {
//       description: "Insights from building marketplace applications:",
//       learnings: [
//         "Multi-sided platform architecture",
//         "Real-time data synchronization",
//         "Payment system integration",
//         "User experience optimization"
//       ]
//     }
//   }
};
