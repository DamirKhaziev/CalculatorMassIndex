import {calculate} from "./calculate.js";

const calculateBattonEl = document.getElementById("calculate")
const inputWeightEl = document.getElementById("weight")
const inputHeightEl = document.getElementById("height")
const resultEl = document.getElementById("result")

calculateBattonEl.addEventListener('click', () =>{
    const weight = inputWeightEl.value
    const height = inputHeightEl.value

     const result = calculate(weight, height)

    resultEl.textContent = result
})