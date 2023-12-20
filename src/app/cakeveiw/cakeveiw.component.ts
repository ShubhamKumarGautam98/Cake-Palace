import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { CakeService } from '../services/cake.service';
import { cake } from '../models/cake';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cakeveiw',
  templateUrl: './cakeveiw.component.html',
  styleUrls: ['./cakeveiw.component.css']
})
export class CakeveiwComponent implements OnInit{
  cakesdata:cake[]=[];
  caketypefilter:string=""
  
  constructor(private cakeservice:CakeService,private router:Router,private ar:ActivatedRoute,public loginservice:LoginService){}
  ngOnInit(): void {
    this.ar.paramMap.subscribe(
      (params)=>{
        let id=params.get("id")??0;
        this.deletecake(id);
      }
    )

    this.getAllcakes();
  }
  

  deletecake(id:any){
    this.cakeservice.deletecake(id).subscribe(()=>{
      this.getAllcakes();
      this.router.navigateByUrl("viewallcakes");
    })
  } 

  getAllcakes(){
   return this.cakeservice.getCakes().subscribe(
      (cakedata: cake[]) => {this.cakesdata=cakedata})
    }
   

search() {
  if(this.caketypefilter!=""){
    this.cakesdata = this.cakesdata.filter(x => x.title?.toLowerCase().includes(this.caketypefilter.toLowerCase()));
  }
  else{
    this.getAllcakes();
  }
}

reset(){
  this.getAllcakes();
}
}

