import { type Component, mergeProps } from "solid-js";

type ButtonProps = {
  loading: boolean;
  disabled: boolean;
  loadingText: string;
  onClick: () => void;
  children: string;
};
const ButtonMergeProps: Component<ButtonProps> = (props) => {
  const merged = mergeProps(
    {
      loading: false,
      disabled: false,
      loadingText: "",
      onClick: true,
      children: "",
    },
    props,
  );
  return (
    <section>
      <button
        disabled={merged.loading || merged.disabled}
        onClick={merged.onClick}
        class="bg-pink-500 py-2 pointer-events-auto rounded-md px-3"
        type="button"
      >
        {merged.loading ? merged.loadingText : merged.children}
      </button>
    </section>
  );
};
export default ButtonMergeProps;
