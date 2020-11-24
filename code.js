function obnovit_stranicu() {
	location.reload();
}

/****** program here ******/
//document.body.onload = addElement;
var schemaParsed = JSON.parse(JSON.stringify(schema));
var ncont = document.getElementById("empty");
for (ii in schemaParsed){
	var schemaBlock = schemaParsed[ii];
	var graphBlock = document.createElement("div");
	graphBlock.style.width = schemaParsed[ii]["width"];
	graphBlock.style.height = "300px";
	ncont.append(graphBlock);
	var canva = document.createElement("canvas");
	canva.id = "graph"+ii;
	wid = graphBlock.clientWidth; hei =  graphBlock.clientHeight;
	canva.width = wid;
	canva.height = hei;
	graphBlock.append(canva);
		/* draw graph */
	var ctx=canva.getContext("2d");
	var chart=new MyChart(ctx, wid, hei);
	//to do: find min and max values in all lists assosiated with this graph
	var graphBlock = schemaBlock["graph"];

	yCaption = "";
	for (jj in graphBlock){
		yCaption = yCaption + graphBlock[jj]["name"] + " ";
	}

	
	if (schemaParsed[ii]["type"] == "datetime") {
		chart.drawGridDate(data[0], data[schemaParsed[ii]["graph"][0]["y"]], "Datetime", yCaption);
	} else {
		chart.drawGrid(data[0], data[2], "Datetime", yCaption);
	}
	for (jj in graphBlock){
		var xi = graphBlock[jj]["x"]; var yi = graphBlock[jj]["y"];
		chart.drawChartDot(data[xi], data[yi], 2, graphBlock[jj]["color"]);
	}
}




var winWidth = document.documentElement.clientWidth;

var c=document.getElementById("gri1");
var dw=c.clientWidth; var dh=c.offsetHeight-6;
var c=document.getElementById("chart11");
var ctx=c.getContext("2d");
c.width=dw; c.height=dh;
console.log(c.width, c.height);
var chart1=new MyChart(ctx, c.width, c.height);

if (schemaParsed[0]["type"] == "datetime") {
	chart1.drawGridDate(data[0], data[2], "Datetime", "CO2air");
}

if (schemaParsed[0]["graph"][0]["type"] == "dot") {
	chart1.drawChartDot(data[0], data[2], 3, 'lightgreen');	
}
else if (schemaParsed[0]["graph"][0]["type"] == "line") {
	chart1.drawChartLine(data[0], data[2], 1, 'red');	
}



//chart1.drawGridDate(DateTimeSec,Data1, "Datetime", "CO2air");
//chart1.drawChartDot(DateTimeSec, Data1, 3, 'lightgreen');

var c=document.getElementById("gri2");
var dw=c.clientWidth; var dh=c.offsetHeight-6;
var c=document.getElementById("chart12");
var ctx=c.getContext("2d");
c.width=dw; c.height=dh;
var chart1 = new MyChart(ctx, c.width, c.height);
chart1.drawGridDate(data[0], data[3], "DateTime", "Twtr");
//chart1.drawChartPolygon(DateTimeSec,Data2,Data3, 'rgba(225,10,0,0.2)');
chart1.drawChartLine(data[0], data[3], 2, 'red');
chart1.drawChartLine(data[0], data[4], 2, 'green');

//chart3.drawGridDate(DateTimeSec, Data3, "Datetime", "CO2Bot");
//chart3.drawChartDot(DateTimeSec, Data3, 2, 'magenta');



var timer_reload = setInterval("obnovit_stranicu()", 1200000);
