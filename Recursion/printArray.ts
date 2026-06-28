let arr : number[] = [1,2,3,4,5];

class PrintArray{
  
    recursivePrint(arr: number[], index: number): void{
     
        if(index < arr.length){
             this.recursivePrint(arr,index+1)
            console.log(arr[index]);
           

        }else{
            return;
        }
    }

    reverseRecursivePrint(arr : number[], index : number) : void{
        if(index < 0){
          return ;
        }else{
            this.reverseRecursivePrint(arr, index-1)
            console.log(arr[index]);
            
        }
    }
}

const printArry = new PrintArray();
printArry.recursivePrint(arr, 0);
printArry.reverseRecursivePrint(arr, arr.length-1);