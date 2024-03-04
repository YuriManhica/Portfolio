function scrollToTarget(targetId) {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const offset = targetElement.offsetTop;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}
window.addEventListener("scroll", function () {
  var header = document.getElementById("progress-bar-container");
  if (header !== null) {
    header.classList.toggle("Sticky", window.scrollY > 120);
  }
});

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

// Dicionário de tradução
const translations = {
  pt: {
    // Sessão Header
    idioma: "Idioma: ",
    Port: "Porfólio",
    homeLink: "Página Inicial",
    experienceLink: "Experiências",
    aboutLink: "Sobre",
    projectsLink: "Projetos",
    contactLink: "Contactos",
    homeLinkMobile: "Página Inicial",
    experienceLinkMobile: "Experiências",
    aboutLinkMobile: "Sobre",
    projectsLinkMobile: "Projetos",
    contactLinkMobile: "Contactos",

    // Sessão Hero
    welcomeMessage: "Bem-vindo!! 👋",
    respondMessage: "Respondo por",
    name: "Yuri Manhiça",
    developerTitle: "Desenvolvedor de Software 🖥️",
    webEnthusiast:
      "Sou um entusiasta WEB, baseado na Matola. <br>Apaixonado por transformar ideias em código.",
    viewCVButton: "Visualizar CV",

    // ... (adicionar mais traduções conforme necessário)

    // Sessão de Especialidades
    experienceTitle: "Experiências",
    malesoftTitle: "MALEsoftware",
    malesoftDescription:
      "Desempenhei um papel crucial no desenvolvimento da aplicação de Recursos Humanos, além de realizar a manutenção da aplicação web de seguradoras em VB e das aplicações desktops de Patrimônio, Crédito e Contabilidade. <br>Destaco meu envolvimento na adaptação dessas aplicações às demandas dos clientes e às tendências do mercado. Contribuí para a criação de Web Services, facilitando a integração entre sistemas. <br> Além disso, atuei ativamente na assistência e instrução a estagiários, promovendo o compartilhamento de conhecimentos e estimulando o crescimento da equipe.",
    ipetTitle: "IPET",
    ipetDescription:
      "Fui formador no curso de Administração de Sistemas de Redes, especificamente no módulo de Análise de Sistemas de Informação. Durante esse período, compartilhei conhecimentos práticos e teóricos, abordando temas como arquitetura de sistemas, design eficiente e segurança da informação. Meu objetivo era preparar os alunos para os desafios da administração de redes, incentivando o pensamento crítico e a adaptabilidade a ambientes dinâmicos. A experiência foi enriquecedora, contribuindo para o desenvolvimento profissional.",
    isdbTitle: "ISDB",
    isdbDescription:
      "Durante minha licenciatura em Administração de Sistemas de Redes Informáticas, adquiri experiência abrangente em programação (Java, C#, Python). <br> Desenvolvi habilidades em segurança da informação, virtualização, gestão de projetos e administração de bancos de dados. Minha formação também incluiu prática em troubleshooting e ênfase na comunicação eficaz. Esta experiência preparou-me para desafios na área de tecnologia da informação, proporcionando uma base sólida para otimizar infraestruturas de TI.",

    // Sessão Sobre mim
    moreAboutTitle: "Mais",
    aboutMeTitle: "Sobre Mim",
    webEnthusiastAgain:
      "Sou um entusiasta da Web e apaixonado por transformar ideias em código. Com uma sólida base em HTML, CSS e JavaScript, estou sempre em busca de novos desafios para aprimorar minhas habilidades.",
    contactMeButton: "Contacte-me",

    // ... (adicionar mais traduções conforme necessário)

    // Sessão Projetos
    recentProjectsTitle: "Projetos Recentes",
    githubLinkProjects: "Visita Meu GitHub",
    project1Title: "Em desenvolvimento...",
    project1Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros.",
    visitLink1: "Visitar <i class='bx bx-link-external'></i>",
    project2Title: "Em desenvolvimento...",
    project2Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    visitLink2: "Visitar <i class='bx bx-link-external'></i>",
    project3Title: "Em desenvolvimento...",
    project3Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    visitLink3: "Visitar <i class='bx bx-link-external'></i>",

    // Sessão Contato
    contactInfoTitle: "Para mais Informações",
    sendMessageTitle: "Envie uma mensagem",
    messageInput: "mensagem....",
    sendButton: "Enviar",

    // Sessão Footer
    pt:"🇵🇹 Português",
    en:"🇺🇸 Inglês",
    copyright:
      "© Copyright - Yuri Carlito Manhiça | Todos os direitos reservados.",
  },
  en: {
    // Sessão Header
    pt:"🇵🇹 Portuguese",
    en:"🇺🇸 English",
    
    idioma: "Language: ",
    Port: "Porfolio",
    homeLink: "Home",
    experienceLink: "Experiences",
    aboutLink: "About",
    projectsLink: "Projects",
    contactLink: "Contact",
    homeLinkMobile: "Home",
    experienceLinkMobile: "Experiences",
    aboutLinkMobile: "About",
    projectsLinkMobile: "Projects",
    contactLinkMobile: "Contact",

    // Sessão Hero
    welcomeMessage: "Welcome!! ✨",
    respondMessage: "I go by 😊",
    name: "Yuri Manhiça ",
    developerTitle: "Software Developer 🖥️",
    webEnthusiast:
      "I'm a WEB enthusiast, based in Matola. <br>Passionate about turning ideas into code.",
    viewCVButton: "View CV",

    // ... (adicionar mais traduções conforme necessário)

    // Sessão de Especialidades
    experienceTitle: "Experiences",
    malesoftTitle: "MALEsoftware",
    malesoftDescription:
      "I played a crucial role in developing the Human Resources application, as well as maintaining the web application for insurance companies in VB and desktop applications for Property, Credit, and Accounting. <br>I highlight my involvement in adapting these applications to customer demands and market trends. I contributed to the creation of Web Services, facilitating system integration. <br> Additionally, I actively assisted and instructed interns, promoting knowledge sharing and stimulating team growth.",
    ipetTitle: "IPET",
    ipetDescription:
      "I was a trainer in the Administration of Network Systems course, specifically in the Information Systems Analysis module. During this period, I shared practical and theoretical knowledge, covering topics such as system architecture, efficient design, and information security. My goal was to prepare students for the challenges of network administration, encouraging critical thinking and adaptability to dynamic environments. The experience was enriching, contributing to professional development.",
    isdbTitle: "ISDB",
    isdbDescription:
      "During my degree in Administration of Computer Network Systems, I gained comprehensive experience in programming (Java, C#, Python). <br> I developed skills in information security, virtualization, project management, and database administration. My training also included hands-on experience in troubleshooting and emphasis on effective communication. This experience prepared me for challenges in the field of information technology, providing a solid foundation for optimizing IT infrastructures.",

    // Sessão Sobre mim
    moreAboutTitle: "More",
    aboutMeTitle: "About Me",
    webEnthusiastAgain:
      "I'm a Web enthusiast and passionate about turning ideas into code. With a solid foundation in HTML, CSS, and JavaScript, I'm always looking for new challenges to enhance my skills.",
    contactMeButton: "Contact Me",

    // ... (adicionar mais traduções conforme necessário)

    // Sessão Projetos
    recentProjectsTitle: "Recent Projects",
    githubLinkProjects: "Visit My GitHub",
    project1Title: "In development...",
    project1Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suspendisse varius enim in eros.",
    visitLink1: "Visit <i class='bx bx-link-external'></i>",
    project2Title: "In development...",
    project2Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    visitLink2: "Visit <i class='bx bx-link-external'></i>",
    project3Title: "In development...",
    project3Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    visitLink3: "Visit <i class='bx bx-link-external'></i>",

    // Sessão Contato
    contactInfoTitle: "For more Information",
    sendMessageTitle: "Send a message",
    messageInput: "message....",
    sendButton: "Send",

    // Sessão Footer
    copy: "Porfolio",
    copyright: "© Copyright - Yuri Carlito Manhiça | All rights reserved.",
  },
};

// Função para alterar o idioma
function changeLanguage() {
  const selectedLanguage = document.getElementById("language").value;
  translatePage(selectedLanguage);
}

// Função para traduzir a página
function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[language] && translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });
}

// Chamada inicial para traduzir a página conforme o idioma atual
// document.addEventListener("DOMContentLoaded", function () {
//   const defaultLanguage = "pt"; // Idioma padrão
//   translatePage(defaultLanguage);
// });

function changeLanguage() {
  const selectedLanguage = document.getElementById("language").value;
  console.log("Selected Language:", selectedLanguage);
  translatePage(selectedLanguage);
}
