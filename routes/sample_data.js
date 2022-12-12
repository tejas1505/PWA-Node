var express = require('express');
var router = express.Router();
var database = require('../config/database');
var http = require('http');
var mysql = require('mysql')

var query1 = "SELECT * FROM eproducts";

router.get("/", function (request, response, next) {
	database.query(query1, function (error, data) {
		if (error) {
			throw error;
		}
		else {
			response.render('../view/sample_data.ejs', { sampleData: data });
		}
	});

});

router.get("/par?", function(request, response, next){
	var geturl = request.query.id
	var query2 = "SELECT * FROM eproducts where product_id="+geturl
    database.query(query2, function (error, data1) {
		if (error) {
			throw error;
		}
		else {
			response.render('../view/deviceID.ejs', { sampleData1: data1 });
		}
	});
})

module.exports = router;