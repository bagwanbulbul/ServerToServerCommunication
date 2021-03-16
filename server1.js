var http=require("http");

var httpServer=http.createServer(function(req, res){
	var str='';
	if(req.method=="POST"){
		req.on("data", function(chunk){
			str=str+chunk;
		});
		req.on("end", function(){
			res.end(str);
		});
	}
});

httpServer.listen(3500, function(){
	var port=httpServer.address().port;
	var address=httpServer.address().address;
	console.log("Server is running at http://" ,address ,":",  port);
});