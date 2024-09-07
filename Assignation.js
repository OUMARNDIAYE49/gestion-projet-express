class Assignation {
  static #tabAssignations = [];

  // Récupère toutes les assignations
  static getTab() {
    return Assignation.#tabAssignations;
  }

  // Assigne une tâche à un employé
  static assign({ employe, tache, dateAssignation }) {
    Assignation.#tabAssignations.push({ employe, tache, dateAssignation });
  }

  // Retire une tâche assignée à un employé
  static dropAssign({ employe, tache }) {
    if (employe && tache) {
      Assignation.#tabAssignations = Assignation.#tabAssignations.filter(
        ass => !(ass.employe.nom === employe.nom && ass.tache.nom === tache.nom)
      );
    }
  }

  // Obtient la liste des tâches assignées à un employé
  static getTachesAssign(employe) {
    if (employe) {
      return Assignation.#tabAssignations
        .filter(ass => ass.employe.nom === employe.nom)
        .map(ass => {
          return {
            tache: ass.tache,
            dateAssignation: ass.dateAssignation
          };
        });
    }
  }

  // Obtient la liste des employés assignés à une tâche
  static getEmployesAssign(tache) {
    if (tache) {
      return Assignation.#tabAssignations
        .filter(ass => ass.tache.nom === tache.nom)
        .map(ass => {
          return {
            employe: ass.employe,
            dateAssignation: ass.dateAssignation
          };
        });
    }
  }
}

export { Assignation };
