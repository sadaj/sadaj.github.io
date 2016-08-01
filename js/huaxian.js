var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
	direction: 'vertical',
//	 effect : 'cube',
//	 cube: {
////	   slideShadows: true,
//	   shadow: false,
////	   shadowOffset: 100,
//	   shadowScale: 0.6
//	 },
	effect : 'flip',
	flip: {
        slideShadows : true,
        limitRotation : true,
	},
	onSlideChangeEnd:function(swiper){
		switch(swiper.activeIndex){
			case 1:	
				break;
			case 2:		
				c1_line1();
				c2_line2();
				c3_line3()
				break;
			case 3:			
				c3_line1();
				break;
			case 4:
				c4_line1();
				c4_line2();
				c4_line3();
				break;
			case 5:
				c5_line();
				break;
			case 6:
				c61_line();
				c62_line();
				c63_line();
				break;
			case 7:
//				c71_line();
				break;
			case 8:
			    c81_line();
			    c82_line();
			    c83_line();
//				pageEight();
				break;
			case 9:
				// pageNine();
				break;
		}

	}
})

//算出视图的宽与高
	function view() {
		return {
			w: document.documentElement.clientWidth,
			h: document.documentElement.clientHeight
		}
	}

	function draWpoint(cvs, x, y) {
		cvs.beginPath();
		cvs.fillStyle = "white";
		cvs.arc(x * scaleX, y * scaleY, 4, 0, Math.PI * 2);
		cvs.fill();
	}

	function draWline(cvs, startx, starty, endx, endy) {
		cvs.beginPath();
		cvs.lineWidth = 0.5;
		cvs.strokeStyle = "white";
		cvs.moveTo(startx * scaleX, starty * scaleY);
		cvs.lineTo(endx * scaleX, endy * scaleY);
		cvs.stroke();
	}
	
	function jichu(x1,id,cvs){
		var x1 = document.getElementById(id);
	var cvs = x1.getContext('2d');
	x1.width = view().w;
	x1.height = view().h;
	var scaleX = x1.width/639;
	var scaleY = x1.height/1041;
	}

	//第二页canvars
	c1.width = view().w;
	c1.height = view().h;
	var scaleX = c1.width / 639;
	var scaleY = c1.height / 1041;
	
	var cvs1= c1.getContext('2d');
    jichu(c1,"c1",cvs1);

	function c1_line1() {
		var x = 0,
			y = 112;
		var timer1 = setInterval(function() {
			if(x < 230) {
				x += 3.0667;
				y += 1;
				draWline(cvs1, 0, 112, x, y);
			} else if(y >= 187 && y < 800) {
				draWpoint(cvs1, 230, 187);
				y += 7;
				draWline(cvs1, 230, 187, 230, y);
			} else if(y >= 800 && y < 1041 && x < 320) {
				draWpoint(cvs1, 230, 800);
				x += 2;
				draWline(cvs1, 230, 800, x, 800)
			} else if(x >= 320 && y < 1041) {
				draWpoint(cvs1, 320, 800)
				y += 3;
				draWline(cvs1, 320, 800, 320, y)
			}
			if(y >= 1041) {
				clearInterval(timer1);
			}
		}, 5)
	}


	//画第二条线

var cvs2= c2.getContext('2d');
jichu(c2,"c2",cvs2)
	function c2_line2() {
		var x = 624,
			y = 750;
		var timer2 = setInterval(function() {
			if(x >= 400 && x <= 624) {
				draWpoint(cvs2, 624, 750);
				x -= 2;
				draWline(cvs2, 624, 750, x, 750);
			} else if(y >= 700 && y <= 750) {
				draWpoint(cvs2, 400, 750);
				y -= 2;
				draWline(cvs2, 400, 750, 400, y);
			} else {
				draWpoint(cvs2, 400, 700);
			}
		}, 5)

	}

	
	

var cvs3= c3.getContext('2d');
jichu(c3,"c3",cvs3)
	function c3_line3() {
		var x = 624,
			y = 750;
		var timer2 = setInterval(function() {
			if(x >= 400 && x <= 624) {
				x -= 1.8667;
				y -= 1;
				draWline(cvs3, 624, 750, x, y);
			} else if(y >= 200 && y <= 630) {
				draWpoint(cvs3, 400, 630);
				y -= 2;
				draWline(cvs3, 400, 630, 400, y);
			} else {
				draWpoint(cvs3, 400, 200);
			}
		}, 5)

	}


//第三页	
var cvs31= c31.getContext('2d')
jichu(c31,"c31",cvs31)
	function c3_line1() {
		var x = 320,
			y = 0;
		var timer2 = setInterval(function() {
			if(y >= 0 && y <= 60) {
				y += 2;
				draWline(cvs31, 320, 0, 320, y);			
			}else{
				draWpoint(cvs31, 320, 60);
			}
		}, 5)

	}


	
	
	
//第四页	
var cvs41 = c41.getContext('2d');
jichu(c41,"c41",cvs41)

	function c4_line1() {
		var x = 0,y = 710;
		var y1 = 920;
		var timer3 = setInterval(function() {
			if(x >= 0 && x <= 170) {
				x += 1;
				y += 1.23529;
				draWline(cvs41, 0, 710, x, y);
				
			} else if(y1>=840 && y1<=920){
				draWpoint(cvs41, 170, 920);
			y1-=2;
			draWline(cvs41, 170, 920, 170, y1);
			
			}else if(x>=170 && x<=305){
				draWpoint(cvs41, 170, 840);
			x+=2;
			draWline(cvs41, 170, 840, x, 840);			
			}else{
				draWpoint(cvs41, 305, 840);
			}
			

		},5)

	}



