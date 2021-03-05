import ODData from './ODData' // 需要在地图上绘制的数据集 

let taxi_ODData=[];//存放OD数据
taxi_ODData=ODData.odData
//console.log(ODData.msg[0].id)

//Taxi_getData(data)
/*****拼接数据 得到OD坐标 两个一组*****/
var taxi_convertData = function (data) {
    var res = [];
    for (var i = 0,datalen=data.length; i < datalen; i++) {
      res[i] = {};
      res[i].coords = Array(2);
      var DPoint = Array(2);
        DPoint[0] = data[i].coords[0][0]+0.0125582839965;
        DPoint[1] = data[i].coords[0][1]+0.0070823008925;
        var OPoint = Array(2);
        OPoint[0] = data[i].coords[1][0]+0.0125582839965;
        OPoint[1] = data[i].coords[1][1]+0.0070823008925;
        res[i].coords[0] = OPoint;
        res[i].coords[1] = DPoint;
    }
    //console.log(res);
    return res;
}



let deviceList = [{
  deviceCount: 1,
  lat: 30.6799428454,
  lng: 104.067923463,
  province: "四川省",
  provinceId: "22",
},
{
  deviceCount: 1,
  lat: 26.6299067414,
  lng: 106.709177096,
  province: "贵州省",
  provinceId: "23",
},
{
  deviceCount: 18,
  lat: 22.8064929356,
  lng: 108.297233556,
  province: "广西壮族自治区",
  provinceId: "25",
}
]
let pointData = []
let lineData = []
for (var i = 0; i < deviceList.length; i++) {
  let device = deviceList[i];
  if(!device.lng|| !device.lat){
     continue;
  }
  let toName = device.province?device.province:"";
 lineData.push({ "fromName":"总部","toName":toName,"coords":[ [device.lng,device.lat],[116.3,39.9]]});
 pointData.push({"name":toName,"value":[device.lng,device.lat,device.deviceCount]});
}


export default {
  taxi_ODData,
  lineData
}


