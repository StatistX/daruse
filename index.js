// Базовые

// Написать функцию, которая принимает два числа и возращает результат их умножения
const multiply = (a, b) => a*b;
console.log(multiply(2,3));

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
        : 'no day'};
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
  console.log(hours);
  switch (hours) {
    case hours >= 23 && hours < 6:
      return `Доброй ночи, ${name}`;
    case hours >= 6 && hours < 12:
      return `Доброе утро, ${name}`;
    case hours >= 12 && hours < 18:
      return `Добрый день, ${name}`;
    case hours >= 18 && hours < 23:
      return `Добрый вечер, ${name}`;
    default:
      return 'Привет';
  }
};
console.log(timeOfDay('vova'));
// Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
// Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания