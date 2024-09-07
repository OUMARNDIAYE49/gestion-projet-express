class Taches {
  constructor() {
    this.nom = "";
    this.description = "";
    this.dateDebut = "";
    this.dateFin = "";
    this.statut = "";
    this.priorite = "";
  }

  createTache(tache) {
    this.nom = tache.nom;
    this.description = tache.description;
    this.dateDebut = tache.dateDebut;
    this.dateFin = tache.dateFin;
    this.statut = tache.statut;
    this.priorite = tache.priorite;

    console.log(`Tâche créée : ${this.nom}, ${this.description}, ${this.dateDebut}, ${this.dateFin}, ${this.statut}, ${this.priorite}`);
  }

  getTache() {
    return {
      nom: this.nom,
      description: this.description,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      statut: this.statut,
      priorite: this.priorite,
    };
  }

  editTache(newTache) {
    this.nom = newTache.nom;
    this.description = newTache.description;
    this.dateDebut = newTache.dateDebut;
    this.dateFin = newTache.dateFin;
    this.statut = newTache.statut;
    this.priorite = newTache.priorite;

    console.log(`Tâche mise à jour : ${this.nom}, ${this.description}, ${this.dateDebut}, ${this.dateFin}, ${this.statut}, ${this.priorite}`);
  }

  destroyTache() {
    this.dateDebut = null;
    console.log("Tâche supprimée.");
  }
}

export { Taches };
