var sitestation=[/*1号线*/
				    {"xsite":"39.905754",
				     "ysite":"116.367893",
				     "name":"西单"},
				     {"xsite":"39.905841",
					 "ysite":"116.350772",
					 "name":"复兴门"},
					 /*{"xsite":"39.90588",
					 "ysite":"116.330077",
					 "name":"木樨地"},*/
					 {"xsite":"39.90621",
				     "ysite":"116.315163",
				     "name":"军事博物馆"},
				     {"xsite":"39.906251",
					 "ysite":"116.304215",
					 "name":"公主坟"},
					 /*{"xsite":"39.906215",
					   "ysite":"116.288799",
					   "name":"万寿路"},*/
					   {"xsite":"39.906188",
					"ysite":"116.268048",
					 "name":"五棵松"},
				     /*{"xsite":"39.906658",
					 "ysite":"116.405253",
					 "name":"王府井"},*/
					 {"xsite":"39.906905",
					   "ysite":"116.412442",
						"name":"东单"},
					 {"xsite":"39.907177",
					 "ysite":"116.429307",
					"name":"建国门"},
					 /*4号线*/
					 {"xsite":"40.001114",
					 "ysite":"116.271379",
					"name":"北宫门"},
					{"xsite":"39.982645",
					"ysite":"116.310518",
					 "name":"中关村"},
					{"xsite":"39.974703",
					"ysite":"116.311516",
					"name":"海淀黄庄"},
					{"xsite":"39.941545",
					"ysite":"116.319187",
					"name":"国家图书馆"},
					 {"xsite":"39.936889",
					"ysite":"116.332726",
					 "name":"动物园"},
					{"xsite":"39.939241",
					"ysite":"116.349378",
					 "name":"西直门"},
					 {"xsite":"39.931303",
					   "ysite":"116.366742",
					 "name":"平安里"},
					{"xsite":"39.898485",
					 "ysite":"116.368153",
					"name":"宣武门"},
					{"xsite":"39.865776",
					 "ysite":" 116.368346",
					"name":"北京南站"},
					{"xsite":"39.844362",
					"ysite":"116.365063",
					"name":"角门西"},
					{"xsite":"39.835185",
					 "ysite":"116.36472",
					"name":"公益西桥"},
					{"xsite":"39.810951",
					"ysite":"116.359452",
					"name":"新宫"},
					{"xsite":"39.788283",
					 "ysite":"116.322738",
					"name":"西红门"},
					{"xsite":"39.773005",
					"ysite":"116.324755",
					"name":"高米店北"},
					/*2号线*/
					{"xsite":"39.898757",
					"ysite":"116.38974",
					 "name":"崇文门"},
					{"xsite":"39.903597",
					"ysite":"116.421046",
					"name":"北京站"},
					{"xsite":"39.923231",
					"ysite":"116.428342",
					"name":"朝阳门"},
					 {"xsite":"39.939735",
					"ysite":"116.427698",
					 "name":"东直门"},
					{"xsite":"39.947944",
					"ysite":"116.411541",
					 "name":"雍和宫"},
					 {"xsite":"39.947549",
					   "ysite":"116.387916",
					 "name":"鼓楼大街"},
					{"xsite":"39.931113",
					 "ysite":"116.349592",
					"name":"车公庄"},
					/*6号线*/
					 {"xsite":"39.931097",
					 "ysite":"116.289425",
					"name":"慈寿寺"},
					{"xsite":"39.931097",
					"ysite":"116.319637",
					 "name":"白石桥南"},
					{"xsite":"39.922919",
					"ysite":"116.411154",
					"name":"东四"},
					/*13号线*/
					 {"xsite":"39.974917",
					 "ysite":"116.333992",
					"name":"复兴门"},
					{"xsite":"39.991523",
					"ysite":"116.331782",
					 "name":"五道口"},
					{"xsite":"40.031558",
					"ysite":"116.314316",
					"name":"上地"}/*,
					{"xsite":"40.051205",
					"ysite":"116.300325",
					"name":"西二旗"}*/
	]
var beijing = [];
var b = [];

for(var i=0;i<sitestation.length;i++){
	var c = Math.random()*100;
	var d = parseFloat(c.toFixed(1));
	var a ={
		"name":sitestation[i].name ,
		"value":[parseFloat(sitestation[i].ysite),parseFloat(sitestation[i].xsite),d]

	};

	if(c<10&&c>0){
		a.itemStyle = {
				color: '#99CC33'
		}
	}else if(c<20&&c>9){
		a.itemStyle = {
				color: '#f1d60e'
		}
	}else if(c<40&&c>19){
		a.itemStyle = {
				color: '#dc780e'
		}
	}else if(c<60&&c>39){
		a.itemStyle = {
				color: '#ef570d'
		}
	}else if(c<80&&c>59){
		a.itemStyle = {
				color: '#e81e87'
		}
	}else if(c<100&&c>79){
		a.itemStyle = {
				color: '#ca1f3d'
		}
	}else{
		a.itemStyle = {
				color: '#ff0303'
		}
	};
	b.push(a);
}
beijing.push(b);
export default {
  sitestation,beijing
}
