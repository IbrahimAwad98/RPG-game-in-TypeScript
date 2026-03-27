type HeroClass = "warrior" | "mage" | "archer";

interface Hero{
name: string,
hp: number,
attack: number,
heroClass: HeroClass,
inventory: string[];
};

interface Enenmy{
    name: string,
    hp: number,
    attack: number
};

let hero: Hero ={
    name: "Ibrahim",
    hp: 100,
    attack: 35,
    heroClass: "warrior",
    inventory: []
};


let dragon: Enenmy = {
    name: "Dragon",
    hp: 200,
    attack: 35
};

function heroAttack(hero: Hero, enemy: Enenmy): void{
    enemy.hp -= hero.attack;
    console.log(`${hero.name} attacks ${enemy.name} for ${hero.attack} damage. ${enemy.name} has ${enemy.hp} hp left.`);
}

function enemyAttack(enemy: Enenmy, hero: Hero): void{
    hero.hp -= enemy.attack;
    console.log(`${enemy.name} attacks ${hero.name} for ${enemy.attack} damage. ${hero.name} has ${hero.hp} hp left.`);

}
function isDefeated(enemy: Enenmy): boolean{
    return enemy.hp <= 0;
}

heroAttack(hero,dragon);

function pickupItem(h: Hero, items:string): void{
    hero.inventory.push(items);
    console.log(`${hero.name} picked up ${items}!`);
}

pickupItem(hero, "Sword");
pickupItem(hero, "Shield");
pickupItem(hero, "Health Potion");
console.log(hero.inventory);

while(!isDefeated(dragon) && !isDefeated(hero)){
    heroAttack(hero,dragon);
    enemyAttack(dragon,hero);
    
if(isDefeated(dragon)){
    console.log(`${hero.name} wins!`);
}else{
     console.log(`${dragon.name} wins!`);
}
}