class MargeShot {

    merge(arr1 : number[] ,l : number, m : number, h: number) : void {

     let n1 = (m-l+1);
     let n2 = (h -m);

     let left = new Array(n1);
     let right = new Array(n2);

     for(let i = 0; i < n1; i++){
        left[i] = arr1[l+i];
     }
      for(let i = 0; i < n2; i++){
        right[i] = arr1[m+1+i];
        console.log(arr1[m+1+i])
     }

     let i = 0;
     let j = 0;
     let k = l;

     while(i < n1 && j < n2){
        if(left[i] <= right[j]){
          arr1[k] = left[i];
          i++;
          k++
        }else{
          arr1[k] = right[j];
          j++;
          k++;
        }
     }

     while(i < n1){
       arr1[k] = left[i];
          i++;
          k++;
     }

     while(j < n2){
       arr1[k] = right[j];
          j++;
          k++;
     }




     console.log(left, right, arr1)


     

         

       
    }



}
let margeShot = new MargeShot();

function mergeShots(arr: number[],l: number, h : number): void{
  
//console.log(h,l)
  if(h > l){
    let mid: number = l + Math.floor((h-l)/2);
    mergeShots(arr, l,  mid);
    mergeShots(arr, mid+1, h);

  margeShot.merge(arr,l,mid,h);

  }

}


//margeShot.merge(arr1,l,m,h);


let arr1 = [5, 7, 11, 20, 6, 8, 10];
let l = 0;
let h = arr1.length-1;
console.log(l,h);
mergeShots(arr1,l,h);
let m = Math.floor((h-l)/2);
//console.log("------>",arr);



