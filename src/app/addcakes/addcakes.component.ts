import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CakeService } from '../services/cake.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar
import { cake } from '../models/cake';

@Component({
  selector: 'app-addcakes',
  templateUrl: './addcakes.component.html',
  styleUrls: ['./addcakes.component.css']
})
export class AddcakesComponent implements OnInit {
  id: number = 0;
  mycakeForm!: FormGroup;
  mycake: cake = {};
  isEditCake: boolean = false;

  constructor(
    private cakeservice: CakeService,
    private router: Router,
    private rs: ActivatedRoute,
    private dbserv: CakeService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar  // Inject MatSnackBar
  ) {}

  ngOnInit(): void {
    this.rs.paramMap.subscribe(params => {
      let stdid = params.get("id") ?? 0;
      this.id = +stdid;
      this.isEditCake = !!this.id;
      this.initializeForm();

      if (this.isEditCake) {
        this.getOneCake(this.id);
      }
    });
  }

  initializeForm() {
    this.mycakeForm = this.formBuilder.group({
      id: [this.id, Validators.required],
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
    });
  }

  addcake() {
    if (this.isEditCake) {
      this.cakeservice.editCake(this.mycakeForm.value as cake).subscribe((data) => {
        this.showSnackBar('Cake details edited ' + data.id);
        this.router.navigateByUrl('viewallcakes');
      });
    } else {
      if (this.mycakeForm.valid) {
        const cakeData = this.mycakeForm.value;

        this.cakeservice.addcake(cakeData).subscribe((data) => {
          this.showSnackBar('Cake added ' + data.id);
          this.router.navigateByUrl('viewallcakes');
        });
      }
    }
  }

  getOneCake(id: number) {
    this.cakeservice.getCakeById(id).subscribe((data) => {
      this.mycakeForm?.patchValue(data);
    });
  }

  // Function to display snackbar
  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
  canClose(){
    if(this.mycakeForm.invalid ){
      let response=confirm("Do you want to leave in between")
      return response;
    }
    else{
      return true;
    }
  }
}
