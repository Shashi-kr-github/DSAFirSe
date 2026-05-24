var findMaxLength = function(nums) {
    let val = 0;
    let obj = {};
    obj[val] = -1;
    let res = 0 ;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
          val = val -1;
          if(val in obj){
           res = Math.max(res , i - obj[val])
          }else{
            obj[val] = i;
          }
        }else{
           val = val +1;
          if(val in obj){
           res = Math.max(res , i - obj[val])
        
          }else{
            obj[val] = i;
          }
        }
    }

    return res;
    
};