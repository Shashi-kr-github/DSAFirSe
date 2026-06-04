/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            arr.push(nums[i])
        }
    }
    for(let i = 0; i < nums.length ; i++){
        if(i < arr.length){
            nums[i] = arr[i]
        }else{
            nums[i] = 0;
        }
    }
   return nums;
};