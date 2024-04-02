import { Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { MainComponent } from './pages/main/main.component';
import { CardsComponent } from './pages/cards/cards.component';
import { SnackBarComponent } from './pages/snack-bar/snack-bar.component';
import { DatePickerComponent } from './pages/date-picker/date-picker.component';
import { FormFieldComponent } from './pages/form-field/form-field.component';

export const routes: Routes = [
    {path: '',
    component: MainComponent
    },
    {
    path: 'buttons',
    component: ButtonsComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'snackbar',
        component: SnackBarComponent
    },
    {
        path: 'datepicker',
        component: DatePickerComponent
    },
    {
        path: 'formfield',
        component: FormFieldComponent
    }
];
