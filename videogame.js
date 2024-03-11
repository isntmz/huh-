function gameStart() {
    console.log("Game Started. Good luck, adventurer.")
    window.alert("your mom is wooden frog.")
    window.location.href = "videogame.html"
}

window.onload = function() {
    var audio = document.getElementById('backgroundaudio')
    audio.play();
}

  function openTutorial() {
    console.log("Tutorial opened!");
    window.location.href = "videogametutorial.html"
  }

  function openSettings() {
    console.log("Settings opened!");
    window.location.href = "videogamesettings.html"
  }

//measurement variables