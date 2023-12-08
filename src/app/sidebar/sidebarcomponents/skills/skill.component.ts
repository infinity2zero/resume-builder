import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RangeSliderComponent } from '../../../rangeslider/rangeslider.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,NgbAccordionModule,RangeSliderComponent,FormsModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
    
    public showAddMore:boolean=true;
    public skillDataObject:any={};
    public rating:any;
    public skills = [
        {name :'Languages', id:1,items:new Array<SKILLItems>(),isHidden:false},
        {name :'Frameworks', id:2,items:new Array<SKILLItems>(),isHidden:false},
        {name :'Technologies', id:3,items:new Array<SKILLItems>(),isHidden:false},
        {name :'Libraries', id:4,items:new Array<SKILLItems>(),isHidden:false},
        {name :'Databases', id:5,items:new Array<SKILLItems>(),isHidden:false},
        {name :'Practices', id:6,items:new Array<SKILLItems>(),isHidden:false},
        {name :'Tools', id:7,items:new Array<SKILLItems>(),isHidden:false},
    ]

    sliderVal(val:any,skill:any) {
      this.rating = val;
    }
    formDataForProcess(skill:string){
      console.log('skill',skill);
      let val = this.skills.findIndex(el=>el.name ==skill);
      let item:SKILLItems = {
        name : this.skillDataObject[skill],
        rating : this.rating?this.rating:'0'
      };
      this.skills[val].items.push(item);
      this.skillDataObject ={};
      console.log(this.skills);
    }

    changeVisibility(skill:string){
      let val = this.skills.findIndex(el=>el.name ==skill);
      this.skills[val].isHidden = !this.skills[val].isHidden;
      console.log(this.skills);
      
    }
}

export interface SKILLItems {
  name:string;
  rating:string;
}
