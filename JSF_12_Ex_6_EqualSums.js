function equalSums(arr){
    let yes = false;
    let leftSum = 0;
    let rightSum = 0;
    if(arr.length === 1){
        console.log(0);
    }
    else if(arr.length === 2){
        console.log('no');
    }
    else{
        for(let i = 1; i < arr.length - 1; i++){
            for(let l = 0; l < i; l++){leftSum += arr[l];}
            for(let r = i + 1; r < arr.length; r++){rightSum += arr[r];}
            if(leftSum === rightSum){
                yes = true;
                console.log(i);
                break;
            }
            leftSum = 0;
            rightSum = 0;
        }
        if(!yes){
            console.log('no');
        }
    }
}

equalSums([1, 2, 3, 3]) 
//2 
equalSums([1, 2]) 
//no 
equalSums([1]) 
//0 
equalSums([1, 2, 3]) 
//no 
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]) 
//3