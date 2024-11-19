// import { $, component$, useSignal } from '@builder.io/qwik';
// import { Popover } from '@qwik-ui/headless';

// // Available themes with associated colors
// const themes = [
//   { name: 'Indigo', color: 'bg-indigo-500' },
//   { name: 'Blue', color: 'bg-blue-500' },
//   { name: 'Green', color: 'bg-green-500' },
//   { name: 'Red', color: 'bg-red-500' },
//   { name: 'Yellow', color: 'bg-yellow-500' },
//   { name: 'Violet', color: 'bg-violet-500' },
//   { name: 'Orange', color: 'bg-orange-500' },
// ];

// export default component$(() => {
//   const selectedTheme = useSignal<string>('indigo'); // Signal to track selected theme

//   // Define `changeTheme` as a QRL function
//   const changeTheme = $((themeName: string) => {
//     selectedTheme.value = themeName;
//     // Update app theme (e.g., apply class to the root element)
//     document.documentElement.className = `theme-${themeName.toLowerCase()}`;
//   });

//   return (
//     <Popover.Root flip={false} gutter={8}>
//       <Popover.Trigger>
//         <div class="px-4 py-2 font-medium text-white bg-primary rounded-md cursor-pointer">
//           Choose Theme
//         </div>
//       </Popover.Trigger>
//       <Popover.Panel>
//         <div class="grid gap-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md">
//           <h4 class="font-medium text-lg">Select a Theme</h4>
//           <div class="grid grid-cols-3 gap-2">
//             {themes.map((theme) => (
//               <div
//                 key={theme.name}
//                 class={`w-16 h-16 rounded-md ${theme.color} ${
//                   selectedTheme.value === theme.name ? 'ring-2 ring-offset-2 ring-black' : ''
//                 }`}
//                 onClick$={() => changeTheme(theme.name)} // Use the QRL function here
//                 aria-label={`Select ${theme.name} theme`}
//               />
//             ))}
//           </div>
//         </div>
//       </Popover.Panel>
//     </Popover.Root>
//   );
// });
