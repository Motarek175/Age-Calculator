let b = document.querySelector(".container .birthday");
let h = document.querySelector("h2:nth-of-type(3)");
let d = document.getElementById("bday");
let m = document.getElementById("bmonth");
let y = document.getElementById("byear");

// Local date
let currentDate = new Date();
let localD = currentDate.getDate();
let localM = currentDate.getMonth() + 1;
let localY = currentDate.getFullYear();
let tday = document.getElementById("tday");
let tmonth = document.getElementById("tmonth");
let tyear = document.getElementById("tyear");
tday.value = localD;
tmonth.value = localM;
tyear.value = localY;

function birth() {
  // User input
  let userD = parseInt(document.getElementById("day").value);
  let userM = parseInt(document.getElementById("month").value);
  let userY = parseInt(document.getElementById("year").value);
  if (!isNaN(userD) && !isNaN(userM) && !isNaN(userY)) {
    if (userD <= 31 && userM <= 12) {
      // Age calculation
      let birthyear = localY - userY;
      let birthmonth = localM - userM;
      let birthday = localD - userD;
      if (birthmonth < 0 || (birthmonth === 0 && localD < userD)) {
        birthyear--;
        birthmonth += 12;
      }
      if (localD < userD) {
        birthmonth--;
        let tempDate = new Date(localY, localM - 1, 0);
        birthday += tempDate.getDate();
      }
      b.style.cssText = "transform : scale(1)";
      h.style.cssText = "transform : scale(1)";
      d.value = birthday;
      m.value = birthmonth;
      y.value = birthyear;
    } else {
      alert("Please enter a valid inputs");
      b.style.cssText = "transform : scale(0)";
      h.style.cssText = "transform : scale(0)";
    }
  } else {
    alert("Please fill all fields.");
    b.style.cssText = "transform : scale(0)";
    h.style.cssText = "transform : scale(0)";
  }
}
