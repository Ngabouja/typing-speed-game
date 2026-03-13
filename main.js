const easytext = [
	"chat",
	"chien",
	"pain",
	"lait",
	"eau",
	"sucre",
	"table",
	"chaise",
	"porte",
	"mur",
	"main",
	"pied",
	"tête",
	"nez",
	"yeux",
	"bras",
	"jambe",
	"dos",
	"ami",
	"amie",
	"père",
	"mère",
	"frère",
	"sœur",
	"jour",
	"nuit",
	"matin",
	"soir",
	"hier",
	"demain",
	"ici",
	"là",
	"oui",
	"non",
	"bien",
	"mal",
	"vite",
	"lent",
	"haut",
	"bas",
	"gros",
	"petit",
	"beau",
	"laid",
	"vrai",
	"faux",
	"bon",
	"mauvais",
	"chaud",
	"froid",
	"plein",
	"vide",
	"dur",
	"mou",
	"clair",
	"sombre",
	"neuf",
	"vieux",
];

const mediumtext = [
	"maison",
	"voiture",
	"ordinateur",
	"clavier",
	"écran",
	"téléphone",
	"fenêtre",
	"cuisine",
	"salon",
	"chambre",
	"bureau",
	"travail",
	"école",
	"collège",
	"université",
	"professeur",
	"élève",
	"étudiant",
	"exercice",
	"question",
	"réponse",
	"solution",
	"problème",
	"histoire",
	"géographie",
	"science",
	"nature",
	"animal",
	"plante",
	"montagne",
	"rivière",
	"océan",
	"forêt",
	"prairie",
	"désert",
	"nuage",
	"pluie",
	"orage",
	"vent",
	"soleil",
	"étoile",
	"planète",
	"galaxie",
	"univers",
	"énergie",
	"force",
	"vitesse",
	"distance",
	"volume",
	"surface",
	"température",
	"pression",
	"matière",
	"atome",
	"molécule",
	"réaction",
	"expérience",
	"analyse",
	"mesure",
	"calcul",
];

const hardtext = [
	"administration",
	"organisationnelle",
	"responsabilité",
	"professionnel",
	"développement",
	"implémentation",
	"international",
	"communication",
	"interprétation",
	"collaboration",
	"coordination",
	"expérimentale",
	"documentation",
	"classification",
	"transformation",
	"optimisation",
	"configuration",
	"synchronisation",
	"visualisation",
	"représentation",
	"identification",
	"authentification",
	"autorisation",
	"infrastructure",
	"architecture",
	"algorithmique",
	"programmation",
	"compilation",
	"interopérabilité",
	"compatibilité",
	"virtualisation",
	"automatisation",
	"orchestration",
	"distribution",
	"sauvegarde",
	"restauration",
	"supervision",
	"monitoring",
	"performance",
	"scalabilité",
	"résilience",
	"tolérance",
	"redondance",
	"migration",
	"intégration",
	"déploiement",
	"validation",
	"vérification",
	"évaluation",
	"amélioration",
	"innovation",
	"technologique",
	"scientifique",
	"méthodologie",
	"statistique",
	"probabilité",
	"modélisation",
	"simulation",
	"corrélation",
	"causalité",
];

const dialog = document.querySelector("#dialog");

const btnEasy = document.querySelector("#btn-easy");
const btnmMedium = document.querySelector("#btn-medium");
const btnHard = document.querySelector("#btn-hard");

const relativeText = document.querySelector("#relativetext");

const btnArticle = document.querySelector("#btnarticle");
const article = document.querySelector("#article");
document.addEventListener("DOMContentLoaded", () => {});

btnArticle.addEventListener("click", () => {
	article.remove();
});

btnEasy.addEventListener("click", () => {
	for (let i = 0; i < easytext.length; i++) {
		const span = document.createElement("span");
		span.textContent = easytext[i] + " ";
		relativeText.appendChild(span);
	}
});
btnmMedium.addEventListener("click", () => {
	for (let i = 0; i < easytext.length; i++) {
		const span = document.createElement("span");
		span.textContent = hardtext[i] + " ";
		relativeText.appendChild(span);
	}
});
btnHard.addEventListener("click", () => {
	for (let i = 0; i < easytext.length; i++) {
		const span = document.createElement("span");
		span.textContent = hardtext[i] + " ";
		relativeText.appendChild(span);
	}
});
