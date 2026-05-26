/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let i = 0;
    let j = matrix[0].length-1;
    let x = matrix[i][j];

    while(i <= matrix.length-1 && j >= 0){
       // console.log(x, j, i)
        if(target < x){
           j--;
                if(j < 0){
                    return false;
                }
                x = matrix[i][j];
        }else if(target == x){
            return true;
        }else {
           i++;
                 if(i >= matrix.length){
                    return false;
                }
                x = matrix[i][j];
        }
    }
    return false;
    };
   