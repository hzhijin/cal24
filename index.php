<html>
	<head>
		<title>CALCULATE 24</title>
		<meta name="viewport" http-equiv="Content-Type" content="width=device-width,initial-scale=1.0, 
		minimum-scale=1.0, maximum-scale=1.0,user-scalable=0,charset=utf-8"/>

		<link rel="stylesheet" href="style.css">
		<script type="text/javascript" src="jquery.min.js"></script>
		<script type="text/javascript" src="cal.js"></script>
		<script type="text/javascript" src="ss.js"></script>

	</head>

	<body onload = "onTimeNow()">

		<div class="centerInHead" align='center'>
				<font id="timenow"></font>
		</div>

		<div class="wrap_obj">
			<input  id ="obj" type="number" style="" step=1 value=24 onblur="if (value=='') {value=24}" onClick=this.select() onkeydown = "if (event.keyCode == 13){event.preventDefault();
			document.getElementById('submit').click();}" oninput="cal24()">
		</div>

		<div class="wrap">
			<input  id ="a" type="number" style="" step=1 value='1' onblur="if (value=='') {value=''}" onClick=this.select() onkeydown = "if (event.keyCode == 13){event.preventDefault();
			document.getElementById('submit').click();}" oninput="cal24()">
			<input  id ="b" type="number" style="" step=1 value='2' onblur="if (value=='') {value=''}" onClick=this.select() onkeydown = "if (event.keyCode == 13){event.preventDefault();
			document.getElementById('submit').click();}" oninput="cal24()">
			<input  id ="c" type="number" style="" step=1 value='3' onblur="if (value=='') {value=''}" onClick=this.select() onkeydown = "if (event.keyCode == 13){event.preventDefault();
			document.getElementById('submit').click();}" oninput="cal24()">
			<input  id ="d" type="number" style="" step=1 value='4' onblur="if (value=='') {value=''}" onClick=this.select() onkeydown = "if (event.keyCode == 13){event.preventDefault();
			document.getElementById('submit').click();}" oninput="cal24()">
		</div>
		<input id="submit" onclick="cal24()" type="button" value="SOLVE">
		<div id="result">CLICK SOLVE BUTTON</div>



	</body>
</html>