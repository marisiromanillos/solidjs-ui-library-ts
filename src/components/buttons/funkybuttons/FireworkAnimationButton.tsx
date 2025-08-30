import confetti from "canvas-confetti";
import { type Component, createSignal, mergeProps } from "solid-js";
import AnimationButton from "./AnimationButton";

interface AnimationFireworkProps {
  text?: string;
  duration?: number;
  startVelocity?: number;
  spread?: number;
  ticks?: number;
  zIndex?: number;
  interval?: number;
  particleMultiplier?: number;
  emoji?: string;
}

const FireworkAnimationButton: Component<AnimationFireworkProps> = (props) => {
  const [success, setSuccess] = createSignal(false);

  const merged = mergeProps(
    {
      text: "Celebrate",
      duration: 15000,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      interval: 250,
      particleMultiplier: 50,
      emoji: "🎆",
    },
    props,
  );

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const onClick = () => {
    setSuccess(true);

    const animationEnd = Date.now() + merged.duration;
    const defaults = {
      startVelocity: merged.startVelocity,
      spread: merged.spread,
      ticks: merged.ticks,
      zIndex: merged.zIndex,
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setSuccess(false);
        return;
      }

      const particleCount = merged.particleMultiplier * (timeLeft / merged.duration);

      // Left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });

      // Right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, merged.interval);
  };

  return (
    <AnimationButton
      onClick={onClick}
      emoji={merged.emoji}
      text={merged.text}
      success={success()}
      class="bg-purple-500 text-white"
    />
  );
};

export default FireworkAnimationButton;
