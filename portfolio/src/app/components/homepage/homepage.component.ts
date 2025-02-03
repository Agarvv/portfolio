import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProjectShowcaseComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']  
})
export class HomepageComponent { }