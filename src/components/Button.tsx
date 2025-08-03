import { type Component, createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";

const Button: Component = () => {
  const [open, setOpen] = createSignal<boolean>(false);
  const openPopUp = () => {
    setOpen(true);
  };
  const closePopUp = () => {
    setOpen(false);
  };

  return (
    <section>
      <div>
        <button onClick={openPopUp} type="button">
          open
        </button>
      </div>
      <div>
        <button onClick={closePopUp} type="button">
          close
        </button>
      </div>
      <Show when={open()}>
        <Portal>
          <div class="border bg-pink-400 p-9">I am a pop up</div>
        </Portal>
      </Show>
    </section>
  );
};
export default Button;
