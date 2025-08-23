import type { Component } from "solid-js";
import AnimationSuccessButton from "@/examples/buttons/AnimationSuccessButton";
import StatefulPrimaryButton from "@/examples/buttons/StateFulPrimaryButton";

const App: Component = () => {
  return (
    <section class="m-12 space-y-8">
      <StatefulPrimaryButton />
      <AnimationSuccessButton />
    </section>
  );
};

export default App;
