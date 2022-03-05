let sportsOne: string[]=["Golf","Cricket","Tennis","Swimming"];
for (let i=0;i<sportsOne.length;i++) {
    console.log(sportsOne[i]);
}

console.log("Simplified for Loop");
let sports:string[]=["Hockey","Judo","Badminton"];
for(let tempSport of sports){
    if(tempSport=="Hockey"){
        console.log(tempSport+"<<My Favourite!");
    }else {
        console.log(tempSport);
    }
}

console.log("Growable Arrays");
let dishes:string[]=["Indian","Italian","Thai","French"];
dishes.push("Korean");
for(let tempDishes of dishes){
    console.log(tempDishes);
}
