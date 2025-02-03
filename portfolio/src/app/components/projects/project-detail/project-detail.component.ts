import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  @Input() detail: string = 'Project Title';  
  @Input() description: string = 'Project Description';  
  @Input() detailMediaType: string = 'img';  
  @Input() detailMedia: string = 'assets/Showroom_508_M_Allure_1.jpg';  
  @Input() responsiveDetailMedia: string | null = 'assets/Showroom_508_M_Allure_1.jpg';  
}