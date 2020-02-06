import { observable, autorun, reaction } from "mobx";
import * as firebase from 'firebase';

var today = new Date();
var times = today.getHours() + ":" + today.getMinutes();

class timeStore{
  // @observable today= new Date();
  // @observable times = today.getHours() + ":" + today.getMinutes();
    

//   constructor() {
//     // reaction(
//     //   () => times,
//     //   times => {
//     //      if (times == "3:01" ) {
//     //         console.warn("dd");
//     //      }
//     //   })
//   // }
// }
}
export default new timeStore;