function maxNumber(arr) {
    let newArr = [];
    let currentArr = arr;
    while (currentArr.length > 0) {
        let max = Number.MIN_SAFE_INTEGER;
        let maxIndex = -1;
        for (let i = 0; i < currentArr.length; i++) {
            if (currentArr[i] >= max) {
                max = currentArr[i];
                maxIndex = i;
            }
        }
        newArr.push(max);
        currentArr = currentArr.slice(maxIndex + 1, currentArr.length)
    }
    console.log(newArr.join(' '));
}

maxNumber([1, 4, 3, 2])
//4 3 2
maxNumber([14, 24, 3, 19, 15, 17])
//24 19 17
maxNumber([41, 41, 34, 20])
//41 34 20
maxNumber([27, 19, 42, 2, 13, 45, 48])
//48