var http=require("http");

var httpServer=http.createServer(function(req, res){
	var options={ 
			host:"localhost",
			port:3500
		    };	
	var data="Bulbul Bagwan";
	options.method="POST";
	options.headers={
				"Content-Type":"application/x-www-form-urlencoded",
				"Content-Length":Buffer.byteLength(data)
			};
	serverToServerRequest(options, data, res);
});

httpServer.listen(3000, function(){
	port=httpServer.address().port;
	address=httpServer.address().address;
	console.log("Server is running at http://" ,address ,":",  port);
});
function serverToServerRequest(options, data, res){
	var clientRequest=http.request(options, function(response){
		console.log("Received a request");
		var str='';
		response.on("data", function(chunk){
			str=str+chunk;
		});
		response.on("end", function(){
			console.log("Received Data: ", str);
			res.end("Hello: "+str);
		});
	});
	clientRequest.on("error", function(error){
		console.log("Error Occured:--", error);
	});
	clientRequest.write(data);
	clientRequest.end();	
}