import { Component } from '@angular/core';
import { MatModule } from '../../appModule/mat.module';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [MatModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

}
