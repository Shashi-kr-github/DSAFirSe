/**
 * @param {number[]} arr
 * @return {boolean}
 */
 function uniqueOccurrences  (arr) {
    let obj = {};

    for(let i = 0; i < arr.length; i++){
        if(arr[i] in obj){
            obj[arr[i]] = obj[arr[i]] +1;
        }else{
            obj[arr[i]] = 1;
        }
    }
    console.log(obj)
  //  obj = {};
    arr = [];
    for(key in obj) {
        arr.push(obj[key]);
    }
    console.log(arr);

    obj = {};
    for(let i = 0; i < arr.length; i++){
      if(arr[i] in obj){
        retur
      }
    }
    return true;
    
};
let arr = [-3,0,1,-3,1,1,1,-3,10,0]
uniqueOccurrences(arr)