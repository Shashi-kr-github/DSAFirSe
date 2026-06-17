/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {

     let repeat = "";
     let count = 0;
     let flag = true
     
     while(flag){
         if(repeat.length < b.length){
             repeat = repeat+a;
             count++;
            
         }
         if(repeat.length >= b.length){
             flag = false;
             
         }
         
         
     }
     if(repeat.includes(b)){
                 return count;
             }
     while(!repeat.includes(b)){
         repeat = repeat+a;
             count++;
             if(repeat.includes(b)){
                 return count;
             }
             if(repeat.length > 2*(b.length)){
                 console.log("yaha se")
                 return -1
             }
             
             
     }
      console.log(repeat, flag)
     
     return -1;
     
    
};