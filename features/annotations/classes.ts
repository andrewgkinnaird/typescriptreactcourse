class Vehicle {
  constructor(public color: string){

  }

  protected drive():void {
    console.log('broom');
  }

  protected honk():void {
    console.log('beep');
  }

  public go(){
    this.drive();
    this.honk();
  }

}

class Car extends Vehicle {
  constructor(public wheels:number, color:string){
    super(color);
  }
  protected drive():void {
    console.log('car broom');
  }

  private report():void {
    console.log(this.wheels);
    console.log(this.color);
  }

  public goCar(): void {
    this.go();
    this.report();
  }

}

const vehicle = new Vehicle('red');
vehicle.go();

const car = new Car(4,'blue');
car.goCar();