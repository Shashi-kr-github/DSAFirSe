/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let lSum = [];
    let rSum = [];
    let n = nums.length;
    let sumL = nums[0];
    let sumR = nums[n-1];
    lSum[0] = sumL;
    rSum[n-1] = sumR;


    for(let i = 1; i < n; i++){
      sumL = sumL + nums[i] ;
      lSum[i] = sumL;
    }
    for(let i = n-2; i >= 0; i-- ){
        sumR = sumR + nums[i];
        rSum [i] = sumR;
    }
    for(let i = 0; i < n; i++){
        if(lSum[i] == rSum[i]){
            return i
        }
    }
    return -1;

};