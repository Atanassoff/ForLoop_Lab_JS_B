function ladybugs(arr) {
    let size = arr[0];
    let firstPlaces = arr[1].split(' ');
    let placesWithinTheSize = [];
    for (let i = 0; i < firstPlaces.length; i++) {
        if (firstPlaces[i] >= 0 && firstPlaces[i] < size) {
            placesWithinTheSize.push(firstPlaces[i]);
        }
    }
    let placesZeroesAndOnes = [];
    for (let i = 0; i < size; i++) {
        if (placesWithinTheSize.includes(String(i))) {
            placesZeroesAndOnes.push('1');
        } else {
            placesZeroesAndOnes.push('0');
        }
    }
    let move = [];
    let start = 0;
    let dir = '';
    let dist = 0;
    for (let i = 2; i < arr.length; i++) {
        move = arr[i].split(' ');
        start = Number(move[0]);
        dir = move[1];
        dist = Number(move[2]);
        if (dist < 0 && dir == 'left') {
            dir = 'right';
            dist = Math.abs(dist);
        } else if (dist < 0 && dir == 'right') {
            dir = 'left';
            dist = Math.abs(dist);
        }
        if (dir != 0 && (start >= 0 && start < size) && placesZeroesAndOnes[start] === '1') {
            placesZeroesAndOnes[start] = '0';
            switch (dir) {
                case "left":
                    for(let j = start - dist; j >= 0; j -= dist){
                        if(placesZeroesAndOnes[j] === '0'){
                            placesZeroesAndOnes[j] = '1';
                            break;
                        }
                    }
                    break;
                case "right":
                    for(let j = start + dist; j < size; j += dist){
                        if(placesZeroesAndOnes[j] === '0'){
                            placesZeroesAndOnes[j] = '1';
                            break;
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }
    console.log(placesZeroesAndOnes.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1'])
//0 1 0 
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
//0 0 0 
ladybugs([5, '3', '3 left 2', '1 left -2'])
//0 0 0 1 0