function obnovit_stranicu() {
//	location.reload();
}


/****** program here ******/
//document.body.onload = addElement;
var schemaParsed = JSON.parse(JSON.stringify(schema));
var ncont = document.getElementById("empty");
for (i in schemaParsed){
	var graphBlock = document.createElement("div");
	graphBlock.className = "dcont"
	graphBlock.style.width = schemaParsed[i]["width"];
	graphBlock.style.height = "300px";
	ncont.append(graphBlock);
	var canva = document.createElement("canvas");
	canva.id = "graph"+i;
	wid = graphBlock.clientWidth; hei =  graphBlock.clientHeight;
	canva.width = wid;
	canva.height = hei;
	graphBlock.append(canva);
		/* draw graph */
	var ctx=canva.getContext("2d");
	var chart=new MyChart(ctx, wid, hei);
	
	chart.drawGridDate(DateTimeSec,Data1, "Datetime", "CO2air");
	chart.drawChartDot(DateTimeSec, Data1, 3, 'lightgreen');
}




var winWidth = document.documentElement.clientWidth;

var c=document.getElementById("gri1");
var dw=c.clientWidth; var dh=c.offsetHeight-6;
var c=document.getElementById("chart11");
var ctx=c.getContext("2d");
c.width=dw; c.height=dh;
console.log(c.width, c.height);
var chart1=new MyChart(ctx, c.width, c.height);
chart1.drawGridDate(DateTimeSec,Data1, "Datetime", "CO2air");
chart1.drawChartDot(DateTimeSec, Data1, 3, 'lightgreen');

var c=document.getElementById("gri2");
var dw=c.clientWidth; var dh=c.offsetHeight-6;
var c=document.getElementById("chart12");
var ctx=c.getContext("2d");
c.width=dw; c.height=dh;
var chart1 = new MyChart(ctx, c.width, c.height);
chart1.drawGridDate(DateTimeSec, Data3, "DateTime", "CO2bot_sur");
chart1.drawChartPolygon(DateTimeSec,Data2,Data3, 'rgba(225,10,0,0.2)');
chart1.drawChartLine(DateTimeSec, Data3, 1, 'darkgreen');
chart1.drawChartLine(DateTimeSec, Data2, 1, 'darkgreen');

//chart3.drawGridDate(DateTimeSec, Data3, "Datetime", "CO2Bot");
//chart3.drawChartDot(DateTimeSec, Data3, 2, 'magenta');



var timer_reload = setInterval("obnovit_stranicu()", 60000);
