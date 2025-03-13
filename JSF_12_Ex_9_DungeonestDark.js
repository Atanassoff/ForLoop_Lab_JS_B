function dungeonestDark(input) {
    let health = 100;
    let gold = 0;
    let arr = input.split('|');
    let arr1 = [];
    let passed = true;
    for (let i = 0; i < arr.length; i++) {
        arr1 = arr[i].split(' ');
        if (arr1[0] === 'potion') {
            health += Number(arr1[1]);
            if (health > 100) {
                console.log(`You healed for ${100 - (health - Number(arr1[1]))} hp.`);
                health = 100;
            }
            else{
                console.log(`You healed for ${Number(arr1[1])} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        }
        else if(arr1[0] === 'chest'){
            gold += Number(arr1[1]);
            console.log(`You found ${Number(arr1[1])} coins.`);
        }
        else{
            health -= Number(arr1[1]);
            if(health <= 0){
                console.log(`You died! Killed by ${arr1[0]}.`);
                console.log(`Best room: ${i + 1}`);
                passed = false;
                break;
            }
            else{
                console.log(`You slayed ${arr1[0]}.`);
            }
        }
    }
    if(passed){
        console.log(`You've made it!\nCoins: ${gold}\nHealth: ${health}`);
    }
}

dungeonestDark('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
//You slayed rat. 
//You slayed bat. 
//You healed for 10 hp. 
//Current health: 80 hp.
//You slayed rat. 
//You found 100 coins. 
//You died! Killed by boss. 
//Best room: 6
dungeonestDark('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')
//You slayed cat. 
//You healed for 10 hp. 
//Current health: 100 hp. 
//You slayed orc. 
//You found 10 coins. 
//You slayed snake. 
//You found 110 coins. 
//You've made it! 
//Coins: 120 
//Health: 65