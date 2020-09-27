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

  var month = dob[1];
  var date = dob[2];
  var stone = "";
  if (month == 1) {
    if (date <= 20) {
      stone = "Herkimer Diamond";

    } else if (date >= 21) {
      if (date % 2 == 0) {
        stone = "Ammonite";

      } else {
        stone = "Amethyst";

      }
    }
  } else if (month == 2) {
    if (date <= 19) {
      if (date % 2 == 0) {
        stone = "Ammonite";

      } else {
        stone = "Amethyst";

      }
    } else if (date >= 20) {
      if (date % 2 == 0) {
        stone = "Druzy";

      } else {
        stone = "Quartz";

      }
    }
  } else if (month == 3) {
    if (date <= 20) {
      if (date % 2 == 0) {
        stone = "Druzy";

      } else {
        stone = "Quartz";

      }
    }
    if (date >= 21) {
      stone = "Jasper";

    }
  } else if (month == 4) {
    if (date <= 10) {
      stone = "Ruby";

    } else if (date >= 11 && date <= 20) {
      stone = "Sapphire";

    } else if (date >= 21) {
      stone = "Shungite";

    }
  } else if (month == 5) {
    if (date <= 10) {
      stone = "Kyanite";

    } else if (date >= 11 && date <= 20) {
      stone = "Opalite";

    } else if (date >= 21) {
      if (date % 2 == 0) {
        stone = "Druzy";

      } else {
        stone = "Agate";

      }
    }
  } else if (month == 6) {
    if (date <= 21) {
      if (date % 2 == 0) {
        stone = "Druzy";

      } else {
        stone = "Agate";

      }
    }
    if (date >= 22 && date <= 30) {
      if (date % 2 == 0) {
        stone = "Moonstone";

      } else {
        stone = "Citrine";

      }
    }
  } else if (month == 7) {
    if (date <= 23) {
      if (date % 2 == 0) {
        stone = "Moonstone";

      } else {
        stone = "Citrine";

      }
    } else if (date >= 24) {
      if (date % 2 == 0) {
        stone = "Shiva Eye";

      } else {
        stone = "Emerald";

      }
    }
  } else if (month == 8) {
    if (date <= 23) {
      if (date % 2 == 0) {
        stone = "Shiva Eye";

      } else {
        stone = "Emerald";

      }
    } else if (date >= 24) {
      if (date % 2 == 0) {
        stone = "Raw Mookaite";

      } else {
        stone = "Shiva Eye";

      }
    }
  } else if (month == 9) {
    if (date <= 23) {
      if (date % 2 == 0) {
        stone = "Mookaite";

      } else {
        stone = "Shiva Eye";

      }
    } else if (date >= 24) {
      stone = "Tourmaline";

    }
  } else if (month == 10) {
    if (date <= 11) {
      stone = "Opalite";

    }
    if (date >= 12 && date <= 22) {
      stone = "Chrysoprase";

    } else if (date >= 23) {
      if (date % 2 == 0) {
        stone = "Obsidian";

      } else {
        stone = "Labradorite";

      }
    }
  } else if (month == 11) {
    if (date <= 22) {
      if (date % 2 == 0) {
        stone = "Labradorite";

      } else {
        stone = "Obsidian";

      }
    } else if (date >= 23) {
      stone = "Tiger Eye";

    }
  } else if (month == 12) {
    if (date <= 11) {
      stone = "Turquoise";

    }
    if (date >= 12 && date <= 22) {
      stone = "Chalcedony";

    } else if (date >= 23) {
      stone = "Herkimer Diamond";

    }
  }
  var des = '';
  if (stone == "Tiger Eye") {
    des = "Tiger Eye is said to hold the power of the noontime sun, the energy of the midsummer, and the peak of life-force throughout the year.";
  } else if (stone == "Raw Mookaite" ||stone == "Mookaite") {
    des = "Raw Mookaite is said to help calm your worries and assuage your fears by showing you there’s nothing in this world that you cannot handle.";
  } else if (stone == "Amethyst") {
    des = "Amethyst is a grounding stone that brings about tranquility and calmness";
  } else if (stone == "Shungite") {
    des = "Shungite is known for its incredible healing and protection properties, including boosting energy, the immune system, balancing mind and emotions, protecting from harmful EMFs, detoxification and purification of the body.";
  } else if (stone == "Turquoise") {
    des = "Turquoise promotes self-realization and assists creative problem solving";
  } else if (stone == "Quartz") {
    des = "It's said to amplify energy by absorbing, storing, releasing, and regulating it. It's also said to aid concentration and memory. Physically, clear crystals are claimed to help stimulate the immune system and balance out your entire body.";
  } else if (stone == "Herkimer Diamond") {
    des = "Herkimer Diamond is one of the strongest crystals for clearing electromagnetic pollution or radioactivity, blocking geopathic stress, and for the restoration of equilibrium. Smoky Herkimer Diamond has a strong grounding energy that is helpful for healing the earth chakra and the environment";
  } else if (stone == "Chalcedony") {
    des = "Chalcedony is said to be a nurturing stone that promotes brotherhood and good will. It also absorbs negative energy.";
  } else if (stone == "Obsidian") {
    des = "Obsidian is truth-enhancing. A strongly protective stone, it forms a shield against negativity. It blocks psychic attack and absorbs negative energies from the environment.";
  } else if (stone == "Labradorite") {
    des = "Labradorite is said to banish fears, insecurities and also the psychic debris from previous disappointments, including those experienced in past lives";
  } else if (stone == "Chrysoprase") {
    des = "Chrysoprase is one of the birthstones for May and has traditionally symbolized happiness, enterprise and prudence. It is a powerful stone that brings good fortune and prosperity";
  } else if (stone == "Opalite") {
    des = "Opalite is said to assist during transitions of all kinds. It engenders persistence and gives us strength in verbalizing our hidden feelings";
  } else if (stone == "Emerald") {
    des = "Emerald can encourage bonding, strengthen communication and understanding, and help each person to adequately express themselves without offending others";
  } else if (stone == "Tourmaline") {
    des = "Tourmaline is a protective stone which repels and blocks negative energies as well as psychic attacks";
  } else if (stone == "Shiva Eye") {
    des = "This stone is actually the protective door found at the opening of the turban snail’s shell, which towards the end of the snail’s natural life, detaches and sinks to the seabed.";
  } else if (stone == "Citrine") {
    des = "Citrine promotes motivation, activates creativity and encourages self-expression. Enhances concentration and revitalizes the mind. It releases negative traits, depression, fears and phobias. Emotionally balancing.";
  } else if (stone == "Druzy") {
    des = "Druzy is believed to be associated with peace, tranquillity, patience, intuition, and unconditional love.";
  } else if (stone == "Agate") {
    des = "Agates are known for fortune and luck.";
} else if (stone == "Moonstone") {
  des = "Moonstone is a stone of inner growth and strength. It soothes emotional instability and stress, and stabilises the emotions, providing calmness.";
} else if (stone == "Kyanite") {
  des = "Kyanite not only grounds spiritual energy, but it also energizes the body";
} else if (stone == "Sapphire") {
  des = "Sapphire is known as the Wisdom Stone, it is said to release mental tension, depression, and unwanted thoughts.";
} else if (stone == "Ruby") {
  des = "Ruby is believed to promote loving, nurturing, health, knowledge and wealth.";
} else if (stone == "Jasper") {
  des = "Jasper is a stone of grounding and stability, providing comfort and security, strength and healing.";
} else if (stone == "Ammonite") {
  des = "The Ammonite is a very powerful earth healing fossil. Ammonites have absorbed cosmic energy over eons of time and help to stimulate the life force (Chi) within. Ammonites are often used for activating Kundalini and life path energies.";
}


document.getElementById("BS").innerHTML = value;
console.log(value);
document.getElementById("PN").innerHTML = stone;
document.getElementById("des").innerHTML = des;

return false;
}
