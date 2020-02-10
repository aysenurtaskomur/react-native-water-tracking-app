import { observable, action, autorun, reaction,when } from 'mobx';
import { Alert } from 'react-native';
import * as firebase from 'firebase';

//  var weekday = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];

class WaterStore {
   @observable goalWater = 1
   @observable water = 0
   @observable percente = 1
   @observable childKey = ''
   @observable childData =0


   constructor() {
      autorun(() => {
         this.water;
         this._percentage();
      })
      reaction(
         () => this.percente,
         percente => {
            if (percente > 99) {
               Alert.alert("Tebrikler!", "Hedefinizi tamamladınız");
            }
         })
   }


   @action _waterAmount(weight) {
      this.goalWater = weight * 35;
   }

   @action _setWaterAmount(newWater) {
      this.goalWater = newWater;
   }

   @action _addWater(addwater) {
      this.water = this.water + addwater;
     
      // var userId = firebase.auth().currentUser.uid;
      // var query = firebase.database().ref('informations/'+ userId).orderByValue();
      // query.on('value',snapshot=>{
      //   snapshot.forEach(childSnapshot=>{
      //      this.childKey = childSnapshot.key;
      //      if(this.childKey == weekday)
      //       {
      //          var up = {};
      //          up[this.childKey] = this.water;
      //          firebase.database().ref('/informations/' + userId).update(up);
              
      //       }
      //    })
      // })
   }
      

   @action _percentage() {
      this.percente = Math.ceil((this.water / this.goalWater) * 100);
      if (this.percente > 100) {
         this.percente = 100;
      }
   }
}


export default new WaterStore();