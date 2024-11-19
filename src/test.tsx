import { component$ } from "@builder.io/qwik";
import { useTheme } from "./lib/provider";

export const Test = component$(() => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {theme?.toString()}
      <button
        type="button"
        onClick$={() => {
          setTheme("theme-blue");
        }}
      >
        Blue
      </button>
      <button
        type="button"
        onClick$={() => {
          setTheme("theme-red");
        }}
      >
        brutalist green
      </button>
      <button
        type="button"
        onClick$={() => {
          setTheme("hand blue");
        }}
      >
        hand blue
      </button>

      <button
        type="button"
        onClick$={() => {
          setTheme("light");
        }}
      >
        light
      </button>
      <button
        type="button"
        onClick$={() => {
          setTheme("dark");
        }}
      >
        dark
      </button>

      <button
        type="button"
        onClick$={() => {
          setTheme("purple");
        }}
      >
        purple
      </button>
    </div>
  );
});
