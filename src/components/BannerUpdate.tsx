import { type Component, mergeProps } from "solid-js";

type BannerProps = {
  title: string;
  buttonText: string;
  onClick: () => void;
};

const BannerUpdate: Component<BannerProps> = (props: BannerProps) => {
  const merged = mergeProps(
    {
      title: "",
      buttonText: "",
      onClick: true,
    },
    props,
  );
  return (
    <section>
      <div>
        <h1>{merged.title}</h1>
        <button class="py-2 px-3 bg-amber-300 rounded-sm border-none" onclick={merged.onClick} type="button">
          {merged.buttonText}
        </button>
      </div>
    </section>
  );
};
export default BannerUpdate;
