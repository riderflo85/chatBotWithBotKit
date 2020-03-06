/*--------------------------Regular expression-------------------------------*/
// Sans indiquer le jour de la semiane
exports.reg1 = new RegExp(/^(.)*(mange)(.)+(ce|se)\s(midi|soir)/ig);
// Détermine si la demande concerne le midi ou le soir
exports.reg2 = new RegExp(/(midi|soir)/ig);
// Avec indiquation du jour de la semaine
exports.reg3 = new RegExp(/^(.)*(mange)(.)+(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\s(midi|soir)/ig);
// Détermine le jour de la semaine
exports.reg4 = new RegExp(/(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)/ig);
// Pour la commande jour. Détermine si le mot 'jour' est présent
exports.reg5 = new RegExp(/^(jour)/ig);
// Sauvegarde l'url et le pseudo du serveur de l'utilisateur
exports.reg6 = new RegExp(/^(url:)\s(.)+\s(pseudo:)\s(.)+$/ig);
/*---------------------------------------------------------------------------*/

exports.days = {
    "lundi": "monday",
    "mardi": "tuesday",
    "mercredi": "wednesday",
    "jeudi": "thursday",
    "vendredi": "friday",
    "samedi": "saturday",
    "dimanche": "sunday",
};
exports.moment_day = {
    "midi": "am",
    "soir": "pm"
};