const Quiz = document.getElementById('quiz');
const Question = document.getElementById('question');
const Image = document.getElementById('image');
const Text = document.getElementById('text');
const Rep = document.getElementById('rep');
const Suiv = document.getElementById('suiv');

const questions = [
    {
        question: 'Quelle est la capitale de la France ?',
        image: 'france.jpg',
        reponses: [
            { texte: 'Berlin', correct: false },
            { texte: 'Madrid', correct: false },
            { texte: 'Paris', correct: true },
            { texte: 'Rome', correct: false }
        ]
    },
    {
        question: 'Quel est le plus grand océan du monde ?',
        image: 'ocean.jpg',
        reponses: [
            { texte: 'Océan Atlantique', correct: false },
            { texte: 'Océan Indien', correct: false },
            { texte: 'Océan Pacifique', correct: true },
            { texte: 'Océan Arctique', correct: false }
        ]
    },
    {
        question: 'Quelle est la capitale du Japon ?',
        image: 'japon.jpg',
        reponses: [
            { texte: 'Séoul', correct: false },
            { texte: 'Pékin', correct: false },
            { texte: 'Shanghai', correct: false },
            { texte: 'Tokyo', correct: true }
        ]
    },
    {
        question: 'Quelle est la plus grande planète du système solaire ?',
        image: 'planet.jpg',
        reponses: [
            { texte: 'Vénus', correct: false },
            { texte: 'Jupiter', correct: true },
            { texte: 'Mars', correct: false },
            { texte: 'Saturne', correct: false }
        ]
    },
    {
        question: 'Quel est le plus grand organe du corps humain?',
        image: 'organ.jpg',
        reponses: [
            { texte: 'Le cerveau', correct: false },
            { texte: 'Le foie', correct: false },
            { texte: 'La peau', correct: true },
            { texte: 'Le coeur', correct: false }
        ]
    }
];

var i = 0;
var score = 0;

function demarrer() {
    i = 0;
    score = 0;
    Suiv.classList.add('cacher');
    afficherQues(questions[i]);
}

function afficherQues(question) {
    Text.innerText = question.question;
    Image.src = question.image;
    Rep.innerHTML = '';
    question.reponses.forEach(reponse => {
        const bouton = document.createElement('button');
        bouton.innerText = reponse.texte;
        bouton.classList.add('btn');
        bouton.addEventListener('click', function() {
            selectionner.call(this, reponse); // Utiliser call pour définir le contexte correct (this)
        });
        Rep.appendChild(bouton);
    });
}

function selectionner(reponse) {
    const correcte = reponse.correct;
    if (correcte) {
        score++;
    }
    this.classList.add('selected');
    Suiv.classList.remove('cacher');
}

function questionSuivante() {
    i++;
    if (i < questions.length) {
        afficherQues(questions[i]);
        Suiv.classList.add('cacher');
    } else {
        afficher();
    }
}

function afficher() {
    var msg = '';
    if (score == questions.length) {
        msg = 'Félicitations! Vous avez répondu correctement à toutes les questions.';
    } else if (score >= Math.floor(questions.length / 2)) {
        msg = 'Bien joué! Vous avez obtenu un score décent.';
    } else {
        msg = 'Peut-être la prochaine fois. Continuez à vous améliorer!';
    }

    Quiz.innerHTML = `
        <div id="res">
            <h2>Fin du quiz</h2>
            <p>Votre score est de ${score}/${questions.length}</p>
            <p>${msg}</p>
        </div>
    `;
}



demarrer();
