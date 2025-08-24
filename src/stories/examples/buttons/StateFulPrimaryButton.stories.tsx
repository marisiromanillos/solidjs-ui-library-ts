import type { Meta, StoryObj } from "@kachurun/storybook-solid";

import StatefulPrimaryButton from "@/examples/buttons/StateFulPrimaryButton";

const meta: Meta<typeof StatefulPrimaryButton> = {
  title: "Examples/Buttons/StatefulPrimaryButton",
  component: StatefulPrimaryButton,
  tags: ["autodocs"],
  args: {
    buttonText: "",
    onClick: () => undefined,
    loading: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: "View Booking",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    disabled: true,
  },
};
