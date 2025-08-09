const h2Elements = document.getElementsByTagName("h2");
if (h2Elements.length > 0) {
  h2Elements[0].style.fontSize = "6vw";
} else {
  console.error("Элемент <h2> не найден!");
}
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
