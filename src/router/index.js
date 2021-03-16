import Vue from 'vue'
import VueRouter from 'vue-router'
//公交分析
const Bus_StationTop = () => import('../views/BusAnalysis/Bus_StationTop')
const Bus_Track =() =>import('../views/BusAnalysis/Bus_Track')
const Bus_Overall =() =>import('../views/BusAnalysis/Bus_Overall')
const BusStationNum =() => import('../views/BusAnalysis/Bus_StationNum')
//主页
const HomePage = () =>import('../views/HomePage/HomePage')
//停车分析
const Park_Flow = () =>import('../views/ParkAnalysis/Park_Flow')
//公共自行车
const PRBicycle_OD =() =>import('../views/PublicBicycle/PRBicycle_OD')
const PRBicycle_Shared =() =>import('../views/PublicBicycle/PRBicycle_Shared')
const PRBicycle_Overall =() =>import('../views/PublicBicycle/PRBicycle_Overall')
//地铁分析
const SubwayAnalysis =() =>import('../views/SubwayAnalysis/SubwayAnalysis')
//出租车分析
const Taxi_3dTrace =() =>import('../views/TaxiAnalysis/Taxi_3dTrace')
const Taxi_DPoint =() =>import('../views/TaxiAnalysis/Taxi_DPoint')
const Taxi_OPoint =() =>import('../views/TaxiAnalysis/Taxi_OPoint')
const Taxi_RidingService =() =>import('../views/TaxiAnalysis/Taxi_RidingService')
const Taxi_Trace = () =>import('../views/TaxiAnalysis/Taxi_Trace')
const Taxi_Distribution =() =>import('../views/TaxiAnalysis/Taxi_Distribution' )
const Taxi_Grid =() =>import('../views/TaxiAnalysis/Taxi_Grid')
const Taxi_ODLine =() =>import('../views/TaxiAnalysis/Taxi_ODLine')
const Taxi_Zone =() =>import('../views/TaxiAnalysis/Taxi_Zone')

//数据融合
const TaxiBusFusion =() =>import('../views/TaxiBusAnalysis/TaxiBusFusion')
const Taxi_BackHeat =() =>import('../views/TaxiAnalysis/Taxi_BackHeat')
//自己加上自己的懒加载
Vue.use(VueRouter)
//创建router
//自己写自己的routes,去MenuLeft 和MenuRight中的<router-link to="">找对应自己的名字
const routes=[
  //默认加载首页
  {
    path:'',
    redirect:'/homepage'
  },
  //公交分析
  {
    path: '/bus_station_top',
    component:Bus_StationTop,
  },
  {
    path: '/bus_track',
    component:Bus_Track,
  },
  {
    path: '/bus_overall',
    component:Bus_Overall,
  },
  {
    path: '/bus_station_num',
    component:BusStationNum,
  },
  {
    path: '/bus_station_od',
    component:BusStationNum,
  },
  //主页
  {
    path: '/homepage',
    component:HomePage,
  },
  //停车分析
  {
    path: '/park_flow',
    component:Park_Flow,
  },
  //公租自行车
  {
    path: '/pr_bicycle_od',
    component:PRBicycle_OD,
  },
  {
    path: '/pr_bicycle_shared',
    component:PRBicycle_Shared,
  },
  {
    path: '/pr_bicycle_overall',
    component:PRBicycle_Overall,
  },
  //地铁分析
  {
    path: '/subway_flow',
    component:SubwayAnalysis,
  },
  //出租车分析
  {
    path: '/taxi_3dtrace',
    component:Taxi_3dTrace,
  },
  {
    path: '/taxi_d_point',
    component:Taxi_DPoint,
  },
  {
    path: '/taxi_o_point',
    component:Taxi_OPoint,
  },
  {
    path: '/taxi_riding_service',
    component:Taxi_RidingService,
  },
  {
    path: '/taxi_trace',
    component:Taxi_Trace,
  },
  {
    path: '/taxi_distribution',
    component:Taxi_Distribution,
  },
  {
    path: '/taxi_grid',
    component:Taxi_Grid,
  },
  {
    path: '/taxi_odline',
    component:Taxi_ODLine,
  },
  {
    path: '/taxi_zone',
    component:Taxi_Zone,
  },
  {
    path: '/taxi_bus',
    component:TaxiBusFusion,
  },
  {
    path: '/taxi_backheat',
    component:Taxi_BackHeat,
  }
]

const router =new VueRouter ({
  routes,
  mode:'history'
})

export default router
