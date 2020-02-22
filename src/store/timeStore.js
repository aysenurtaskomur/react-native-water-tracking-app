import { observable, autorun, reaction,action } from "mobx";
import * as firebase from 'firebase';
import WaterStore from './waterStore';


class timeStore{
   @observable currentDay=0;
   @observable firebaseDay = new Date().toLocaleDateString();
   @observable Monday = 0;
   @observable Tuesday = 0;
   @observable Wednesday = 0;
   @observable Thursday = 0;
   @observable Friday = 0;
   @observable Saturday = 0;
   @observable Sunday = 0;

  constructor() { 
    setInterval(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
      this.currentDay = new Date().toLocaleDateString();
      var userId = firebase.auth().currentUser.uid;
      let check = firebase.database().ref('/informations/' + userId);
      check.on('value', snapshot => {
        var dayFirebase = snapshot.child('date').val();
        this.firebaseDay = dayFirebase;
      })
        if(this.currentDay !== this.firebaseDay) {
          firebase.database().ref('/informations/' + userId)
            .update({
              water: 0,
              date: this.currentDay
            })
            .then(()=>{
              WaterStore._percentage();
             
            })
        }
    }
     })
    }, 5000);
   }
 }


export default new timeStore;