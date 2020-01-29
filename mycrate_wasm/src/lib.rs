use wasm_bindgen::prelude::*;
use mycrate_core;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    mycrate_core::add(a, b) + 1
}

#[wasm_bindgen]
pub fn create_greeting(name: &str) -> String {
    format!("Hei, {}!", name)
}
