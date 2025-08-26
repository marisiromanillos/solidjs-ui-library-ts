import type { Component } from "solid-js";
import EmojiAnimationButton from "@/components/buttons/EmojiAnimationButton";
import StatefulPrimaryButton from "@/examples/buttons/StateFulPrimaryButton";
import ConfettiAnimationButton from "./components/buttons/ConfettiAnimationButton";
import FireworkAnimationButton from "./components/buttons/FireworkAnimationButton";

const App: Component = () => {
  return (
    <section class="m-12 space-y-8">
      <StatefulPrimaryButton />
      <EmojiAnimationButton />
      <ConfettiAnimationButton />
      <FireworkAnimationButton />
    </section>
  );
};

export default App;
