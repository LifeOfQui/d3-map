var travel_points_java = [
    {
		"name" : "Jakarta",
        "lon" : 106.845599,
		"lat" : -6.2087634
	},
    {
		"name" : "Pramuka Island",
        "lon" : 106.613658,
		"lat" : -5.745962
	},
    {
		"name" : "Jakarta",
        "lon" : 106.845599,
		"lat" : -6.2087634
	},
    {
		"name" : "Cianjur",
        "lon" : 107.142544,
		"lat" : -6.816824
	},
    {
		"name" : "Bandung",
        "lon" : 107.619123,
		"lat" : -6.917464
	},
    {
		"name" : "Yogyakarta",
        "lon" : 110.369490,
		"lat" : -7.795580
	},
    {
		"name" : "Karimunjava",
        "lon" : 110.432639,
		"lat" : -5.875963
	},
    {
		"name" : "Semarang",
        "lon" : 110.438125,
		"lat" : -7.005145
	},
    {
		"name" : "Jakarta",
        "lon" : 106.845599,
		"lat" : -6.2087634
	}
];

function make_travel_data(flight_points){
	var coors = [];
	for(var i=0, len=flight_points.length; i<len; i++){
		coors.push([flight_points[i].lon, flight_points[i].lat ]);
	}
	// (note: loop until length - 1 since we're getting the next
    //  item with i+1)
    var flight_paths = {
            type: "LineString",
            coordinates: coors
        };

	return flight_paths;
}

var java_travel_data = make_travel_data(travel_points_java);
