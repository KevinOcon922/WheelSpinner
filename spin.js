const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
let text_arr = []
const synth = window.speechSynthesis
var voices = window.speechSynthesis.getVoices()

const wheelSpin = async () => {
  
  const utterThis = new SpeechSynthesisUtterance("Eliminating every Pokémon until there is one left.")
  utterThis.voice = voices[13]
  synth.speak(utterThis)

  for(var i = 0; i < 5; i++){
      let wheel_var = document.querySelector(".wheel-info")
      await sleep(1500)
      wheel_var.click()
      
      await sleep(7000)
      
      let span = document.querySelector(".result")
      text_arr.push(span.textContent)

      const utterThis = new SpeechSynthesisUtterance(span.textContent)
      utterThis.voice = voices[13]
      synth.speak(utterThis)

      await sleep(2600)

      let rem = document.querySelector(".mat-focus-indicator.mat-raised-button.mat-button-base.ng-star-inserted")
      rem.click()

      await sleep(200)
      let close = document.querySelectorAll(".mat-focus-indicator.mat-raised-button.mat-button-base")
      close.item(6).click()
  }
  setTimeout(async()=>console.log(
     await window.navigator.clipboard.writeText(text_arr)), 3000)
}

function voiceLoaded() {
  return speechSynthesis.getVoices().length
}

if (voiceLoaded()) {
  wheelSpin()
} else {
  speechSynthesis.addEventListener('voiceschanged', wheelSpin)
}