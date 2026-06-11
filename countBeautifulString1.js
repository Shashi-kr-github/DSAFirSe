/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
     let c = 0
  for(let i = 0; i < s.length; i++){
    
    let v = 0;
     let cs = 0;
  
    for(let j = i; j < s.length; j++){
      if(s[j] == 'a' || s[j] == 'e' || s[j] == 'i' || s[j] == 'o'|| s[j] == "u"){
       v++
    }else{
        cs++;
    }
    if(v == cs && ((v*cs)% k == 0) ){
        c++
    }
     
      
      
    }
  }
  //console.log(c)
  return c;  
     
};
// =============================TLE O(n^3)====================
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
    let c = 0
  for(let i = 0; i < s.length; i++){
    let sub = ""
    for(let j = i; j < s.length; j++){
      sub = sub + s[j];
     
          //console.log(countVoewl(sub))
         c = c + countVoewl(sub,k);
     
      
      
    }
  }
  //console.log(c)
  return c;  
     
};

function countVoewl(s, k){
  let obj = {
    v : 0,
    c : 0
  };
 // console.log(s)
  for(let i = 0; i < s.length; i++){
   // console.log(s[i])
    if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o'|| s[i] == "u"){
        obj.v = obj.v + 1;
    }else{
        obj.c  = obj.c+ 1;
    }
  }
  //console.log(obj)
  if(obj.v > 0 &&  obj.c > 0  && obj.v == obj.c && ((obj.v * obj.c) % k == 0)){
    return 1;
  }
  return 0;
  
}
