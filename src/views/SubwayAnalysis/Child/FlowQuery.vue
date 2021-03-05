<template>
  <div id="FlowQuery">
    <el-select v-model="station_value1" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary">查询</el-button>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value21"
        type="datetimerange"
        :picker-options="pickerOptions1"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right">
      </el-date-picker>
    </div>
  </div>

</template>

<script>

export default {
  name: "rightPane",
  data(){
    return{
      options: [{
        value: '东单',
        label: '东单'
      }, {
        value: '西单',
        label: '西单'
      }, {
        value: '五棵松',
        label: '五棵松'
      }, {
        value: '五道口',
        label: '五道口'
      }, {
        value: '建国门',
        label: '建国门'
      },
        {
          value: '宣武门',
          label: '宣武门'
        }, {
          value: '公主坟',
          label: '公主坟'
        }, {
          value: '上地',
          label: '上地'
        }, {
          value: '军事博物馆',
          label: '军事博物馆'
        }, {
          value: '北宫门',
          label: '北宫门'
        },
        {
          value: '中关村',
          label: '中关村'
        }, {
          value: '海淀黄庄',
          label: '海淀黄庄'
        }, {
          value: '复兴门',
          label: '复兴门'
        }, {
          value: '国家图书馆',
          label: '国家图书馆'
        }, {
          value: '慈寿寺',
          label: '慈寿寺'
        },
        {
          value: '动物园',
          label: '动物园'
        }, {
          value: '白石桥南',
          label: '白石桥南'
        }, {
          value: '西直门',
          label: '西直门'
        }, {
          value: '车公庄',
          label: '车公庄'
        }, {
          value: '平安里',
          label: '平安里'
        },
        {
          value: '鼓楼大街',
          label: '鼓楼大街'
        }, {
          value: '雍和宫',
          label: '雍和宫'
        }, {
          value: '东直门',
          label: '东直门'
        }, {
          value: '朝阳门',
          label: '朝阳门'
        }, {
          value: '东四',
          label: '东四'
        },
        {
          value: '北京站',
          label: '北京站'
        }, {
          value: '崇文门',
          label: '崇文门'
        }
      ],
      station_value1: '',
      pickerOptions1: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value21: '',
    }
  },
  methods:{

  }
}
</script>

<style scoped>
#FlowQuery{
  height: 100%;
  width:100%
}
</style>
