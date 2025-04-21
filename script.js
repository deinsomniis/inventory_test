// Replace with your published CSV URL:
const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRn2Mi9YfkSP8logCS09h1BIMhTlgo6MsFjpimApvURhRu6Dz5tn8zYJew3OQHtz83rQTerapnxg-2s/pub?output=csv';

function init() {
  Tabletop.init({
    key: sheetUrl,
    simpleSheet: true,
    callback: showData
  });
}

function showData(data) {
  const tbody = document.querySelector('#inventory-table tbody');
  data.forEach(row => {
    const tr = document.createElement('tr');

    // Image cell
    const imgTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = row.picture_url;
    img.alt = row.part_number;
    imgTd.appendChild(img);
    tr.appendChild(imgTd);

    // Part number
    ['part_number', 'storage_location', 'quantity'].forEach(col => {
      const td = document.createElement('td');
      td.textContent = row[col];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

// Wait for DOM, then load
document.addEventListener('DOMContentLoaded', init);
