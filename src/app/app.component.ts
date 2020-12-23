import { Component } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { ChatService } from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public chats: Observable<any[]>;
  constructor(public _cs:ChatService){
    // this.chats = db.collection('chats').valueChanges();
  }
}
