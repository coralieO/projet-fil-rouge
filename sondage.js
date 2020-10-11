var nom;
function user (){  
   nom = prompt("quel est votre nom?: ");
   document.getElementById('Pname').innerHTML = nom;
   console.log(nom);
}
user();

document.getElementById('titre').innerHTML = "10 couples parfait";
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

var question_a = document.getElementById(questions_a);
var repa = document.getElementById("repA").value;
var repb = document.getElementById("repB").value;
var suivant = document.getElementsByClassName("envoi");
var form = document.getElementById("form");
var score = 0;
var Escore = document.getElementById("points");


const Sondage = [
    {
        question: " Mujda épousera t-il Mila?",
        réponseA: "oui",
        réponseB : "non",
        reponseV: "non"
    },
    {
        question: "Séphora quitte l'aventure seule?",
        réponseA: "oui",
        réponseB : "non",
        reponseV: "oui"
    },
    {
        question: "Seby dady repartira t-il avec Léa Marry?",
        réponseA: "oui",
        réponseB : "non",
        reponseV: "oui"
    },
    {
        question: "Julien épousera t-il Hilona?",
        réponseA: "oui",
        réponseB : "non",
        reponseV: "oui" 
    }
];

function init(){
    questions_a.innerHTML = Sondage[0].question;
    repa = Sondage[0].réponseA;
    console.log(repa);
    repb = Sondage[0].réponseB;
    }
init();

function reponse (a){
    if(a == 1){
        if(repa == Sondage[i].reponseV) {
            score += 5;
            alert(Sondage[i].reponseV + " était la bonne réponse");
        }
        else{
            score += 0;
            alert(Sondage[i].reponseV + " était la bonne réponse");
        }
    }else if (a == 2) {
        if (repb == Sondage[i].reponseV){
            score += 5;
            alert(Sondage[i].reponseV + " était la bonne réponse");
        }else  {
            score += 0;
            alert(Sondage[i].reponseV + " était la bonne réponse");
        }
    }
};

var i= 0 ;
function question(){
    if(i !=3){
    i++;
    questions_a.innerHTML = Sondage[i].question;
    repa = Sondage[i].réponseA;
    repb = Sondage[i].réponseB;
    console.log(i);
    }else{
        alert(nom + " tu as fini le questionnaire");
        var score_sur_cent = score*5;
        points.innerHTML = nom + (" ton score est de: ") + score + (" et tu as un score de: ") +  score_sur_cent + ("/100");
        form.style.visibility = "hidden";
    };
};
