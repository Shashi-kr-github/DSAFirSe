/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let obj = {};
    for(let i = 0; i < dominoes.length; i++){
        if(dominoes[i][1] > dominoes[i][0]){
           let temp = dominoes[i][1].toString() + dominoes[i][0].toString();
           if(temp in obj){
              obj[temp] = obj[temp]+1;
           }else{
              obj[temp] = 1;
           }
        }else{
           let temp = dominoes[i][0].toString() + dominoes[i][1].toString();
           if(temp in obj){
              obj[temp] = obj[temp]+1;
           }else{
              obj[temp] = 1;
           } 
        }
    }

    let max = 0;
    let res = 0;
    for(key in obj){
        //key = Number(key);
         if(obj[key] > 1){
            max = obj[key];
            res = res + (max * ((max-1)/2))

         }
    }
   // let res = 
    return res;
    
};