function A() {
  document.getElementById('B').style.display = "block";
  document.getElementById('B').scrollIntoView();
  var form = document.form;
  var dob = form.DOB.value.split("-");
  var coun = form.country.value;
  if (dob == "") {
    alert("please select date");
    return false;
  }
  document.getElementById("BOD").innerHTML = dob[2] + "-" + dob[1] + "-" + dob[0];
  document.getElementById("country").innerHTML = coun;
  console.log(dob, coun);
  var value;
  if (dob[1] == 1 && dob[2] >= 20 || dob[1] == 2 && dob[2] <= 18) {
    value = "Aquarius";
  }
  if (dob[1] == 1 && dob[2] > 31) {
    value = "Huh?";
  }
  if (dob[1] == 2 && dob[2] >= 19 || dob[1] == 3 && dob[2] <= 20) {
    value = "Pisces";
  }
  if (dob[1] == 2 && dob[2] > 29) {
    value = "Say what?";
  }
  if (dob[1] == 3 && dob[2] >= 21 || dob[1] == 4 && dob[2] <= 19) {
    value = "Aries";
  }
  if (dob[1] == 3 && dob[2] > 31) {
    value = "OK.  Whatever.";
  }
  if (dob[1] == 4 && dob[2] >= 20 || dob[1] == 5 && dob[2] <= 20) {
    value = "Taurus";
  }
  if (dob[1] == 4 && dob[2] > 30) {
    value = "I’m soooo sorry!";
  }
  if (dob[1] == 5 && dob[2] >= 21 || dob[1] == 6 && dob[2] <= 21) {
    value = "Gemini";
  }
  if (dob[1] == 5 && dob[2] > 31) {
    value = "Umm … no.";
  }
  if (dob[1] == 6 && dob[2] >= 22 || dob[1] == 7 && dob[2] <= 22) {
    value = "Cancer";
  }
  if (dob[1] == 6 && dob[2] > 30) {
    value = "Sorry.";
  }
  if (dob[1] == 7 && dob[2] >= 23 || dob[1] == 8 && dob[2] <= 22) {
    value = "Leo";
  }
  if (dob[1] == 7 && dob[2] > 31) {
    value = "Excuse me?";
  }
  if (dob[1] == 8 && dob[2] >= 23 || dob[1] == 9 && dob[2] <= 22) {
    value = "Virgo";
  }
  if (dob[1] == 8 && dob[2] > 31) {
    value = "Yeah. Right.";
  }
  if (dob[1] == 9 && dob[2] >= 23 || dob[1] == 10 && dob[2] <= 22) {
    value = "Libra";
  }
  if (dob[1] == 9 && dob[2] > 30) {
    value = "Try Again.";
  }
  if (dob[1] == 10 && dob[2] >= 23 || dob[1] == 11 && dob[2] <= 21) {
    value = "Scorpio";
  }
  if (dob[1] == 10 && dob[2] > 31) {
    value = "Forget it!";
  }
  if (dob[1] == 11 && dob[2] >= 22 || dob[1] == 12 && dob[2] <= 21) {
    value = "Sagittarius";
  }
  if (dob[1] == 11 && dob[2] > 30) {
    value = "Invalid dob[2]";
  }
  if (dob[1] == 12 && dob[2] >= 22 || dob[1] == 1 && dob[2] <= 19) {
    value = "Capricorn";
  }
  if (dob[1] == 12 && dob[2] > 31) {
    value = "No way!";
  }

var month=dob[1];
var date=dob[2];
var pn="";
    if (month == 3) {
      if (date >= 21) {
        if (date % 2 == 0) {
          pn="Raw Mookaite Necklace";
        } else {
          pn="Raw Tiger Eye Necklace";
        }
      } else if (date >= 10) {
        if (date % 2 == 0) {
          pn="Tabasco Geode Necklace";
        } else {
          pn="Rainbow Aura Crescent Moon Necklace";
        }
      }
    } else if (month == 4) {
      if (date <= 7) {
        if (date % 2 == 0) {
          pn="Shungite Raven Necklace";
        } else {
          pn="Amethyst Freeform Cluster Necklace";
        }
      } else if (date >= 8 && date <= 16) {
        if (date % 2 == 0) {
          pn="Black Kyanite Fan Necklace";
        } else {
          pn="Raw Arizona Turquoise Nugget Necklace";
        }
      } else if (date >= 17 && date <= 20) {
        pn="Raw Emerald in Matrix Necklace";
      } else if (date >= 21) {
        if (date % 2 == 0) {
          pn="Amethyst Elestial Wand Necklace";
        } else {
          pn="Quartz Stalactite Flower Necklace";
        }
      }
    } else if (month == 5) {
      if (date <= 8) {
        if (date % 2 == 0) {
          pn="Copper Coffin Nail Necklace";
        } else {
          pn="Amethyst Mountain Necklace";
        }
      } else if (date >= 9 && date <= 17) {
        if (date % 2 == 0) {
          pn="Blue Kyanite Blade Necklace";
        } else {
          pn="Black Tourmaline Necklace";
        }
      } else if (date >= 18 && date <= 20) {
        pn="Pink Agate Slice Necklace";
      } else if (date >= 21) {
        if (date % 2 == 0) {
          pn="Natural Agate Slice Necklace";
        } else {
          pn="Gunmetal Antique Coffin Nail Necklace";
        }
      }
    } else if (month == 6) {
      if (date <= 8) {
        if (date % 2 == 0) {
          pn="Guardian Scarab Beetle & Rainbow Moonstone Necklace";
        } else {
          pn="Jasper Arrowhead Necklace";
        }
      }
      if (date >= 9 && date <= 17) {
        if (date % 2 == 0) {
          pn="Petite Amethyst Moon Necklace";
        } else {
          pn="Rosy Hue Solar Quartz Necklace";
        }
      } else if (date >= 18 && date <= 21) {
        pn="Green Agate Slice Necklace";
      } else if (date >= 22) {
        if (date % 2 == 0) {
          pn="Blue/Teal Agate Slice Necklace";
        } else {
          pn="Purple Agate Slice Necklace";
        }
      }
    } else if (month == 7) {
      if (date <= 10) {
        if (date % 2 == 0) {
          pn="Raw Ruby Necklace";
        } else {
          pn="Clear Quartz Crystal Necklace";
        }
      }
      if (date >= 11 && date <= 19) {
        if (date % 2 == 0) {
          pn="Raw Sapphire Necklace";
        } else {
          pn="Raw Rose Quartz Necklace";
        }
      } else if (date >= 20 && date <= 23) {
        pn="Red Hematoid Quartz Necklace";
      } else if (date >= 24) {
        if (date % 2 == 0) {
          pn="Herkimer Diamond Earrings";
        } else {
          pn="Citrine Point & Bee Necklace";
        }
      }
    } else if (month == 8) {
      if (date <= 10) {
        if (date % 2 == 0) {
          pn="Shiva Eye Necklace";
        } else {
          pn="Rainbow Moonstone Teardrop Earrings";
        }
      }
      if (date >= 11 && date <= 19) {
        if (date % 2 == 0) {
          pn="Pink Agate Seahorse Necklace";
        } else {
          pn="Purple Agate Seahorse Necklace";
        }
      } else if (date >= 20 && date <= 23) {
        pn="Natural Agate Seahorse Necklace";
      } else if (date >= 24) {
        if (date % 2 == 0) {
          pn="Opalite Heart Necklace";
        } else {
          pn="Lithium Phantom Quartz Point Necklace";
        }
      }
    } else if (month == 9) {
      if (date <= 10) {
        if (date % 2 == 0) {
          pn="Citrine Point Necklace";
        } else {
          pn="Opalite Crescent Moon Necklace";
        }
      }
      if (date >= 11 && date <= 19) {
        if (date % 2 == 0) {
          pn="Fuchsite in Quartz Necklace";
        } else {
          pn="Petite Herkimer Diamond Necklace";
        }
      } else if (date >= 20 && date <= 23) {
        pn="Naturally Shed Deer Antler Necklace";
      } else if (date >= 24) {
        if (date % 2 == 0) {
          pn="Fuchsite in Quartz Drop Earrings";
        } else {
          pn="Chrysoprase Necklace";
        }
      }
    } else if (month == 10) {
      if (date <= 10) {
        if (date % 2 == 0) {
          pn="Rose Quartz Crescent Moon Necklace";
        } else {
          pn="Rose Quartz Heart Necklace";
        }
      }
      if (date >= 11 && date <= 18) {
        if (date % 2 == 0) {
          pn="Petite Druzy Heart Necklace";
        } else {
          pn="Oco Agate Geode Necklace";
        }
      } else if (date >= 19 && date <= 22) {
        pn="Petite Druzy Crescent Moon Necklace";
      } else if (date >= 23) {
        if (date % 2 == 0) {
          pn="Sparkly Scarlet Chalcedony Heart Necklace";
        } else {
          pn="Amethyst Crystal Point & Bee Necklace";
        }
      }
    } else if (month == 11) {
      if (date <= 10) {
        if (date % 2 == 0) {
          pn="Petite Amethyst Cluster Crescent Moon Necklace";
        } else {
          pn="Citrine Cluster Necklace";
        }
      }
      if (date >= 11 && date <= 18) {
        if (date % 2 == 0) {
          pn="Obsidian Heart NecklacE";
        } else {
          pn="Carved Labradorite Peacock Necklace";
        }
      } else if (date >= 19 && date <= 22) {
        pn="Rainbow Agate Necklace";
      } else if (date >= 23) {
        if (date % 2 == 0) {
          pn="Citrine Hexagonal Pyramid Necklace";
        } else {
          pn="Carved Labradorite Cicada Necklace";
        }
      }
    } else if (month == 12) {
      if (date <= 10) {
        if (date % 2 == 0) {
          pn="Rose Quartz Hexagonal Pyramid NecklacE";
        } else {
          pn="Labradorite Sugar Skull Necklace";
        }
      }
      if (date >= 11 && date <= 18) {
        if (date % 2 == 0) {
          pn="Clear Quartz Crystal Lightning Bolt Necklace";
        } else {
          pn="Rainbow Moonstone Sugar Skull Necklace";
        }
      } else if (date >= 19 && date <= 22) {
        pn="Blush Rose Quartz Lightning Bolt Necklace";
      } else if (date >= 23) {
        if (date % 2 == 0) {
          pn="Rose Quartz Pencil Point Necklace";
        } else {
          pn="Ancient Ammonite Necklace";
        }
      }
    }

    document.getElementById("BS").innerHTML = value;
    console.log(value);
    document.getElementById("PN").innerHTML = pn;

    return false;
  }
