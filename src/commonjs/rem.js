var myfontSize = 0;
var runrem = function(){
	 var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // let devicePixelRatio  = window.devicePixelRatio ;
            // let docFont = clientWidth*100 / 750;
            // docEl.style.fontSize = docFont + 'px';
            let docFont = clientWidth*100 / 750 ;
                docEl.style.fontSize = docFont + 'px';

            myfontSize = docFont;
            return docFont;
        };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
};

export default runrem;