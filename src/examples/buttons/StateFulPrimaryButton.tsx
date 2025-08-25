import { type Component, createSignal } from "solid-js";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export const StateFulPrimaryButton: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const [success, setSuccess] = createSignal(false);

  const handleClick = async () => {
    if (success()) {
      setSuccess(false);
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <PrimaryButton
      buttonText={success() ? "✓ Booking Confirmed" : loading() ? "Processing your booking" : "Confirm Booking"}
      onClick={handleClick}
      loading={loading()}
      class={success() ? "bg-green-500 hover:bg-green-600" : ""}
    />
  );
};

export default StateFulPrimaryButton;
