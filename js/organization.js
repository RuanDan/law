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
	        var myChart2;
	        window.drawChart2 = function(){
    			if(myChart2){
    				myChart2.dispose();
    			}
		        // 基于准备好的dom，初始化echarts图表
		        myChart2 = ec.init(document.getElementById('organizationBar')); 
		        
		        
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
					        data:['律师事务所','公证处','司法鉴定所','法律援助机构','人民调解组织','基层法律服务所','司法所','社区点'],
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
					                {value:23, name:'律师事务所'},
					                {value:41, name:'公证处'},
					                {value:65, name:'司法鉴定所'},
					                {value:34, name:'法律援助机构'},
					                {value:12, name:'人民调解组织'},
					                {value:64, name:'基层法律服务所'},
					                {value:35, name:'司法所'},
					                {value:35, name:'社区点'},
					            ]
					        }
					    ]
					};
				                    
		        // 为echarts对象加载数据 
		        myChart2.setOption(option); 
	        }
        	drawChart2(); 
		})()

    }
);