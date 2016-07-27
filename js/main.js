window.onload=function(){
	var page3 = document.getElementById("page3");
	var page5 = document.getElementById("page5");
	var bol= true;
	page3.addEventListener("touchstart",function(){
			if (bol) {
			// page3.style.width = "100.5%";
			page3.style.transform = "scale(1.2)";
			bol=false;
		}else{
			// page3.style.width = "84.7%";
			page3.style.transform = "scale(1)";

			bol=true;
		}
		},false);
	page5.addEventListener("touchstart",function(){
			if (bol1) {
			// page5.style.width = "100.5%";
			page5.style.transform = "scale(1.2)";
			bol1=false;
		}else{
			// page5.style.width = "84.7%";
			page5.style.transform = "scale(1)";
			bol1=true;
		}
		},false);	

	var bol1= true;


	// canvas
	var dele = document.getElementById("dele");
	var bills = document.getElementById("bills");
	var imgs = bills.getElementsByTagName("img");
	var img7 = document.getElementById("img7");
	var ca7 = document.getElementById("ca7");

	img7.onclick=function(){
		bills.style.display = "block";
		ca7.style.zIndex = "15";
		dele.style.display="block";
	}

	dele.onclick=function(){
		dele.style.display="none";
		ca7.style.zIndex = "12";
		bills.style.display = "none";
	}
	var arr = [];
	for (var i = 4; i < 17; i++) {
		arr.push("img/bill/bill"+i+".jpg");
	}
//	 图片预加载
	var imgarr = new Array();
	function imgload(){
		for (var i = 0; i < imgload.arguments.length; i++) {
			imgarr[i] = new Image();
			imgarr[i].src = imgload.arguments[i];
		}
	}
	imgload(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11],arr[12]);
	ca7.width = window.innerWidth;
	ca7.height = window.innerHeight;
	var can7 = ca7.getContext("2d");
	var a7=200,b7=230,rt=30;
	var speen = 50,speen1=50;
	var sign_img = new Image();
	function hid(){
		sign_img.onload=function(){
			can7.beginPath();
			can7.drawImage(sign_img,0,0,23,30,3,a7,23,30);
			can7.fillStyle = "red";
			can7.fillRect();
			can7.fillRect(14,b7,1,ca7.height);
		}
		sign_img.src = 'img/sign.png';
	}
	hid();
	touch.on(bills, 'touchstart', function(ev){
		ev.preventDefault();
	});
	touch.on(bills, 'swiperight', function(ev){
		a7-=speen;
		b7-=speen1;
		can7.clearRect(0,0,ca7.width,ca7.height);
		hid();
		add();
	});
	touch.on(bills, 'swipeleft', function(ev){
		a7+=speen;
		b7+=speen1;
		can7.clearRect(0,0,ca7.width,ca7.height);
		hid();
		reduce();
	});
//	// 减少
	var img_num=-1;
	function reduce(){
		img_num++;
		console.log(img_num)
		imgs[0].style.webkitAnimation = "img1 0.5s linear";
		imgs[1].style.webkitAnimation = "img2 0.5s linear";
		if (imgs.length>1) {
			var timer=setTimeout(function(){
				bills.removeChild(imgs[0]);
				if (imgs.length>1) {
					bills.appendChild(imgarr[img_num]);
				}	
			},500)
		}
	}
//	// 增加
	function add(){
		img_num--;
		bills.removeChild(imgs[2]);
		bills.insertBefore(imgarr[img_num],imgs[0]);
	}

//var div1 = document.getElementById("div1");
//var imgs= div1.getElementsByTagName("img");
//var count = imgs.length;
//
//touch.on('#div1', 'touchstart', function(ev){
//	ev.preventDefault();
//});
//var target = document.getElementById("div1");
//target.style.webkitTransition = 'all ease 0.2s';
//touch.on(target, 'swipeleft', function(ev){
//	this.style.webkitTransform = "translate3d(-" + 0 + "px,0,0)";
//	this.className ="swipeLeft";
//	alert(1);
//});



}