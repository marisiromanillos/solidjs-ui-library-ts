import { type Component, mergeProps, Show } from "solid-js";

type MessageProps = {
  loading: boolean;
  error: boolean;
  correct: boolean;
  loadingMessage: string;
  errorMessage: string;
  correctMessage: string;
};

const AlertMessage: Component<MessageProps> = (props: MessageProps) => {
  const merged = mergeProps(
    {
      loading: false,
      error: false,
      correct: false,
      loadingMessage: "",
      errorMessage: "",
      correctMessage: "",
    },
    props,
  );
  return (
    <section>
      <Show when={merged.loading}>
        <div>
          <p>{merged.loadingMessage}</p>
        </div>
      </Show>
      <Show when={merged.error}>
        <div>
          <p>{merged.errorMessage}</p>
        </div>
      </Show>
      <Show when={merged.correct}>
        <div>
          <p>{merged.correctMessage}</p>
        </div>
      </Show>
    </section>
  );
};
export default AlertMessage;
