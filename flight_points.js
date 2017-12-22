var flight_points = [
    {
        "name": "Java",
        "year": 2017,
        "trip": [
            {
        		"name" : "München",
                "lon" : 11.581980,
        		"lat" : 48.135125
        	},
            {
        		"name" : "Doha",
                "lon" : 51.531040,
        		"lat" : 25.285447
        	},
            {
        		"name" : "Jakarta",
                "lon" : 106.845599,
        		"lat" : -6.2087634
        	}
        ]
    },
    {
        "name": "Sri Lanka",
        "year": 2016,
        "trip": [
            {
        		"name" : "München",
                "lon" : 11.581980,
        		"lat" : 48.135125
        	},
            {
        		"name" : "Doha",
                "lon" : 51.531040,
        		"lat" : 25.285447
        	},
            {
        		"name" : "Colombo",
                "lon" : 79.861243,
        		"lat" : 6.927079
        	}
        ]
    },
    {
        "name": "China",
        "year": 2015,
        "trip": [
            {
        		"name" : "München",
                "lon" : 11.581980,
        		"lat" : 48.135125
        	},
            {
        		"name" : "Peking",
                "lon" : 116.407396,
        		"lat" : 39.904200
        	}
        ]
    },
    {
        "name": "Thailand",
        "year": 2015,
        "trip": [
            {
        		"name" : "Bangkok",
                "lon" : 100.501765,
        		"lat" : 13.756331
        	},
            {
        		"name" : "Frankfurt",
                "lon" : 8.682127,
        		"lat" : 50.110922
        	}
        ]
    },
    {
        "name": "Gran Canaria",
        "year": 2015,
        "trip": [
            {
        		"name" : "München",
                "lon" : 11.581980,
        		"lat" : 48.135125
        	},
            {
        		"name" : "Gran Canaria",
                "lon" : -15.547437,
        		"lat" : 27.920220
        	}
        ]
    },
    {
        "name": "Griechenland",
        "year": 2017,
        "trip": [
            {
        		"name" : "München",
                "lon" : 11.581980,
        		"lat" : 48.135125
        	},
            {
        		"name" : "Athen",
                "lon" : 23.727539,
        		"lat" : 37.983810
        	}
        ]
    },
    {
        "name": "London",
        "year": 2014,
        "trip": [
            {
        		"name" : "München",
                "lon" : 11.581980,
        		"lat" : 48.135125
        	},
            {
        		"name" : "London",
                "lon" : -0.127758,
        		"lat" : 51.507351
        	}
        ]
    }
]

function make_flight_data(flight_points) {
    let flights = [];
    flight_points.forEach((flight) => {
        let trip = flight.trip;
        var coors = [];
    	for (var i = 0; i < trip.length; i++){
    		coors.push([trip[i].lon, trip[i].lat]);
    	}

        var flight_paths = {
            type: "LineString",
            coordinates: coors
        };

        flights.push(flight_paths);
    });

    return flights;
}

var flight_paths = make_flight_data(flight_points);
