import type { Component } from "solid-js";
import { mergeProps, Show } from "solid-js";
import { twMerge } from "tailwind-merge";
import LoadingIcon from "@/components/icons/LoadingIcon";

interface StatefulPrimaryButtonProps {
  buttonText: string;
  onClick: () => void;
  class?: string;
  loading?: boolean;
  disabled?: boolean;
}

const PrimaryButton: Component<StatefulPrimaryButtonProps> = (props: StatefulPrimaryButtonProps) => {
  const merged = mergeProps(
    {
      loading: false,
      class: "",
      disabled: false,
    },
    props,
  );

  return (
    <button
      class={twMerge(
        "px-4 py-2 bg-pink-500 flex items-center whitespace-nowrap text-gray-100 rounded-full disabled:opacity-70 disabled:cursor-not-allowed",
        merged.class,
      )}
      type="button"
      onClick={props.onClick}
      disabled={merged.disabled || merged.loading}
    >
      <Show when={merged.loading}>
        <LoadingIcon />
      </Show>
      {props.buttonText}
    </button>
  );
};

export default PrimaryButton;
