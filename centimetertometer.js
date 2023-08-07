function centimeterToMeter( centimeter){
    let meter = centimeter / 100;
    return meter;
}
const totalMeter = centimeterToMeter(500);
console.log('Total Meter',totalMeter);