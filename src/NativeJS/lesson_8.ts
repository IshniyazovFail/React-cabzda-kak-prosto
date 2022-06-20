// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    let sumNumbers: number = 0
    for (let i = 0; i < nums.length; i++) {
        sumNumbers = sumNumbers + nums[i]
    }
    return sumNumbers

}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (a === b && b === c) {
        return "10"
    } else if (a === b && b !== c && a + b >= c || a === c && a !== b && a + c >= b || c === b && c !== a && c + b >= a) {
        return "01"
    } else if (a !== b && b !== c && a !== c && a + b >= c && b + c >= a && c + a >= b) {
        return "11"
    } else if (a !== b && b !== c && a !== c && a + b < c || b + c < a || c + a < b) return "00"
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let stringNumber = number.toString()
    let sumNum = 0
    for (let i = 0; i < stringNumber.length; i++) {
        sumNum = sumNum + parseInt(stringNumber[i], 10)
    }
    return sumNum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr.indexOf(arr[i], 0) % 2 === 0 ? arr1.push(arr[i]) : arr2.push(arr[i])
    }

    return arr1 > arr2
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i]) && array[i] > 0) {
            newArray.push(array[i] * array[i])
        }
    }

    return newArray
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let sum = 0;
    for (let i = 0; i <= N; i++) {
        sum = sum + i
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return sum
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    let newArray = [];
    let newMoney = amountOfMoney
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    for (let i = 0; i < banknotes.length; i++) {
        let del = newMoney / banknotes[i]
        if (Math.floor(del) >= 1) {
            for (let j = 1; j <= del; j++) {
                newMoney = newMoney - banknotes[i]
                newArray.push(banknotes[i])
            }


        }

    }
    return newArray
}

