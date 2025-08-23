import type { Component, JSX } from "solid-js";
import { mergeProps, Show } from "solid-js";
import { twMerge } from "tailwind-merge";

interface AnimationSuccessButtonProps {
  text: string;
  onClick: () => void;
  emoji: string;
  emojiAnimation?: JSX.Element;
  success?: boolean;
  class?: string;
}

const EmojiButton: Component<AnimationSuccessButtonProps> = (props) => {
  const merged = mergeProps(
    {
      success: false,

      class: "",
    },
    props,
  );

  return (
    <div>
      <button
        onClick={props.onClick}
        class={twMerge(
          "px-4  gap-2 py-2 bg-white flex  items-center justify-center whitespace-nowrap rounded-full",
          merged.class,
        )}
        type="button"
      >
        <span>{props.emoji}</span>
        {props.text}
      </button>

      <Show when={merged.success}>{props.emojiAnimation}</Show>
    </div>
  );
};
export default EmojiButton;
