interface MenuToggleProps {
  toggle: () => void;
  openMenu: boolean;
}
export default function MenuToggle({ toggle, openMenu }: MenuToggleProps) {
  return (
    <button onClick={toggle} className="group z-10 mr-5 flex flex-col gap-1">
      <span
        className={` block h-0.5 w-7 rounded-sm bg-zinc-900 transition-all duration-300 ${
          openMenu ? "rotate-135 translate-y-2" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`z-10 my-0.5 block h-0.5 w-7 rounded-sm bg-zinc-900 transition-all duration-100 ${
          openMenu ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={` block h-0.5 w-7 rounded-sm bg-zinc-900 transition-all duration-300 ${
          openMenu ? "-rotate-135 -translate-y-2" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
}
