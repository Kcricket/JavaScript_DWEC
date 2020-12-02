function calculateSupply (deathAge, apd){
    var lifetimeConsumption = Math.round(apd*365*deathAge);
    document.write("You will need "+lifetimeConsumption+" to last you until the ripe old age of "+deathAge);
}
calculateSupply(80, 3);