import { AlignCenterIcon, LoaderPinwheel, Search, ShoppingCart, X } from "lucide-solid";
import { type Component, createSignal } from "solid-js";

const Navbar: Component = () => {
  const [open, setOpen] = createSignal(false);

  const toggleMobileMenu = () => {
    setOpen(!open());
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <section>
      {!open() && (
        <div class="flex justify-between p-4">
          <div>
            <LoaderPinwheel />
          </div>
          <div class="flex justify-between gap-6">
            <div>
              <Search />
            </div>
            <div>
              <ShoppingCart />
            </div>
            <button
              type="button"
              class="bg-transparent border-none p-0 cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <AlignCenterIcon />
            </button>
          </div>
        </div>
      )}

      <div class={`relative transition-all duration-300 ${open() ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <button
          type="button"
          class="absolute right-0 p-2 bg-transparent border-none cursor-pointer"
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        >
          <X />
        </button>
        <div class="absolute top-0 p-5">
          <div>Store</div>
          <div>Mac</div>
          <div>iPad</div>
          <div>iPhone</div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
