import { type Component, createSignal } from "solid-js";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const StatefulPrimaryButton: Component = () => {
  const [viewBooking, setViewBooking] = createSignal(false);

  return (
    <PrimaryButton
      buttonText="View Booking"
      onClick={() => setViewBooking(true)}
      loading={viewBooking()}
      disabled={viewBooking()}
    />
  );
};
export default StatefulPrimaryButton;
