// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/line' // 使用柱状图就加载line模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('lawServiceLine')); 
        
        var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    grid : {
		        	borderWidth:0,
		        	x:80,
		        	y:50,
		        	x2:40,
		        	y2:50,
        		},
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap: true,
			            data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日'],
			        	splitLine : {
				        	lineStyle : {
							    width: 0,
							}    
				        },
				        axisLine : {
				        	lineStyle : {
							    width: 0,
							}    
				        }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            splitNumber : 2,
			            max : 10000,
			            splitLine :{
				        	lineStyle : {
							    color: ['#414141'],
							    width: 1,
							    type: 'solid'
							}    
				        },
				        axisLine : {
				        	lineStyle : {
							    width: 0,
							}    
				        }  
			        }
			    ],
			    series : [
			        {
			            name:'法律服务数据',
			            type:'line',
			            data:[5000, 6100, 4325, 6517, 4237, 3680, 4025, 6100, 4325, 6517, 2345, 3510, 4025, 6100, 4325, 5074, 2345, 3680, 3890, 5426, 4325, 6517, 5010, 3680, 4025, 6100, 5325, 6517, 3345, 4765, 4025],
			        }
			    ]
			};
		                    
        // 为echarts对象加载数据 
        myChart.setOption(option); 
    }
);