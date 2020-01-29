import {polyfill} from './polyfill';

(async function() {
    await polyfill();
    const {add, create_greeting, greet} = await import("../../mycrate_wasm/pkg");

    console.log("Calculated with WebAssembly:", add(4, 6));

    const button = document.querySelector("button");
    const input = document.querySelector("input");
    button.onclick = () => greet(input.value);
    button.disabled = false;
})();
