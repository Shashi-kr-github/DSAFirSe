 function canPlaceFlowers (flowerbed, n) {
    if(flowerbed.length == 1 && flowerbed[0] == 0 && n == 1){
        return true;
    }

    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] == 0){
           let val = checkCorrectIdx(flowerbed, i);
           if(val == true){
            n = n-1;
            flowerbed[i] = 1;
           }

        }
    }
    if(n> 0){
        return false;
    }
    return true;
    
};

function checkCorrectIdx(arr, idx){
    if(idx == 0){
      if( arr[idx+1] == 0){
        return true
      }
      return false;
    }
    if(idx == arr.length-1){
       if( arr[idx-1] == 0){
        return true
      }
      return false;
    }
    if( arr[idx-1] == 0 && arr[idx+1] == 0){
        return true;
    }
    return false;

}


// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false