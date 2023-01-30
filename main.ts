input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 C5 B B A G F C5 ", 120)
    music.playMelody("F F G A A A B C5 ", 120)
    music.playMelody("C5 B B A F F - D ", 120)
    music.playMelody("C5 C5 C5 B G F E E ", 120)
    for (let index = 0; index < 999; index++) {
        basic.showLeds(`
            # . # . .
            . # # . .
            . . # # .
            . # . # #
            # . . # .
            `)
        basic.showLeds(`
            . . # . #
            . . # # .
            . # # . .
            # # . # .
            . # . . #
            `)
    }
})
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # # . .
    . # . # .
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
