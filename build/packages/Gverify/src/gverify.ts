interface optionsType {
    id:string;
    width:number;
    height:number;
    size:number;
    iswire?:boolean;
    isPoint?:boolean;
    letterArr?:string[]
    [propName: string]: any;
}
interface GVerifyType {
    options:optionsType;
    version:string;
    
}
/**生成字母数组**/
const getAllLetter =()=> {
    let letterStr:string = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
    return letterStr.split(",");
}

/**生成一个随机数**/
const randomNum = (min:number, max:number)=> {
    return Math.floor(Math.random() * (max - min) + min);
}

/**生成一个随机色**/
const randomColor = (min:number, max:number)=> {
    var r = randomNum(min, max);
    var g = randomNum(min, max);
    var b = randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
}

class GVerify implements GVerifyType {
    options:optionsType
    version= '1.0.0'
    constructor(options:optionsType){
        this.options = { //默认options参数值
            id: options.id, //容器Id
            canvasId: "verifyCanvas", //canvas的ID
            width: options.width, //默认canvas宽度
            height: options.height, //默认canvas高度
            type: options.blend || "blend", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
            code: "",
            size:options.size || 4
        }

        this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
        this.options.letterArr = getAllLetter();

        this._init();
        this.refresh();
    }
    _init():void{
        var con:HTMLElement|null = document.getElementById(this.options.id);
        var canvas:HTMLCanvasElement = document.createElement("canvas");
        // this.options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
        // this.options.height = con.offsetHeight > 0 ? con.offsetHeight : "30";
        canvas.id = this.options.canvasId;
        canvas.width = this.options.width;
        canvas.height = this.options.height;
        canvas.style.cursor = "pointer";
        canvas.innerHTML = "您的浏览器版本不支持canvas";
        if(con){
            con.appendChild(canvas);
        }
        // var parent = this;
        canvas.onclick = ()=>{
            this.refresh();
        }
    }
    refresh(){
        this.options.code = "";
        let canvas:any = document.getElementById(this.options.canvasId);
        if(canvas.getContext) {
            var ctx = canvas.getContext('2d');
        }else{
            return;
        }

        ctx.textBaseline = "middle";
 
        ctx.fillStyle = randomColor(180, 240);
        ctx.fillRect(0, 0, this.options.width, this.options.height);
        var txtArr
        if(this.options.type == "blend") { //判断验证码类型
            txtArr = this.options.numArr.concat(this.options.letterArr);
        } else if(this.options.type == "number") {
            txtArr = this.options.numArr;
        } else {
            txtArr = this.options.letterArr;
        }
        // debugger;
        for(var i = 1; i <=this.options.size; i++) {
            var txt = txtArr[randomNum(0, txtArr.length)];
            this.options.code += txt;
            ctx.font = randomNum(this.options.height/2, this.options.height) + 'px SimHei'; //随机生成字体大小
            ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色        
            ctx.shadowOffsetX = randomNum(-3, 3);
            ctx.shadowOffsetY = randomNum(-3, 3);
            ctx.shadowBlur = randomNum(-3, 3);
            ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
            var x = this.options.width / (this.options.size+1) * i;
            var y = this.options.height / 2;
            var deg = randomNum(-10, 10);
            /**设置旋转角度和坐标原点**/
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(txt, 0, 0);
            /**恢复旋转角度和坐标原点**/
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
        }

        /**绘制干扰线**/
        if(this.options.iswire){
            for(var i = 0; i < 3; i++) {
                ctx.strokeStyle = randomColor(40, 180);
                ctx.beginPath();
                ctx.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                ctx.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                ctx.stroke();
            }
        }
       
        /**绘制干扰点**/
        if(this.options.isPoint){
            for(var i = 0; i < this.options.width/8; i++) {
                ctx.fillStyle = randomColor(0, 255);
                ctx.beginPath();
                ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
                ctx.fill();
            } 
        }
    }
    /**验证验证码**/
    validate(code:string):boolean{
        var code:string = code.toLowerCase();
        var v_code:string = this.options.code.toLowerCase();
        if(code === v_code){
            return true;
        }else{
            return false;
        }
    }
}

export default GVerify