radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
