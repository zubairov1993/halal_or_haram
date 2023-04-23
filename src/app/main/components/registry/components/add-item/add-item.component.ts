import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { IItem } from '../../interfaces/registry.interface'
import { FirebaseService } from '../../../../../shared/firebase.service'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddItemComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    additive: [null],
    namerus: [null, [Validators.required]],
    namelat: [null, [Validators.required]],
    status: [null, [Validators.required]],
    descrus: [null],
    desclat: [null],
    category: [null],
  })

  selectedFile: File

  constructor(
    private dialogRef: MatDialogRef<AddItemComponent>,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log('form', form);
    if (this.form.invalid) return

    const item: IItem = {
      id: this.firebaseService.countAddivities$.value.toString(),
      additive: this.form.controls['additive'].value,
      category: this.form.controls['category'].value,
      img: null,
      status: this.form.controls['status'].value,
      namerus: this.form.controls['namerus'].value,
      namelat: this.form.controls['namelat'].value,
      descrus: this.form.controls['descrus'].value,
      desclat: this.form.controls['desclat'].value,
    }


    console.log('item', item);

    this.firebaseService.createAdditive(item).subscribe(response => {
      console.log('response', response);
      this.form.reset()

    })
  }

  onClose() {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
