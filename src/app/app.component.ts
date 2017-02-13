import {Component, ViewChild, AfterViewInit, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends OnInit {
  language:any;
  vraag2 = this.engels;
  nederlands: any[] = [
{vraag: "Voor wat wordt u opgenomen?", antwoord1: "bevalling", antwoord2: "keizersnede", antwoord3: "observatie zwangerschap"},
    {vraag: "Wenst u een verzorgingsset voor de baby (zeep, badolie,...)?", antwoord1: "ja", antwoord2: "Neen, ik breng zelf verzorgingsproducten mee"},
    {vraag: "Neen, ik breng zelf verzorgingsproducten mee", antwoord1: "Ja", antwoord2: "Neen, ik ga flesvoeding geven."}
];

  engels:any[] = [
    {vraag: "What is the reason of your admission?", antwoord1: "Birth", antwoord2: "Caesarean section", antwoord3: "Observation of pregnancy"},
    {vraag: "Do you want to get a care set for your baby? (soap, bath oil, …)", antwoord1: "Yes, I want.", antwoord2: "No, I will bring a set with me."},
    {vraag: "Are you going to breastfeed?", antwoord1: "Yes, I will.", atnwoord2: "No, I will bottle feed my baby."}
  ];
  duits:any[] = [
    {vraag: "Wofür werden Sie aufgenommen?", antwoord1: "Geburt" , antwoord2: "Keiserschnitt", antwoord3: "Überwachung der Schwangerschaft"},
{vraag: "Wünschen Sie ein Pflegeset für das Baby (Seife, Badeöl,...)?", antwoord1: "ja", antwoord2: "Nein, ich bringe selber Pflegeprodukte mit."},
    {vraag:"Werden Sie stillen?", antwoord1: "ja", antwoord2: "Nein, ich werde die Flasche geben."}
  ];
  ngOnInit() {
    this.vraag2 = this.engels;
  }

  taal(taal) {
    this.language = taal;
    console.log(this.vraag2);

    if (this.language == "duits") {
      this.vraag2 = this.duits;
      console.log(this.vraag2);
    } else if (this.language == "english") {
      this.vraag2 = this.engels;
      console.log(this.vraag2);

    }
  }


}
