function rearrangeArray (nums) {
    let numsp = [];
    let numsn = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
          numsn.push(nums[i])
        }else{
          numsp.push(nums[i])
        }
    }
    console.log(numsn);
    console.log(numsp);
    let arr = [];
    for(let i = 0; i < numsn.length; i++){
        arr.push(numsp[i]);
        arr.push(numsn[i]);
    }
    console.log(arr);
    
};
let nums = [3,-2,1,-5,2,-4];
rearrangeArray(nums);
