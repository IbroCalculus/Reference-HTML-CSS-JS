
import {PI, double, square, cube} from './Es6_modules3.js';

let result1 = double(4);
let result2 = square(4);
let result3 = cube(4);

function radiusOfCircle(radius){
    return PI * radius * radius;
}
let result4 = radiusOfCircle(4);

console.log(`resutl1 = ${result1}`);
console.log(`resutl2 = ${result2}`);
console.log(`resutl3 = ${result3}`);
console.log(`resutl4 = ${result4.toFixed(2)}`);