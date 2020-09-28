var data = [
	{
		"name":"date1",
		"data":[1521849572,1521849602]
	},
	{
		"name":"date2",
		"data":[1521849572,1521849602]
	},
	{
		"name":"data1",
		"data":[1,3]
	},
];

var schema = [
	{
		"width":"60%",
		"caption":"CO2 all",
		"type":"datetime",
		"min": -20,
		"max": 300,
		"graph":[
			{
				"name":"CO2sur",
				"unit":"ppm",
				"color":"blue",
				"type":"dot",
				"x":0,
				"y":2,
				"min": -10,
				"max": 300
			},
			{
				"name":"CO2bot",
				"unit":"ppm",
				"color":"red",
				"type":"dot",
				"x":0,
				"y":2,
				"min": 0,
				"max": 400
			},
		]
	},
	{
		"width":"40%",
		"lastinline":true,
		"caption":"recent day",
		"type":"datetime",
		"graph":[
			{
				"name":"CO2sur",
				"unit":"ppm",
				"color":"blue",
				"type":"dot",
				"x":1,
				"y":4,
				"min": -30,
				"max": 300
			},
			{
				"name":"CO2bot",
				"unit":"ppm",
				"color":"red",
				"type":"dot",
				"x":1,
				"y":4,
				"min": 0,
				"max": 45,
			},
		]
	}
];
