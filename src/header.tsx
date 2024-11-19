import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import Logo from "./Logo";
import { useTheme } from "./lib/provider";
import Popover from "./Popover1" 
import ToggleTheme from "./ToggleTheme";
import ToggleMenu from "./ToggleMenu";


export default component$(() => {
    const { theme, setTheme } = useTheme();
    const isScrolling = useSignal(false);


    useVisibleTask$(() => {
        const onScroll = () => {
            isScrolling.value = window.scrollY >= 10;
          };
          window.addEventListener("scroll", onScroll);
      
          // Cleanup event listener
          return () => {
            window.removeEventListener("scroll", onScroll);
          };
        });


  return (
    <header
        id="header"
        class={`sticky top-0 z-40 flex-none border-b border-gray-100 border-gray-50/0 transition-all ease-in-out duration-100`}
      >
        <div class="absolute inset-0"></div>
        <div class="relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
          <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
            <a class="flex items-center" href={"/etch-a-sketch/"}>
              <Logo />
              <div
                class={`text-2xl md:text-xl ml-1 font-bold whitespace-nowrap tracking-tight ${
                  isScrolling.value
                    ? "text-primary dark:text-slate-200"
                    : "text-white md:text-gray-900 dark:md:text-slate-200"
                }`}
              >
                Webdev.ca
              </div>
            </a>
            <div class="flex items-center md:hidden">
              {/* Theme selector */}
              {/* <Popover.Root flip={false} gutter={8}>
                <Popover.Trigger>
                  <div class="px-4 py-2 font-medium text-white bg-primary rounded-md cursor-pointer">
                    <IconApps />
                  </div>
                </Popover.Trigger>
                <Popover.Panel>
                  <div class="grid gap-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md overflow-hidden">
                    <h4 class="font-medium text-lg">Select a Theme</h4>
                    <div class="grid grid-cols-3 gap-2">
                      {themes.map((theme) => (
                        <div
                          key={theme.name}
                          class={`w-16 h-16 rounded-md ${theme.color} ${
                            selectedTheme.value === theme.name ? "ring-2 ring-offset-2 ring-black" : ""
                          }`}
                          onClick$={() => applyTheme(theme.name)}
                          aria-label={`Select ${theme.name} theme`}
                        />
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Popover.Root> */}
              {/* Theme Toggle */}
              <ToggleTheme iconClass={`w-6 h-6 md:w-5 md:h-5 ${isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-white"}`} />
              <ToggleMenu iconClass={`w-6 h-6 md:w-5 md:h-5 ${isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-white"}`} />
            </div>
          </div>
          {/* Navigation */}
          <nav
            class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5"
            aria-label="Main navigation"
          >
            {/* {menu && menu.items ? (
              <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
                {menu.items.map(({ text, href, items = [] }, key) => (
                  <li key={key} class={items.length ? "dropdown" : ""}>
                    {items.length ? (
                      <>
                        <button
                          class={`hover:text-link ${
                            isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-gray-900 dark:text-white"
                          } px-4 py-3 flex items-center`}
                        >
                          {text} <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                        </button>
                        <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-slate-800 rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl">
                          {items.map((subItem, key2) => (
                            <li key={key2}>
                              <a
                                class="first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap"
                                href={subItem.href || "#"}
                              >
                                {subItem.text || "Untitled"}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a
                        class={`hover:text-link ${
                          isScrolling.value ? "text-gray-900 dark:text-slate-200" : "text-gray-900 dark:text-white"
                        } px-4 py-3 flex items-center`}
                        href={href || "#"}
                      >
                        {text || "Untitled"}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : null} */}
          </nav>
        </div>
      </header>
  );
});
