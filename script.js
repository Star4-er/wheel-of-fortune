document.addEventListener("DOMContentLoaded", function () {
  const wheel = document.querySelector(".wheel");
  const button = document.querySelector(".spin-button");

  // Углы с золотыми вставками
  const winningAngles = [75,180,280]; // 75 (Bonus Pack 330% до €4000 on first 4 deposits)  185(400 FS on first) 280(300% up to €3000)
  let lastAngle = null;

  button.addEventListener("click", function () {
    button.disabled = true;

    let targetAngle;
    do {
      const randomIndex = Math.floor(Math.random() * winningAngles.length);
      targetAngle = winningAngles[randomIndex];
    } while (targetAngle === lastAngle); // Если совпадает, выбираем заново

    lastAngle = targetAngle;

    console.log(targetAngle);

    // Добавляем несколько полных оборотов перед остановкой
    const fullRotations = 5 * 360; // 5 полных кругов
    const finalAngle = fullRotations + targetAngle;

    // Анимация вращения
    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = `rotate(${finalAngle}deg)`;

    // Возвращаем кнопку в активное состояние после окончания вращения
    setTimeout(() => {
      button.disabled = false;
    }, 2000);
    if (targetAngle == 280) {
      let h1 = document.createElement("h1");
      h1.textContent = "Congratulations!";
      let h2 = document.createElement("h2");
      h2.textContent = "You won:";
      let p = document.createElement("p");
      p.textContent =
        "Bonus Pack 300% up to €3000 + 300 FS on first 4 deposits";
        let button = document.createElement("button");
      button.textContent = "Take Bonus"
      button.style.cursor = "pointer";
      button.setAttribute("onclick", "hidePopup()");

      document.getElementById("container").appendChild(h1);
      document.getElementById("container").appendChild(h2);
      document.getElementById("container").appendChild(p);
      document.getElementById("container").appendChild(button);
      setTimeout(showPopup, 5000);

    } else if (targetAngle == 75) {
      let h1 = document.createElement("h1");
      h1.textContent = "Congratulations!";
      let h2 = document.createElement("h2");
      h2.textContent = "You won:";
      let p = document.createElement("p");
      p.textContent = "Bonus Pack 330% up to €4000 on first 4 deposits";
      let button = document.createElement("button");
      button.textContent = "Take Bonus"
      button.style.cursor = "pointer";
      button.setAttribute("onclick", "hidePopup()");

      document.getElementById("container").appendChild(h1);
      document.getElementById("container").appendChild(h2);
      document.getElementById("container").appendChild(p);
      document.getElementById("container").appendChild(button);
      setTimeout(showPopup, 5000);

    } else if (targetAngle == 180) {
      let h1 = document.createElement("h1");
      h1.textContent = "Congratulations!";
      // h1.className = "main-text"; 
      let h2 = document.createElement("h2");
      h2.textContent = "You won:";
      let p = document.createElement("p");
      p.textContent = "Bonus Pack 400 FS on first 4 deposit";
      let button = document.createElement("button");
      button.textContent = "Take Bonus"
      button.style.cursor = "pointer";
      button.setAttribute("onclick", "hidePopup()");

      document.getElementById("container").appendChild(h1);
      document.getElementById("container").appendChild(h2);
      document.getElementById("container").appendChild(p);
      document.getElementById("container").appendChild(button);
      setTimeout(showPopup, 5000);
    }
  });
});

// POPUP //////////////////////

function showPopup() {
  document.getElementById("popup").classList.add("show");
}

function hidePopup() {
  document.getElementById("popup").classList.remove("show");
    setTimeout(() => {container.innerHTML = '';}, 2000)
}

// ENd POPUP//////

function updateImages() {
  const lendingSection = document.querySelector(".lending");

  if (window.innerWidth < 767) {
    lendingSection.style.backgroundImage = "url('../images/phonebg.jpg')";
    document.querySelector(".svg-img-stone").src = "../images/stonephone.svg";
  } else if (window.innerWidth < 968) {
    lendingSection.style.backgroundImage = "url('../images/ipad.jpg')";
    document.querySelector(".svg-img-stone").src = "../images/stoneipad2.svg";
  } else {
    lendingSection.style.backgroundImage = "url('../images/PCbg.jpg')";
    document.querySelector(".svg-img-stone").src = "../images/stonepc.svg";
  }

  if (window.innerWidth < 767 || window.innerWidth < 968) {
    document.querySelector(".png-img-wheel").src = "../images/wheel2.png";
  } else {
    document.querySelector(".png-img-wheel").src = "../images/wheelpc.png";
  }


}

// Запускаем при загрузке
updateImages();

// Следим за изменением размера экрана
window.addEventListener("resize", updateImages);


