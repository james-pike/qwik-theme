import { component$ } from "@builder.io/qwik";

// @ts-ignore


export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold whitespace-nowrap dark:text-white flex items-center">
 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 300"
  width="40"
  height="30"
  style="display: block; margin: auto;"
>
 
  <rect
    x="10"
    y="10"
    width="380"
    height="280"
    rx="20"
    fill="var(--color-primary, #d32f2f)"
     stroke="var(--color-secondary, #b71c1c)"
    stroke-width="5"
  />

  
  <rect
    x="50"
    y="50"
    width="300"
    height="180"
    rx="10"
    fill="var(--etch-screen, #f0f0f0)"
   stroke="var(--color-secondary, #b71c1c)"
    stroke-width="3"
  />

  
  <circle
    cx="70"
    cy="240"
    r="20"
    fill="var(--etch-knob, #cccccc)"
    stroke="var(--etch-knob-border, #888888)"
    stroke-width="3"
  />

 
  <circle
    cx="330"
    cy="240"
    r="20"
    fill="var(--etch-knob, #cccccc)"
    stroke="var(--etch-knob-border, #888888)"
    stroke-width="3"
  />


  <text
    x="200"
    y="40"
    text-anchor="middle"
    fill="var(--etch-brand, #ffffff)"
    font-size="16"
    font-family="Arial, sans-serif"
  >
    Ann's Etch A Sketch
  </text>
</svg>
    
  </span>
));
