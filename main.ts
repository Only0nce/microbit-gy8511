function Wind() {
    let sensorValue: number;
    let outvoltage: number;
    let Level: number;
    while (true) {
        sensorValue = pins.analogReadPin(AnalogPin.P0)
        outvoltage = sensorValue * (5.0 / 1023.0)
        Level = 6 * outvoltage
        basic.showString("wind")
        basic.showNumber(Level)
        control.waitMicros(5)
    }
}

Wind()
