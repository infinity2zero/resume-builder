import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
    selector: 'education-component',
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
    educationForm!: FormGroup;
    submitted = false;
    numberOfQualifications = 0;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.educationForm = this.formBuilder.group({
            // numberOfQualifications: ['', Validators.required],
            qualifications: new FormArray([])
        });
    }

    // convenience getters for easy access to form fields
    get f() { return this.educationForm.controls; }
    get t() { return this.f['qualifications'] as FormArray; }
    get qualificationFormGroups() { return this.t.controls as FormGroup[]; }

    onChangequalifications() {
        // const numberOfQualifications = e.target.value || 0;
        if (this.t.length < this.numberOfQualifications) {
            if (this.t.length === 0) {
                // ensure validation messages aren't displaying when the 
                // number of qualifications is first selected (changed from zero)
                this.onClear();
            }

            for (let i = this.t.length; i < this.numberOfQualifications; i++) {
                this.t.push(this.formBuilder.group({
                    school: ['', Validators.required, { updateon: 'blur' }],
                    degree: ['', Validators.required, { updateon: 'blur' }],
                    area: ['', Validators.required, { updateon: 'blur' }],
                    grade: ['', Validators.required, { updateon: 'blur' }],
                    startdate: ['', Validators.required, { updateon: 'blur' }],
                    enddate: ['', Validators.required, { updateon: 'blur' }],
                }));
            }
        } else {
            for (let i = this.t.length; i >= this.numberOfQualifications; i--) {
                this.t.removeAt(i);
            }
        }
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.educationForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.educationForm.value, null, 4));
    }

    onReset() {
        // reset whole form back to initial state
        this.submitted = false;
        this.educationForm.reset();
        this.t.clear();
    }

    onClear() {
        // clear errors and reset ticket fields
        this.submitted = false;
        this.t.reset();
    }
}
