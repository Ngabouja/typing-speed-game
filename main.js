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
	"soeur",
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

length = 50;

const dialog = document.querySelector("#dialog");

const btnEasy = document.querySelector("#btn-easy");
const btnmMedium = document.querySelector("#btn-medium");
const btnHard = document.querySelector("#btn-hard");

const btnRestart = document.querySelector("#restart");
const wpmText = document.querySelector("#wpm");
const bestWpmText = document.querySelector("#best-wpm");
const accuracyText = document.querySelector("#accuracy");

const restartContainer = document.querySelector(".restart-container");

const relativeText = document.querySelector("#relativetext");
const timeText = document.querySelector("#time");

const btnArticle = document.querySelector("#btnarticle");
const article = document.querySelector("#article");

let generatedWords = [];

let difficulty = "easy";
let started = false;
let input = "";
let words = "";

let time = 0;
let wpm = 0;
let bestwpm = 0;

let acceptedLetters = "abcdefghijklmnopqrstuvwxyz ";

function end() {
	if (wpm > bestwpm) {
		bestwpm = wpm;
		bestWpmText.innerHTML = bestwpm;
	}
	started = false;
	restartContainer.style.display = "none";
	input = "";
	dialog.open = true;
	relativeText.classList.add("hidden");
	generateWords();
}

function clearText() {
	let spans = document.querySelectorAll("#relativetext > span");
	for (let i = 0; i < spans.length; i++) {
		spans[i].remove();
	}
}

function generateWords() {
	accuracy.style.color = "";
	clearText();
	words = "";
	input = "";

	time = 0;
	wpm = 0;

	generatedWords = [];
	started = false;
	restartContainer.style.display = "none";
	for (let i = 0; i < length; i++) {
		let randomIndex = Math.floor(Math.random() * easytext.length);
		if (difficulty == "easy") {
			words += easytext[randomIndex] + " ";
		} else if (difficulty == "medium") {
			words += mediumtext[randomIndex] + " ";
		} else {
			words += hardtext[randomIndex] + " ";
		}
	}
	for (let i = 0; i < words.length; i++) {
		const span = document.createElement("span");
		span.textContent = words[i];
		relativeText.appendChild(span);
		generatedWords.push(span);
	}
}

function computeAccuracy() {
	let score = 0;

	for (let i = 0; i < input.length; i++) {
		if (input[i] == words[i]) score++;
	}

	return score / input.length;
}

setInterval(() => {
	if (input.length == 0) time = 0;
	if (input.length >= words.length - 1) {
		end();
		return;
	}

	if (started) timeText.style.color = "yellow";
	else timeText.style.color = "";

	time++;

	let remainingTime = 6000 - time;

	timeText.innerHTML = `0:${Math.ceil(remainingTime / 100)}`;

	if (remainingTime <= 0) end();

	if (input.length == 0) return;
	let wordCount = words.slice(0, input.length - 1).split(" ").length - 1;
	wpm = Math.round(wordCount / (time / 6000));
	if (started) wpmText.innerHTML = wpm;
}, 10);

generateWords();

btnRestart.addEventListener("click", () => {
	generateWords();
	started = true;
	restartContainer.style.display = "flex";
	wpmText.innerHTML = wpm;
	timeText.innerHTML = `0:0`;
	accuracyText.innerHTML = `100%`;
});

btnRestart.addEventListener("keydown", (e) => e.preventDefault());

btnArticle.addEventListener("click", () => {
	relativeText.classList.remove("hidden");
	started = true;
	restartContainer.style.display = "flex";
	time = 0;
	dialog.close();
});

btnEasy.addEventListener("click", () => {
	end();
	difficulty = "easy";
	generateWords();
});

btnmMedium.addEventListener("click", () => {
	end();
	difficulty = "medium";
	generateWords();
});

btnHard.addEventListener("click", () => {
	end();
	difficulty = "hard";
	generateWords();
});

addEventListener("keydown", (e) => {
	if (!started) return;

	let testLetter = e.key
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLocaleLowerCase();

	if (!acceptedLetters.includes(testLetter)) return;

	input += e.key;

	let accuracy = computeAccuracy();
	if (accuracy < 1) accuracyText.style.color = "red";
	else accuracyText.style.color = "";
	accuracyText.innerHTML = `${Math.floor(accuracy * 100)}%`;

	if (input[input.length - 1] == generatedWords[input.length - 1].textContent) {
		generatedWords[input.length - 1].style.color = "green";
	} else {
		generatedWords[input.length - 1].style.color = "red";
		generatedWords[input.length - 1].style.textDecoration = "underline";
	}
});
