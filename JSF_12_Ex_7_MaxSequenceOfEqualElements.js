function maxSequenceOfEqualElements(arr) {
    let result = [];
    let count = 0;
    let currentMaxSeq = 0;
    let maxSeq = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
            currentMaxSeq = count;
            if (maxSeq < currentMaxSeq) {
                maxSeq = currentMaxSeq;
                result = arr.slice((i + 1 - maxSeq), (i + 2))
            }
        } else {
            count = 0;
            currentMaxSeq = 0;
        }
    }
    console.log(result.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
//2 2 2
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
//1 1 1
maxSequenceOfEqualElements([4, 4, 4, 4])
//4 4 4 4
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
//1 1