import {observable,action,autorun} from 'mobx';

class InformationStore{
  @observable weight = ''
  @observable username = ''
  @observable wakeup = '00:00'
  @observable sleep = '00:00'

  // constructor(){
  //   autorun(()=>{
  //     this.weight;
     

  //      this.writeUserData(0,this.username,this.weight,this.wakeup,this.sleep);
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
      this.wakeup=newTime;
    else if ( timeName=== "sleep")
      this.sleep=newTime;
  }

  writeUserData(userId,username,weight,wakeup,sleep){
    firebase.database().ref('users/' + userId).set({
      username: username,
      weight: weight,
      wakeup: wakeup,
      sleep: sleep
    });
  }
}

export default new InformationStore();