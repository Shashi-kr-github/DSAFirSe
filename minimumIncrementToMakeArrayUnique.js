/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let obj = {};
    let c = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in obj){
            obj[nums[i]] = obj[nums[i]] +1
        }else{
            obj[nums[i]] = 1;
        }
    }

    
    for(key in obj){
   // console.log(obj[key], "ccc")
    let n = Number(key);
    while(obj[key] > 1){
        
       // console.log(n, "13")
        n = n+1;
        c++;
      // console.log(c , "14") 
        if(n in obj){
           // console.log("ooo")
           continue; 
        }else{
            //console.log(n, "cccccccccccccccc")
            obj[n] = 1;
            obj[key] = obj[key]-1
          if(obj[key] > 1){
             n = Number(key)
              continue;
          }else{
              break;
          }
        }
       // console.log("vvv")
        
    }
}
return c;
    
};