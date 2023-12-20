import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CakeService } from '../services/cake.service';
import { cake } from '../models/cake';

@Component({
  selector: 'app-viewonecake',
  templateUrl: './viewonecake.component.html',
  styleUrls: ['./viewonecake.component.css']
})
export class ViewonecakeComponent implements OnInit {
  constructor(
    private rs: ActivatedRoute,
    private cakeserv: CakeService,
    private router:Router
  ) {}
  mycake: cake = {};

  ngOnInit(): void {
    let stdid = this.rs.snapshot.paramMap.get('id');
    this.getOneCake(stdid);
    this.cakeserv.getCakes().subscribe((cakes) => {
      this.cakeserv.getCakes().subscribe((cakes) => {});
    });
  }

  getOneCake(id: any) {
    this.cakeserv.getCakeById(id).subscribe((data) => {
      this.mycake = data;
    });
  }

  backtohome(){
    this.router.navigateByUrl("viewallcakes")
  }
  
}
