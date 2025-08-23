import { parseFile } from '../services/parseXLSX.js';

const importBtn = document.querySelector('.datacontrols__importbtn');
const importPanel = document.querySelector('.import-data');
const importCloseBtn = document.querySelector('.import-data__closebtn');
const fileInput = document.querySelector('input[type=file]');
const cancelBtn = document.querySelector('.import-form__cancelbtn');

export function initImportPanel() {
  importBtn.addEventListener('click', () => {
    console.log('log');
    importPanel.showModal();
  });

  importCloseBtn.addEventListener('click', () => importPanel.close());
  cancelBtn.addEventListener('click', () => importPanel.close());
  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = await parseFile(file);
    localStorage.setItem('data', JSON.stringify(data));
  });

  const submit = document.querySelector('.import-form');
  submit.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('.import-form__nameinput').value;
    const datasetTitle = document.querySelector('.sidebar__dataset-title');
    datasetTitle.textContent = name;
    let data = JSON.parse(localStorage.getItem('data'));
    createTable(data);
  });
}

function createTable(data) {
  const tr = document.querySelector('.table-container__header');
  const tbody = document.querySelector('.table-container__rows');
  console.log(tbody);
  const columns = data[0];
  columns.forEach((title) => {
    const th = document.createElement('th');
    th.textContent = title;
    tr.appendChild(th);
  });

  data.slice(1).forEach((row) => {
    const tr = document.createElement('tr');
    console.log(row);
    row.forEach((cell) => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}
