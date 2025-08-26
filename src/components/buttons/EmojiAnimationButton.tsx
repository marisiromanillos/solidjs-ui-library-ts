import confetti from "canvas-confetti";
import type { Component } from "solid-js";
import { createSignal, mergeProps } from "solid-js";
import AnimationButton from "@/components/buttons/AnimationButton";

interface AnimationEmojiButtonProps {
  emoji?: string;
  text?: string;
}

const EmojiAnimationButton: Component<AnimationEmojiButtonProps> = (props) => {
  const [success, setSuccess] = createSignal(false);

  const merged = mergeProps(
    {
      emoji: "🤠",
      text: "Click me",
    },
    props,
  );
  const handleClick = () => {
    setSuccess(true);

    const scalar = 3;
    const shape = confetti.shapeFromText({ text: merged.emoji, scalar });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      shapes: [shape],
      scalar: scalar,
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return <AnimationButton text={merged.text} emoji={merged.emoji} onClick={handleClick} success={success()} />;
};
export default EmojiAnimationButton;
