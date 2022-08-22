def ReadLight():
    while(True):
        numberOfReadings = 8
        runningUV = 0
        runningRef = 0
        x = 0
        y = 0
        for x in range(numberOfReadings):
            runningUV += pins.analog_read_pin(AnalogPin.P0)
            runningUV /= numberOfReadings
            serial.write_number(runningUV)
        uvLevel = runningUV
        for y in range(numberOfReadings):
                runningRef += pins.analog_read_pin(AnalogPin.P1)
                runningRef /= numberOfReadings
                serial.write_number(runningRef)
        refLevel = runningRef

        outputVoltage = 3.3 / refLevel * uvLevel
        uvIntensity = Math.map(outputVoltage, 0.99, 2.8, 0.0, 15.0)
        # serial.write_line("output: ")
        # serial.write_number(refLevel)
        # serial.write_line("ML8511 output: ")
        # serial.write_number(uvLevel)
        # serial.write_line(" / ML8511 voltage: ")
        # serial.write_number(outputVoltage)
        # serial.write_line(" / UV Intensity (mW/cm^2): ")
        # serial.write_number(uvIntensity)
        # basic.show_string("O: ")
        # basic.show_number(refLevel)
        # basic.show_string("MLO: ")
        # basic.show_number(uvLevel)
        # basic.show_string("MLV: ")
        # basic.show_number(outputVoltage)
        basic.show_string("UV: ")
        basic.show_number(uvIntensity)
        control.wait_micros(50)

ReadLight()