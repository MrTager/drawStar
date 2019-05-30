var cvs=document.getElementById('cvs');
var ctx=cvs.getContext('2d');
var playGame=null;
function Game() {
    var _this = this;
    this.redBoxLeft=0;
    this.blackBoxLeft=0;
    this.blackBoxTop=0;
    this.frame=0;//帧数

    this.num=0;
    var arr=[0,166,332];
    var arr2=[];
    //画红方块
    this.drawRedDiv=function () {
        ctx.beginPath();
        ctx.fillStyle='#ff0000';
        ctx.fillRect(_this.redBoxLeft,634,166,166);
        ctx.fill();
    };
    this.randomNumOfBlackleft=function () {
        //随机从数组中取一个left
        var index=Math.floor(Math.random()*arr.length);
        _this.blackBoxLeft=arr[index];//黑方块随机的宽度
        arr2.push(arr[index]);

    };
    //画黑方块
    this.drawBlackDiv=function () {
        _this.randomNumOfBlackleft();
        ctx.beginPath();
        ctx.fillStyle='#000000';
        ctx.fillRect(arr2[0],_this.blackBoxTop,166,166);
        ctx.fillRect(arr2[1],_this.blackBoxTop,166,166);
        ctx.fill();
    };
    this.update=function () {
        _this.blackBoxTop+=8;
        ctx.clearRect(0,0,498,800);
        _this.drawRedDiv();
        document.onkeydown=function (ev) {
            if(ev.keyCode==37){
                if(_this.redBoxLeft>0){
                    _this.redBoxLeft-=166
                }else {
                    _this.redBoxLeft-=0
                }
            }
            if(ev.keyCode==39){
                if(_this.redBoxLeft<332){
                    _this.redBoxLeft+=166
                }else {
                    _this.redBoxLeft+=0
                }
                console.log(_this.redBoxLeft);
            }
        };

        _this.drawBlackDiv();


        if(_this.blackBoxTop==800){
            arr2=[];
            _this.blackBoxTop=0;
            _this.randomNumOfBlackleft();
        }

        if(_this.redBoxLeft<=(arr2[0]+164)&&_this.redBoxLeft>=arr2[0]){
            if(_this.blackBoxTop>=(634-164)){
                alert('你撞了')
            }
        }
        if(_this.redBoxLeft<=(arr2[1]+164)&&_this.redBoxLeft>=arr2[1])
        {
            if(_this.blackBoxTop>=(634-164)){
                alert('你撞了')
            }

        }


        window.requestAnimationFrame(_this.update);

 }
}

playGame=new Game();
playGame.update();
playGame.drawBlackDiv();