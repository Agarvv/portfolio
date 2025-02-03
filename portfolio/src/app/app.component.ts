import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]  
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }
}