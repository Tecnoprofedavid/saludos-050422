input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
})
input.onButtonPressed(Button.A, function () {
    minutos = 0
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        minutos += minutos + 1
        basic.showNumber(minutos)
        basic.pause(5000)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    piedra = randint(1, 3)
    if (piedra == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        if (piedra == 2) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onGesture(Gesture.TiltLeft, function () {
    dados = randint(1, 20)
    basic.showNumber(dados)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})
let dados = 0
let piedra = 0
let minutos = 0
basic.showIcon(IconNames.SmallDiamond)
basic.pause(100)
basic.showIcon(IconNames.Diamond)
basic.pause(100)
basic.showIcon(IconNames.Chessboard)
music.playMelody("E G E A F G E F ", 120)
basic.clearScreen()
