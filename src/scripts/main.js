'use strict';

const table = document.querySelector('table');

const headRows = table.tHead.rows;
const bodyRows = table.tBodies[0].rows;
const footRows = table.tFoot.rows;

function cloneColumn(fromIndex, toLastIndex) {
  for (const row of headRows) {
    const newCell = row.cells[fromIndex].cloneNode(true);

    row.insertBefore(newCell, row.cells[toLastIndex]);
  }

  for (const row of bodyRows) {
    const newCell = row.cells[fromIndex].cloneNode(true);

    row.insertBefore(newCell, row.cells[toLastIndex]);
  }

  for (const row of footRows) {
    const newCell = row.cells[fromIndex].cloneNode(true);

    row.insertBefore(newCell, row.cells[toLastIndex]);
  }
}

cloneColumn(1, 4);
