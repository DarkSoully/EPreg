import {Component, OnInit, style} from '@angular/core';
import { Engels } from '../../Engels';
import {Duits} from "../../Duits";
import {Nederlands} from "../../Nederlands";
import {Arabische} from "../../Arabische";
import {Russisch} from "../../Russisch";
var html2canvas = require('html2canvas');
var speak = require('browser-speak');
var  BDSSpeechSynthesizer = require('baidu-speech-synthesizer');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent extends OnInit {
  allergiecheck: boolean;
  language:any;
  rus = new Russisch();
  eng = new Engels();
  arab = new Arabische();
  vraag2 = this.eng.getAll();
  duits = new Duits();
  vraag1 = new Nederlands();
  nederlands = this.vraag1.getAll();
  nederlandsantwoord = this.vraag1.getAntwoord();

  ngOnInit() {
    this.vraag2 = this.eng.getAll();
  }

  taal(taal) {
    this.language = taal;

    if (this.language == "duits") {
      this.vraag2 = this.duits.getAll();
    } else if (this.language == "english") {
      this.vraag2 = this.eng.getAll();
    } else if (this.language == "arabische") {
      this.vraag2 = this.arab.getAll();
    } else if(this.language == "russisch") {
      this.vraag2 = this.rus.getAll();
    }

  }

  download(text) {
    let bss = new BDSSpeechSynthesizer({per: 2});
    bss.speak(text);

  }

  print(): void {
    html2canvas(document.getElementById('everything'), {
      onrendered: function (canvas) {
        var img = canvas.toDataURL()
        window.open(img);
      }
    });

  }




}
