function magicSum(arr, n){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === n){
                console.log(arr[i] + " " + arr[j]);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8) 
//1 7 
//6 2
magicSum([14, 20, 60, 13, 7, 19, 8], 27) 
//14 13 
//20 7 
//19 8
magicSum([1, 2, 3, 4, 5, 6], 6) 
//1 5 
//2 4