/* Goes in a separate interface file */

export interface BrowserMap{
    browser: Browser,
    thresholdVal: Number
}
export enum Browser {
    CHROME= 'Chrome', 
    FIREFOX = 'Firefox' ,
    OPRERA = 'Opera',
    OPR = 'OPR',
    SAFARI = 'Safari', 
    IE = 'MSIE', 
    EDGE = 'Edge',
    EDG = 'Edg',
    TRIDENT = 'rv'
}

export interface IDetectBrowser{
    ua: string,
    differentialLoading:()=> boolean
}
export class DetectBrowser{
    ua: string;
    private flag: boolean;
    private brwsrThreshold: BrowserMap [];
    private version: Number;
    constructor(){
         this.brwsrThreshold = [
            { browser: Browser.CHROME, thresholdVal: 61},
            { browser: Browser.FIREFOX, thresholdVal: 60}, 
            { browser: Browser.OPRERA, thresholdVal: 48}, 
            { browser: Browser.OPR, thresholdVal: 48}, 
            { browser: Browser.SAFARI, thresholdVal: 11}, 
            { browser: Browser.IE, thresholdVal: 12}, 
            { browser: Browser.TRIDENT, thresholdVal: 12}, 
            { browser: Browser.EDGE, thresholdVal: 16}, 
            { browser: Browser.EDG, thresholdVal: 16}
        ];
        this.ua = window.navigator.userAgent;
        this.flag = false;
    }
    differentiaLoading(): boolean{
        for(let brwsrDet of this.brwsrThreshold){
            if(this.ua.indexOf(brwsrDet.browser+'/') > -1 || this.ua.indexOf(brwsrDet.browser+' ') > -1 || this.ua.indexOf(brwsrDet.browser+':') > -1){
                console.log(brwsrDet.browser)
                this.version = (this.ua.indexOf(brwsrDet.browser+'/') > -1) ? +this.ua.split(brwsrDet.browser+'/')[1].split('.')[0] :(this.ua.indexOf(brwsrDet.browser+':') > -1) ? this.ua.split(brwsrDet.browser+':')[1].split[0]: this.ua.split(brwsrDet.browser+' ')[1].split[0];
                return (this.version >= brwsrDet.thresholdVal) ? this.flag = !this.flag : this.flag;
            }
        }
    }
}

let retVal = new DetectBrowser();

let retType = retVal.differentiaLoading();
console.log(retType);