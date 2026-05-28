/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let mi = Infinity;
    let mx = -Infinity;
    let flag = false;
    let n = nums.length;
    if(n == 1){
        return 0;
    }

    for(let i = 1; i < n; i++ ){
        if(nums[i] < nums[i-1]){
            flag = true
        }
        if(flag){
            mi = Math.min(mi, nums[i]);
            break;
        }
    }
    flag = false;

    for(let j = n-2; j >= 0 ; j--){
        if(nums[j] > nums[j+1]){
            flag = true
        }
        if(flag){
            mx = Math.max(mx, nums[j])
        }
    }

    let l, r;
    
    for( l = 0; l < n; l++){
        if(nums[l] > mi){
            break;
        }
    }
    if(l >= n ){
        return 0;
    }

    for(r = n-1; r >= 0; r--){
        if(nums[r] < mx){
            break;
        }
    }

    let res = (r-l)+1;
    return res;

};