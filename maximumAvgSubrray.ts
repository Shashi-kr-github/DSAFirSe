function findMaxAverage(nums: number[], k: number): number {
    let avg : number = -Infinity;
    let sum : number = 0;
    let i : number = 0;
    let j : number = 0;
  // console.log("hhhh")
    while(j < k){
       sum = sum + nums[j]; 
       j++;
        //console.log("hkkhh", sum)
    }
    j--;
      avg = Math.max(avg, (sum/k));
    if(j == nums.length-1){
       return avg;
    }
    while((j < nums.length-1)&& ((j-i+1) == k )){
       // console.log(sum)
        sum = sum - nums[i];
        i++;
        j++;
        if(j >= nums.length){
            console.log(avg)
            return avg
        }
        sum = sum + nums[j];
        avg = Math.max(avg, (sum/k));
        
    }
   // console.log(avg , "mmmm");
    return avg;
};


// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
 