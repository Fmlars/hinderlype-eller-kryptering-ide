/**
 * verdiene til "send tall", "recievednumber" er selvsagt satt feil her
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 && verdi < 3) {
        radio.sendNumber(2)
        verdi += 1
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    verdi = 0
})
radio.onReceivedString(function (receivedString) {
    tabell2.unshift(receivedString)
})
input.onButtonPressed(Button.B, function () {
	
})
let verdi = 0
let tabell2: string[] = []
let tabell1 = [
"forsiktig",
"gå fremover",
"kom tilbake",
"venstre",
"høyre",
"",
""
]
tabell2 = []
