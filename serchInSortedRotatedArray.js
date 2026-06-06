// Note : -
// - Modify the function or parameters if needed.
// - Signatures function may vary, adjust parameters if required.
//  ========== Hints ==========

   //either the left or right half must be normally ordered
/**
 * @param {number[]} nums, @param {number} target
 * @return {number[]}
 */
var searchInRotatedSortedArray = function(nums, target) {
    let l = 0;
    let h = nums.length-1;

    while(l <= h){
        let m = Math.floor((h+l)/2);

        if(nums[m] == target){
            return m;
        }

        if(nums[l] <= nums[m] ){
          if(nums[l] <= target && nums[m] > target){
            h = m-1;
          }else{
           l = m+1
          }
        }else{

            if(target > nums[m] && target <= nums[h]){
                l = m+1;
            }else{
                h = m-1;
            }

        }
    }
    return -1;
    
};