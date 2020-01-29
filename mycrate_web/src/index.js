import {polyfill} from './polyfill';

(async function() {
    await polyfill();
    const {add, create_greeting} = await import("../../mycrate_wasm/pkg");

    console.log("Calculated with WebAssembly:", add(4, 6));

    const button = document.querySelector("button");
    const input = document.querySelector("input");
    button.onclick = () => alert(create_greeting(input.value));
    button.disabled = false;
})();
