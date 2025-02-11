"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  className?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const GlowingCard: React.FC<GlowingCardProps> = ({
  className = "",
  width = 256,
  height = 160,
  children,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0) 70%
      ),
      linear-gradient(to right, #e2e8f0, #cbd5e0)
    `
  );

  const darkBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(to right, #4a5568, #2d3748)
    `
  );

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn(
          "rounded-lg cursor-pointer relative overflow-hidden",
          "transition-shadow duration-300",
          "dark:hidden"
        )}
        style={{
          width,
          height,
          background: background,
        }}
        onMouseMove={handleMouseMove}
        initial={{
          background: "linear-gradient(to right, #e2e8f0, #cbd5e0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className={cn(
            "absolute inset-[1px] rounded-[7px] p-4 flex flex-col justify-between",
            "bg-gray-100"
          )}
        >
          {children}
        </motion.div>
      </motion.div>

      <motion.div
        className={cn(
          "rounded-lg cursor-pointer relative overflow-hidden",
          "transition-shadow duration-300",
          "hidden dark:block"
        )}
        style={{
          width,
          height,
          background: darkBackground,
        }}
        onMouseMove={handleMouseMove}
        initial={{
          background: "linear-gradient(to right, #4a5568, #2d3748)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className={cn(
            "absolute inset-[1px] rounded-[7px] p-4 flex flex-col justify-between",
            "bg-gray-800"
          )}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GlowingCard;
