
export class DetectBrowse{
    constructor(){}
    differentiaLoading(){
        enum Browser {
            CHROME= 'Chrome', 
            FIREFOX = 'Firefox' ,
            OPRERA = 'Opera',
            OPR = 'OPR',
            SAFARI = 'Safari', 
            IE = 'MSIE', 
            EDGE = 'Edg',
            TRIDENT = 'Trident'
        }
        const brwsrThresold = {
            [Browser.CHROME]: '61', 
            [Browser.FIREFOX]: '60', 
            [Browser.OPRERA] : '48', 
            [Browser.OPR] : '48', 
            [Browser.SAFARI] : '11', 
            [Browser.IE]: '11',
            [Browser.TRIDENT]: '8', 
            [Browser.EDGE]: '16'
        }
        var ua = window.navigator.userAgent;
        let version =[];
        let flag = false;
        for (const property in brwsrThresold) {
            if(ua.indexOf(`${property}`) > -1){
                version.push(+ua.split(`${property}/`)[1].split('.')[0]);
                version.forEach((number)=>{
                    if(number>= +`${brwsrThresold[property]}`) flag = true;
                })
                
            }  
        }

        if(flag){
            return true;
        }else{
            return false
        }


        
    }
}

let retVal = new DetectBrowse();

let retType = retVal.differentiaLoading();
console.log(retType)
