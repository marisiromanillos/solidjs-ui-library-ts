// import { ChevronLeft } from "lucide-solid";
import type { Component } from "solid-js";
import { type JSX, mergeProps, Show } from "solid-js";
import { twMerge } from "tailwind-merge";
import LoadingIcon from "@/components/icons/LoadingIcon";

export interface PrimaryButtonProps {
  buttonText: string;
  onClick?: () => void | Promise<void>;
  class?: string;
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  type?: "button" | "submit" | "reset";
  id?: string;
  name?: string;
  ariaLabel?: string;
  icon?: JSX.Element;
}

const PrimaryButton: Component<PrimaryButtonProps> = (props) => {
  const merged = mergeProps(
    {
      loading: false,
      disabled: false,
      error: false,
      errorMessage: "❌ Something went wrong on our side, try again later.",
      class: "",
      type: "button" as const,
    },
    props,
  );

  return (
    <div class="inline-block">
      <Show when={merged.error}>
        <p class="text-red-500 text-sm mb-2">{merged.errorMessage}</p>
      </Show>
      <button
        id={merged.id}
        name={merged.name}
        aria-label={merged.ariaLabel}
        class={twMerge(
          "px-4 py-2 bg-pink-500 flex items-center gap-2 whitespace-nowrap text-gray-100 rounded-full",
          "hover:bg-pink-600 transition-colors",
          "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-pink-500",
          merged.class,
        )}
        type={merged.type}
        onClick={merged.onClick}
        disabled={merged.disabled || merged.loading}
      >
        <Show when={merged.loading}>
          <LoadingIcon />
        </Show>
        {merged.buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
