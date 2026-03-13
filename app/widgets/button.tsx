"use client";
import React, { ButtonHTMLAttributes, FC } from 'react';
import { scrollToSection } from '../utils/scrollToSection';

// Use ButtonHTMLAttributes to inherit all standard button props
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ 
  onClick = ()=>scrollToSection('contact'), 
  children, 
  className = "", 
  ...props 
}) => {
  // Define some base styles - you can swap these for your Tailwind classes
//   const baseStyles = "px-6 py-2 rounded-full font-medium transition-all active:scale-95";
  
  return (
    <button 
      onClick={onClick} 
      className={`${className}`} 
      {...props} // Spread standard props like 'disabled' or 'type'
    >
      {children}
    </button>
  );
};

export default Button;