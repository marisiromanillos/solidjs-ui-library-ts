import confetti from "canvas-confetti";
import type { Component } from "solid-js";
import { createSignal, mergeProps } from "solid-js";
import AnimationButton from "./AnimationButton";

interface AnimationConfettiButtonProps {
  text?: string;
  particleCount?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
  emoji?: string;
  class?: string;
}

const ConfettiAnimationButton: Component<AnimationConfettiButtonProps> = (props) => {
  const [success, setSuccess] = createSignal(false);

  const merged = mergeProps(
    {
      text: "Congratulations",
      emoji: "🎊",
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6, x: 0.5 },
      class: "",
    },
    props,
  );

  const onClick = () => {
    setSuccess(true);

    const origin = {
      x: merged.origin?.x ?? 0.5,
      y: merged.origin?.y ?? 0.6,
    };

    confetti({
      particleCount: merged.particleCount,
      spread: merged.spread,
      origin: origin,
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <AnimationButton
      class={merged.class}
      emoji={merged.emoji}
      success={success()}
      text={merged.text}
      onClick={onClick}
    />
  );
};

export default ConfettiAnimationButton;
