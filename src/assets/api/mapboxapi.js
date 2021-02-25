import mapboxgl from 'mapbox-gl'

export default function (mapContainer) {
  mapboxgl.accessToken ="pk.eyJ1IjoiNjEwNzIzMzc0IiwiYSI6ImNqanFmbXEwZjg3bG0za3AxcHQ3Z3F5dGkifQ.ETMjU9Z6PtN8nR8tPhuzkA";
  const map= new mapboxgl.Map({
    //id
    container: mapContainer,
    style: "mapbox://styles/mrmax/cjnn6bltn028r2rnvywtz4yoj",
    center: [116.40, 39.92],
    zoom:9.5,
    pitch: 60,
    bearing: -10,
    boxHeight: 35,
    // pitch: 60, //视野倾斜，0-60
    // bearing: -17.6,//视野旋转角度
    postEffect: {
      enable: true,
      SSAO: {
        enable: true,
        radius: 2,
        intensity: 1.5
      }
    },
    light: {
      main: {
        intensity: 1,
        shadow: false,
        shadowQuality: 'high'
      },
      ambient: {
        intensity: 0.
      },
      ambientCubemap: {
        texture:'hdr01.hdr',
        exposure: 1,
        diffuseIntensity: 0.5
      }
    }
  });
  //注册点击事件
  map.on("click", function(e) {
    console.log("点击");
  });
}
