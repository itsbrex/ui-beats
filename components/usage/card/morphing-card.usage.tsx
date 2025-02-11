import React from "react";
import MorphingCard from "@/components/demo/card/morphing-card";

const MorphingCardUsage = (props: { uniqueKey: number }) => {
  const { uniqueKey } = props;
  return (
    <MorphingCard
      key={uniqueKey}
      width="250px"
      height="250px"
      contents={[
        {
          shape: "rectangle",
          title: "Discover",
          description:
            "Explore our innovative features that redefine user experience.",
        },
        {
          shape: "circle",
          title: "Connect",
          description:
            "Join a community of forward-thinking individuals and ideas.",
        },
        {
          shape: "hexagon",
          title: "Transform",
          description:
            "Witness the evolution of design and functionality in real-time.",
        },
      ]}
      colorScheme={{ from: "#4F46E5", to: "#7C3AED" }}
      autoPlay={true}
      interval={4000}
    />
  );
};

MorphingCardUsage.stringVersion = `<MorphingCard
  width="250px"
  height="250px"
  contents={[
    {
      shape: "rectangle",
      title: "Discover",
      description: "Explore our innovative features that redefine user experience.",
    },
    {
      shape: "circle",
      title: "Connect",
      description: "Join a community of forward-thinking individuals and ideas.",
    },
    {
      shape: "hexagon",
      title: "Transform",
      description: "Witness the evolution of design and functionality in real-time.",
    },
  ]}
  colorScheme={{ from: '#4F46E5', to: '#7C3AED' }}
  autoPlay={true}
  interval={4000}
/>`;

export default MorphingCardUsage;
