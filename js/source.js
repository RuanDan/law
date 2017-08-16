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
	        var myChart1;
	        window.drawChart1 = function(){
    			if(myChart1){
    				myChart1.dispose();
    			}
		        // 基于准备好的dom，初始化echarts图表
		        myChart1 = ec.init(document.getElementById('sourcePie')); 
		        
		        
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
					        data:['（一键通）网站数据','（一掌通）微信数据','（一台通）服务数据','（一线通）12345，12348'],
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
					                {value:23, name:'（一键通）网站数据'},
					                {value:41, name:'（一掌通）微信数据'},
					                {value:65, name:'（一台通）服务数据'},
					                {value:34, name:'（一线通）12345，12348'},
					            ]
					        }
					    ]
					};
				                    
		        // 为echarts对象加载数据 
		        myChart1.setOption(option); 
	        }
        	drawChart1(); 
		})()

    }
);