import { observable, action, autorun, reaction,when } from 'mobx';
import { Alert } from 'react-native';
import * as firebase from 'firebase';



class WaterStore {
   @observable goalWater = 1
   @observable water = 0
   @observable percente = 1

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
      when(
         () => this.time == "1:52",
         () => {
            // var userId = firebase.auth().currentUser.uid;
            // firebase.database().ref('/informations/' + userId)
            //    .update({
            //       water: 0
            //    })
            Alert.alert("sdf");
            
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
   }

   @action _percentage() {
      this.percente = Math.ceil((this.water / this.goalWater) * 100);
      if (this.percente > 100) {
         this.percente = 100;
      }
   }
}


export default new WaterStore();