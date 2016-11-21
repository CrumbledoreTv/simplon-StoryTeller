/******************************************************************************/
/*                             FONCTION                                       */
/******************************************************************************/
function rienFaire() {
  alert("Quoi ?\n\nOk je reste ici alors");
  alert("...");
  alert("Il commence à faire froid ici et ma...\n\n\n*Connexion interrompue*");
  again="n";
  fail1();
}
function win(){
  win = document.getElementById("win");
  win.innerHTML = "Félicitation <span>"+ prenom+ "</span> vous avez sauvé Alertom !\n\n La suite des aventures d'Alertom prochainement..";
}
function fail0(){
  fail = fail = document.getElementById("fail");
  fail.innerHTML = "Je sais ça fait beaucoup d'alert...<br> Mais l'histoire est cool !";
}
function fail1(){
  fail = document.getElementById("fail");
  fail.innerHTML = "Catastrophe <span>"+prenom+ "</span> vous avez tué Alertom !";
}
function fail2(){
  fail = document.getElementById("fail");
  fail.innerHTML = "Catastrophe <span>"+prenom+ "</span> vous avez tué Alertom ! L'étrange lumière l'as tué...";
}
function fail3(){
  fail = document.getElementById("fail");
  fail.innerHTML = "Catastrophe <span>"+prenom+ "</span> vous avez tué Alertom ! Vous lui avait dit de <span>"+choix3+"</span>. Alertom n'est pas très doué en course à pied...";
}
function fail4(){
  fail = document.getElementById("fail");
  fail.innerHTML = "Catastrophe <span>"+prenom+ "</span> vous avez tué Alertom ! Vous l'avez abandonné...";
}
/***********************************************************************************************************************************/
var again = "y";

while(again == "Y" || again == "y"){
console.log("**** DEBUT SCRIPT ****");
alert("Heey ooohhh !!");
var check = prompt("HEELLPP !!\nIl y a quelqu'un ? (Y/N)");
console.log("Il y a quelqu'un :"+check);

if (check == "Y" || check == "y"){
alert("Ah super ! j'ai besoin de votre aide !\n\nMon nom est Alertom, je suis astronaute !\nMon vaisseau c'est écrasé, j'ai perdu mon équipe.\n\n Ma radio ne va pas tenir très longtemps.");

var prenom = prompt("Quel est votre prénom ?");
console.log("Prénom :"+prenom);

alert("Très bien " + prenom +", j'aperçois une lumière sur la gauche et une grotte à droite...");
var choix = prompt("Où dois-je aller ? (gauche/droite)");
console.log("Choix 1 :"+choix);

    if(choix == "gauche" || choix == "Gauche" || choix == "GAUCHE"){     /* 1er choix GAUCHE OU DROITE, lumière/grotte */
        alert("Ok, je me mets en route !");
        alert("...");
        var choix2 = prompt("Woaa.. C'est très étrange\nJe ne sais pas si c'est très prudent de s'approcher...\nS'approcher de la lumière ? (Y/N)");
        console.log("Choix2 :"+choix2);

            if(choix2 == "y" || choix2 == "Y"){              /* 2eme choix s'approcher ou pas, lumière */
              alert("J'espère que tu as raison...\n\n...\n\n*Alertom s'approche de la lumère et...*\n\n\n*Connexion interrompue*");
              again = prompt("Try again ? : (Y/N)");
              fail2();
            }else if(choix2 == "n" || choix2 == "N"){
                alert("Bonne idée, je devrais plutôt chercher l'épave de mon vaisseaux pour trouver d'autres survivants...\n\n");
                alert("*BOOOM*!");
                var choix3 = prompt("Tu as entendu ?! C'est pas très loin de moi !\n Qu'est-ce que je fais ? (Courir/Cacher/Pleurer)");
                console.log("Choix3 :" +choix3);
                    if(choix3 == "courir" || choix3 == "Courir" || choix3 == "COURIR"){     /* choix bruit suspect courir/cacher/pleurer*/
                      alert("Euuh... OK !\n\n*Alertom se met à courir*\n\n ** BOOM ! BIM ! BAM ! BOOM ! **\n\n\n*Alertom tombe et se cogne la tête...*\n\n\n *Connexion interrompue*\n ");
                      again = prompt("Try again ? : (Y/N)");
                      fail3();
                    }
                    else if(choix3 == "cacher" || choix3 == "Cacher" || choix3 == "CACHER"){
                      alert("Ok, je vois un abri !\n\n*Alertom entre dans l'abri*\n\n");
                      alert("Il y a un ordinateur !! Je suis sauvé !\n\n*Alertom allume le PC*\n\nJe n'ai plus qu'a envoyer un signal de détresse à ma base.");
                      alert("Euuh ce n'est pas un ordinateur ! On dirait un radar...\n\nEt je dirais même que quelque chose approche...");
                      alert("*To be continued...*")
                      again="n";
                      win();
                    }else if (choix3 == "pleurer" || choix3 == "Pleurer" || choix3 == "PLEURER"){
                      alert("Hein ?! Quoi ?! Me laisse pas tomber !\n\n\n*AArrrgggghh !*\n\n\n*Connexion interrompue*");
                      again = prompt("Try again ? : (Y/N)");
                      fail4();
                    }else{
                      rienFaire();
                    }
            }else{
              rienFaire();
          }
      }else if(choix == "droite" || choix == "Droite" || choix == "DROITE"){    /* 1er choix Gauche/droite lumière/grotte */
        alert("Ok, je me mets en route !");
        alert("...");
        alert("**BOOM ! BIM ! BAM ! BOOM !**\n\n\n*Alertom tombe et se cogne la tête...*\n\n\n *Connexion interrompue*\n");
        again = prompt("Try again ? : (Y/N)");
        fail1();
      }else{
        rienFaire();
        again = prompt("Try again ? : (Y/N)");
        fail1();
      }
}else if(check == "N" || check == "n"){
alert("*Vous entendez un cri...*");
again = prompt("Try again ? : (Y/N)");
}
else{
alert("Je ne comprends pas votre langue !");
again = prompt("Try again ? : (Y/N)");
fail0();
}
}
console.log("**** FIN SCRIPT ****");
