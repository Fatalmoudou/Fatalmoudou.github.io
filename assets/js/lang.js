const translations = {
  fr: {
    title: "Portfolio - À propos",
    about: "À propos",
    education: "Formation",
    experience: "Expériences",
    projects: "Projets",
    certifications: "Certifications",
    contact: "Contact",
    downloadCV: "Télécharger CV",
    aboutTitle: "À propos de moi",
    aboutText: "Étudiant en Master Intelligence Artificielle à l’Université de Lorraine, passionné par la Data Science, le Deep Learning et le développement web."
  },
  en: {
    title: "Portfolio - About",
    about: "About",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
    downloadCV: "Download CV",
    aboutTitle: "About Me",
    aboutText: "Master’s student in Artificial Intelligence at the University of Lorraine, passionate about Data Science, Deep Learning, and web development."
  }
};

let currentLang = "fr"; // Langue par défaut

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  document.getElementById("lang-toggle").textContent = currentLang === "fr" ? "EN" : "FR";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[currentLang][key];
  });
});
