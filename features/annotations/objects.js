var profile = {
    name: 'Bob',
    age: 33,
    coords: {
        long: 100,
        lat: 90
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var coords = profile.coords;
console.log(age, profile);
