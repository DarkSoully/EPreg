import {Component, OnInit, style} from '@angular/core';
import { Engels } from '../../Engels';
import {Duits} from "../../Duits";
import {Nederlands} from "../../Nederlands";
import * as $ from '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends OnInit {
  allergiecheck: boolean;
  language:any;
  eng = new Engels();
  vraag2 = this.eng.getAll();
  duits = new Duits();
  vraag1 = new Nederlands();
  nederlands = this.vraag1.getAll();
  nederlandsantwoord = this.vraag1.getAntwoord();
  ngOnInit() {
    this.vraag2 = this.eng.getAll();
    console.log(this.vraag2);
    console.log(this.nederlands);
    console.log(this.nederlandsantwoord)
  }

  taal(taal) {
    this.language = taal;

    if (this.language == "duits") {
      this.vraag2 = this.duits.getAll();
    } else if (this.language == "english") {
      this.vraag2 = this.eng.getAll();

    }
  }

  download() {
    // Open used in new window
    let data = document.getElementById("everything")[0].innerHTML;
    let newWindow = window.open("data:text/html," + encodeURIComponent(data),
      "_blank");
    newWindow.focus();
  }

  print(): void {
    let printContents, popupWin;
    let print = $('<div/>').append($(elem).clone()).html();

    printContents = document.getElementById('everything').innerHTML;
    console.log(printContents);
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(printContents);
    popupWin.document.close();
  }


}
