import {observable,action,autorun} from 'mobx';
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
import * as firebase from 'firebase';

class InformationStore{
  @observable weight = ''
  @observable wakeup = '08:00'
  @observable sleep = '23:00'

  // constructor(){
  //   autorun(()=>{
  //     this.weight;
  //    this.writeUserData();
  //   })
  // }

  @action _setWeight(newData){
    this.weight=newData;   
  }

  @action _setTime(timeName, newTime){
    if(timeName === "wakeup")
      {this.wakeup=newTime;}
    else if ( timeName=== "sleep")
      {
        this.sleep=newTime;
       
      }
  }

  // @action writeUserData(){
  //   var userId = firebase.auth().currentUser.uid;
  //   firebase.database().ref('/informations/'+ userId)
  //   .set(
  //     {
  //       weight: this.weight,
  //       sleepTime: this.sleep,
  //       wakeupTime: this.wakeup,
  //    }
  //   ).then(()=>{
  //     console.log("yazildi");
  //   })
  // }


 //   if(time===this.sleep)
    // { notification göndermeyi bırak}
    //   else(time===this.wakeup)
    //   {notification gondermeye basla}
  
}

export default new InformationStore();