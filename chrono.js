
var btn_start=document.getElementById("start");

var t;
var ms=0,s=0,mn=0,h=0;


/*La fonction "start" démarre un appel répétitive de la fonction update_chrono par une cadence de 100 milliseconde en utilisant setInterval et désactive le bouton "start" */

function start(){
t =setInterval(update_chrono,100);
btn_start.disabled=true;

}

    /*La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
function update_chrono(){
ms+=1;
  }

   console.log(start)