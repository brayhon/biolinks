function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //  OU usa esse código
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // pegar a imagem
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/perfil-primatas.png")
  } else {
    img.setAttribute("src", "https://github.com/brayhon.png")
  }
}
