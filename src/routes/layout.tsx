import { component$, Slot} from "@builder.io/qwik";
import Header from "../header";




export default component$(() => {
  return (
    <>
     <Header/>
      <Slot />
    
    </>
  );
});
