import { Component,
//  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild to pozwala na dostęp do form przed submitem
  // @ViewChild('f') signUpForm: NgForm

  defaultSelectValue = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

    // onSubmit(form: HTMLFormElement ) {
    // form - daje cały dostępo do obiektu form
  onSubmit(form: NgForm ) {
    console.log('Form!', form);
    console.log('Submited!', form.value);
    console.log('Names!', form.value.name);
  }


  // with ViewChild
  // onSubmit() {
  //   console.log(this.signUpForm);
  // }

}


// w Angularze dwa podejścia do formularzy
// template-driven - formularz jest wnioskowany/dedukowany z DOM
// reactive - formularz programujemuy i sybchronizujemy z DOM - more complicated

// template-driven
// musimy dodać ngModel do inputa i name
// i w elemencie form dajemy akcję (ngSubmit)
// a także dajemy refa i przekazujemy go w funkcji
// jeśli damy samego refa, bez #f='ngForm - dostaniemy cały obiekt z tagami
// z ngForm też dostajemy objekt, ale z niego możemy wyciągać różne rzeczy


// walidatory są wbudowane w Angular
// required / email / minLength / pattern regex - daje false/true w valid w obiekcie
// to również dodaje dynamicznie specjalne klasy ccs na tagu do ostylowania
// można łatwo ostylować np. button - [disabled]='!f.valid'

// żeby dodać info, enter correct email
// na inpucie emaila:  #email='ngModel'
// na spanie: *ngIf='!email.valid && email.touched'

// defaults values
// [ngModel]="defaultSelectValue"
// lub [ngModel]="'twój tekst'"



