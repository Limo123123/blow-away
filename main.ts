let row = 0
let col = 0
let lo2 = 0
let lo1 = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            row = randint(0, 4)
            col = randint(0, 4)
        }
        if (true) {
            led.plot(col, row)
        }
        if (input.soundLevel() < 128) {
            lo2 = randint(0, 4)
            lo1 = randint(0, 4)
        }
        if (true) {
            led.unplot(lo1, lo2)
        }
    }
})
