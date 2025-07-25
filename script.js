const sheetId = '1057714589'
const sheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetId}/od6/public/values?alt=json`;

fetch(sheetUrl)
  .then(res => res.json())
  .then(data => {
    const entries = data.feed.entry;
    const tableBody = document.querySelector('#data-table tbody');

    entries.forEach(row => {
      const name = row.gsx$name.$t;
      const email = row.gsx$email.$t;
      const age = row.gsx$age.$t;

      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${name}</td><td>${email}</td><td>${age}</td>`;
      tableBody.appendChild(tr);
    });
  })
  .catch(error => {
    console.error('시트 불러오기 오류:', error);
  });
