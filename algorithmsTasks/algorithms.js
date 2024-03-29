/* Задача на поиск в массиве
* дан массив неповторяющихся чисел, который был отсортирован,
* а затем циклически сдвинут на неизвестное число позиций.
* Опишите без кода и псевдокода алгоритм поиска максимума в таком массиве.
* Оцените сложность предложенного алгоритма.
* Изменится ли сложность, если массив имеет повторяющиеся числа?
* */
// до смещения
var arr = [-68, -13, 0, 4, 12, 34, 45, 59, 60, 100, 178, 178, 254, 500, 567];
//после смещения вариант 1
var arr1 = [60, 100, 178, 178, 254, 500, 567, -68, -13, 0, 4, 12, 34, 45, 59];
var arr11 = [45, 59, 60, 100, 178, 178, 254, 500, 567, -68, -13, 0, 4, 12, 34];
//после смещения вариант 2
var arr2 =  [12, 34, 45, 59, 60, 100, 178, 178, 254, 500, 567, -68, -13, 0, 4];
var arr22 =  [254, 500, 567, -68, -13, 0, 4, 12, 34, 45, 59, 60, 100, 178, 178];
/*
как я думаю: нужно найти место, где число справа меньше числа слева. В данном примере: 567, -68,
НО (этап 1 - будет повторяться) сначала проверить, вдруг число под последним индексом уже больше числа под индексом 0 (могли найти искомое). Тогда число под последним индексом - максимум
Этап 2: Разделим массив на два подмассива. При нечетном кол-ве элементов левая часть пусть будет больше на 1. Конец этап 2.
Этап 3: сравним первый и последний элементы левого подмассива - запомним индекс большего элемента.
Этап 4:
если индекс большего элемента справа и принадлежащее ему значение меньше первого элемента новообразованного правого подмассива, то проверять будем правый подмассив (arr2).
иначе продолжим проверять левый подмассив (arr1).
если в подмассивах по 1 элементу, то сравнить элементы, вернуть с большим значением (могли найти искомое). Конец Этапа 4.
Этап 5. Проверяем подмассив: если это правый подмассив, сделать этап 1 для подмассива (могли найти искомое).
Повторяем этап 2, этап 3, этап 4.
*/

/*
В реляционной базе данных существуют таблицы:
Cities - список городов:
id - первичный ключ
name - название
population - численность населения
founded - год основания
country_id - id страны

Countries - список стран:
id - первичный ключ
name - название
population - численность населения
gdp - валовый продукт в долларах

Companies - компании:
id - первичный ключ
name - название
city_id - город в котором находится штаб-квартира
revenue - годовая выручка в долларах
labors - численность сотрудников

Постройте таблицу, где для каждой страны посчитано число компаний, удволетворяющих условиям:
1) штаб квартира компании находится в этой стране
2) число сотрудников компании не менее 1000 человек*/
/*
SELECT Countries.name, COUNT(Companies.id) AS companies_count
FROM Countries
JOIN Cities ON Cities.country_id = Countries.id
JOIN Companies ON Companies.city_id = Cities.id
WHERE Companies.labors >= 1000
GROUP BY Countries.name
* */

