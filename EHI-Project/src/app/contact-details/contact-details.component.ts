import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contact-model'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactDetailsList:any=[];
  selectedIndex:any;
  statusArr:any=['Active','Inactive'];
  contactObj:any = new ContactModel();
  prevData:any;
  bAdd:boolean;
  bUpdate:boolean;

  constructor(){  }

  ngOnInit(){  }

  addContact(){
    let newData = JSON.parse(JSON.stringify(this.contactObj));
    this.contactDetailsList.splice(0,0,newData);
    this.prevData = newData;
    this.selectedIndex = 0;
    this.bAdd = true;
  }

  editDetails(ind){
    this.prevData = JSON.parse(JSON.stringify(this.contactDetailsList[ind]));
    this.selectedIndex = ind;
    this.bUpdate = false;
    this.bAdd = false;
  }

  deleteDetails(ind){
    this.contactDetailsList.splice(ind,1);
    this.selectedIndex = undefined;
    this.bUpdate = false;
    this.bAdd = false;
  }

  updateDetails(ind,formValid){    
    formValid ? (this.selectedIndex = undefined,this.bAdd = false,this.bUpdate = false) : this.bUpdate = true;
  }
  
  cancelDetails(ind){
    this.bAdd ? this.contactDetailsList.shift() : this.contactDetailsList[ind] = this.prevData;
    this.selectedIndex = undefined;
    this.bAdd = false;
    this.bUpdate = false;
  }

}
