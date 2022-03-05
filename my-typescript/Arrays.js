var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("Simplified for Loop");
var sports = ["Hockey", "Judo", "Badminton"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    if (tempSport == "Hockey") {
        console.log(tempSport + "<<My Favourite!");
    }
    else {
        console.log(tempSport);
    }
}
console.log("Growable Arrays");
var dishes = ["Indian", "Italian", "Thai", "French"];
dishes.push("Korean");
for (var _a = 0, dishes_1 = dishes; _a < dishes_1.length; _a++) {
    var tempDishes = dishes_1[_a];
    console.log(tempDishes);
}
