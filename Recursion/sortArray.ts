class ArrayMethod{
    public push(arr: number[], value: number): void{
        arr[arr.length] = value;
        return;
    }

    public pop(arr: number[]):void{
        if(arr.length == 0){
            return;
        }
        arr.length = arr.length - 1;
    }
}

let arrayMethod = new ArrayMethod();

let arr2: number[] = [3,5,1,6,2,4];

function sortArray(arr: number[]) :void {
   if(arr.length == 1){
    return;
   }

   let temp: number = arr[arr.length-1];
   arrayMethod.pop(arr);
   sortArray(arr);
   insert(arr, temp);

}

function insert(arr: number[], value: number): void{

    if(arr.length == 0 || arr[arr.length-1] <= value){
        arrayMethod.push(arr, value);
        return;
    }

    let temp : number = arr[arr.length-1];
    arrayMethod.pop(arr);
    insert(arr, value);
    arrayMethod.push(arr, temp);

}

sortArray(arr2);

console.log(arr2);
