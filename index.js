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
const counter4 = async digit => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(digit * digit)
    }, 3000);
  });
}

Promise.resolve(5)
  .then(counter4)
  .then(counter4)
  .then(console.log)


// Выполните запрос по получению списка пользователей, по этому url https://jsonplaceholder.typicode.com/users, в случае успеха выводим на экран пользователей со всеми данными в табличку. В случае не успеха выводим на экран ошибку "Ошибка, запрос не отработан". Используем для решения fetch.
import tableFromJson from './usersTable.js';
const usersContainer = document.createElement('div');
usersContainer.id = 'showData';
document.body.append(usersContainer);


const showUsersBtn = document.createElement('button');
showUsersBtn.textContent = 'Загрузить список пользователей';
showUsersBtn.addEventListener('click', async () => await tableFromJson());
usersContainer.append(showUsersBtn);
showUsersBtn.after(document.createElement('hr'));


// Полноценные приложения
// TODO - лист
// Релизовать TODO-лист.
const todos = [
  { id: 1, title: 'Eat', checked: false },
  { id: 2, title: 'Drink', checked: false },
  { id: 3, title: 'Walk', checked: true },
  { id: 4, title: 'Sleep', checked: false },
];

const todoContainer = document.createElement('div');
todoContainer.style.display = 'flex';
todoContainer.style.flexDirection = 'column';
todoContainer.style.width = '300px';
document.body.append(todoContainer);

const todoHeading = document.createElement('h3');
todoHeading.textContent = 'My To Do List';
todoContainer.append(todoHeading);

const todoForm = document.createElement('form');
todoContainer.append(todoForm);

const todoInput = document.createElement('input');
todoForm.append(todoInput);

const addBtn = document.createElement('button');
addBtn.textContent = 'Add todo';
todoForm.append(addBtn);

const generateItem = (item) => {
  const todoItem = document.createElement('div');
  todoItem.style.display = 'flex';
  todoItem.style.justifyContent = 'space-between';
  todoContainer.append(todoItem);

  const todoItemText = document.createElement('p');
  todoItemText.textContent = item.title;

  if (item.checked) todoItemText.classList.add('item_checked');

  todoItem.append(todoItemText);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  todoItem.append(deleteBtn);

  todoItem.addEventListener('click', () => {
    todoItemText.classList.toggle('item_checked');
  });

  deleteBtn.addEventListener('click', () => {
    todoItem.remove();
  });
};

const addItem = () => {
  const newItem = {
    id: Date.now(),
    title: todoInput.value,
    checked: false
  };
  generateItem(newItem);
  todoInput.value = '';
};

todos.map(item => generateItem(item));

todoForm.addEventListener('submit', e => {
  e.preventDefault();
  addItem();
});


// Слайдер
import { slides, Slider } from './slider.js';

const slider = new Slider(
  slides, // слайды
  'slider', // id для вставки в html
  {
    loop: true,
    navs: true,
    pags: true,
    auto: true,
    delay: 3,
  }
);

slider.addSlides();