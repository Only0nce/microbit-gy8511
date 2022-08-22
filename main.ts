function ReadLight() {
    let numberOfReadings: number;
    let runningUV: number;
    let runningRef: number;
    let x: number;
    let y: number;
    let uvLevel: number;
    let refLevel: number;
    let outputVoltage: number;
    let uvIntensity: number;
    while (true) {
        numberOfReadings = 8
        runningUV = 0
        runningRef = 0
        x = 0
        y = 0
        for (x = 0; x < numberOfReadings; x++) {
            runningUV += pins.analogReadPin(AnalogPin.P0)
            runningUV /= numberOfReadings
            serial.writeNumber(runningUV)
        }
        uvLevel = runningUV
        for (y = 0; y < numberOfReadings; y++) {
            runningRef += pins.analogReadPin(AnalogPin.P1)
            runningRef /= numberOfReadings
            serial.writeNumber(runningRef)
        }
        refLevel = runningRef
        outputVoltage = 3.3 / refLevel * uvLevel
        uvIntensity = Math.map(outputVoltage, 0.99, 2.8, 0.0, 15.0)
        //  serial.write_line("output: ")
        //  serial.write_number(refLevel)
        //  serial.write_line("ML8511 output: ")
        //  serial.write_number(uvLevel)
        //  serial.write_line(" / ML8511 voltage: ")
        //  serial.write_number(outputVoltage)
        //  serial.write_line(" / UV Intensity (mW/cm^2): ")
        //  serial.write_number(uvIntensity)
        //  basic.show_string("O: ")
        //  basic.show_number(refLevel)
        //  basic.show_string("MLO: ")
        //  basic.show_number(uvLevel)
        //  basic.show_string("MLV: ")
        //  basic.show_number(outputVoltage)
        basic.showString("UV: ")
        basic.showNumber(uvIntensity)
        control.waitMicros(50)
    }
}

ReadLight()
