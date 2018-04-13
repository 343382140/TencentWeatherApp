/*
* @Author: Administrator
* @Date:   2018-03-30 15:11:05
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-11 16:13:13
*/
// alert(1);
// console.log(2);
// prompt(123);
// var weather;

// $.ajax({
// 	url: "https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
// 	dataType: "jsonp",
// 	type: "get",
	
// 	success:function(obj){
// 		weather=obj.data.weather;
// 		console.log(weather);
// 	}
// })

var city;
$.ajax({
	url: 'https://www.toutiao.com/stream/widget/local_weather/city/',
	type: 'get',
	dataType: 'jsonp',
	success:function(obj){
		city=obj.data;
		renderCity(city);
		// console.log(city);
	}
})
function renderCity(city){
	for(var m in city){
		// console.log(m);
		var content_1_1=document.createElement("div");
		content_1_1.className="content_1_1";
		var content_1=document.querySelector(".content_1");
		content_1.appendChild(content_1_1);

		var title=document.createElement("h1");
		title.className="title";
		title.innerHTML=m;
		content_1_1.appendChild(title);

		var allcity=document.createElement("div");
		allcity.className="city";
		content_1_1.appendChild(allcity);

		var allcity_name_ul=document.createElement("ul");
		allcity_name_ul.className="allcity_name_ul";
		allcity.appendChild(allcity_name_ul);

		for(var b in city[m]){
			// console.log(b)
			var allcity_name_li=document.createElement("li");
			allcity_name_li.className="allcity_name_li";
			allcity_name_li.innerHTML=b;
			// var allcity_name_ul=document.querySelector(".allcity_name_ul");
			allcity_name_ul.appendChild(allcity_name_li);
			
			}
	
	}
}
function updata(weather){

	//城市名称
	var city_name=document.querySelector(".city");
	city_name.innerHTML=weather.city_name;

	//城市温度
	var current_temperature=document.querySelector(".temperature");
	current_temperature.innerHTML=weather.current_temperature+"°";

	//天气情况
	var current_condition=document.querySelector(".weather");
	current_condition.innerHTML=weather.current_condition;

	//今天最高温
	var dat_high_temperature=document.querySelector("#dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature;

	//今天最低温
	var dat_low_temperature=document.querySelector("#dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";

	//今天天气状况
	var dat_condition=document.querySelector("#dat_condition");
	dat_condition.innerHTML=weather.dat_condition;

	//今天天气图标
	var dat_weather_icon_id=document.querySelector(".pic_1");
	dat_weather_icon_id.style=`background-image:url('img/${weather.dat_weather_icon_id}.png')`;

	//明天最高温
	var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;

	//明天最低温
	var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";

	//明天天气状况
	var tomorrow_condition=document.querySelector("#tomorrow_condition");
	tomorrow_condition.innerHTML=weather.tomorrow_condition;

	//明天天气图标
	var tomorrow_weather_icon_id=document.querySelector(".pic_2");
	tomorrow_weather_icon_id.style=`background-image:url('img/${weather.tomorrow_weather_icon_id}.png')`;

	//声明变量是字符串类型
	var str="";
	//循环 es6 模板字符串
	weather.hourly_forecast.forEach((item,index)=>{
		// console.log(item);
		str=str+`
			<div class="now">
                <h2 class="now_time">${item.hour}:00</h2>
                <div class="now_icon" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
                <h2 class="now_tem">${item.temperature}°</h2>
            </div>

		`
	})

	$(".wrap").html(str);

	//数组类型对象
	// for(var i in weather.hourly_forecast){
	// 		//创建now元素
	// 		//创建div
	// 		var now=document.createElement("div");
	// 		//添加类名
	// 		now.className="now";
	// 		//获取父元素
	// 		var wrap=document.querySelector(".wrap");
	// 		//插入到页面中
	// 		wrap.appendChild(now);
	// 		var h2=document.createElement("h2");
	// 		h2.className="now_time";
	// 		h2.innerHTML=weather.hourly_forecast[i].hour+":00";
	// 		now.appendChild(h2);
	// 		var now_icon=document.createElement("div");
	// 		now_icon.className="now_icon";
	// 		now_icon.style=`background-image:url('img/${weather.hourly_forecast[i].weather_icon_id}.png')`;
	// 		now.appendChild(now_icon);
	// 		var now_tem=document.createElement("h2");
	// 		now_tem.className="now_tem";
	// 		now_tem.innerHTML=weather.hourly_forecast[i].temperature+"°";
	// 		now.appendChild(now_tem);
	// }

	var str_1="";
	weather.forecast_list.forEach((item,index)=>{
		// console.log(item);
		date_0=item.date;
		var date0=date_0;
		var date1=date0.slice(5, 7);
		var date3=date0.slice(8,10);
		str_1=str_1+`
			<div class="con">
                <div class="con_1">昨天</div>
                <div class="con_date">
                    <span>${date1}</span>
                    <span>/</span>
                    <span>${date3}</span>
                </div>
                <div class="con_weaH_1">${item.condition}</div>
                <div class="con_picH" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
                <div class="con_high">${item.high_temperature}°</div>
                <div class="con_low">${item.low_temperature}°</div>
                <div class="con_picL"></div>
                <div class="con_weaL_1">阴</div>
                <div class="con_wind">${item.wind_direction}</div>
                <div class="con_level">${item.wind_level}级</div>
            </div>
		`
	})
	$(".swap_1").html(str_1);

	// for(var a in weather.forecast_list){
	// 	var con=document.createElement("div");
	// 	con.className="con";
	// 	var swap_1=document.querySelector(".swap_1");
	// 	swap_1.appendChild(con);
	// 	var con_1=document.createElement("div");
	// 	con_1.className="con_1";
	// 	con.appendChild(con_1);
	// 	var con_date=document.createElement("div");
	// 	con_date.className="con_date";
	// 	con_1.appendChild(con_date);

	// 	//2018-02-22
	// 	date_0=weather.forecast_list[a].date;
	// 	var date0=date_0;
	// 	var date1=date0.slice(5, 7);
	// 	// console.log(date1);

	// 	var date_1=document.createElement("span");
	// 	date_1.className="date_1";
	// 	date_1.innerHTML=date1;
	// 	con_date.appendChild(date_1);
		
	// 	var date_2=document.createElement("span");
	// 	date_2.className="date_2";
	// 	date_2.innerHTML="/";
	// 	con_date.appendChild(date_2);

	// 	var date3=date0.slice(8,10);
	// 	var date_3=document.createElement("span");
	// 	date_3.className="date_3";
	// 	date_3.innerHTML=date3;
	// 	con_date.appendChild(date_3);




	// 	var con_weaH=document.createElement("div");
	// 	con_weaH.className="con_weaH";
	// 	con_weaH.innerHTML=weather.forecast_list[a].condition;
	// 	con.appendChild(con_weaH);
	// 	var con_picH=document.createElement("div");
	// 	con_picH.className="con_picH";
	// 	con_picH.style=`background-image:url(img/${weather.forecast_list[a].weather_icon_id}.png)`;
	// 	con.appendChild(con_picH);
	// 	var con_high=document.createElement("div");
	// 	con_high.className="con_high";
	// 	con_high.innerHTML=weather.forecast_list[a].high_temperature+"°";
	// 	con.appendChild(con_high);
	// 	var con_low=document.createElement("div");
	// 	con_low.className="con_low";
	// 	con_low.innerHTML=weather.forecast_list[a].low_temperature+"°";
	// 	con.appendChild(con_low);
	// 	var con_wind=document.createElement("div");
	// 	con_wind.className="con_wind";
	// 	con_wind.innerHTML=weather.forecast_list[a].wind_direction;
	// 	con.appendChild(con_wind);
	// 	var con_level=document.createElement("div");
	// 	con_level.className="con_level";
	// 	con_level.innerHTML=weather.forecast_list[a].wind_level+"级";
	// 	con.appendChild(con_level);
	// }
	// for(var i in weather.hourly_forecast){
	// 		//创建h2元素
	// 		//创建h2
	// 		var name=document.createElement("h2");
	// 		//添加类名
	// 		// name.className="h2";
	// 		//获取父元素
	// 		var aaa=document.querySelector(".now");
	// 		//插入到页面中
	// 		aaa.appendChild(name);
	// }
	 
	
	
	//城市选择
	
// for(var m in city){
// 		// console.log(m);
// 		var content_1_1=document.createElement("div");
// 		content_1_1.className="content_1_1";
// 		var content_1=document.querySelector(".content_1");
// 		content_1.appendChild(content_1_1);

// 		var title=document.createElement("h1");
// 		title.className="title";
// 		title.innerHTML=m;
// 		content_1_1.appendChild(title);

// 		var allcity=document.createElement("div");
// 		allcity.className="city";
// 		content_1_1.appendChild(allcity);

// 		var allcity_name_ul=document.createElement("ul");
// 		allcity_name_ul.className="allcity_name_ul";
// 		allcity.appendChild(allcity_name_ul);

// 		for(var b in city[m]){
// 			// console.log(b)
// 			var allcity_name_li=document.createElement("li");
// 			allcity_name_li.className="allcity_name_li";
// 			allcity_name_li.innerHTML=b;
// 			// var allcity_name_ul=document.querySelector(".allcity_name_ul");
// 			allcity_name_ul.appendChild(allcity_name_li);
			
// 			}
	
// 	}



	

}

function AJAX(str){
	var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
	$.ajax({
		url: url1,
		dataType: "jsonp",
		type: "get",
		
		success:function(obj){
			//获取数据
			var weather=obj.data.weather;
			// console.log(weather);
			
			// 渲染数据
			updata(weather);
			//让城市盒子消失
			$(".diqu").css({"display":"none"});
			$(".hide").addClass("block");

		}
	})

}

// $(function (){
//     setTimeout('updata()', 1000); 
// })

// setTimeout(
// 	""，50);


window.onload=function(){
	// updata();

	$(".allcity_name_li").on("click",function(){
		var citynew=this.innerHTML;
		AJAX(citynew);
	})

	$(".city").on("click",function(){
		$(".diqu").css({"display":"block"});
	})

	$("input").on("focus",function(){
		$(".search_right").html("搜索");
	})

	// document.onkeydown=function(event){
	//     var e = event || window.event || arguments.callee.caller.arguments[0];
	//     if(e && e.keyCode==13){ 
	// 							AJAX(str1);
 //    }

	var botton=document.querySelector(".search_right");
	// console.log(botton);
	botton.onclick=function(){
		var text=botton.innerText;
		if(text=="取消"){
			$(".diqu").css({"display":"none"});
		}
		else{
			var str1=document.querySelector("input").value;
			for(var i in city){
				for(var j in city[i]){
					if(str1==j){
						AJAX(str1);
            			return;
					}
				}
			}
			alert("该城市不存在，请重新输入！")
		}
	}

	//点击显示事件
	// $(function(){
	// 	$(".diqu").hide();
	// 	$(".city").on("click",function() {
	// 		$(".diqu").toggle();
	// 	});
	// })

	//点击隐藏事件
	// $(function(){
	// 	$(".search_right").on("click",function(){
	// 		$(".diqu").toggle();
	// 	})
	// })

	
}

