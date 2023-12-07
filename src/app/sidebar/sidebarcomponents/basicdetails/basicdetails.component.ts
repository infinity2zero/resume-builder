import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {ckEditorConfig} from '../../../ckEditor/ckEditorConfig'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'basic-details',
  standalone: true,
  imports: [CommonModule,RouterModule,NgbNavModule,ReactiveFormsModule, CKEditorModule],
  templateUrl: './basicdetails.component.html',
  styleUrl: './basicdetails.component.scss'
})

export class BasicDetailsComponent implements OnInit,AfterViewInit{
  contactsForm: any;
  linksForm:any;
  aboutForm:any;
  submitted = false;
  public editorConfig = {};
  public Editor = ClassicEditor;

  constructor(private formBuilder: FormBuilder){
    console.log('BasicDetailsComponent LOADED...');

  }

  ngOnInit(): void {
    console.log('EDITOR CONFIG',this.editorConfig);
    this.editorConfig = ckEditorConfig;
    this.contactsForm = this.formBuilder.group(
        {
          firstName: this.formBuilder.control('', { updateOn: 'blur' }),
          title: this.formBuilder.control('', { updateOn: 'blur' }),
          email: this.formBuilder.control('', { updateOn: 'blur' }),
          phone: this.formBuilder.control('', { updateOn: 'blur' }),
          location: this.formBuilder.control('', { updateOn: 'blur' }),
          rexperience: this.formBuilder.control('', { updateOn: 'blur' }),
          texperience: this.formBuilder.control('', { updateOn: 'blur' }),
        },
    
      );



      this.linksForm = this.formBuilder.group(
        {
          linkedin: this.formBuilder.control('', { updateOn: 'blur' }),
          twitter: this.formBuilder.control('', { updateOn: 'blur' }),
          github: this.formBuilder.control('', { updateOn: 'blur' }),
          hackerrank: this.formBuilder.control('', { updateOn: 'blur' }),
          hackerearth: this.formBuilder.control('', { updateOn: 'blur' }),
          leetcode: this.formBuilder.control('', { updateOn: 'blur' }),
          personalWebsite: this.formBuilder.control('', { updateOn: 'blur' }),
        },
    
      );

      this.aboutForm = this.formBuilder.group(
        {
            aboutMe: this.formBuilder.control('', { updateOn: 'change' }),
            objective: this.formBuilder.control('', { updateOn: 'change' })
        },
    
      );
  }

  ngAfterViewInit(): void {
    this.contactsForm.valueChanges.subscribe((change:any)=>{ console.log(change) })
    this.linksForm.valueChanges.subscribe((change:any)=>{ console.log(change) });
    this.aboutForm.valueChanges.subscribe((change:any)=>{ console.log(change) });
    // createEditorInstance('editor');
  }

  get f() {
    return this.contactsForm.controls;
  }
  get lf() {
    return this.linksForm.controls;
  }
  get af() {
    return this.aboutForm.controls;
  }
  
}
