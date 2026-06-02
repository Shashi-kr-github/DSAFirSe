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


//     ================================================== SET Approch ==========================

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let s = new Set();
    let c = 0;

    for(num of nums){
        while(s.has(num)){
            c++;
            num++;
        }
        s.add(num);
    }
    return c;
};



// ===============================================Sorting Approch =======================

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let c = 0;
     nums = nums.sort((a,b) => a-b);

    for(let i = 1; i < nums.length; i++){
        if(nums[i] <= nums[i-1]){
            let target = nums[i-1] +1;
             c = c + target - nums[i];
             nums[i] = target;
        }
    }
    return c;
};