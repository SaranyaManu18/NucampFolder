function rollDice() {
  let goldCoins = 0;

  for (let i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
    alert("The roll value is: " + roll);

    if (roll === 1) {
      alert("Game over, no more rolls!");
      break;
    }
    if (roll < 5) {
      continue;
    }
    alert("Congrats! You win " + roll + " coins.");
    goldCoins += roll;
  }
  alert("You have won a totl of " + goldCoins + " gold coins.");
}
