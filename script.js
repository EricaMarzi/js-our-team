/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.<br>
Ogni membro è caratterizzato dalle seguenti informazioni: **nome, ruolo e foto**.
* MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
* MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
* MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
* BONUS 1: Trasformare la stringa foto in una immagine effettiva
* BONUS 2: Organizzare i singoli membri in card/schede prendendo a esempio uno dei due layout proposti

* DATI:
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/

//& Array di oggetti

const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "<img src='img/wayne-barnett-founder-ceo.jpg' alt='Barnett'>"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor ",
        img: "<img src='img/angela-caroll-chief-editor.jpg' alt='Caroll'>"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager ",
        img: "<img src='img/walter-gordon-office-manager.jpg' alt='Gordon'>"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "<img src='img/angela-lopez-social-media-manager.jpg' alt='Lopez'>"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "<img src='img/scott-estrada-developer.jpg' alt='Estrada'>"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "<img src='img/barbara-ramos-graphic-designer.jpg' alt='Ramos'>"
    }
]


//& Recupero elementi necessari 
const printName = document.querySelectorAll(".name");
const printRole = document.querySelectorAll(".role");
const printImg = document.querySelectorAll(".img")


//& Stampa in pagina + img

for(let i = 0; i < teamMembers.length; i++) {
    const currentName = teamMembers[i]["name"]; 
    const currentRole = teamMembers[i]["role"]; 
    const currentImg = teamMembers[i]["img"];
    
    console.log("Nome: ", currentName);
    console.log("Ruolo: ", currentRole);
    console.log("Url img: ", currentImg);
    console.log("______________________________");


    printName[i].innerHTML = currentName;
    printRole[i].innerHTML = currentRole;
    printImg[i].innerHTML = currentImg;

    
}
