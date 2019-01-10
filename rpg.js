var playerProfile = {
  name: "Sawyer",
  HP: 10,
  MP: 15,
  strength: 5,
  defense: 4,
  level: 1,
  turn: true,
  exp: 0,
  spells: ["Hellfire", "Thundara", "Blizzard", "Cure"],
  inventory: ["Herb", "Meat", "Elixir"],

  playerTurn: function turn(playerProfile, playerCopy, enemyCopy, enemyProfile) {
    console.log("Options: " + "\n" + "Attack" + "\n" + "Magic" + "\n" + "Item" + "\n" + "Stats" + "\n" + "Cancel");
    var choice = prompt("What is your choice?");
    choice = choice.toLowerCase();
    console.clear();
    var hitRate = Math.round(Math.random() * 100);
    switch (choice) {

      case "attack":
        console.log("You swing your sword...");
        if (hitRate >= 91) {
          console.log("A critical blow!")
          var damage = (playerProfile.strength - enemyProfile.defense);
          enemyCopy.HP = enemyCopy.HP - (damage * 2);
          console.log("Enemy Health: " + enemyProfile.HP);
          playerProfile.turn = false;
        } else if (hitRate >= 55) {
          console.log("Hit!")
          var damage = (playerProfile.strength - enemyProfile.defense);
          enemyCopy.HP = enemyCopy.HP - damage;
          console.log("Enemy Health: " + enemyCopy.HP);
          playerProfile.turn = false;
        } else {
          console.log("Miss")
          playerProfile.turn = false;
        }
        break;

      case "magic":
        playerProfile.spells.forEach(function (spell) {
          spell = spell.toString();
          console.log(spell);
        })
        var spell = prompt("Choose a spell...");
        spell = spell.toLowerCase();
        console.clear();
        switch (spell) {

          case "hellfire":
            var atkDamage = 7 // attack damage of spell
            var cost = 4; // cost of spell
            var damage = atkDamage - enemyProfile.defense
            if (cost > playerCopy.MP) {
              console.log("Not enough mana...")
            } else {
              console.log("You mutter softly the ancient words..." + "\n" + "The air begins to warm and the sky darkens and smokes before unleashing hellfire");
              if (hitRate > 93) {
                console.log("You enter a trance and unleash your arcane power! Critical!")
                playerCopy.MP = playerCopy.MP - cost
                enemyCopy.HP = enemyCopy.HP - (damage * 2);
                if (enemyCopy.HP <= 0) {
                  enemyCopy.HP = 0
                }
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              } else if (hitRate > 67) {
                console.log("You enter a trance...")
                playerCopy.MP = playerCopy.MP - cost
                enemyCopy.HP = enemyCopy.HP - damage;
                if (enemyCopy.HP <= 0) {
                  enemyCopy.HP = 0
                }
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              } else {
                console.log("Miss")
                playerCopy.MP = playerCopy.MP - cost
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              }
            }
            break;

          case "thundara":
            var atkDamage = 7 // attack damage of spell
            var cost = 4; // cost of spell
            var damage = atkDamage - enemyProfile.defense
            if (cost > playerCopy.MP) {
              console.log("Not enough mana...")
            } else {
              console.log("You mutter softly the ancient words..." + "\n" + "The air begins to crackle with energy and a bolt of lightning streaks from the heavens");
              if (hitRate > 93) {
                console.log("You enter a trance and unleash your arcane power! Critical!")
                playerCopy.MP = playerCopy.MP - cost
                enemyCopy.HP = enemyCopy.HP - (damage * 2);
                if (enemyCopy.HP <= 0) {
                  enemyCopy.HP = 0
                }
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              } else if (hitRate > 67) {
                console.log("You enter a trance...")
                playerCopy.MP = playerCopy.MP - cost
                enemyCopy.HP = enemyCopy.HP - damage;
                if (enemyCopy.HP <= 0) {
                  enemyCopy.HP = 0
                }
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              } else {
                console.log("Miss")
                playerCopy.MP = playerCopy.MP - cost
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              }
            }
            break;

          case "blizzard":
            var atkDamage = 7 // attack damage of spell
            var cost = 4; // cost of spell
            var damage = atkDamage - enemyProfile.defense
            if (cost > playerCopy.MP) {
              console.log("Not enough mana...")
            } else {
              console.log("You mutter softly the ancient words..." + "\n" + "A frigid wind roars from the distance");
              if (hitRate > 93) {
                console.log("You enter a trance and unleash your arcane power! Critical!")
                playerCopy.MP = playerCopy.MP - cost
                enemyCopy.HP = enemyCopy.HP - (damage * 2);
                if (enemyCopy.HP <= 0) {
                  enemyCopy.HP = 0
                }
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              } else if (hitRate > 67) {
                console.log("You enter a trance...")
                playerCopy.MP = playerCopy.MP - cost
                enemyCopy.HP = enemyCopy.HP - damage;
                if (enemyCopy.HP <= 0) {
                  enemyCopy.HP = 0
                }
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              } else {
                console.log("Miss")
                playerCopy.MP = playerCopy.MP - cost
                console.log("Enemy Health: " + enemyCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              }
            }
            break;

          case "cure":
            console.log("playerCopy: " + playerCopy.HP);
            var heal = 6; // attack damage of spell
            var cost = 2; // cost of spell
            if (cost > playerCopy.MP) {
              console.log("Not enough mana...")
            } else {
              if (playerCopy.HP < playerProfile.HP) {
                console.log("You mutter softly the ancient words..." + "\n" + "A healing aura forms around you. You feel replenished.")
                playerCopy.MP = playerCopy.MP - cost;
                playerCopy.HP = playerCopy.HP + heal;
                if (playerCopy.HP >= playerProfile.HP) {
                  playerCopy.HP = playerProfile.HP
                }
                console.log("Player Health: " + playerCopy.HP);
                console.log("Player Mana: " + playerCopy.MP);
                playerProfile.turn = false;
              } else {
                console.log("Your health is full!")
              }
            }
            break;
        }
        break;

      case "item":
        playerProfile.inventory.forEach(function (item) {
          item = item.toString();
          console.log(item);
        })
        var item = prompt("Choose an item...");
        item = item.toLowerCase();
        console.clear();
        switch (item) {

          case "herb":
            var heal = 4;
            if (playerCopy.HP < playerProfile.HP) {
              console.log("You consume the herb.")
              playerCopy.inventory.splice(0, 1)
              console.log(playerCopy.inventory);
              playerCopy.HP = playerCopy.HP + heal;
              if (playerCopy.HP >= playerProfile.HP) {
                playerCopy.HP = playerProfile.HP
              }
              console.log("Player Health: " + playerCopy.HP);
              playerProfile.turn = false;
            } else {
              console.log("Your health is full!")
            }
            break;

          case "meat":
            var heal = 3;
            if (playerCopy.HP < playerProfile.HP) {
              console.log("You consume the meat.")
              playerCopy.inventory.splice(1, 1)
              console.log(playerCopy.inventory);
              playerCopy.HP = playerCopy.HP + heal;
              if (playerCopy.HP >= playerProfile.HP) {
                playerCopy.HP = playerProfile.HP
              }
              console.log("Player Health: " + playerCopy.HP);
              playerProfile.turn = false;
            } else {
              console.log("Your health is full!")
            }
            break;

          case "elixir":
            var mana = 3;
            if (playerCopy.MP < playerProfile.MP) {
              console.log("You drink the elixir.")
              playerCopy.inventory.splice(2, 1)
              console.log(playerCopy.inventory);
              playerCopy.MP = playerCopy.MP + mana;
              if (playerCopy.MP >= playerProfile.MP) {
                playerCopy.MP = playerProfile.MP
              }
              console.log("Player MP: " + playerCopy.MP);
              playerProfile.turn = false;
            } else {
              console.log("Your mana is full!")
            }
            break;
        }
        break;

      case "stats":
        console.log("Player Health: " + playerCopy.HP + "/" + playerProfile.HP);
        console.log("Player Mana: " + playerCopy.MP + "/" + playerProfile.MP)
        console.log("Enemy Health: " + enemyCopy.HP + "/" + enemyProfile.HP)
        break;

      case "cancel": // cancels program and ends loop
        throw new Error("Cancelled program")
    }
  }
};

var enemyProfile = {
  name: "Bat",
  HP: 10,
  MP: 5,
  strength: 5,
  defense: 3,
  level: 1,

  enemyTurn: function turn(playerProfile, playerCopy, enemyProfile) {

    console.log("The enemy strikes!");
    var hitRate = Math.round(Math.random() * 100);
    if (hitRate >= 91) {
      console.log("A critical blow!")
      var damage = (enemyProfile.strength - playerProfile.defense);
      playerCopy.HP = playerCopy.HP - (damage * 2);
      console.log("Player Health: " + playerCopy.HP);
      playerProfile.turn = true;
    } else if (hitRate >= 55) {
      console.log("Hit!")
      var damage = (enemyProfile.strength - playerProfile.defense);
      playerCopy.HP = playerCopy.HP - damage;
      console.log("Player Health: " + playerCopy.HP);
      playerProfile.turn = true;
    } else {
      console.log("Miss")
      playerProfile.turn = true;
    }
  }
}

function reset() { //resets game after stopping, enter into console as reset()
  location.reload();
}

function run(playerProfile, enemyProfile) {

  var startPlayerValues = playerProfile;
  var startEnemyValues = enemyProfile;
  var playerCopy = Object.assign({}, startPlayerValues); // creates copy of playerProfile object to keep track of initial values
  var enemyCopy = Object.assign({}, startEnemyValues);   // creates copy of enemyProfile array object to keep track of intial values

  while (playerProfile.HP >= 0 || enemyProfile.HP >= 0) {
    if (playerProfile.turn === true) {
      playerProfile.playerTurn(playerProfile, playerCopy, enemyCopy, enemyProfile);
      if (enemyCopy.HP <= 0) {
        enemyCopy.HP = 0
        throw new Error("You have slain the beast");
      }
    } else {
      enemyProfile.enemyTurn(playerProfile, playerCopy, enemyProfile);
      if (playerCopy.HP <= 0) {
        playerCopy.HP = 0;
        throw new Error("The beast makes a fatal blow. Thou art dead...")
      }
    }
  }
}



run(playerProfile, enemyProfile); // automatically starts game upon load, 
                                  // can also be used to restart it after stopping
                                  // as run(playerProfile, enemyProfile);

