/**
 * Created by Dylan on 21/02/2017.
 */
(function() {

  angular.module('app')
    .service('duitsService',
      DuitsService
    );
  function DuitsService() {
    var service = {};
    service.getAll = getAll;
    duits = [
      {vraag: "Wofür werden Sie aufgenommen?", antwoord1: "Geburt" , antwoord2: "Keiserschnitt", antwoord3: "Überwachung der Schwangerschaft"},
      {vraag: "Wünschen Sie ein Pflegeset für das Baby (Seife, Badeöl,...)?", antwoord1: "ja", antwoord2: "Nein, ich bringe selber Pflegeprodukte mit."},
      {vraag:"Werden Sie stillen?", antwoord1: "ja", antwoord2: "Nein, ich werde die Flasche geben."}
    ];

    function getAll() {
      return duits;
    }

    return service;
  }

})();
