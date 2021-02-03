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

var timer_reload = setInterval("obnovit_stranicu()", 1200000);
