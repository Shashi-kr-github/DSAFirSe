function checkInclusion (s1, s2) {
    if(s1.length <= s2.length){
        let sum = 0;
       
        for(let i = 0; i < s1.length; i++){
            sum += s1.charCodeAt(i)
        }
         console.log("sum", sum)
        let sum2 = 0;
        for(let i = 0; i < s1.length; i++){
            sum2 += s2.charCodeAt(i)
        }
        console.log("sum2", sum2)
        if(sum == sum2){
            return true;
        }

        let j = s1.length-1;
       
        let k = 0
         console.log("j", j, (j - k +1))
        while(j < s2.length && (j - k +1) == s1.length){
            sum2 = sum2 - s2.charCodeAt(k) + s2.charCodeAt(j+1);
            console.log("sum2", sum2)
            if(sum2 == sum){
                return true;
            }
            j++;
            k++;

        }
        return false;

        
    }else{
        let sum = 0;
        for(let i = 0; i < s2.length; i++){
            sum += s2.charCodeAt(i)
        }
        let sum2 = 0;
        for(let i = 0; i < s2.length; i++){
            sum2 += s1.charCodeAt(i)
        }
         console.log("sum2", sum2)

         let j = s2.length-1;
        let k = 0
        while(j < s1.length && (j - k +1) == s2.length){
            sum2 = sum2 - s1.charCodeAt(k) + s1.charCodeAt(j+1);
            console.log("sum2", sum2)
            if(sum2 == sum){
                return true;
            }
            j++;
            k++;

        }
        return false;
    


    }
   
    
};


 let s1 = "eiiid";
 let s2 = "ediii"
        
   console.log(checkInclusion(s1,s2))