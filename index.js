import express from "express";
import bodyParser from "body-parser";
import { Employes } from "./Employe.js";
import { Taches } from "./Tache.js";
import { Assignation } from "./Assignation.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/app", (req, res) => {
  const employe1 = new Employes();
  employe1.createEmploye({
    nom: "Fall",
    prenom: "Amadou",
    email: "ama@gmail.com",
    poste: "Dev Web",
    dateEmbauche: "15-01-2024",
    statut: "CDD",
  });

  const employe2 = new Employes();
  employe2.createEmploye({
    nom: "Thimbo",
    prenom: "Abda",
    email: "ma@gmail.com",
    poste: "DevOps",
    dateEmbauche: "10-11-2024",
    statut: "CDI",
  });

  const employe3 = new Employes();
  employe3.createEmploye({
    nom: "Amina",
    prenom: "Ba",
    email: "to@gmail.com",
    poste: "Dev front",
    dateEmbauche: "10-11-2025",
    statut: "CDD",
  });

  // Création des tâches
  const tache1 = new Taches();
  tache1.createTache({
    nom: "Enqueteur",
    description: "Recolte les informations",
    dateDebut: "01-02-2023",
    dateFin: "01-02-2025",
    statut: "A faire",
    priorite: "Elevée",
  });

  const tache2 = new Taches();
  tache2.createTache({
    nom: "createur du contenu",
    description: "Influenceur",
    dateDebut: "11-12-2023",
    dateFin: "11-12-2026",
    statut: "En cours",
    priorite: "Elevée",
  });

  const tache3 = new Taches();
  tache3.createTache({
    nom: "Menager",
    description: "Dirige l'équipe",
    dateDebut: "12-06-2023",
    dateFin: "12-12-2026",
    statut: "A faire",
    priorite: "Basse",
  });

  // Assignations
  Assignation.assign({ employe: employe1.getEmploye(), tache: tache1.getTache(), dateAssignation: new Date() });
  Assignation.assign({ employe: employe1.getEmploye(), tache: tache2.getTache(), dateAssignation: new Date() });
  Assignation.assign({ employe: employe2.getEmploye(), tache: tache3.getTache(), dateAssignation: new Date() });

  // // Test des méthodes de la classe Assignation
  const allAssignations = Assignation.getTab();
  const tachesEmp1 = Assignation.getTachesAssign(employe1.getEmploye());
  const employesTache2 = Assignation.getEmployesAssign(tache2.getTache());

  // Retirer une tâche assignée à un employé
  Assignation.dropAssign({ employe: employe1.getEmploye(), tache: tache1.getTache() });

  const updatedAssignations = Assignation.getTab();
  
  // Envoyer la réponse avec les résultats des tests
  res.status(200).json({
    allAssignations,
    tachesEmp1,
    employesTache2,
    updatedAssignations
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
