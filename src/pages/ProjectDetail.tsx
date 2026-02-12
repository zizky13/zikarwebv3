import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

interface ProjectDetailProps {
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

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectTitle,
  projectTagline,
  heroImageUrl,
  gettingStarted,
  context,
  challenge,
  solutions,
  contribution,
  learnings,
}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 relative overflow-hidden rounded-xl"
      >
        {/* Background Image */}
        {heroImageUrl && (
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/60 to-black/100" />
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl relative z-10"
        >
        
        
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-[SF-Pro] font-bold bg-gradient-to-b from-white via-white/60 to-black-100 bg-clip-text text-transparent">
            {projectTitle}
          </h1>
          {projectTagline && (
            <p className="text-xl md:text-2xl font-[Inter] font-semibold text-pretty text-center break-normal bg-gradient-to-b from-white via-white/60 to-black-100 bg-clip-text text-transparent">
              {projectTagline}
            </p>
          )}
        </motion.div>
      </section>

      {/* Getting Started Section */}
      <section
        id="getting-started"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-black mb-8 font-[SF-Pro]"
          >
            Introduction
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 font-[Inter] leading-relaxed text-pretty"
          >
            {gettingStarted.description}
          </motion.p>
          
          {gettingStarted.technologies && gettingStarted.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="justify-center items-center"
            >
              <h3 className="text-2xl font-semibold text-black mb-8 font-[SF-Pro]">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                {gettingStarted.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.4 + (index * 0.1),
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="px-4 py-2 bg-gray-100 rounded-full bg-gradient-to-b from-black via-black/60 to-white-100 font-[Inter] text-sm text-gray-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Context Section */}
      <section
        id="context"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-4xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-black mb-8 font-[SF-Pro]"
          >
            Context
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 font-[Inter] leading-relaxed"
          >
            {context.description}
          </motion.p>

          {context.imageUrl && (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              src={context.imageUrl}
              alt="Context"
              className="w-full rounded-3xl shadow-2xl"
            />
          )}
        </div>
      </section>

      {/* Challenge Section */}
      <section
        id="challenge"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <div className="max-w-4xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-black mb-8 font-[SF-Pro]"
          >
            Challenge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 font-[Inter] leading-relaxed"
          >
            {challenge.description}
          </motion.p>

          {challenge.challenges && challenge.challenges.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {challenge.challenges.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-gray-700 font-[Inter]"
                >
                  <span className="text-2xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
      >
        <div className="max-w-4xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-black mb-8 font-[SF-Pro]"
          >
            The Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-12 font-[Inter] leading-relaxed"
          >
            {solutions.description}
          </motion.p>

          {solutions.solutions && solutions.solutions.length > 0 && (
            <div className="space-y-12 ">
              {solutions.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-8 rounded-3xl shadow-xl"
                >
                  <h3 className="text-3xl font-bold text-black mb-4 font-[SF-Pro]">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 font-[Inter] leading-relaxed">
                    {solution.description}
                  </p>
                  {solution.imageUrl && (
                    <img
                      src={solution.imageUrl}
                      alt={solution.title}
                      className="w-full rounded-2xl"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* My Contribution Section */}
      <section
        id="contribution"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      >
        <div className="max-w-4xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-black mb-8 font-[SF-Pro]"
          >
            My Contribution
          </motion.h2>
          
          {contribution.role && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-3 bg-black text-white rounded-full font-[SF-Pro] font-semibold">
                {contribution.role}
              </span>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 font-[Inter] leading-relaxed"
          >
            {contribution.description}
          </motion.p>

          {contribution.contributions && contribution.contributions.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {contribution.contributions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-gray-700 font-[Inter]"
                >
                  <span className="text-2xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </section>

      {/* Learnings Section */}
      <section
        id="learnings"
        className="min-h-screen flex flex-col items-center justify-center px-6 pb-16"
      >
        <div className="max-w-4xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-black mb-8 font-[SF-Pro]"
          >
            Learnings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 font-[Inter] leading-relaxed"
          >
            {learnings.description}
          </motion.p>

          {learnings.learnings && learnings.learnings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {learnings.learnings.map((learning, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <p className="text-lg text-gray-700 font-[Inter]">{learning}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer / Back to Projects */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.a
            href="/"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-4 bg-black text-white rounded-full font-[SF-Pro] font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            ← Back to All Projects
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
