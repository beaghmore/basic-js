const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = new Array(matrix.length);
  for (let i = 0; i < result.length; i++) {
      result[i] = new Array(matrix[0].length);
  }

  for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[0].length; j++) {
          let number = 0;
          console.log(i, j);
          if ((i - 1 >= 0)) {
              number += Number(matrix[i-1][j]);
              console.log(1);
          }
          if ((j - 1 >= 0)) {
              number += Number(matrix[i][j-1]);
              console.log(2);
          }
          if ((i + 1 < matrix.length)) {
              number += Number(matrix[i+1][j]);
              console.log(3);
          }
          if ((j + 1 < matrix[0].length)) {
              number += Number(matrix[i][j+1]);
              console.log(4);
          }
          if ((i - 1 >= 0) && (j - 1 >= 0)) {
              number += Number(matrix[i-1][j-1]);
              console.log(5);
          }
          if ((i - 1 >= 0) && (j + 1 < matrix[0].length)) {
              number += Number(matrix[i-1][j+1]);
              console.log(6);
          }
          if ((i + 1 < matrix.length) && (j - 1 >= 0)) {
              number += Number(matrix[i+1][j-1]);
              console.log(7);
          }
          if ((i + 1 < matrix.length) && (j + 1 < matrix[0].length)) {
              number += Number(matrix[i+1][j+1]);
              console.log(8);
          }

          result[i][j] = number;
      }
  }

  return result;
}

module.exports = {
  minesweeper
};
