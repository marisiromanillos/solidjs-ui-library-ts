import type { Meta, StoryObj } from "@kachurun/storybook-solid";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  title: "Components/Buttons/PrimaryButton",
  component: PrimaryButton,
  tags: ["autodocs"],
  argTypes: {
    buttonText: {
      control: "text",
      description: "The text displayed on the button",
    },
    loading: {
      control: "boolean",
      description: "Shows loading spinner and disables button",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    error: {
      control: "boolean",
      description: "Shows error message above button",
    },
    errorMessage: {
      control: "text",
      description: "Custom error message text",
    },
    class: {
      control: "text",
      description: "Additional CSS classes",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "HTML button type attribute",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: "View Booking",
    onClick: () => undefined,
  },
};

export const LoadingState: Story = {
  args: {
    buttonText: "Loading...",
    loading: true,
  },
};

export const LoadingDisabled: Story = {
  args: {
    buttonText: "Processing...",
    loading: true,
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    buttonText: "Try Again",
    error: true,
    errorMessage: "Failed to load booking. Please try again.",
  },
};

export const CustomStyled: Story = {
  args: {
    buttonText: "Custom Button",
    class: "bg-purple-600 hover:bg-purple-700 px-6 py-3",
    onClick: () => undefined,
  },
};

export const SubmitButton: Story = {
  args: {
    buttonText: "Submit Form",
    type: "submit",
    onClick: () => undefined,
  },
};
