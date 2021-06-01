/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from chengengyue
*/


//% color=#ec924d weight=25 icon="\uf013"
namespace Servo_16C {


    export enum GetServo {
        //% blockId="S1" block="S1"
        S1 = 1,
        //% blockId="S2" block="S2"
        S2 = 2,
        //% blockId="S3" block="S3"
        S3 = 3,
        //% blockId="S4" block="S4"
        S4 = 4,
        //% blockId="S5" block="S5"
        S5 = 5,
        //% blockId="S6" block="S6"
        S6 = 6,
        //% blockId="S7" block="S7"
        S7 = 7,
        //% blockId="S8" block="S8"
        S8 = 8,
        //% blockId="S9" block="S9"
        S9 = 9,
        //% blockId="S10" block="S10"
        S10 = 10,
        //% blockId="S11" block="S11"
        S11 = 11,
        //% blockId="S12" block="S12"
        S12 = 12,
        //% blockId="S13" block="S13"
        S13 = 13,
        //% blockId="S14" block="S14"
        S14 = 14,
        //% blockId="S15" block="S15"
        S15 = 15,
        //% blockId="S16" block="S16"
        S16 = 16
    }
	
    //% blockId= Servo_16Channel_init block="Servo_16Channel Uart Init at pin RX| %txpin TX| %rxpin"
    //% weight=20
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function initServo16Channel(txpin: SerialPin, rxpin: SerialPin): void {
		serial.redirect(
		txpin,
		rxpin,
		BaudRate.BaudRate9600
		)
		basic.pause(1000)
    }
	
    //% blockId= Servo_16Channel_uart block="set Servo| %sevornum|angle %angle by uart"
    //% weight=15
    //% angle.min=0 angle.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function uartServo16Channel(sevornum: GetServo, angle: number): void {
		let cmd_servo = pins.createBuffer(4)
		cmd_servo[0] = 253
		cmd_servo[1] = sevornum
		cmd_servo[2] = angle
		cmd_servo[3] = 255
		serial.writeBuffer(cmd_servo)
		basic.pause(20)
    }
	
    //% blockId= Servo_16Channel_iic block="set Servo| %sevornum|angle %angle by iic"
    //% weight=10
    //% angle.min=0 angle.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function iicServo16Channel(sevornum: GetServo, angle: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = sevornum;
        buf[1] = angle;
        pins.i2cWriteBuffer(0x2D, buf);
		basic.pause(100)
    }
	

}
