// Imports
import { $inputBinary } from "./app.js"
import { outputDecimal, ouputBinary } from "./ui.js"

// CONST
const $error_message = document.querySelector(".error-message")
export const $inputDecimal = document.querySelector("#decimal")

export function convertToDecimal(e) {
  e.preventDefault()
  if ($inputBinary.value.length == 0) {
    return
  }
  let decimalOutput = parseInt($inputBinary.value, 2)
  outputDecimal(decimalOutput)
}

export function convertToBinary(e) {
  e.preventDefault()
  if ($inputDecimal.value.length == 0) {
    return
  }
  let binaryOutput = Number($inputDecimal.value).toString(2)
  ouputBinary(binaryOutput)
}

export function checkIfBinary() {
  let lastInput = $inputBinary.value.slice(-1)
  let lastValue = $inputBinary.value.substring(0, $inputBinary.value.length - 1)
  if (lastInput === "0" || lastInput === "1") {
    $inputBinary.value = lastValue + lastInput
  } else {
    const span = document.createElement("span")
    $inputBinary.classList.add("error")

    if (document.querySelector(".span-error")) {
      $inputBinary.value = lastValue
      return
    } else {
      span.classList.add("span-error")
      span.textContent = 'Los numeros ingresados deben ser "0" o "1"'
      $error_message.appendChild(span)
      setTimeout(() => {
        $inputBinary.classList.remove("error")
        $error_message.removeChild(span)
      }, 2000)
    }
    $inputBinary.value = lastValue
  }
}

export function resetAllBinary() {
  const $outputDecimal = document.querySelector(".output-decimal")
  const $conversion_box = $outputDecimal.querySelectorAll(".conversion-box")
  if ($conversion_box.length > 0) {
    $conversion_box.forEach((el) => {
      el.remove()
    })
    return
  }

  return
}

export function resetAllDecimal() {
  const $outputBinary = document.querySelector(".output-binary")
  const $conversion_box = $outputBinary.querySelectorAll(".conversion-box")
  if ($conversion_box.length > 0) {
    $conversion_box.forEach((el) => {
      el.remove()
    })
    return
  }

  return
}
