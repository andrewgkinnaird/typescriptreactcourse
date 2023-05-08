class Vehicle {
  drive():void {
    console.log('broom');
  }

  honk():void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive():void {
    console.log('car broom');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();