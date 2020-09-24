function A() {
    var form = document.form;
    var dob = form.DOB.value.split("-");
    var coun = form.country.value;
    if (dob == "") {
        alert("please select date");
        return false;
    }
    document.getElementById("BOD").innerHTML = dob[2] + "-" + dob[1] + "-" + dob[0];
    // document.getElementById("BT").innerHTML=hrs;
    document.getElementById("country").innerHTML = coun;
    console.log(dob, coun);
    var value;
    if (dob[1] == 1 && dob[2] >= 20 || dob[1] == 2 && dob[2] <= 18) { value = "Aquarius"; }
    if (dob[1] == 1 && dob[2] > 31) { value = "Huh?"; }
    if (dob[1] == 2 && dob[2] >= 19 || dob[1] == 3 && dob[2] <= 20) { value = "Pisces"; }
    if (dob[1] == 2 && dob[2] > 29) { value = "Say what?"; }
    if (dob[1] == 3 && dob[2] >= 21 || dob[1] == 4 && dob[2] <= 19) { value = "Aries"; }
    if (dob[1] == 3 && dob[2] > 31) { value = "OK.  Whatever."; }
    if (dob[1] == 4 && dob[2] >= 20 || dob[1] == 5 && dob[2] <= 20) { value = "Taurus"; }
    if (dob[1] == 4 && dob[2] > 30) { value = "I’m soooo sorry!"; }
    if (dob[1] == 5 && dob[2] >= 21 || dob[1] == 6 && dob[2] <= 21) { value = "Gemini"; }
    if (dob[1] == 5 && dob[2] > 31) { value = "Umm … no."; }
    if (dob[1] == 6 && dob[2] >= 22 || dob[1] == 7 && dob[2] <= 22) { value = "Cancer"; }
    if (dob[1] == 6 && dob[2] > 30) { value = "Sorry."; }
    if (dob[1] == 7 && dob[2] >= 23 || dob[1] == 8 && dob[2] <= 22) { value = "Leo"; }
    if (dob[1] == 7 && dob[2] > 31) { value = "Excuse me?"; }
    if (dob[1] == 8 && dob[2] >= 23 || dob[1] == 9 && dob[2] <= 22) { value = "Virgo"; }
    if (dob[1] == 8 && dob[2] > 31) { value = "Yeah. Right."; }
    if (dob[1] == 9 && dob[2] >= 23 || dob[1] == 10 && dob[2] <= 22) { value = "Libra"; }
    if (dob[1] == 9 && dob[2] > 30) { value = "Try Again."; }
    if (dob[1] == 10 && dob[2] >= 23 || dob[1] == 11 && dob[2] <= 21) { value = "Scorpio"; }
    if (dob[1] == 10 && dob[2] > 31) { value = "Forget it!"; }
    if (dob[1] == 11 && dob[2] >= 22 || dob[1] == 12 && dob[2] <= 21) { value = "Sagittarius"; }
    if (dob[1] == 11 && dob[2] > 30) { value = "Invalid dob[2]"; }
    if (dob[1] == 12 && dob[2] >= 22 || dob[1] == 1 && dob[2] <= 19) { value = "Capricorn"; }
    if (dob[1] == 12 && dob[2] > 31) { value = "No way!"; }

    document.getElementById("BS").innerHTML = value;
    console.log(value);
    document.getElementById("PN").innerHTML = "Raw Tiger Eye Necklace";
    document.getElementById("SP").innerHTML = "Shungite Raven Necklace,Amethyst Freeform Cluster Necklace , Raw Mookaite Necklace";
    document.getElementById("NP").innerHTML = "Raw Emerald in Matrix Necklace, Black Kyanite Fan Necklace, Raw Arizona Turquoise Nugget Necklace";
    document.getElementById("PRE").innerHTML = "Acorrding to your moon sign One copper electroformed raw Mookaite necklace on a 24 antique copper ball chain. Mookaite is said to help calm your worries and assuage your fears by showing you there’s nothing in this world that you cannot handle.";

    return false;
}