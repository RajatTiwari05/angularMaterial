import { Component } from '@angular/core';
import { MatModule } from '../../appModule/mat.module';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

}
