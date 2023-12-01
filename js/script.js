// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe


//* Creo array del team
const myTeam = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      pic: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      pic: "img/angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      pic: "img/walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      pic: "img/angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      pic: "img/scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      pic: "img/barbara-ramos-graphic-designer.jpg",
    },
  ];
  console.log(myTeam);

// stampo su console le informazioni di ogni membro del team

for(let key in myTeam ) {
    console.log(key, myTeam[key]);
}

// stampo le info nel dom sottoforma di stringhe
let cardContainer = document.getElementById("card-container");