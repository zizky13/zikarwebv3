import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'indigo' | 'purple' | 'blue' | 'pink' | 'green' | 'white';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles = {
  indigo: {
    background: 'rgba(99, 102, 241, 0.2)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.2)',
    hoverShadow: '0 10px 40px 0 rgba(99, 102, 241, 0.4)',
    shimmerGradient: 'from-indigo-400/0 via-indigo-400/30 to-indigo-400/0'
  },
  purple: {
    background: 'rgba(168, 85, 247, 0.2)',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.2)',
    hoverShadow: '0 10px 40px 0 rgba(168, 85, 247, 0.4)',
    shimmerGradient: 'from-purple-400/0 via-purple-400/30 to-purple-400/0'
  },
  blue: {
    background: 'rgba(59, 130, 246, 0.2)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.2)',
    hoverShadow: '0 10px 40px 0 rgba(59, 130, 246, 0.4)',
    shimmerGradient: 'from-blue-400/0 via-blue-400/30 to-blue-400/0'
  },
  pink: {
    background: 'rgba(236, 72, 153, 0.2)',
    border: '1px solid rgba(236, 72, 153, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(236, 72, 153, 0.2)',
    hoverShadow: '0 10px 40px 0 rgba(236, 72, 153, 0.4)',
    shimmerGradient: 'from-pink-400/0 via-pink-400/30 to-pink-400/0'
  },
  green: {
    background: 'rgba(34, 197, 94, 0.2)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(34, 197, 94, 0.2)',
    hoverShadow: '0 10px 40px 0 rgba(34, 197, 94, 0.4)',
    shimmerGradient: 'from-green-400/0 via-green-400/30 to-green-400/0'
  },
  white: {
    background: 'rgba(232, 225, 225, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
    hoverShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.4)',
    shimmerGradient: 'from-black-400/0 via-black-400/30 to-black-400/0'
  }
};

const sizeStyles = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-6 py-2 text-sm',
  lg: 'px-8 py-3 text-base'
};

export function GlassButton({
  children,
  onClick,
  className = '',
  variant = 'indigo',
  size = 'md',
  disabled = false,
  type = 'button'
}: GlassButtonProps) {
  const styles = variantStyles[variant];

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { 
        scale: 1.05,
        boxShadow: styles.hoverShadow
      } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className={`
        ${sizeStyles[size]}
        rounded-full 
        font-[inter] 
        text-white 
        relative 
        overflow-hidden
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      style={{
        background: styles.background,
        backdropFilter: 'blur(10px)',
        border: styles.border,
        boxShadow: styles.boxShadow
      }}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${styles.shimmerGradient}`}
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
    </motion.button>
  );
}
