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
  // @ViewChild('f') signUpForm: NgForm;

  defaultSelectValue = 'pet';
  answer = '';
  genders = ['male', 'female'];
  isSubmited = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

    // onSubmit(form: HTMLFormElement ) {
    // form - daje cały dostępo do obiektu form (założone na tagu form)
    onSubmit(form: NgForm ) {
      console.log('Form!', form);
      console.log('Submited!', form.value);
      console.log('Names!', form.value.userData.name);

      // aby wszystko skasować
      form.reset();
    }

  // with ViewChild
  // onSubmit() {
  //   console.log(this.signUpForm);

  // // kasowanie
  //  this.signUpForm.reset();
  // }

}


// w Angularze dwa podejścia do formularzy
// template-driven - formularz jest wnioskowany/dedukowany z DOM - to jest to podejście z gotwym html
// reactive - formularz programujemuy i sybchronizujemy z DOM - more complicated

// template-driven
// musimy dodać ngModel do inputa i name
// i w elemencie form dajemy akcję (ngSubmit)
// a także dajemy refa i przekazujemy go w funkcji
// jeśli damy samego refa, bez #f='ngForm' - dostaniemy cały obiekt z tagami
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

// ngModel - 3 sposoby
// no binding - ngModel + name - input pod kontrolą
// one-way binding - [ngModel]="defaultSelectValue" - dla default value
// two-way binding - [(ngModel)]="answer" - dla output value in other place

// zgrupowanie kilku inputów - do value dodaje obiekt userData, daje dostęp do wszystkich ficzerów z klasami
// ngModelGroup="userData"
// a potem #userData="ngModelGroup" na tym samym elemencie co wyżej dajemy refa
// i możemy się odnosić do klas *ngIf="!userData.valid && userData.touched"


// input radio po dodaniu ngModel również wskakuje do value




