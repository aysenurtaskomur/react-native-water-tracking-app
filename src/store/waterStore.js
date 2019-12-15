import {observable,action,autorun,reaction} from 'mobx';
import {Alert} from 'react-native'


class WaterStore{
    @observable goalWater= ''
    @observable water= 0
    @observable percente= 1

   
    constructor(){
         autorun(()=>{
           this.water;
           this._percentage();
         //   PushNotification.localNotificationSchedule({
         //       message: "My Notification Message", // (required)
         //       date: new Date(Date.now() + 30 * 1000) // in 60 secs
         //       });
       })
        reaction(
                  ()=>this.percente,
               percente=>{
            if(percente>99){
               Alert.alert("Tebrikler!","Hedefinizi tamamladınız");
            }
           })
    }
   @action _waterAmount(weight){
      this.goalWater = weight * 35;
   }
   
   @action _setWaterAmount(newWater)
   {
      this.goalWater=newWater;
   }

   @action _addWater(addwater){
     this.water = this.water + addwater;
   }

   @action _percentage(){
      this.percente = Math.ceil((this.water/this.goalWater)*100);
      if(this.percente>100){
         this.percente=100;
      }
   }

  
}


export default new WaterStore();