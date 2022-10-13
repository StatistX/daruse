// Базовые

// Написать функцию, которая принимает два числа и возращает результат их умножения
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)
const hello = (userName, userSurname, userAge) => {
  return `Привет ${userName} ${userSurname} с возрастом ${userAge} лет`
};
console.log(hello('Vova', 'Vovanich', 40));

// Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"
const gender = answ => {
  switch (answ) {
    case 'M':
      return 'Ваш пол мужской';
    case 'F':
      return 'Ваш пол женский';
    default:
      return 'Ваш пол не опеределен';
  }
};
console.log(gender('M'));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
const days = ['пнд', 'вт', 'ср', 'чтв', 'пт', 'сб', 'вс'];
const dayOfWeek = num => {
  return num >= 0 && num <= 7
    ? days[num - 1]
    : 'no day'
};
console.log(dayOfWeek(4));

// Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.
const str1 = 'Even though. The code using ternary. Operators is shorter';
const firstWord = str => {
  const sentArr = str.split('. ');
  let str2 = '';
  sentArr.forEach(element => {
    str2 += `${element.split(' ')[0]}, `
  });
  return str2;
};
console.log(firstWord(str1));

// Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
const timeOfDay = name => {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 23 && hours < 6) {
    return `Доброй ночи, ${name}`;
  } else if (hours >= 6 && hours < 12) {
    return `Доброе утро, ${name}`;
  } else if (hours >= 6 && hours < 12) {
    return `Добрый день, ${name}`;
  } else if (hours >= 18 && hours < 23) {
    return `Добрый день, ${name}`;
  } else {
    return 'Привет';
  }
};
console.log(timeOfDay('vova'));

// Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
const getStateOfAge = age => {
  if (age < 18) {
    return `${age} - ребенок`;
  } else if (age < 31) {
    return `${age} - молодой`;
  } else if (age < 55) {
    return `${age} - зрелый`;
  } else {
    return `${age} - старый`;
  }
};

const getStateOfAllAges = () => {
  for (let index = 1; index <= 100; index++) {
    console.log(getStateOfAge(index));
  }
};
getStateOfAllAges();

// Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания
const getHumanDescription = (name, age) => {
  return `${name} имеет возраст ${getStateOfAge(age)}`
};

console.log(getHumanDescription('Иван', 44));

// Массивы
// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.
const digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const evenArray = [2, 4, 6, 8];

const isAllDigitsEven = arr => {
  return arr.every(i => i % 2 === 0);
}

console.log(isAllDigitsEven(digitsArray));
console.log(isAllDigitsEven(evenArray));

// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.
const isOneDigitOdd = arr => {
  return arr.some(i => i % 2 !== 0);
}

console.log(isOneDigitOdd(digitsArray));
console.log(isOneDigitOdd(evenArray));
// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
const getMultipleOfFive = arr => {
  return arr.filter(i => i % 5 === 0);
};

console.log(getMultipleOfFive(digitsArray));

// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
const getAverageCount = arr => {
  const sum = arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return Math.round(sum * 10 / arr.length) / 10;
}
console.log(getAverageCount(digitsArray));

// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент массива в конец (например можно засунуть первый элемент в конец, затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься
const evenArray2 = [2, 4, 6, 8];
const firstToLast = arr => {
  arr.push(arr.at(0));
  arr.shift();
}
firstToLast(evenArray2);
console.log(evenArray2);

// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массим, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".
const workers = [{ name: 'Иван', age: 23 }, { name: 'Сергей', age: 25 }, { name: 'Петр', age: 26 }];
const arrToStr = arr => {
  return arr.map(i => `Имя: ${i.name}, возраст ${i.age}`);
};

console.log(arrToStr(workers));