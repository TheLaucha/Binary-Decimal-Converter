// IMPORT
import { $inputBinary } from "./app.js"
import { $inputDecimal } from "./ux.js"

// CONST
const $decimal_output = document.querySelector(".decimal-output-box")
const $binary_output = document.querySelector(".binary-output-box")
const $binaryForm = document.querySelector("#binary-form")
const $decimalForm = document.querySelector("#decimal-form")

export function outputDecimal(decimalOutput) {
  const div = document.createElement("div")
  const pDecimal = document.createElement("p")
  const pBinary = document.createElement("p")
  const equal = document.createElement("p")

  div.classList.add("conversion-box")
  $decimal_output.appendChild(div)

  pDecimal.classList.add("number-output")
  pDecimal.textContent = decimalOutput
  pBinary.textContent = $inputBinary.value
  pBinary.classList.add("number-output")
  equal.classList.add("number-output")
  equal.textContent = "="

  div.appendChild(pBinary)
  div.appendChild(equal)
  div.appendChild(pDecimal)

  $binaryForm.reset()
}

export function ouputBinary(binaryOutput) {
  const div = document.createElement("div")
  const pDecimal = document.createElement("p")
  const pBinary = document.createElement("p")
  const equal = document.createElement("p")

  div.classList.add("conversion-box")
  $binary_output.appendChild(div)

  pDecimal.classList.add("number-output")
  pDecimal.textContent = $inputDecimal.value
  pBinary.textContent = binaryOutput
  pBinary.classList.add("number-output")
  equal.classList.add("number-output")
  equal.textContent = "="

  div.appendChild(pDecimal)
  div.appendChild(equal)
  div.appendChild(pBinary)

  $decimalForm.reset()
}
