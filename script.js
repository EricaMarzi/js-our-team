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
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor ",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager ",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
]


//& Recupero elementi necessari 
const row = document.querySelector(".row");



//& Stampa in pagina + img
let items = ``;
for(let i = 0; i < teamMembers.length; i++) {
    const currentName = teamMembers[i]["name"]; 
    const currentRole = teamMembers[i]["role"]; 
    const currentImg = teamMembers[i]["img"];
    
    console.log("Nome: ", currentName);
    console.log("Ruolo: ", currentRole);
    console.log("Url img: ", currentImg);
    console.log("______________________________");

    items += `
    <div class="col">
        <div class="card">
            <img src="img/${currentImg}" alt="${currentName}">
            <div class="info">
                <div class="name">${currentName}</div>
                <div class="role">${currentRole}</div>
            </div>
        </div>
    </div>`
}

row.innerHTML = items;


