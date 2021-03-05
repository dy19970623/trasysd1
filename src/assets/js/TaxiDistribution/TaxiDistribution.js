// import getData from './getData.json'
// var data = getData
/******获取数据动态分布*****/
var Taxi_Distribution_data=[]; //储存每个ID最后是个时间节点的数据
var Taxi_Distribution_data1=[]; //储存7点-7点15出租车分布
var Taxi_Distribution_data2=[]; //储存7点15-7点30出租车分布
var Taxi_Distribution_data3=[]; //储存7点30-7点45出租车分布
var Taxi_Distribution_data4=[]; //储存7点45-8点出租车分布
var Taxi_Distribution_data5=[]; //储存8点-8点15出租车分布
var Taxi_Distribution_data6=[]; //储存8点15-8点30出租车分布
var Taxi_Distribution_data7=[]; //储存8点30-8点45出租车分布
var Taxi_Distribution_data8=[]; //储存8点45-9点出租车分布

function Taxi_getData(e){

  					 for (var i=1;i<e.msg.length;i++) {
  					 	if(e.msg[i-1].ID!=e.msg[i].ID)//获取每个id最后一条数据
  					 	{
                          Taxi_Distribution_data.push(e.msg[i]);
  					 	}

  				    }
  				    	for (var j = 0; j < Taxi_Distribution_data.length; j++) {
  					 	    var taxiTime =Taxi_Distribution_data[j].DATE;//获取时间用来以每15分钟分组
  				    	    var timeLevel = parseInt(taxiTime.substring(8,14)); //获取8-14位进行比较分组
  				    	if (timeLevel>=70000&&timeLevel<71500) { //7：00-7：15
  				    		Taxi_Distribution_data1.push(Taxi_Distribution_data[j]);
  				    	}
  				    	else if (timeLevel>=71500&&timeLevel<73000) {//7：15-7：30
  				            Taxi_Distribution_data2.push(Taxi_Distribution_data[j]);
  				    	}
  				    	else if (timeLevel>=73000&&timeLevel<74500) {//7：30-7：45
  				    		Taxi_Distribution_data3.push(Taxi_Distribution_data[j]);
  				    	}
  				    	else if (timeLevel>=74500&&timeLevel<80000) {//7：45-8：00
  				    		Taxi_Distribution_data4.push(Taxi_Distribution_data[j]);
  				    	}
  				    	else if (timeLevel>=80000&&timeLevel<81500) {//8：00-8：15
  				    		Taxi_Distribution_data5.push(Taxi_Distribution_data[j]);
  				    	}
  				    	else if (timeLevel>=81500&&timeLevel<83000) {//8：15-8：30
  				    		Taxi_Distribution_data6.push(Taxi_Distribution_data[j]);
  				    	}
  				    	else if (timeLevel>=83000&&timeLevel<84500) {//8：30-8：45
  				    		Taxi_Distribution_data7.push(Taxi_Distribution_data[j]);
  				    	}
  				    	else if (timeLevel>=84500&&timeLevel<90000) {//8：45-9：00
  				    		Taxi_Distribution_data8.push(Taxi_Distribution_data[j]);
  				    	}

  					 	}
}
/**************拼接数据 并返回坐标数组*************/
var converData = function (data) {
  var res = [];
  var val=[];
  for (var i = 0; i < data.length; i++) { //遍历获取的所有数据
    val.push([data[i].LNG,data[i].LAT,50]) //赋值经纬度
    res.push({
      value: val[i]
    });
  };
  return res;
};

Taxi_getData(data);

var Taxi_data1 = converData(Taxi_Distribution_data1)
var Taxi_data2 = converData(Taxi_Distribution_data2)
var Taxi_data3 = converData(Taxi_Distribution_data3)
var Taxi_data4 = converData(Taxi_Distribution_data4)
var Taxi_data5 = converData(Taxi_Distribution_data5)
var Taxi_data6 = converData(Taxi_Distribution_data6)
var Taxi_data7 = converData(Taxi_Distribution_data7)
var Taxi_data8 = converData(Taxi_Distribution_data8)

export default {
  Taxi_data1,
  Taxi_data2,
  Taxi_data3,
  Taxi_data4,
  Taxi_data5,
  Taxi_data6,
  Taxi_data7,
  Taxi_data8
}
