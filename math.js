function addUser() {
    player1_name = document.getElementById("player1_name_input")
    player2_name = document.getElementById("player2_name_input")

    localStorage.setitem("player1_name", player1_name);
    localStorage.setitem("player2_name", player2_name);

    window.location = "index.html";
}
