import bikesitedata from './PRBicycle_siteData.json'

let bike_station = new Array;
let data = [];
let geoCoordMap = [];
let geonumber = [];
let sum = 0;

for(let i=0;i<bikesitedata.length;i++){
	sum = sum + parseFloat(bikesitedata[i].FREESPACES);
	bikesitedata[i].LATITUDE = parseFloat(bikesitedata[i].LATITUDE)-0.0075;
	bikesitedata[i].LONGITUDE = parseFloat(bikesitedata[i].LONGITUDE)-0.012;
	bike_station.push(bikesitedata[i]);						
}

function drawsite() {
  let res = [];
  for (let i = 0; i < bike_station.length+1; i++) {
    if(i==bike_station.length){
      var site_LAT = 30.52;
      var site_LON = 114.31;
      var site_NAME = '武汉';
      var site_MAXBIKE = 50;
    }
    else{
      var site_LAT = bike_station[i].LATITUDE;
      var site_LON = bike_station[i].LONGITUDE;
      var site_NAME = bike_station[i].SITENAME;
      var site_NUMBER = bike_station[i].SITEID;
      var site_MAXBIKE = bike_station[i].LOCKNUM - bike_station[i].FREESPACES + parseInt(Math.random()*5)-parseInt(Math.random()*5);
      if(site_MAXBIKE>35){
        site_MAXBIKE=30;
      }
      if(site_MAXBIKE<0){
        site_MAXBIKE=0;
      }
      var site_NOWBIKE = bike_station[i].LOCATION;
    }
    if (site_NAME) {
      res.push({
        name: site_NAME,
        value: [site_LON,site_LAT,site_MAXBIKE],
        number:site_MAXBIKE
      });
    }
  }
res=[res,35]
//console.log(res)
return res
//mapload(res);
} 

//车站总体情况
let echart11_num1=1396;
let echart11_num2=parseInt(1000*echart11_num1/4975)/10;
let echart11_num = [0,0];

function remove_line3(){
  
  echart11_num1=1396+ parseInt(Math.random()*14)-parseInt(Math.random()*18);
  echart11_num2=parseInt(1000*echart11_num1/4975)/10;
  //this.PRBicycle_Overall_echart11();
  echart11_num[0]=echart11_num1;
  echart11_num[1]=echart11_num2;
}

//月平均锁位使用率
 
//自行车周内租还情况
let echart12_day = new Array; 
let j = 0;     
let t = "2015-4-1";
let myDate = new Date(t);
let time11 = myDate.getTime();;
//清空数组，重新赋值
echart12_day.splice(0, echart12_day.length);
for (let i = 0; i < 7; i++) {
  echart12_day[i] = timestampToTime(time11+86400000*i);
}   	    

//时间戳转化为时间 1天为86400000毫秒
function timestampToTime(timestamp) {
    let date = new Date(timestamp /** 1000*/);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() /*+ ' '*/;
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y+M+D;
}

let xAxisData = [];
for (let i = 0; i < echart12_day.length; i++) {
  xAxisData.push(echart12_day[i]);
}

export default {
  //地图
  drawsite,
  //车站总体情况
  echart11_num,
  remove_line3,
  //自行车周内租还情况
  echart12_day,
  j,
  xAxisData
}