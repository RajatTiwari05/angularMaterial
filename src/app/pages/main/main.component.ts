import { Component } from '@angular/core';
import { MatModule } from '../../appModule/mat.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatModule, RouterOutlet,RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
