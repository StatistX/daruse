const getUsers = async url => {
  try {
    let responce = await fetch(url);
    if (!responce.ok) {
      const divShowData = document.getElementById('showData');
      divShowData.innerHTML = "Ошибка загрузки";
      throw new Error('error');
    }
    let users = await responce.json();
    return users;
  } catch {
    throw new Error('error');
  }
};

let tableFromJson = async () => {
  let users = await getUsers('https://jsonplaceholder.typicode.com/users');

  let col = [];
  for (let i = 0; i < users.length; i++) {
    for (let key in users[i]) {
      if (!col.includes(key)) {
        col.push(key);
      }
    }
  }

  const table = document.createElement("table");

  let tr = table.insertRow(-1);

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = col[i];
    tr.append(th);
  }

  for (let i = 0; i < users.length; i++) {

    tr = table.insertRow(-1);

    for (let j = 0; j < col.length; j++) {
      let tabCell = tr.insertCell(-1);
      tabCell.innerHTML = JSON.stringify(users[i][col[j]]);
    }
  }

  const divShowData = document.getElementById('showData');
  divShowData.innerHTML = "";
  divShowData.append(table);

};

export default tableFromJson;