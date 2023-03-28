// 在 JavaScript 中，使用 echarts.init 方法创建一个图表实例
var IntentionChart = echarts.init(document.getElementById('IntentionChart'));

// 在 JavaScript 中，配置图表的数据和样式
var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#0364FF', '#6ba2ff', '#9bc1ff', '#CDe0ff','#e6f0ff'],
    grid:{
      left: '10%',
      top: '10%',
      right: '10%',
      bottom: '10%'

    },
    series : [
        {
            name: '意向分布',
            type: 'pie',
            radius : ['45%','90%'],
            center: ['50%', '50%'],
            data:[
                {value:768, name:'A 有明确意向'},
                {value:623, name:'B 可能有意向'},
                {value:581, name:'C 明确拒绝'},
                {value:322, name:'D 用户忙'},
                {value:197, name:'E 拨打失败'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 在 JavaScript 中，将配置项设置到图表实例中
IntentionChart.setOption(option);

// 柱状图js代码
// 初始化echarts实例
var Histogram = echarts.init(document.getElementById('Histogram'));

// 配置项
var option = {
  tooltip: {},
  xAxis: {
    type: 'value',
    show: false,
  },
  yAxis: {
    type: 'category',
    data: ['老人保险类型', '保险售后', '询问保险赔付', '保险询问保险类型', '客户询问保险价格']
  },
  grid: {
    left: '110',
    top: '24',
    right: '0',
    bottom: '16'
  },
  series: [{
    name: '关注点',
    type: 'bar',
    data: [98, 133, 240, 258, 312],
    itemStyle: {
      color: '#0364FF'
    },
    label: {
      show: true,
      position: 'right',
      formatter: '{c}'
    }
  }]
};

// 使用刚指定的配置项和数据显示图表
Histogram.setOption(option);

