import * as maptalks from "maptalks";
import {msg1} from "../js/TaxiAnalysis/TraceData2";
//定义变量
  let Taxi3dTrace_rem;
  let Taxi3dTrace_arrLat=[];
  let Taxi3dTrace_arrLng =[];
  let Taxi3dTrace_arrHeight = [];
  let Taxi3dTrace_arrStatus = [];
  //计时器
  let Taxi3dTrace_timePiece;
  //时间
  let times =0 ;
  let map

for (let i=0 ;i<msg1.length ;i++){
  Taxi3dTrace_arrLat.push(msg1[i].lat);
  Taxi3dTrace_arrLng.push(msg1[i].lng);
  Taxi3dTrace_arrHeight.push(msg1[i].time*0.1);
  Taxi3dTrace_arrStatus.push(msg1[i].status);
}

export default {
  Taxi3dTrace_rem,
  Taxi3dTrace_arrLat,
  Taxi3dTrace_arrLng,
  Taxi3dTrace_arrHeight,
  Taxi3dTrace_arrStatus,
  Taxi3dTrace_timePiece,
  times,
  map

}
