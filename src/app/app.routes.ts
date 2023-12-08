import { Routes } from '@angular/router';
import { BasicDetailsComponent } from './sidebar/sidebarcomponents/basicdetails/basicdetails.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SkillComponent } from './sidebar/sidebarcomponents/skills/skill.component';
import { EducationComponent } from './sidebar/education/education.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:SidebarComponent
    },
    {
        path: 'basicdetails',
        component: BasicDetailsComponent,
    },
    {
        path: 'skills',
        component: SkillComponent,
    },
    {
        path:'education',
        component:EducationComponent
    }
];
