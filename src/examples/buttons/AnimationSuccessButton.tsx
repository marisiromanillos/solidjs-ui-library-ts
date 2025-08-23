import confetti from "canvas-confetti";
import type { Component } from "solid-js";
import { createSignal, mergeProps } from "solid-js";
import EmojiButton from "@/components/buttons/EmojiButton";

interface AnimationSuccessButtonProps {
  emoji?: string;
  text?: string;
}

const AnimationSuccessButton: Component<AnimationSuccessButtonProps> = (props) => {
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

  return <EmojiButton text={merged.text} emoji={merged.emoji} onClick={handleClick} success={success()} />;
};
export default AnimationSuccessButton;
