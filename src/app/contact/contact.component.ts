import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  show: boolean = false;
  texto: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  redirectToLinkedin(){
    window.open('https://www.linkedin.com/in/joan-sebastian-carrillo-baron/','_blank')
  }

  redirectToGitHub(){
    window.open('https://github.com/SebastianCB-dev','_blank')
  }
  
  copyGmail() {
   this.show = false;
   navigator.clipboard.writeText('sebastianulldeveloper@gmail.com');
   this.texto = 'The email has already been added to your clipboard.';
   this.show = true;
   setTimeout(()=> {
    this.show = false;
   },2000)

  }

  copyTel() {
    this.show = false;
    navigator.clipboard.writeText('+57 3124866123');
    this.texto = 'The phone number has already been added to your clipboard.';
    this.show = true;
    setTimeout(()=> {
     this.show = false;
    },2000)
 
   }

   copyDisc() {
    this.show = false;
    navigator.clipboard.writeText('~Sebastian Carrillo#6083');
    this.texto = 'The Discord username has already been added to your clipboard.';
    this.show = true;
    setTimeout(()=> {
     this.show = false;
    },2000)
 
   }

  redirectToTwitter(){
    window.open('https://twitter.com/SebastianCB29','_blank')
  }
  
}
