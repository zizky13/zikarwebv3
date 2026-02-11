import {
  CardDescription,
  CardHighlight,
  CardTitle,
} from "@/components/ui/card"
import { GlassButton } from "./GlassButton"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string;
  highlight: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  buttonText?: string;
  buttonVariant?: 'indigo' | 'purple' | 'blue' | 'pink' | 'green' | 'white';
  buttonSize?: 'sm' | 'md' | 'lg';
  buttonClassName?: string;
  onButtonClick?: () => void;
  className?: string;
  badges?: string[];
}

export function ProjectCard({
  title,
  highlight,
  description,
  imageUrl,
  imageAlt = "Project image",
  buttonText = "See More",
  buttonVariant = "white",
  buttonSize = "md",
  buttonClassName = "",
  onButtonClick,
  className = "",
  badges = []
}: ProjectCardProps) {
  return (
    <motion.div
      className={`relative mx-auto w-full min-w-3xl max-w-4xl ${className}`}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      
        <div className="m-6 p-6 bg-black rounded-3xl">
          <CardTitle className="mb-8">{title}</CardTitle>
          <CardHighlight className="mb-8">{highlight}</CardHighlight>
          <CardDescription className="mb-4">
            {description}
          </CardDescription>
          
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full aspect-video object-contain rounded-xl mb-4 brightness-90"
          />
          
          <div className="flex justify-start">
            <GlassButton
              variant={buttonVariant}
              size={buttonSize}
              onClick={onButtonClick}
              className={buttonClassName}
            >
              {buttonText}
            </GlassButton>
          </div>
        </div>
  </motion.div>
  )
}
