

// Traductions françaises et anglaises
const translations = {
  fr: {
    // NAVIGATION
    nav_a_propos: "À propos",
    nav_formation: "Formation",
    nav_experiences: "Expériences",
    nav_projets: "Projets",
    nav_certifications: "Certifications",
    nav_contact: "Contact",
    nav_cv: "Télécharger CV",

    // SECTIONS
    a_propos_title: "À propos de moi",
    formation_title: "Formation",
    experiences_title: "Expériences",
    projets_title: "Projets",
    certifications_title: "Certifications",
    contact_title: "Contact",

    //STATUTS
    en_cours: "En cours",
    reussie: "Réussie",

        // À propos
    a_propos_title: "À propos de moi",
    a_propos_name: "Je suis Fatalmoudou KONE",
    a_propos_text: "Étudiante en ingénierie informatique à Télécom Nancy et passionnée par la Data Science, l’intelligence artificielle et le Big Data. J’aime explorer de nouvelles approches technologiques pour analyser, modéliser et valoriser les données afin d’apporter des solutions innovantes et concrètes.",

    // Formations
    diplome_title: "Diplôme d'ingénieur en Informatique",
    diplome_span: "IAMD – Télécom Nancy",
    diplome_specialisation: "Spécialisation en Intelligence Artificielle et Big Data.",
    diplome_cours: "Cours : Machine Learning, Technologies Big Data, Visualisation de données, Deep learning",
    diplome_desc:" L’approfondissement IAMD forme des ingénieurs capables de traiter des données massives, d’implémenter des modèles d’IA, et de travailler sur des projets réels.",


    master_title: "Master en Mathématiques et Applications",
    master_span: "Université de Lorraine – Nancy",
    master_specialisation: "Spécialisation en Ingénierie Mathématique pour la Science des Données.",
    master_cours: "Cours : Apprentissage statistique, Optimisation, Processus stochastiques, Mathématiques financières.",
    master_desc: "Ce master offre une formation orientée vers les mathématiques appliquées et le traitement des données.",

    licence_info_title: "Licence en Informatique, mineure Psychologie",
    licence_info_span: "Université Paris 8",
    licence_info_cours: "Cours : Fouille de données, Interprétation et compilation, Analyse de données verbales.",
    licence_info_desc: "Cette licence à distance combine une solide formation en informatique avec des cours de psychologie.",

    licence_math_title: "Licence en Mathématiques et Informatique",
    licence_math_span: "Université Grenoble Alpes – UGA",
    licence_math_cours: "Cours : Programmation fonctionnelle et impérative, Analyse numérique, Algèbre linéaire.",
    licence_math_desc: "Cette formation a renforcé ma base en algorithmique, structures mathématiques et logique de programmation.",

    baccalaureat_title: "Baccalauréat",
    baccalaureat_span: "Lycée Mamadou M’Bodj – Sebenikoro",
    baccalaureat_desc1: "Obtention du baccalauréat avec mention Bien au Lycée Mamadou M’Bodj à Sebenikoro.",
    baccalaureat_desc2: "Grâce à cela, j’ai été admise au Concours d’Excellence du Mali, une distinction pour les meilleurs étudiants du pays, offrant une bourse pour étudier en France.",
    
    // Expériences
        // Expériences
    context: "Contexte",
    methods: "Méthodes",
    results: "Résultats",

    exp1_title: " AREAL- Savigny-le-Temple",
    exp1_span: "Projet industriel",
    exp1_date: "Sept 2025 – Présent",
    exp1_contexte: "Amélioration des performances d’un chatbot interne.",
    exp1_methodes: "Optimisation du flux de données et ajustement des algorithmes de réponse.",
    exp1_resultats: "Le chatbot doit être fonctionnel et plus rapide, et la qualité des réponses doit être améliorée.",

    exp2_title: "INRIA – Nancy",
    exp2_span: "Stage d’été",
    exp2_date: "Juin – Août 2025",
    exp2_contexte: "Stage sur l’acquisition et l’organisation de données multimodales pour le robot Shelfy.",
    exp2_methodes: "Organisation de séances d’enregistrement, utilisation de YOLO et OpenCV pour le tracking des objets et des personnes.",
    exp2_resultats: "Base de données de 10 To avec reconnaissance faciale et anonymisation, prête pour analyse.",

    exp3_title: "CRAN – Université de Lorraine",
    exp3_span: "Projet de recherche",
    exp3_date: "Fév – Mai 2025",
    exp3_contexte: "Test de marche de 6 minutes pour évaluer la mobilité des patients.",
    exp3_methodes: "Application du filtre de Madgwick pour corriger les trajectoires des capteurs.",
    exp3_resultats: "Précision accrue de 20% dans l’analyse des trajectoires, meilleure évaluation clinique.",

    exp4_title: "Directrice des systèmes d'information – TELECOM Nancy Services",
    exp4_span: "2023 – 2024",
    exp4_contexte: "Gestion IT pour la Junior Entreprise de TELECOM Nancy, 15 collaborateurs.",
    exp4_methodes: "Administration serveur, support utilisateur, mise à jour et maintenance du site web.",
    exp4_resultats: "Disponibilité accrue du système, site web plus clair et accessible, satisfaction des membres améliorée.",

    exp5_title: "KOSY Appart’Hôtel, Nancy",
    exp5_span: "Stage opérationnel",
    exp5_date: "Juillet 2024",
    exp5_contexte: "Stage opérationnel en accueil et coordination d’appart’hôtels.",
    exp5_methodes: "Nettoyage et organisation des chambres, planning, assistance clients, inventaires.",
    exp5_resultats: "Amélioration de la satisfaction clients et optimisation de la coordination interne.",

    exp6_title: "Bénévole – Afev",
    exp6_span: "2023 – 2024",
    exp6_contexte: "Accompagnement scolaire d’un élève en difficulté.",
    exp6_methodes: "Tutorat personnalisé et suivi des progrès.",
    exp6_resultats: "Amélioration moyenne des résultats de +2 points.",

    exp7_title: " Université Grenoble Alpes",
    exp7_date: "Sept – Déc 2022",
    exp7_span: "Tutorat en mathématiques",
    exp7_contexte: "Tutorat pour 20 étudiants en mathématiques appliquées.",
    exp7_methodes: "Animation de TD, exercices guidés et suivi individualisé.",
    exp7_resultats: "Taux de réussite final de 60%, meilleure compréhension des concepts pour la majorité des étudiants."
    ,
    // CARTES PROJETS (texte complet)
    projet1_title: "Détection de fraude",
    projet1_span: "Machine Learning & Big Data",
    projet1_contexte: "Projet personnel pour détecter les transactions frauduleuses à partir d’un dataset volumineux.",
    projet1_methodes: "Utilisation de Kafka pour le streaming de données, Spark pour le traitement distribué, et modèles ML avec Python.",
    projet1_resultats: "Système capable de détecter les anomalies en temps réel avec un taux de précision supérieur à 90%.",

    projet2_title: "Agent IA Pacman",
    projet2_span: "Intelligence Artificielle",
    projet2_contexte: "Développement d’un agent intelligent capable de jouer à Pacman.",
    projet2_methodes: "Algorithmes A* et Minimax pour la planification et la prise de décision.",
    projet2_resultats: "Agent performant capable de compléter les niveaux avec un score élevé et un comportement stratégique.",

    projet3_title: "Dashboards interactifs",
    projet3_span: "Visualisation et gestion de données",
    projet3_contexte: "Projet pour créer des dashboards permettant de visualiser des données massives.",
    projet3_methodes: "Utilisation de Pandas et Matplotlib pour la préparation et la visualisation des données.",
    projet3_resultats: "Dashboards interactifs permettant une analyse rapide et claire des indicateurs clés.",

    projet4_title: "Exploration de données biomédicales",
    projet4_span: "Bioinformatique",
    projet4_contexte: "Analyse de bases de données Uniprot et DrugBank pour identifier des interactions médicamenteuses.",
    projet4_methodes: "Scripts Python pour extraction et traitement des données, visualisation et analyse statistique.",
    projet4_resultats: "Rapport d’analyse mettant en évidence les interactions clés entre protéines et médicaments.",

    projet5_title: "Compilateur Mini-Python en Java",
    projet5_span: "Développement logiciel",
    projet5_contexte: "Projet académique visant à créer un compilateur simplifié pour un sous-ensemble de Python.",
    projet5_methodes: "Analyse lexicale et syntaxique, génération de bytecode en Java.",
    projet5_resultats: "Compilateur fonctionnel capable d’exécuter des programmes simples avec gestion des erreurs de syntaxe.",

    projet6_title: "Application Java – Révision TOEIC",
    projet6_span: "Développement logiciel & Education",
    projet6_contexte: "Création d’une application pour aider à la préparation du TOEIC.",
    projet6_methodes: "Application Java avec interface graphique, quiz interactifs, suivi des scores et rappels personnalisés. Utilisation de Google TTS et de JavaFX.",
    projet6_resultats: "Application fonctionnelle permettant aux utilisateurs de réviser le vocabulaire et les exercices de compréhension de manière interactive.",

    projet7_title: "Gestion de masse de données",
    projet7_span: "Data Engineering",
    projet7_contexte: "Création d’un système de gestion de données entre plusieurs sources sans utiliser de médiateur.",
    projet7_methodes: "Utilisation d'outils comme Elasticsearch pour l'indexation et la recherche de données, ainsi que des pipelines de données pour l'intégration.",
    projet7_resultats: "Système de gestion de données opérationnel, capable de traiter des requêtes complexes et d'intégrer des données provenant de différentes sources.",
    projet_lien: "Voir le projet",
    // CERTIFICATIONS
    cert1_title: "IBM – Data Engineering",
    cert1_desc: "Acquisition de compétences avancées en gestion de données, pipelines ETL, manipulation de gros volumes de données avec Python et SQL. Développement de rigueur analytique et capacité à résoudre des problèmes complexes.",

    cert2_title: "Microsoft – AI & ML Engineering",
    cert2_desc: "Apprentissage de techniques d’apprentissage automatique et deep learning, utilisation de bibliothèques comme scikit-learn et PyTorch, conception et entraînement de modèles pour résoudre des problèmes concrets. Développement de l’autonomie et de l’esprit analytique.",

    cert3_title: "Cisco Network Academy – Introduction à la Data Science",
    cert3_desc: "Développement d’une compréhension globale des flux de données, de l’acquisition à l’analyse. Utilisation d’outils pour organiser et préparer les datasets, initiation à la visualisation et aux bases de données.",
    voir_certificat: "Voir le certificat",

    cert4_title: "MOOC Gestion de projet",
    cert4_desc: "Apprentissage de la planification et du suivi de projets, organisation des tâches, définition des priorités, gestion du temps et coordination d’équipe.",

    cert5_title: "Pix – Prévention des risques numériques",
    cert5_desc: "Développement de compétences numériques essentielles : sécurité des données, protection de la vie privée, détection des menaces en ligne et évaluation critique de l’information.",

    cert6_title: "Croix-Rouge – Premiers secours",
    cert6_desc: "Acquisition de compétences pratiques pour intervenir efficacement en situations d’urgence : premiers soins, sang-froid, prise d’initiative et sens des responsabilités.",

    cert7_title: "MOOC INRS – Santé et sécurité au travail",
    cert7_desc: "Développement de connaissances sur la prévention des risques professionnels, sécurité au travail, sensibilisation aux bonnes pratiques et attention aux détails dans l’organisation d’activités.",

    contact: "Vous pouvez me joindre via :",
    contact_me: "Contactez-moi",
  },

  en: {
    // NAVIGATION
    nav_a_propos: "About",
    nav_formation: "Education",
    nav_experiences: "Experiences",
    nav_projets: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",
    nav_cv: "Download CV",
    contact: "You can reach me via :",
    // SECTIONS
    a_propos_title: "About Me",
    formation_title: "Education",
    experiences_title: "Experiences",
    projets_title: "Projects",
    certifications_title: "Certifications",
    contact_title: "Contact",

    // // STATUTS
    en_cours: "Ongoing",
    reussie: "Completed",

        // À propos / About Me
    about_title: "About Me",
    about_name: "I am Fatalmoudou KONE",
    about_text: "Computer engineering student at Télécom Nancy, passionate about Data Science, Artificial Intelligence, and Big Data. I enjoy exploring new technological approaches to analyze, model, and leverage data to provide innovative and concrete solutions.",

    // Formations / Education
    diplome_title: "Master's Degree in Computer Science",
    diplome_span: "TELECOM Nancy | 2023-2026",
    diplome_specialisation: "Specialization: Artificial Intelligence and Big Data.",
    diplome_cours: "Courses: Machine Learning, Big Data Technologies, Data Visualization, Deep learning",
    diplome_desc: "The IAMD specialization at Télécom Nancy trains engineers capable of processing massive datasets, implementing AI models, and working on real projects in modern technological environments.",

    master_title: "Master in Mathematics and Applications",
    master_span: "University of Lorraine – Nancy | 2025-2026",
    master_specialisation: "Specialization: Mathematical Engineering for Data Science.",
    master_cours: "Courses: Statistical Learning, Optimization, Stochastic Processes, Financial Mathematics.",
    master_desc: "This master’s program provides high-level training in applied mathematics, data processing, and analytical methods, with tracks in mathematical engineering or research.",

    licence_info_title: "Bachelor in Computer Science, Minor in Psychology",
    licence_info_span: "Université Paris 8 | 2025-2026",
    licence_info_cours: "Courses: Data Mining, Interpretation and Compilation, Verbal Data Analysis.",
    licence_info_desc: "This distance-learning bachelor combines solid computer science training with psychology courses, allowing development of both technical skills and understanding of human and cognitive aspects of data, language, and interactions.",

    licence_math_title: "Bachelor in Mathematics and Computer Science",
    licence_math_span: "University Grenoble Alpes – UGA | 2021-2023",
    licence_math_cours: "Courses: Functional and imperative programming, Numerical Analysis, Linear Algebra.",
    licence_math_desc: "This program reinforced your foundation in algorithms, mathematical structures, and programming logic, preparing you for modeling, analysis, or optimization challenges in advanced studies.",

    baccalaureat_title: "High School Diploma – Lycée Mamadou M’Bodj, Sebenikoro",
    baccalaureat_span: "Promotion 2020-2021",
    baccalaureat_desc1: "Obtained the baccalaureate with honors (Bien) at Lycée Mamadou M’Bodj in Sebenikoro.",
    baccalaureat_desc2: "Thanks to this, I was admitted to Mali’s Excellence Contest, a distinction for the country’s top students, granting a scholarship to study in France."


    ,
        // Experiences - English
    context: "Context",
    methods: "Methods",
    results: "Results",
    
    exp1_title: "AREAL- Savigny-le-Temple",
    exp1_span: "Industriel Project",
    exp1_date: "Sept 2025 – Present",
    exp1_contexte: "Analyzing and optimizing an internal chatbot's performance.",
    exp1_methodes: "Optimizing data flow and adjusting response algorithms.",
    exp1_resultats: "The chatbot must be functional and faster, and the response quality must be improved.",

    exp2_title: "INRIA – Nancy",
    exp2_span: "Summer Internship",
    exp2_date: "June – August 2025",
    exp2_contexte: "Internship on acquisition and organization of multimodal data for the Shelfy robot.",
    exp2_methodes: "Organized recording sessions, used YOLO and OpenCV for object and person tracking.",
    exp2_resultats: "10 TB database with facial recognition and anonymization, ready for analysis.",

    exp3_title: "CRAN – University of Lorraine",
    exp3_span: "Research project",
    exp3_date: "Feb – May 2025",
    exp3_contexte: "6-minute walk test to assess patient mobility.",
    exp3_methodes: "Applied Madgwick filter to correct sensor trajectories.",
    exp3_resultats: "20% improved trajectory accuracy, enabling better clinical evaluation.",

    exp4_title: "IT Director – TELECOM Nancy Services",
    exp4_span: "2023 – 2024",
    exp4_contexte: "IT management for TELECOM Nancy’s Junior Enterprise, 15 team members.",
    exp4_methodes: "Server administration, user support, website updates and maintenance.",
    exp4_resultats: "Increased system availability, clearer and more accessible website, improved member satisfaction.",

    exp5_title: "KOSY Appart’Hôtel - Nancy",
    exp5_date: "July 2024",
    exp5_span: "Operational Internship",
    exp5_contexte: "Operational internship in hotel reception and coordination.",
    exp5_methodes: "Room cleaning and organization, scheduling, client assistance, inventories.",
    exp5_resultats: "Improved customer satisfaction and optimized internal coordination.",

    exp6_title: "Volunteer – Afev",
    exp6_span: "2023 – 2024",
    exp6_contexte: "School support for a struggling student.",
    exp6_methodes: "Personalized tutoring and progress monitoring.",
    exp6_resultats: "Average student improvement of +2 points.",

    exp7_title: "University Grenoble Alpes - Valence",
    exp7_date: "Sept – Dec 2022",
    exp7_span: "Math Tutor",
    exp7_contexte: "Tutoring 20 students in applied mathematics.",
    exp7_methodes: "Led tutorials, guided exercises, and individual follow-up.",
    exp7_resultats: "Final pass rate 60%, majority of students improved understanding of concepts."
    ,
    // CARTES PROJETS
    projet1_title: "Fraud Detection",
    projet1_span: "Machine Learning & Big Data",
    projet1_contexte: "Academic project to detect fraudulent transactions from a large dataset.",
    projet1_methodes: "Use of Kafka for data streaming, Spark for distributed processing, and ML models with Python.",
    projet1_resultats: "System capable of detecting anomalies in real-time with over 90% accuracy.",

    projet2_title: "AI Pacman Agent",
    projet2_span: "Artificial Intelligence",
    projet2_contexte: "Development of an intelligent agent capable of playing Pacman.",
    projet2_methodes: "A* and Minimax algorithms for planning and decision-making.",
    projet2_resultats: "High-performing agent able to complete levels with high score and strategic behavior.",

    projet3_title: "Interactive Dashboards",
    projet3_span: "Data Visualization & Management",
    projet3_contexte: "Project to create dashboards for visualizing massive datasets.",
    projet3_methodes: "Use of Pandas and Matplotlib for data preparation and visualization.",
    projet3_resultats: "Interactive dashboards allowing fast and clear analysis of key indicators.",

    projet4_title: "Biomedical Data Exploration",
    projet4_span: "Bioinformatics",
    projet4_contexte: "Analysis of Uniprot and DrugBank databases to identify drug interactions.",
    projet4_methodes: "Python scripts for data extraction and processing, visualization, and statistical analysis.",
    projet4_resultats: "Analysis report highlighting key protein-drug interactions.",

    projet5_title: "Mini-Python Compiler in Java",
    projet5_span: "Software Development",
    projet5_contexte: "Academic project to create a simplified compiler for a Python subset.",
    projet5_methodes: "Lexical and syntax analysis, Java bytecode generation.",
    projet5_resultats: "Functional compiler able to execute simple programs with syntax error handling.",

    projet6_title: "Java App – TOEIC Revision",
    projet6_span: "Software Development & Education",
    projet6_contexte: "Creation of an application to help TOEIC preparation.Use of Google TTS and JavaFX.",
    projet6_methodes: "Java application with GUI, interactive quizzes, score tracking, and personalized reminders.",
    projet6_resultats: "Functional app allowing users to revise vocabulary and comprehension exercises interactively.",

    projet7_title: "Mass Data Management",
    projet7_span: "Data Engineering",
    projet7_contexte: "Creation of a data management system between multiple sources without using a mediator.",
    projet7_methodes: "Use of tools like Elasticsearch for data indexing and searching, as well as data pipelines for integration.",
    projet7_resultats: "Operational data management system capable of handling complex queries and integrating data from different sources.",
    projet_lien: "View Project",
    contact_me: "Contact Me",
    // CERTIFICATIONS
    cert1_title: "IBM – Data Engineering",
    cert1_desc: "Acquisition of advanced skills in data management, ETL pipelines, handling large datasets with Python and SQL. Developing analytical rigor and problem-solving ability.",

    cert2_title: "Microsoft – AI & ML Engineering",
    cert2_desc: "Learning machine learning and deep learning techniques, using libraries like scikit-learn and PyTorch, designing and training models to solve real problems. Developing autonomy and analytical mindset.",

    cert3_title: "Cisco Network Academy – Introduction to Data Science",
    cert3_desc: "Developing a global understanding of data flows, from acquisition to analysis. Using tools to organize and prepare datasets, introduction to visualization and databases.",
    voir_certificat: "View Certificate",

    cert4_title: "MOOC Project Management",
    cert4_desc: "Learning project planning and monitoring, task organization, priority setting, time management, and team coordination.",

    cert5_title: "Pix – Digital Risk Prevention",
    cert5_desc: "Developing essential digital skills: data security, privacy protection, online threat detection, and critical evaluation of information.",

    cert6_title: "Red Cross – First Aid",
    cert6_desc: "Acquiring practical skills to respond effectively in emergencies: first aid, calmness, initiative, and sense of responsibility.",

    cert7_title: "MOOC INRS – Occupational Health & Safety",
    cert7_desc: "Developing knowledge on professional risk prevention, workplace safety, awareness of best practices, and attention to detail in activity organization."
  }
};
function setLanguage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.getElementById("lang-toggle").textContent = lang === "fr" ? "EN" : "FR";
  
  const cvLink = document.querySelector(".button-cv");
  if (cvLink) {
    cvLink.href = lang === "fr" ? "files/cv_fr.pdf" : "files/cv_en.pdf";
  }
}

// Ajout : détection du paramètre ?lang= dans l’URL
const params = new URLSearchParams(window.location.search);
let urlLang = params.get("lang");

// Si le paramètre est présent, on le prend et on l’enregistre
if (urlLang) {
  localStorage.setItem('lang', urlLang);
}

// Sinon, on garde la langue enregistrée ou on met fr par défaut
let currentLang = urlLang || localStorage.getItem('lang') || 'fr';

// Applique la langue
setLanguage(currentLang);

// Gestion du bouton de bascule
document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem('lang', currentLang);
  setLanguage(currentLang);
});
