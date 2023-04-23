import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { IItem } from '../../interfaces/registry.interface'
import { FirebaseService } from '../../../../../shared/firebase.service'
import { SharedService } from '../../../../../shared/shared.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowItemComponent implements OnInit {
  statuses: string[] = [ 'ALL', 'HALAL', 'HARAM', 'MUSHBOOH' ]
  panelClass: string = 'select-light'

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
    private dialogRef: MatDialogRef<ShowItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IItem,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    public sharedService: SharedService,
  ) { }

  ngOnInit() {
    console.log('this.data', this.data);
    this.form.controls['additive'].setValue(this.data.additive)
    this.form.controls['namerus'].setValue(this.data.namerus)
    this.form.controls['namelat'].setValue(this.data.namelat)
    this.form.controls['status'].setValue(this.data.status)
    this.form.controls['descrus'].setValue(this.data.descrus)
    this.form.controls['desclat'].setValue(this.data.desclat)
    this.form.controls['category'].setValue(this.data.category)
    console.log('this.form', this.form.value);

    this.sharedService.themeSubject$.subscribe(theme => {
      this.panelClass = theme === 'light' ? 'select-light' : 'select-dark'
      const del = theme === 'light' ? 'dark' : 'light'
      const table = document.getElementById('additive__table') as HTMLInputElement
      table.classList.remove(del)
      table.classList.add(theme)
    })

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

    // this.firebaseService.createAdditive(item).subscribe(response => {
    //   console.log('response', response);
    //   this.form.reset()

    // })
  }

  onClose() {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
