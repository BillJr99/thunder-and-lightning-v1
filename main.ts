input.onButtonPressed(Button.A, function () {
    if (light_time == 0) {
        basic.showIcon(IconNames.Chessboard)
        light_time = control.millis()
    }
})
input.onButtonPressed(Button.B, function () {
    if (light_time > 0 && sound_time == 0) {
        basic.showIcon(IconNames.Yes)
        sound_time = control.millis()
        time_delta = sound_time - light_time
        time_delta = time_delta / 1000
        time_delta = time_delta / 5
        basic.showNumber(time_delta)
        light_time = 0
    }
})
let time_delta = 0
let light_time = 0
let sound_time = 0
sound_time = 0
light_time = 0
time_delta = 0
