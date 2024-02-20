function showelement() {
    var elem = document.querySelector(".element2");
    if (elem.style.display === "none") {
        elem.style.display = "flex";
    } else {
        elem.style.display = "none";
    }
}