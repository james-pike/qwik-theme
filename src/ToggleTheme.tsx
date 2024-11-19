import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import IconMoon from "./IconMoon";
import IconSun from "./IconSun";


interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;
  const store = useStore({
    theme:
      (typeof window !== "undefined" && window.localStorage.theme) ||
      undefined,
  });

  useVisibleTask$(() => {
    store.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  return (
    <button
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-primary-500 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
      aria-label="Toggle between Dark and Light mode"
      onClick$={() => {
        switch (store.theme) {
          case "dark":
            document.documentElement.classList.remove("dark");
            store.theme = window.localStorage.theme = "light";
            break;
          default:
            document.documentElement.classList.add("dark");
            store.theme = window.localStorage.theme = "dark";
            break;
        }
      }}
    >
      {store.theme === "dark" ? (
        <IconMoon class={`${iconClass} md:text-black`} />
      ) : (
        <IconSun class={`${iconClass} md:text-black`} />
      )}
    </button>
  );
});
