def on_received_number(receivedNumber):
    global verdi
    if receivedNumber == 1 and verdi < 3:
        radio.send_number(2)
        verdi += 1
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global verdi
    radio.send_number(1)
    verdi = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    list2: List[str] = []
    list2.unshift(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

verdi = 0
teksttabell = ["forsiktig",
    "gå fremover",
    "kom tilbake",
    "venstre",
    "høyre",
    "",
    ""]