import BusdengLiang from './Bus_dengLiang'

var station=[];
var sortNum =[];
var AsortNum = [];

//处理登量数据
//dengLiangRes、checi----> Bus_dengLiang
//export---->station
var objectList = BusdengLiang.dengLiangRes;

var finalnums=[];

function sortNum(siteName,dengLiang){
  this.siteName=siteName;
  this.dengLiang=dengLiang;
}

//按登量从大到小排序
objectList.sort(function(a,b){
  return b.dengLiang-a.dengLiang});
  for(var i=0;i<objectList.length;i++){
		finalnums.push(objectList[i]);
  };    
  
  var chartsnums=[]  
	for(var i=0;i<20;i++){
		chartsnums.push(finalnums[i]);
  };
  
  var chartsneed=[];
  for(var i=0;i<chartsnums.length;i++){
    chartsneed[i]=chartsnums.msg;
  }

//数据匹配
for(var i=0;i<finalnums.length;i++){
  var singleStation={};
  var data={};
  singleStation.name=finalnums[i].siteName;
  data.name=singleStation.name;
  var array=[];
  finalnums[i].lng=finalnums[i].lng- 0.0061082839965;
  finalnums[i].lat=finalnums[i].lat- 0.0013823008925;
  array[0]=finalnums[i].lng;
  array[1]=finalnums[i].lat;
  array[2]=finalnums[i].dengLiang;
  singleStation.value=array;
  station[i]=singleStation;
  data.value=finalnums[i].dengLiang;
  sortNum[i]=data;
  AsortNum[i]=data;
};


var yMax=9000;
var dataShadow=[];
var resultdata0=[];
var titledata3=[];
var bartop20=[];
//top20数据排序
function NumAsceSort20(c,d){
    return d.value-c.value;
}

for(var m=0;m<20;m++){
    var top20={
        name:sortNum[m].name,
        value:sortNum[m].value
    };
    bartop20.push(top20);//前20数据
    dataShadow.push(yMax);
}
bartop20.sort(NumAsceSort20);
for(var n=0;n<bartop20.length;n++){
    titledata3.push(bartop20[n].name);//前20的名字
};

//AsortNum.sort(NumAsceSort);




export default{
  station,
  titledata3,
  bartop20,
  sortNum,
  finalnums
}