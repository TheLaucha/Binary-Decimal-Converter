// Imports
import {
  checkIfBinary,
  convertToDecimal,
  convertToBinary,
  resetAllBinary,
  resetAllDecimal,
} from "./ux.js"

// CONST
const $convertBtnBinary = document.querySelector(".convertBtnBinary")
const $convertBtnDecimal = document.querySelector(".convertBtnDecimal")
export const $inputBinary = document.querySelector("#binary")
const $resetBtnBinary = document.querySelector(".resetBtnBinary")
const $resetBtnDecimal = document.querySelector(".resetBtnDecimal")


// Event Listeners
$inputBinary.addEventListener("input", checkIfBinary)
$convertBtnBinary.addEventListener("click", convertToDecimal)
$convertBtnDecimal.addEventListener("click", convertToBinary)
$resetBtnBinary.addEventListener("click", resetAllBinary)
$resetBtnDecimal.addEventListener("click", resetAllDecimal)
