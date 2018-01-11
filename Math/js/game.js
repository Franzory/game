//start
Select('button')[0].onclick = function(){
	Select('#startBox').style.cssText+="transform:scale(0)";
	var daojishi=-1;
	Game.startTime(daojishi);
}
Select('button')[1].onclick = function(){
	location.reload();
}

var time = 2000,timer;

var Game = {
	startTime:function(o){
		for(let i = 0;i<document.querySelectorAll('.startTimeBox').length;i++){
			document.querySelectorAll('.startTimeBox')[i].className += ' hidden';
		}
		var startTimer = setInterval(function(){
			o++;
			if(o>=2){
				clearInterval(startTimer);
			}
			document.querySelectorAll('.startTimeBox')[o].setAttribute('class','startTimeBox show');
			setTimeout(function(){
				document.querySelectorAll('.startTimeBox')[o].style.cssText = "display:none";
				if(o>=2){
					Game.move();
					Select('#MathBox').style.cssText += 'opacity:1';
					Select('#time').style.cssText += 'opacity:1';
				}
			},900)
		},1000)
		
	},
	move:function(){
		(function(){
		var bout = 0;
		var NumArr = new Array();
		var operatorArr = ['+','-'];
		var resultTrue = 0;
		var resultArr = new Array();
		// hintNum = 3;
			for(let i=0;i<10;i++){
				NumArr.push(i);
			}

		var randomNum_1 = parseInt(NumArr[Math.round(Math.random()*9)]);
		var randomNum_2 = parseInt(NumArr[Math.round(Math.random()*9)]);
		var randomNum_3 = 0;
		var randomNumIndex = [0,2];
		Select('#MathBox').getElementsByTagName('p')[randomNumIndex[0]].innerHTML = randomNum_1;

		Select('#MathBox').getElementsByTagName('p')[randomNumIndex[1]].innerHTML = randomNum_2;

	function action(){
		
		Select('#bout').innerHTML = 'score：'+bout;

		randomNum_1 = parseInt(NumArr[Math.round(Math.random()*9)]);

		randomNumIndex.sort(function(){
			return Math.random()-0.5;
		})

				Select('#MathBox').getElementsByTagName('p')[randomNumIndex[0]].style.cssText += "transform:scale(1,0);-0-transform:scale(1,0);-webkit-transform:scale(1,0);";
			
				setTimeout(function(){
					handMove.show(randomNumIndex[1]);
					for(let i=0;i<3;i++){
						Select('#MathBox').getElementsByTagName('p')[i].removeAttribute('style');
					}
				},400)



		Select('#MathBox').getElementsByTagName('p')[randomNumIndex[0]].innerHTML = randomNum_1;


		
		var operatorN = operatorArr[Math.round(Math.random()*1)];
		Select('#operator').innerHTML = operatorN;

		switch(operatorN){
			case '+':
				resultTrue = parseInt(Select('#MathBox').getElementsByTagName('p')[0].innerHTML) + parseInt(Select('#MathBox').getElementsByTagName('p')[2].innerHTML)
			break;
			case '-':
				resultTrue = parseInt(Select('#MathBox').getElementsByTagName('p')[0].innerHTML) - parseInt(Select('#MathBox').getElementsByTagName('p')[2].innerHTML)
			break;
		}
		// console.error(parseInt(Select('#MathBox').getElementsByTagName('p')[0].innerHTML)+' '+parseInt(Select('#MathBox').getElementsByTagName('p')[2].innerHTML))
		// console.warn(resultTrue);
		resultArr.length = '';

			resultArr.push(resultTrue);
			resultArr.push(resultTrue-(Math.ceil(Math.random()*2)));
			resultArr.push(resultTrue+(Math.ceil(Math.random()*2)));
			time =2000;
			Select('#time_child').style.cssText+='width:'+time*5/100+'%';
			clearInterval(timer);
			timer = setInterval(function(){
				time--;
				Select('#time_child').style.cssText+='width:'+time*5/100+'%';
				if(time<=0){
					clearInterval(timer);
					Game.over();
				}
			},1)

		

		resultArr.sort(function(){
				return Math.random()-0.5;
			});
		for(let i=0;i<Select('#touchBox').getElementsByTagName('input').length;i++){
				Select('#touchBox').getElementsByTagName('input')[i].value = resultArr[i];
				// Select('#touchBox').getElementsByTagName('input')[i].onclick = function(){}
			}
	}
		action();
		Select('#touchBox').onclick = function(event){
			event = event || window.event;
			var target = event.target || event.srcElement;
			switch(target.id){
				case 'touchNum_1':judge(target.value);break;
				case 'touchNum_2':judge(target.value);break;
				case 'touchNum_3':judge(target.value);break;
			}
		}

		function judge(objValue){
				if(objValue==resultTrue){
					bout++;
					Select('#bout').innerHTML = 'score：'+bout;
					Select('#hand').style.cssText += "opacity:"+bout/5+"";
					action();
				}else{
					Game.over();
				}
			
		}
		
		var handMove = {
			show:function(leftIndex){
				Select('#hand').style.cssText += "left:"+leftIndex*2+"0%";
			}
		}

		})()
	},
	over:function(){
			Select('#judge_box').style.cssText+='left:0%;';
			setTimeout(function(){
				Select('#judge_box').style.cssText+='left:-100%;';
				Select('#restart_box').style.cssText += 'left:0%';
			},2000)
			Select('#restart_btn').onclick = function(){
				location.reload() 
			}
		}
}