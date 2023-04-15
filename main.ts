function turn_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 25)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 25)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 50)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 40)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 40)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 40)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 40)
}
function car_downward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 40)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 40)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 40)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 40)
}
function turn_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 25)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 25)
}
let val = 0
irRemote.connectInfrared(DigitalPin.P9)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (val > 0) {
        if (val == 70) {
            car_forward()
        } else if (val == 68) {
            turn_left()
        } else if (val == 67) {
            turn_right()
        } else if (val == 21) {
            car_downward()
        } else {
            if (val == 64) {
                mecanumRobot.setLed(LedCount.Left, LedState.ON)
                mecanumRobot.setLed(LedCount.Right, LedState.ON)
                music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
                turn_right()
            } else {
                mecanumRobot.state(MotorState.stop)
            }
        }
    } else {
        mecanumRobot.state(MotorState.stop)
    }
})
basic.forever(function () {
    val = irRemote.returnIrButton()
})
