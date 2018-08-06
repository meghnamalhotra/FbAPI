import { Component, OnInit } from '@angular/core';
import{ActService} from '../act.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  userData:any;
  constructor(private actservice:ActService) { }

  ngOnInit() {
    this.userData=this.actservice.getData();
  }

}
