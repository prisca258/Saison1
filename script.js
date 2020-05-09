//Episode 1 //
/*Ecrire un programme qui affiche à la console Mbolo JS.*/
var salut="Mbolo JS";

console.log(salut);


//Episode 2 //
/*Ecrire un programme qui demande à l'utilisateur son nom et affiche une alerte affichant Bonjour <nom>.
 Où <nom> est le nom saisi par l’utilisateur.*/
 var nom = prompt("Quel est votre nom?");
 var phrase= "Bonjour";
 var toutelaphrase= phrase + " " + nom
 alert(toutelaphrase);





//Episode 3 //
/*Ecrire un programme qui demande à l'utilisateur deux nombres et affiche leur somme en alerte.*/

var x=prompt("saisir le premier nombre"); //prompt permet de poser une question et d'obtenir une réponse//
var y=prompt("saisir le deuxieme nombre");
var s=parseInt(x)+parseInt(y); /*parseInt c'est pour convertir les variables x et y en entier , car au départ ils sont considérés comme des chaines caractères*/
alert("la somme vaut: " +s);

// Episode 4//
/*Ecrire un programme permettant de permuter les valeurs de deux variables. Le résultat est affiché en console.*/

//Episode 5//
/*Ecrire un programme qui demande à l'utilisateur un nombre et affiche son double en alerte.*/
var nombre =prompt("Ecrire un nombre");
var phrase1="Le double de ce nombre est: ";
var multiplication= phrase1 + " "+ 2*nombre;
alert(multiplication);

//Episode 6//
/*Ecrire un programme qui demande à l’utilisateur trois nombres et affiche la moyenne de ces nombres en alerte.*/
var a=prompt("Ecrire un premier nombre");
var b=prompt("Ecrire un deuxième");
var c=prompt("Ecrire un troisième nombre");
var moyenne= (parseInt(a) +parseInt(b)+parseInt(c))/3;
alert("La moyenne est de" + " "+ moyenne);

//Episode 7//
/*Ecrire un programme qui demande l'âge de l’utilisateur et affiche : Vous êtes mineur ou Vous êtes majeur.
NB : Est considérée majeure, une personne ayant au moins 18 ans.*/

var age=prompt("quel est votre age? ");
if (age <18 && age>0) {
    alert("Vous êtes mineur");
}
else if (age>=18){
    alert("Vous êtes majeur");
    
}
 else {
      alert("C'est une erreur!");
    
} 


//Episode 8//
/*Ecrire un programme qui demande le nom de l’utilisateur et son sexe et affiche Bonjour monsieur <nom> ou Bonjour madame <nom>.
 Où <nom> est le nom saisi par l’utilisateur.*/ 

 var nomUtilisateur=prompt("Ecrire votre nom d'utilisateur: ");
 var sexe=prompt("Quel est votre sexe ? ,soit Homme  ou Masculin pour homme et Femme ou Feminin pour femme" );
 
if ( sexe==Homme || sexe==Masculin ) {
    alert("Bonjour monsieur" +" " + nomUtilisateur);
}
else if (sexe==Femme || sexe==Feminin) {
    alert("Bonjour madame " + " " + nomUtilisateur);
    
} 
else {
    alert("Vous faites une erreur");
    
} 
    

//Episode 9//
/*Ecrire un programme qui demande la moyenne d’un élève et affiche sa mention (Passable, Assez-Bien, Bien, Très bien, Excellent).
NB : La moyenne varie entre 0 et 20.*/

var moyenne=prompt("Ecrire votre moyenne");
if(moyenne>=10  && moyenne<12){
    alert(" Mention : passable");
}
else if (moyenne>=12  && moyenne<14 ) {
    alert("Mention : Assez-Bien");
}

else if (moyenne>=14  && moyenne<16) {
    alert("Mention : Bien");

        
    } 
 else if (moyenne>=16  && moyenne<18) {
       alert("Mention : Très Bien");
        
    } 
    else if(moyenne>=18  && moyenne==20) {
        alert("Mention : Excellent");
        
    }
    else {
        alert("Insuffisant");
        
    }
    //Episode 10//
    /* Ecrire un programme qui demande le montant d’une facture et affiche le total à payer après avoir appliqué une remise de 10% si le montant de la facture dépasse 40.000 F. */

    var montant=prompt("Montant de depart");
    var remise=(montant*10) /100
    var montantfinal=montant-remise
    if(montant>40000){
        alert("Total à payer"+" "+ (parseInt(montant) - parseInt(remise))+"F");
    
     }
      else {
            alert("Votre solde est :" + montant+"F");
            
            
        }

        //Episode 11//
        /*Ecrire un programme qui demande un nombre à l’utilisateur et affiche la table de multiplication de ce nombre jusqu’à 10.

        var nomb= prompt("Ecrire un nombre")
        var i=1
            
        for(i===1; i<=10; i++){
            alert("Afficher la table de multiplication de" +" " +nomb " est egale à:"nomb*ih=nomb*i );*
        }
            
        

    



    //Episode 12//
    /*Ecrire un programme qui fait la somme des 10 premiers nombres entiers à partir de 1. Le résultat est affiché en console.*/

    var nombre=1;
if (nombre<=10)
 {
        console.log( "la somme des dix premier nombre est"+ " " +(parseInt(1)+parseInt(2)+ parseInt(3)+ parseInt(4) +parseInt(5) +parseInt(6) + parseInt(7) +parseInt(8)+parseInt(9)+parseInt(10)));
         
        
    }
    
    
        
    





