function maxLength (arr) {
        let obj = {};
        obj[0] = -1;
        console.log(obj)
        let sum = 0;
        let max = 0;
        for(let i = 0; i < arr.length; i++){
            sum = sum + arr[i];
            if(sum in obj){
             
                max = Math.max(max, i-obj[sum])
            }else{
                obj[sum] = i
            }
        }
        console.log(obj)
        console.log(max)

        return max;
        
    }
    let arr =  [-42, 12, 20, 15, 31, -4, 0, 15];
    maxLength(arr);
