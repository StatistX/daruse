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
  return num >= 1 && num <= 7
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
  } else if (hours >= 13 && hours < 17) {
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
const getHumanDescription = (name, age) => `${name} имеет возраст ${getStateOfAge(age)}`;

console.log(getHumanDescription('Иван', 44));

// Массивы
// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.
const digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const evenArray = [2, 4, 6, 8];

const isAllDigitsEven = arr => arr.every(i => i % 2 === 0);

console.log(isAllDigitsEven(digitsArray));
console.log(isAllDigitsEven(evenArray));

// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.
const isOneDigitOdd = arr => arr.some(i => i % 2 !== 0);

console.log(isOneDigitOdd(digitsArray));
console.log(isOneDigitOdd(evenArray));
// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
const getMultipleOfFive = arr => arr.filter(i => i % 5 === 0);

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
const arrToStr = arr => arr.map(i => `Имя: ${i.name}, возраст ${i.age}`);

console.log(arrToStr(workers));

// Объекты


// У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
const salariesValues = Object.values(salaries);
const salariesSum = salariesValues.reduce((sum, item) => {
  return sum + item || 0
}, 0);
console.log(salariesSum);


// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
const multiplyNumeric = obj => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    };
  }
};
multiplyNumeric(menu)
console.log('menu', menu);


// Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. Пример работы должен быть таким:
const ladder = {
  step: 0,
  showStep() { console.log(this.step) },
  up() { this.step++ },
  down() { this.step-- },
};

ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
ladder.up();
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1


// Работа c DOM


// Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"
const helloButton = document.createElement('button');
helloButton.textContent = 'Привет';
helloButton.addEventListener('click', () => alert('Привет Мир!'));
document.body.append(helloButton);
helloButton.after(document.createElement('hr'));


// Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку, заполняем инпут текстом "test@email.ru"
const form1 = document.createElement('form');
const submitButton = document.createElement('button');
const input1 = document.createElement('input');
submitButton.textContent = 'Заполнить';
document.body.append(form1);
form1.prepend(input1);
form1.prepend(submitButton);
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  input1.value = 'test@email';
});
form1.after(document.createElement('hr'));


// Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку, выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле".
const form2 = document.createElement('form');
const submitButton2 = document.createElement('button');
const input2 = document.createElement('input');
submitButton2.textContent = 'Заполнить';
document.body.append(form2);
form2.prepend(input2);
form2.prepend(submitButton2);
form2.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(input2.value ? `Вы ввели ${input2.value}` : 'Вы ничего не ввели в поле');
});
form2.after(document.createElement('hr'));


// Выводим кнопку с текстом "Поменять" и два инпута, при клике на кнопку инпуты меняются своим введеным текстом
const form3 = document.createElement('form');
const submitButton3 = document.createElement('button');
submitButton3.textContent = 'Поменять';
const input3 = document.createElement('input');
const input4 = document.createElement('input');
document.body.append(form3);
form3.prepend(input3);
form3.prepend(input4);
form3.prepend(submitButton3);
form3.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValues = {
    input3Value: input3.value,
    input4Value: input4.value
  };
  input3.value = inputValues.input4Value;
  input4.value = inputValues.input3Value
});
form3.after(document.createElement('hr'));


// Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует
const form4 = document.createElement('form');
const submitButton4 = document.createElement('button');
submitButton4.textContent = 'заблокировать';
const submitButton5 = document.createElement('button');
submitButton5.textContent = 'разблокировать';
const input5 = document.createElement('input');
document.body.append(form4);
form4.prepend(input5);
form4.prepend(submitButton5);
form4.prepend(submitButton4);
form4.addEventListener('submit', e => e.preventDefault());
submitButton4.addEventListener('click', () => {
  input5.setAttribute('disabled', 'disabled');
});
submitButton5.addEventListener('click', () => {
  input5.removeAttribute('disabled');
});
form4.after(document.createElement('hr'));


// Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем на скрыть, квадрат исчезает и текст кнопки меняется на "показать квадрат" и так можно кликать сколько угодно раз.
const button5 = document.createElement('button');
button5.textContent = 'скрыть квадрат';
document.body.append(button5);
const div1 = document.createElement('div');
div1.style.width = '50px';
div1.style.height = '50px';
div1.style.backgroundColor = 'black';
document.body.append(div1);
button5.addEventListener('click', () => {
  div1.style.display === ''
    ? div1.style.display = 'none'
    : div1.style.display = '';
  button5.textContent === 'скрыть квадрат'
    ? button5.textContent = 'показать квадрат'
    : button5.textContent = 'скрыть квадрат';
});
div1.after(document.createElement('hr'));


// Выводим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным.
const div2 = document.createElement('div');
div2.style.width = '50px';
div2.style.height = '50px';
div2.style.backgroundColor = 'red';
document.body.append(div2);

div2.addEventListener('mouseenter', () => {
  div2.style.backgroundColor = 'green';
});

div2.addEventListener('mouseleave', () => {
  div2.style.backgroundColor = 'red';
});

div2.after(document.createElement('hr'));


// Вывести 4 красных квадрата, при клике на любой, он становиться зеленым, при этом если есть уже зеленый квадрат, то он становиться обратно красным и так можно кликать на любой квадрат, он становиться зеленым, а старый зеленый квадрат обратно крассным и тд. (Сделать задачу так, чтобы можно было добавить ещё хоть 100 квадратов при этом скрипт не надо менять).
const div3 = document.createElement('div');
div3.style.display = 'flex';
div3.style.gap = '10px';
document.body.append(div3);

const setSize = el => {
  el.style.width = '50px';
  el.style.height = '50px';
};

const setColor = (el, color) => {
  el.style.backgroundColor = color;
};

for (let index = 0; index < 4; index++) {
  const element = document.createElement('div');
  setSize(element);
  setColor(element, 'red');
  div3.append(element);
};

div3.addEventListener('click', (e) => {
  if (e.target === div3) return;

  for (let el of div3.children) {
    setColor(el, 'red');
  }
  setColor(e.target, 'green');
});

div3.after(document.createElement('hr'));


// Реализовать калькулятор. Выводим 10 кнопок цифр от 0 до 10. Кнопки: умножить, поделить, сложить, вычесть, вычислить. При нажатии на кнопки в любом порядке выводиться в отдельном блоке строка (5-4+3*2...) и при нажатии на кнопку посчитать, заменяем в блоке данную строку на результат её вычисления, при этом можно потом дальше вычислять с уже этим вычеслением.
const digitsContainer = document.createElement('div');
digitsContainer.style.display = 'flex';
digitsContainer.style.gap = '10px';
document.body.append(digitsContainer);

for (let index = 0; index < 10; index++) {
  const element = document.createElement('div');
  setSize(element);
  setColor(element, 'lightSalmon');
  element.textContent = index;
  digitsContainer.append(element);
};

const buttonTitles = ['умножить', 'поделить', 'сложить', 'вычесть', 'вычислить'];

const buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.gap = '10px';
document.body.append(buttonsContainer);

let stringCalculation = document.createElement('p');
document.body.append(stringCalculation);

let calculatedValue = 0;

for (let index = 0; index < buttonTitles.length; index++) {
  const element = document.createElement('button');
  element.textContent = buttonTitles[index];
  buttonsContainer.append(element);
};

digitsContainer.addEventListener('click', e => {
  if (e.target === digitsContainer) return;
  stringCalculation.textContent += e.target.textContent;
});

const symbolValidation = symbol => {
  const regExp = /\D$/;
  regExp.test(stringCalculation.textContent)
    ? stringCalculation.textContent = stringCalculation.textContent.replace(/\D$/, symbol)
    : stringCalculation.textContent += symbol;
};

