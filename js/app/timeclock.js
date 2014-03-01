$(function(){
	window.setInterval(function(){
		var datetime=new Date();
		var y=datetime.getFullYear();
		var m=datetime.getMonth()+1;
		m=m>=10?m:('0'+m);
		var d=datetime.getDate();
		d=d>=10?d:('0'+d);
		var h=datetime.getHours();
		h=h>=10?h:('0'+h);
		var min=datetime.getMinutes();
		min=min>=10?min:('0'+min);
		var sec=datetime.getSeconds();
		sec=sec>=10?sec:('0'+sec);
		$("footer .time .date").html(y+"-"+m+"-"+d);
		$("footer .time .clock").html(h+":"+min+":"+sec);
	},1000)
})