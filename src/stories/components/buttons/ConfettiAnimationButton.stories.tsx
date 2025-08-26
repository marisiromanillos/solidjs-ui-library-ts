import type { Meta, StoryObj } from "@kachurun/storybook-solid";

import ConfettiAnimationButton from "@/components/buttons/ConfettiAnimationButton";

const meta: Meta<typeof ConfettiAnimationButton> = {
  title: "Components/Buttons/ConfettiAnimationButton",
  component: ConfettiAnimationButton,
  tags: ["autodocs"],
  args: {
    text: "",
    particleCount: 0,
    spread: 0,
    origin: { x: 0 },
    emoji: "",
    class: "bg-blue-400",
    onclick: () => undefined,
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Congratulations",
    emoji: "🎉",
  },
};

export const ShootingConfetti: Story = {
  args: {
    text: "Congratulations",
    emoji: "🎉",
    particleCount: 100,
    spread: 60,
    origin: { y: 0.6 },
  },
  // play: async ({ canvasElement }) => {
  //   // Wait for the component to render
  //   await new Promise(resolve => setTimeout(resolve, 100));

  //   // Find the button using native DOM methods
  //   const button = canvasElement.querySelector('button');

  //   if (button) {
  //     // Trigger a click event using native DOM
  //     button.click();
  //   }
  // }
};
