import confetti from "canvas-confetti";
import type { Component } from "solid-js";
import { createSignal, mergeProps } from "solid-js";
import AnimationButton from "@/components/buttons/AnimationButton";

interface AnimationConfettiButtonProps {
  text?: string; // Optional - will use default if not provided
  particleCount?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
}

const ConfettiAnimationButton: Component<AnimationConfettiButtonProps> = (props) => {
  const [success, setSuccess] = createSignal(false);

  const merged = mergeProps(
    {
      text: "Congratulations", // Default text
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
    },
    props,
  );

  const onClick = () => {
    setSuccess(true);

    confetti({
      particleCount: merged.particleCount,
      spread: merged.spread,
      origin: merged.origin,
    });

    setTimeout(() => setSuccess(false), 5000);
  };

  return <AnimationButton emoji="🎊" success={success()} text={merged.text} onClick={onClick} />;
};

export default ConfettiAnimationButton;
