const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})

outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value
})

typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px"
  typesizeOutput.innerHTML = this.value + " pixels"
})

// fontweightTag.addEventListener("input", function () {
  
//   //const fontWidth = this.value
//   //outputTag.style.fontVariationSettings = `"wdth" ${fontWidth}`
//   //try replacing the line below this with the two lines of code above
//   outputTag.style.fontWeight = this.value
//   fontweightOutput.innerHTML = this.value
// })

lineheightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
  console.log("Test")
})


