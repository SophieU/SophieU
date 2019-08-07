interface Alarm {
    alert()
}
interface Light {
    lightOn();
    lightOff();
}
class Car implements Alarm, Light{
    alert() {
        console.log('lalala')
    }
    lightOn() {
        console.log('car light on')
    }
    lightOff() {
        console.log('car light off')
    }
}