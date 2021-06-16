interface elecustom {
    style:any
}
export default {
    mounted (el:HTMLElement) {
        // console.log(el)
        const oImage:HTMLElement = el;
        const oMagWrap = oImage.querySelector('.z-magbox');
        const oMagImg = oImage.querySelector('.mag-img');

        const imgWidth:number = parseInt(window.getComputedStyle(oImage,null)['width']);
        const imgHeight:number = parseInt(window.getComputedStyle(oImage,null)['height']);

        const magWidth:number = parseInt(window.getComputedStyle(oMagWrap as Element,null)['width']);
        const magHeight:number = parseInt(window.getComputedStyle(oMagWrap as Element,null)['height']);
        
        const imgX:number = (oImage as any).offsetLeft;
        const imgY:number = (oImage as any).offsetTop;
        
        console.log(imgX,imgY)
        const init = ()=>{
            bindEvent()
        }
        function bindEvent(){
            oImage.addEventListener('mouseover',function(event:Event){
                if(oMagWrap){
                    oMagWrap.className += " show"
                }
                
                showMag(getXY(event).x,getXY(event).y,getXY(event).mouseX,getXY(event).mouseY)
                document.addEventListener('mousemove',handMouseMove,false)
            },false)

            oImage.addEventListener('mouseout',handMouseOut,false)

        }
        function handMouseMove(event:Event){
            showMag(getXY(event).x,getXY(event).y,getXY(event).mouseX,getXY(event).mouseY)
        }
        function handMouseOut(){
            if(oMagWrap){
                oMagWrap.className = 'z-magbox';
            }
            document.removeEventListener('mousemove',handMouseMove,false)
        }

        function showMag(x:number,y:number,mouseX:number,mouseY:number){
            (oMagWrap as any).style.left = x + 'px';
            (oMagWrap as any).style.top = y + 'px';
            (oMagImg as any).style.left = -x + 'px';
            (oMagImg as any).style.top = -y + 'px';

            if(mouseX<0 || mouseY<0 || mouseX>imgWidth || mouseY>imgHeight){
                if(oMagWrap){
                    oMagWrap.className = 'z-magbox';
                }
                document.removeEventListener('mousemove',handMouseMove,false)
            }
        }
        function getXY(e:Event){
            return {
                x:(e as any).pageX - imgX - magWidth/2,
                y:(e as any).pageY - imgY - magHeight/2,
                mouseX:(e as any).pageX-imgX,
                mouseY:(e as any).pageY-imgY,
            }
        }
        init();
        // console.log(oMagImg,imgWidth,imgHeight,magWidth,magHeight)
    
    }
}