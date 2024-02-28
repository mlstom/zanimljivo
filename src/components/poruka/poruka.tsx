import { component$ } from '@builder.io/qwik';

export const Poruka = component$(() => {
  return <div class="mt-20 mb-10 w-[100vw] h-[50vh] bg-white relative">
    <div class="absolute left-10 md:block hidden"><img  src={"https://images.ctfassets.net/jhcmej8zlqgw/60HIA3bT7o5lVkJ9lf8Hvn/48d0161174d06678ef204b511489f814/Long_thin_vine.png?fm=webp&q=80&w=150"} width={100} height={250} /></div>
    <div class="text-center text-2xl font-bold">
        <h1>Welcome to Pukka</h1>
    </div>
    <div class="absolute right-10 scale-x-[-1] md:block hidden"><img src={"https://images.ctfassets.net/jhcmej8zlqgw/60HIA3bT7o5lVkJ9lf8Hvn/48d0161174d06678ef204b511489f814/Long_thin_vine.png?fm=webp&q=80&w=150"} width={100} height={250} /></div>
  </div>
});