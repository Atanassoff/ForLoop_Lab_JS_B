function maxNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i];
        let top = true;
        for (let j = i + 1; j < arr.length; j++) {
            let currNum = arr[j];
            if (max <= currNum) {
                top = false;
                break
            }
        }
        if (top) {
            newArr.push(max);
        }
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
