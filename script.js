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

//^ Array di oggetti

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

//TODO stampa in pagina (seguendo lo schema impostato in html)

//TODO trasforma stringa img in immagine effettiva