var cvs42 = c42.getContext('2d');
jichu(c42,"c42",cvs42);
	function c4_line2(){
	var x=305,y=1041
	var timer = setInterval(function(){
		if(y>=770 && y<=1041){
		y-=1;
		draWline(cvs42,305,1041,305,y);
	}else if(x>=305 && x<=370){
		draWpoint(cvs42, 305, 770);
		x+= 2;
		draWline(cvs42,305,770,x,770);
	}else if(y>=705 && y<=770){
		draWpoint(cvs42, 370, 770);
		y-= 1;
		draWline(cvs42,370,770,370,y);	
	}else{
	   draWpoint(cvs42, 370, 705);
	}
				
	},5)	
	}


var cvs43 = c43.getContext('2d');
jichu(c43,"c43",cvs43);
	function c4_line3(){
	var x=639,y=200
	var y1=120;
	var timer = setInterval(function(){
		if(x>=370 && x<=639){
		x-=3.3625;
		y-=1;
		draWline(cvs43,639,200,x,y);
		
	}else if(y1>=120 && y1<=665){
		draWpoint(cvs43, 370, 120);
		y1+=2;
		draWline(cvs43,370,120,370,y1);
		
	}else{
		draWpoint(cvs43,370,665);
	}
	},5)	
	}


//第五页	
var cvs5 = c5.getContext('2d');
jichu(c5,"c5",cvs5);
function c5_line(){
var x=320,y=0;
var timer=setInterval(function(){
if(y>=0 && y<=60){
	y+=1;
	draWline(cvs5,320,0,320,y);	
}else{
draWpoint(cvs5,320,60);
}
},5)
}


//第六页	
var cvs61 = c61.getContext('2d');
jichu(c61,"c61",cvs61);
function c61_line(){
var x=200,y=1041;
var timer=setInterval(function(){
if(y>=820 && y<=1041){
	y-=1;
	draWline(cvs61,200,1041,200,y);	
}else if(x>=200 && x<=410){
draWpoint(cvs61,200,820);
x+=1;
draWline(cvs61,200,820,x,820);
}else if(y>=770 && y<=820){
draWpoint(cvs61,410,820);
	y-=1;
draWline(cvs61,410,820,410,y);	
}else{
draWpoint(cvs61,410,770);
}
},5)
}



var cvs62 = c62.getContext('2d');
jichu(c62,"c62",cvs62);
function c62_line(){
var x=639,y=200;
var y1=120
var timer=setInterval(function(){
if(y>=120 && y<=200){
	y-=1;
	x-=2.8625;
	draWline(cvs62,639,200,x,y);	
}else if(y1>=120 && y1<=700){
	draWpoint(cvs62,410,120);
	y1+=2;
	draWline(cvs62,410,120,410,y1);		
}else{
	draWpoint(cvs62,410,700)
}
},5)
}


var cvs63 = c63.getContext('2d');
jichu(c63,"c63",cvs63);
function c63_line(){
var x=0,y=180;

var timer=setInterval(function(){
if(x>=0 && x<=220){
	y+=1;
	x+=4.4;
	draWline(cvs63,0,180,x,y);	
}else if(y>=230 && y<=730){
	draWpoint(cvs63,220,230);
	y+=2;
	draWline(cvs63,220,230,220,y);
}else{
	draWpoint(cvs63,220,730);
}
},5)
}

//第七页	
//var cvs71 = c83.getContext('2d');
//jichu(c71,"c71",cvs71);
//function c71_line(){
//	var x=196,y=0;
//	var timer = setInterval(function(){
//		if(y<177){
//			y+=3;
//			draWline(cvs71,196,0,196,y)
//		}else{
//			draWpoint(cvs71,196,177);
//			clearInterval(timer)
//		}
//	},5)
//}

//第八页	
var cvs81 = c81.getContext('2d');
jichu(c81,"c81",cvs81);
function c81_line(){
var x=0,y=220;
var timer=setInterval(function(){
if(x>=0 && x<=220){
	y+=1;
	x+=2.75;
	draWline(cvs81,0,220,x,y);
		
}else if(y>=220 && y<=660){
	draWpoint(cvs81,220,300);
	y+=2;
	draWline(cvs81,220,300,220,y);	
}else{
	draWpoint(cvs81,220,660);
}
},5)
}

var cvs82 = c82.getContext('2d');
jichu(c82,"c82",cvs82);
function c82_line(){
var x=639,y=850;
var timer=setInterval(function(){
if(x>=420 && x<=639){
	y-=1;
	x-=1.21667;	
	draWline(cvs82,639,850,x,y)		
}else if(y>=150 && y<=670){	
	draWpoint(cvs82,420,670);
	y-=7;	
	draWline(cvs82,420,670,420,y);	
}else{
	draWpoint(cvs82,420,150);
}
},5)
}



var cvs83 = c83.getContext('2d');
jichu(c83,"c83",cvs83);
function c83_line(){
var x=639,y=950;
var timer=setInterval(function(){
if(x>=420 && x<=639){
	y-=1;
	x-=1.21667;	
	draWline(cvs83,639,950,x,y);	
}else if(y>=770 && y<=830){	
	draWpoint(cvs83,420,770);
	y+=1;	
	draWline(cvs83,420,770,420,y);	
}else if(x>=220 && x<=420){
	draWpoint(cvs82,420,830);
	x-=2;
	draWline(cvs83,420,830,x,830);	
}else if(y>=830 && y<=1041){
	draWpoint(cvs83,220,830);
	y+=2;
	draWline(cvs83,220,830,220,y);				
}
},5)
}

function jqId(id){
	return document.getElementById(id);
}























