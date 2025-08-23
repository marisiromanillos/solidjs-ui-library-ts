import type { Component } from "solid-js";
import EmojiAnimationButton from "@/examples/buttons/EmojiAnimationButton";
import StatefulPrimaryButton from "@/examples/buttons/StateFulPrimaryButton";
import ConfettiAnimationButton from "./examples/buttons/ConfettiAnimationButton";

const App: Component = () => {
  return (
    <section class="m-12 space-y-8">
      <StatefulPrimaryButton />
      <EmojiAnimationButton />
      <ConfettiAnimationButton />
    </section>
  );
};

export default App;
