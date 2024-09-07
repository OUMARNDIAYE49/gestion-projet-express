class Employes {
  constructor() {
    this.nom = "";
    this.prenom = "";
    this.email = "";
    this.poste = "";
    this.dateEmbauche = "";
    this.statut = "";
  }

  createEmploye(employe) {
    this.nom = employe.nom;
    this.prenom = employe.prenom;
    this.email = employe.email;
    this.poste = employe.poste;
    this.dateEmbauche = employe.dateEmbauche;
    this.statut = employe.statut;

    console.log(`Employé créé : ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche}, ${this.statut}`);
  }

  getEmploye() {
    return {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      poste: this.poste,
      dateEmbauche: this.dateEmbauche,
      statut: this.statut,
    };
  }

  editEmploye(newEmploye) {
    this.nom = newEmploye.nom;
    this.prenom = newEmploye.prenom;
    this.email = newEmploye.email;
    this.poste = newEmploye.poste;
    this.dateEmbauche = newEmploye.dateEmbauche;
    this.statut = newEmploye.statut;

    console.log(`Employé mis à jour : ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche}, ${this.statut}`);
  }

  destroyEmploye() {
    this.dateEmbauche = null;
    console.log("Employé supprimé.");
  }
}

export { Employes };