buttonsContainer.addEventListener('click', e => {
  const action = e.target.textContent;
  switch (action) {
    case 'умножить':
      symbolValidation('*');
      break;
    case 'поделить':
      symbolValidation('/');
      break;
    case 'сложить':
      symbolValidation('+');
      break;
    case 'вычесть':
      symbolValidation('-');
      break;
    case 'вычислить':
      try {
        calculatedValue = eval(stringCalculation.textContent);
        stringCalculation.textContent = calculatedValue;
      } catch {
        stringCalculation.textContent = 'ошибка в расчетах';
      }
      break;
    default:
      break;
  }
});

stringCalculation.after(document.createElement('hr'));


// Регулярные выражения


// Проверка URL на валидность. Передаем урл функции и проверяем валидное оно или нет (возращаем тру или фолс). Критерии: Урл должен начинаться с http:// иили https:// и заканчиваться на .php или .html. Например - http://site.ru/index.php - валидный, http://site.com - не валидный, site.ru/index.php - не валидный
const urlString1 = 'http://site.ru/index.php';
const urlString2 = 'https://site.com';

const validationCheck = str => {
  const regExp1 = /^http\:\/\/|^https\:\/\//;
  const regExp2 = /.php$|.html$/;
  return regExp1.test(str) && regExp2.test(str);
};

console.log(validationCheck(urlString1));
console.log(validationCheck(urlString2));


// Проверка номера телефона на валидность. Передаем телефон функции и проверяем валидное оно или нет (возращаем тру или фолс). Такие номера должны быть валидными: 89991112233, 8 (999) 1112233, +7 (999) 111-22-33, +7 (999) 111 22 33. Т.е. телефон может начинаться как и с +7, так и с 8. код оператора, может быть в скобках и без, и с пробелами. Оставшиеся часть может быть с дефисами и пробелами


// Ассинхронность
// Написать функцию с колбеком, которая принимает число с колбеком и через секунду выводить в консоль число. Ограничения - для решения задачи setTimeout - можно использовать только один раз! Реализовать вывод в консоль от 1 до 10 через секунду. Вызываем так (только более большая вложенность):
const func = (digit, callback = () => { }) => {
  setTimeout(() => {
    console.log(digit);
    callback(digit + 1)
  }, 1000);
};

func(1, (n) => {
  func(n, (n) => {
    func(n, (n) => {
      func(n, (n) => {
        func(n, (n) => {
          func(n, (n) => {
            func(n, (n) => {
              func(n, (n) => {
                func(n, (n) => {
                  func(n);
                })
              })
            })
          })
        })
      })
    })
  })
});


// Выводим от 1 до 10 через секунду каждый раз. Используя Promise. Ограничения - setTimeout и new Promise() мы можем вызывать только один раз для решения нашей задачи.
const counter = digit => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log(digit);
      resolve(digit + 1)
    }, 1000)
  })
};

counter(1)
  .then(counter)
  .then(counter)
  .then(counter)
  .then(counter)
  .then(counter)
  .then(counter)
  .then(counter)
  .then(counter)
  .then(counter);


// Скопируем решения из прошлой задачи и переписываем на async-await функцию, конструкцию .then - не используем
const counter2 = async digit => {
  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      console.log(digit);
      resolve(digit + 1)
    }, 1000);
  });

  const result = await promise;
  if (result < 11) {
    counter2(result)
  }
};

counter2(1);


// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис. Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
const counter3 = () => {
  const rand = Math.floor(Math.random() * 10 + 1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(rand);
      if (rand <= 5) {
        resolve();
      } else (
        reject(new Error("error"))
      )
    }, rand * 100)
  })
}

counter3();


// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так, чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего промиса. После окончания манипуляций выведите число алертом на экран.


// Выполните запрос по получению списка пользователей, по этому url https://jsonplaceholder.typicode.com/users, в случае успеха выводим на экран пользователей со всеми данными в табличку. В случае не успеха выводим на экран ошибку "Ошибка, запрос не отработан". Используем для решения fetch.