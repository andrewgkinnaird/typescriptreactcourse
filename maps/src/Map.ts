interface Mappable {
  location:{
    lat:number,
    lng:number
  }
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(elementId:string){
    const mapOptions = {zoom:1,center:{lat:60,lng:0}};
    const mapElement = document.getElementById(elementId) as HTMLElement;
    this.googleMap = new google.maps.Map(mapElement,mapOptions); 
  }

  addMarker(mappable:Mappable){
    new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:mappable.location.lat,
        lng:mappable.location.lng
      }
    })
  }
}