//1. Дан массив целых чисел. Числа не отсортированы и могут повторяться.
// Необходимо найти в данном массиве такие два числа
//M и N, чтобы их сумма была равна 7.
//Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд
//Для решения достаточно найти хотя бы одну подходящую пару чисел M и N.
//Подумайте над оптимальным вариантом поиска.
let array = [8, -5, 4, 3, 2, 0, 6, 1, 7];
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++)
        if ((array[i] + array[j]) === 7) {
            console.log('сумма чисел ' + array[j] + ' и ' + array[i] + ' равна 7');
        }
}

//2. Вывести через console.log все числа от 1 до 100, с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Three’,
//а для чисел, делящихся на 5 (но не на 3) – ‘Five’.
//Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
let start = 1;
let result = [];
//сначала заполним пустой массив числами от 1 до 100
while (start <= 100) {
    result.push(start++);
}
console.log(result);
//потом заменим нужные элементы
for ( let i = 0; i <= 100; i++) {
    if(result[i] % 5 === 0 && result[i] % 3 === 0){
        result[i] = 'ThreeFive';
    }else if(result[i] % 3 === 0){
        result[i] = 'Three';
    }else if(result[i] % 5 === 0){
        result[i] = 'Five';
    }
}console.log(result);

//БЕЗ else ТОЖЕ работает. Так можно?
// for ( let i = 0; i <= 100; i++) {
//     if(result[i] % 5 === 0 && result[i] % 3 === 0){
//         result[i] = 'ThreeFive';
//     }if(result[i] % 3 === 0){
//         result[i] = 'Three';
//     }if(result[i] % 5 === 0){
//         result[i] = 'Five';
//     }
// }console.log(result);


//3. Даны три числа. Определите, можно ли из отрезков с такими длинами составить треугольник.
//Определите вид треугольника (прямоугольный, тупоугольный, остроугольный), если он существует.
let a = 5, b = 7, c = 9;
if ((a + b) > c || (a + c) > b || (b + c) > a) {
    if (a * a === ((b * b) + (c * c)) || b * b === ((a * a) + (c * c)) || c * c === ((b * b) + (a * a))) {
        console.log('треугольник прямоугольный');
    } else if (a * a < ((b * b) + (c * c)) || b * b < ((a * a) + (c * c)) || c * c < ((b * b) + (a * a))) {
        console.log('треугольник остроугольный');
    } else if (a * a > ((b * b) + (c * c)) || b * b > ((a * a) + (c * c)) || c * c > ((b * b) + (a * a))) {
        console.log('треугольник тупоулольный');
    } else {
        console.log('треугольник НЕ существует');
    }
}
//4. Одну на выбор (можно решить все):
//   1. Пользователь вводит число, создать массив заданного размера, вывести элементы массива в обратном порядке
let number = prompt('введите число');
let arr = [];
let first = 1;
while (first <= number) {
    arr.push(first++);
}
arr = arr.reverse();
console.log(arr);
//   2. Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128
let num = 2;
for (let i = 1; num >= 2; i++) {
    console.log(num);
    num = num * 2;
    if (i === 20)
        break;
}
//   3. Напишите цикл, который  выводит в консоль треугольник из символов #, высотой 10 символов.

//5.  Задать количество тарелок и количество моющего средства.
//   Моющее средство расходуется из расчета 0,5 на одну тарелку.
//  В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
//В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
let plate = 18;
let fairy =20;
let need = 0.5;
for (let i = 0; i <= plate; i++) {
    while (fairy > 0 ){
        fairy = fairy - need;
        console.log(fairy +' мл осталось');
        plate = --plate;
        if (plate === 0 || fairy === 0){
            console.log('осталось тарелок ' + plate);
            console.log('осталось fairy ' + fairy + ' мл');
            break;
        }
    }
}
//6. Одну на выбор (можно решить все):
//1. Электронные часы показывают время в формате от 00:00 до 23:59.
//Подсчитать сколько раз за сутки случается так,
//что слева от двоеточия показывается симметричная комбинация для той,
//что справа от двоеточия (например, 02:20, 11:11 или 15:51).
let time = 0;


//2. В американской армии считается несчастливым число 13, а в японской — 4.
//Перед международными учениями штаб российской армии решил исключить номера боевой техники,
//содержащие числа 4 или 13 (например, 40123, 13313, 12345 или 13040), чтобы не смущать иностранных коллег.
//Если в распоряжении армии имеется 100 тыс. единиц боевой техники и
//каждая боевая машина имеет номер от 00001 до 99999, то сколько всего номеров придётся исключить?
let oneCar = 1;
let allCars = [];
//сначала заполним пустой массив числами от 1 до 99999
while (oneCar <= 99999) {
    allCars.push(oneCar++);
}

count = 0;//счетчик
re = '13';//регул выражение 1
re1 = '4';//регул выражение 2
for ( let i = 0; i < allCars.length; i++) {
    temp = allCars[i].toString();//преобразуем цифры в строки, т. к. string.match(re) работает только со строками
    if(temp.match(re) || temp.match(re1)) {
        count++;
    }
}
console.log(count + ' единиц боевой техники исключить');


