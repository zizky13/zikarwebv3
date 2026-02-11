import {
  CardDescription,
  CardHighlight,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface ProjectCardProps {
  title: string;
  highlight: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  onClick?: () => void;
  className?: string;
}

export function ProjectCard({
  title,
  highlight,
  description,
  imageUrl,
  imageAlt = "Project image",
  onClick,
  className = "",
}: ProjectCardProps) {
  return (
    <motion.div
      className={`relative mx-auto w-full min-w-3xl max-w-4xl cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      
        <div className="m-6 p-6 bg-black rounded-3xl relative">
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
          
          {/* Chevron Icon */}
          <div className="flex justify-end items-center">
            <motion.div
              className="rounded-full bg-white/10 p-2"
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                x: 5
              }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </div>
    </motion.div>
  )
}
