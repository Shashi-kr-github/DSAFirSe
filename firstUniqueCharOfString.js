/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
 let obj = {};
    for(let i = 0; i < s.length; i++){
        if(s[i] in obj){
            obj[s[i]][1] = obj[s[i]][1] + 1
        }else{
            obj[s[i]] = [i , 1]
        }
    }
    
    let obj2 = {};
    for(key in obj){
        if(obj[key][1] == 1){
           obj2[obj[key][0]] = key
        }
    }
    if(Object.keys(obj2).length){
    
        return Number(Object.keys(obj2)[0])
    }
    return -1
    
};