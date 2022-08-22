def Wind():
    while(True):
        sensorValue = pins.analog_read_pin(AnalogPin.P0)
        outvoltage = sensorValue * (5.0 / 1023.0)
        Level = 6 * outvoltage
        basic.show_string("wind")
        basic.show_number(Level)
        control.wait_micros(5)

Wind()