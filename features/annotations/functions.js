var add = function (a, b) {
    return a + b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function () {
    throw new Error();
};
var todaysForecast = {
    date: new Date(),
    weather: 'sunny'
};
var weatherLogger = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
weatherLogger(todaysForecast);
