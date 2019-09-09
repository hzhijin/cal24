function cal24() {
	var obj = parseInt(document.getElementById('obj').value);
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var c = parseInt(document.getElementById('c').value);
	var d = parseInt(document.getElementById('d').value);
	var arr = cal(a,b,c,d,obj);
	if (arr.length == 1)
		suffix = ' result found.<br>';
	else
		suffix = ' results found.<br>';
	cont = '<span style="color:red;font-weight:600;">' + arr.length + '</span>' + suffix;
	if (arr.length > 0)
		cont += arr.join(' = ' + obj + '<br>') + (' = ' + obj + '<br>');
	else
		{;}
	document.getElementById('result').innerHTML = cont;
}


function onTimeNow(){
   var chartFunction = function() {
	   

		var now = new Date();
		str_date = now.getFullYear().toString() + "-";
		if (now.getMonth() <=8){
			str_date += "0";
		}
		str_date += (now.getMonth()+1).toString() + "-";
		if (now.getDate() <=9){
			str_date += "0";
		}
		str_date += now.getDate().toString();

		str_time = "";

		if (now.getHours() <=9){
			str_time += "0";
		}
		str_time += now.getHours().toString() + ":";
		if (now.getMinutes() <=9){
			str_time += "0";
		}
		str_time += now.getMinutes().toString() + ":";
		if (now.getSeconds() <=9){
			str_time += "0";
		}
		str_time += now.getSeconds().toString() + " ";

		str_weekday = "";
		
		switch(now.getDay()){
			case 1:str_weekday += "Mon";break;
			case 2:str_weekday += "Tues";break;
			case 3:str_weekday += "Wed";break;
			case 4:str_weekday += "Thur";break;
			case 5:str_weekday += "Fri";break;
			case 6:str_weekday += "Sat";break;
			case 0:str_weekday += "Sun";break;
		}
		str_time_now =  str_date + " " + str_weekday + " " + str_time;
		//alert(str_time_now);
		document.getElementById("timenow").innerHTML = str_time_now;

		var time0000 = new Date(now.getFullYear(), now.getMonth(), now.getDate(),0,0,0);
		var time1400 = new Date(now.getFullYear(), now.getMonth(), now.getDate(),14,0,0);
		var time2300 = new Date(now.getFullYear(), now.getMonth(), now.getDate(),23,0,0);
		var time2400 = new Date(now.getFullYear(), now.getMonth(), now.getDate(),24,0,0);

   };   //var chartFunction
   setInterval(chartFunction, 1000);
}
