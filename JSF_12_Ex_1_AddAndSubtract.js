function addAndSubtract(arr1){
    let sum1 = 0;
    let sum2 = 0;
    let arr2 = [];
    for(let i = 0; i < arr1.length; i++){
        sum1 += arr1[i];
        if(arr1[i] % 2 === 0){arr2[i] = arr1[i] + i;}
        else{arr2[i] = arr1[i] - i;}
        sum2 += arr2[i];
    }
    console.log(arr2);
    console.log(`${sum1}\n${sum2}`);
}

addAndSubtract([5, 15, 23, 56, 35]) 
//[ 5, 14, 21, 59, 31 ] 
//134 
//130
addAndSubtract([-5, 11, 3, 0, 2]) 
//[ -5, 10, 1, 3, 6 ] 
//11 
//15