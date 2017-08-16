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
        'echarts/chart/pie' // 使用柱状图就加载line模块，按需加载
    ],
    function (ec) {
    	(function(){
	        var myChart;
	        window.drawChart = function(){
    			if(myChart){
    				myChart.dispose();
    			}
		        // 基于准备好的dom，初始化echarts图表
		        myChart = ec.init(document.getElementById('lawOfficePie')); 
		        
		        
		        var option = {
		//			    title : {
		//			        text: '某站点用户访问来源',
		//			        subtext: '纯属虚构',
		//			        x:'center'
		//			    },
					    tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    legend: {
					        orient : 'vertical',
					        x : 'left',
					        y : 'top',
					        borderColor : 'none',
					        data:['刑事诉讼','民事诉讼','行政诉讼','非诉讼','代写法律文书','法律咨询','法律顾问'],
					    	textStyle: 	{color: '#fff'}
					    },
					    textStyle: {
					    	color:'#fff',
					    },
		//			    toolbox: {
		//			        show : true,
		//			        feature : {
		//			            mark : {show: true},
		//			            dataView : {show: true, readOnly: false},
		//			            magicType : {
		//			                show: true, 
		//			                type: ['pie', 'funnel'],
		//			                option: {
		//			                    funnel: {
		//			                        x: '25%',
		//			                        width: '50%',
		//			                        funnelAlign: 'left',
		//			                        max: 1548
		//			                    }
		//			                }
		//			            },
		//			            restore : {show: true},
		//			            saveAsImage : {show: true}
		//			        }
		//			    },
					    calculable : true,
					    series : [
					        {
					            name:'访问来源',
					            type:'pie',
					            radius : '55%',
					            center: ['50%', '35%'],
					            data:[
					                {value:23, name:'刑事诉讼'},
					                {value:41, name:'民事诉讼'},
					                {value:65, name:'行政诉讼'},
					                {value:34, name:'非诉讼'},
					                {value:12, name:'代写法律文书'},
					                {value:64, name:'法律咨询'},
					                {value:35, name:'法律顾问'},
					            ]
					        }
					    ]
					};
				                    
		        // 为echarts对象加载数据 
		        myChart.setOption(option); 
	        }
        	drawChart(); 
		})()

    }
);