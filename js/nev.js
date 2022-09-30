const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
     addPotion(newPotion) {
      for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
      }
    return this.potions.push(newPotion);
  },
   removePotion(potionName) {
      for (const potion of this.potions) {
        const potionIndex = this.potions.indexOf(potion);
      if (potionName === potion.name) {
        this.potions.splice(potionIndex, 1);
        }
      }
        return `Potion ${potionName} is not in inventory!`;
  },
    updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (oldName === potion.name) {
        potion.name = newName;
      }
    }
        return `Potion ${oldName} is not in inventory!`;
  },
  
  
    // Change code above this line
  };