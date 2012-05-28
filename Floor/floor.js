var Placer = {};
(function(my, $){
	
	my.place = function(){
		placeBox();
		placeBelt();
		placeDropper();
		placePunchingBox();
		placeGlove();
		placeTrash();
	}

	function placeBox(){
		"use strict";
		var box = $('img#box');
		var body = $('#main_container');
		var boxPos = box.offset();
		box.height(body.height() * 0.3);
		box.width(box.height());
		var x =body.width() * (0.2);
		var y =body.height() * (0.5);
		box.offset({left: x , top: y});
		
		//console.log(x);
		//console.log(y);
	}

	function placeBelt(){
		"use strict";
		var belt = $('img#belt');
		var body = $('#main_container');
		var box = $('img#box');
		belt.width(body.width() - box.offset().left - box.width() + box.width()/4.0);
		belt.height(box.height());
		belt.css("float", "right");
		//console.log(box.offset().left);
		//console.log(box.width());
		
		var x = box.offset().left + box.width() - box.width()/4.0;
		var y = body.height() * (0.5);
		belt.offset({left: x , top: y});
		//console.log(x);
		//console.log(y);
	}
	
	function placeDropper(){
		"use strict";
		var dropper = $('img#dropper');
		var body = $('#main_container');
		var belt = $('img#belt');
		//var space = (belt.height() - dropper.height())/2.0; 
		dropper.height(belt.height());
		dropper.width(belt.width()/10);
		var x =belt.offset().left + belt.width() - dropper.width();
		var y =body.height() * (0.5); //+ space;
		dropper.offset({left: x , top: y});
		
		//console.log(x);
		//console.log(y);
		
	}
	
	function placePunchingBox(){
		"use strict";
		var punchingBox = $('img#punchingbox');
		var body = $('#main_container');
		var belt = $('img#belt');
		var x =(belt.width() * (0.6)) + belt.offset().left ;
		var y =body.height() * (0.5) - punchingBox.height();
		punchingBox.width(belt.width() /6.0);
		punchingBox.height(belt.height()/2.0);
		punchingBox.offset({left: x , top: y});
		
		//console.log(x);
		//console.log(y);
		
	}
	
	function placeGlove(){
		"use strict";
		var glove = $('img#glove');
		var belt = $('img#belt');
		var punchingBox = $('img#punchingbox')
		glove.height(belt.height()/2.0);
		var x = (punchingBox.width() - glove.width())/2.0 + punchingBox.offset().left;
		var y =punchingBox.offset().top + punchingBox.height()/3.0;
		
		glove.offset({left: x , top: y});
		//console.log(x);
		//console.log(y);
		
	}
	
	function placeTrash(){
		"use strict";
		var trash = $("img#trash");
		var punchingBox = $("img#punchingbox");
		var belt = $("img#belt");
		var body = $('#main_container');
		trash.height(punchingBox.height());
		trash.width(punchingBox.width());
		var x = punchingBox.offset().left;
		var y = body.height() * 0.8;
		
		trash.offset({left:x , top: y});
		
	}
}(Placer, jQuery));




