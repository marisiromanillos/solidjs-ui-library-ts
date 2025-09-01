import type { Component } from "solid-js";

import StatefulPrimaryButton from "@/examples/buttons/StateFulPrimaryButton";

const App: Component = () => {
  return (
    <section class="m-12 space-y-8">
      <StatefulPrimaryButton />
    </section>
  );
};

export default App;
