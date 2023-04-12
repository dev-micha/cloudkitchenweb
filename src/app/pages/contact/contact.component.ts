import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Contact } from 'src/app/model/contacts';
//import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'AngularHttpRequest';
  allContacts: Contact[] = [];
  isFetching: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchContacts();
  }

  onContactsFetch() {
    this.fetchContacts();
  }

  getcontactFormData(contactdata: {fname: string, lname: string, email: string, mobile: string}){
    console.log(contactdata);
    const headers = new HttpHeaders({'myHeader': 'cloudkitchenweb'});
    this.http.post<{name: string}>(
      'https://cloudkitchenweb-698c4-default-rtdb.europe-west1.firebasedatabase.app/contacts.json',
      contactdata, {headers: headers})
    .subscribe((res) => {
      console.log(res);
    });
  }

  private fetchContacts() {
    this.isFetching = true;
    this.http.get<{[key: string]: Contact}>('https://cloudkitchenweb-698c4-default-rtdb.europe-west1.firebasedatabase.app/contacts.json')
    .pipe(map((res) => {
      const contacts = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          contacts.push({...res[key], id: key})
        }
      }
      return contacts;
    }))  
    .subscribe((contacts) => {
      console.log(contacts);
      this.allContacts = contacts;
      this.isFetching = false;
    })
  }
  onDeleteContact(id: string){ 
    this.http.delete('https://cloudkitchenweb-698c4-default-rtdb.europe-west1.firebasedatabase.app/contacts/'+id+'.json')
    .subscribe();
  }

  onDeleteAllContacts(){ 
    this.http.delete('https://cloudkitchenweb-698c4-default-rtdb.europe-west1.firebasedatabase.app/contacts.json')
    .subscribe();
  }

}
