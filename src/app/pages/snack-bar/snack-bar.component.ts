import { Component } from '@angular/core';
import { MatModule } from '../../appModule/mat.module';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [MatModule],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss'
})
export class SnackBarComponent {
  constructor(private _snackBar: MatSnackBar){}

  openSnackBar(message: string, name: string) {
    this._snackBar.open(name, message);
  }

  ngOnDestroy(){
    this._snackBar.dismiss();
  }

}
