import {observable,action,autorun} from 'mobx';
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
import firebase from 'firebase'

class InformationStore{
  @observable weight = ''
  @observable username = ''
  @observable wakeup = '08:00'
  @observable sleep = '23:00'

  // constructor(){
  //   autorun(()=>{
  //     this.weight;
  //      this.writeUserData(this.username,this.weight,this.wakeup,this.sleep);
  //   })
  // }

  @action _setWeight(newData){
    this.weight=newData;   
  }

  @action _setUsername(username){
    this.username= username;
  }

  @action _setTime(timeName, newTime){
    if(timeName === "wakeup")
      {this.wakeup=newTime;}
    else if ( timeName=== "sleep")
      {
        this.sleep=newTime;
       
      }
  }

  // writeUserData(userId,username,weight,wakeup,sleep){
  //   firebase.database().ref('users/'+ userId ).set({
  //     username: username,
  //     weight: weight,
  //     wakeup: wakeup,
  //     sleep: sleep
  //   });
  // }





 //   if(time===this.sleep)
    // { notification göndermeyi bırak}
    //   else(time===this.wakeup)
    //   {notification gondermeye basla}

  
}

export default new InformationStore();