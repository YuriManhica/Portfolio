document.addEventListener("scroll", function () {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width = scrollPercentage + "%";
});

// Função para verificar se um elemento está visível na janela
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
  );
}

// Função para atualizar a classe 'active' no link correspondente à seção visível
function updateActiveLink(sectionId) {
  var section = document.querySelector(sectionId);
  var link = document.querySelector("a[href='" + sectionId + "']");

  // Verifica se a seção está visível na janela
  if (isElementInViewport(section)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
}

// Chamar a função para definir 'active' ao carregar a página
updateActiveLink("#hero");

// Adicionar rolagem suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    var targetSectionId = this.getAttribute("href");
    var targetSection = document.querySelector(targetSectionId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

// Adicionar evento de rolagem para atualizar 'active' ao rolar
document.addEventListener("scroll", function () {
  updateActiveLink("#hero");
  updateActiveLink("#esperience");
  updateActiveLink("#about");
  updateActiveLink("#project");
  updateActiveLink("#contact");
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
