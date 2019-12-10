function displayModal(project) {
    document.getElementById(project).getElementsByClassName("close")[0].onclick = function() {
        document.getElementById(project).style.display = "none";
    }
    document.getElementById(project).style.display = "block";

    window.onclick = function(event) {
        if (event.target == document.getElementById(project)) {
            document.getElementById(project).style.display = "none";
        }
    }
}