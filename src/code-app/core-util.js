
(function () {
    $n = "<br>",
    $t = "&nbsp;";
    $textcolor = 'black';
    $textsize = '14px';
    $textfont = 'Arial';

    _i_ = function (e) {
        this.ID = e;
        //this.val;
        this.getExistCheck = 0;

        this.get = function () {
            if (this.getExistCheck === 0) {
                this.getExistCheck = 1;
                doc = document.body;
                input = document.createElement("input");
                doc.appendChild(input);
                input.setAttribute("id", this.ID);
                input.setAttribute("onkeyup","setvalue(this.id, "+this.ID+");");
            }
        }
    }

    _o_ = function () {

        for (var i = 0; i < arguments.length; i++) {
            var e = arguments[i];

            var type = typeof (e);
            if (type == 'string') {
                if ( e.match(/\[object Object\]/) || e.match(/function \(\) \{/) ) {
                    warning = ' [<strong>WARNING:</strong> Incorrect Operation] ';
                    output('e', warning);
                } else output('o', e);
            } else if (type == 'number') {
                output('o', e);
            } else if (type == NaN) {
                error = ' [<strong>ERROR:</strong> Cannot Perform Operation] ';
                output('e', error);
            } else if (type == 'object') {
                if (e.val === undefined) {
                    error = ' [<strong>ERROR:</strong> Unused/Undefined Variable] ';
                    output('e', error);
                } else output('o', e.val);
            } else if (type === undefined) {
                error = ' [<strong>ERROR:</strong> Unused/Undefined Variable] ';
                output('e', error);
            }

        }
    }

    use = function () {
        for (var i = 0; i < arguments.length; i++) {
            var e = arguments[i];
            window[e] = new _i_(e);
        }
    }

    get = function () {
        try {
            for (var i = 0; i < arguments.length; i++) {
                var e = arguments[i];
                var type = typeof (e);
                if (type === undefined || type != 'object') throw "!O";
                else e.get();
            }
        } catch (error) {
            if (error == '!O') {
                error = ' [<strong>ERROR:</strong> Invalid use of <em>get()</em> : get() stopped] '; 
                output('e', error);
            }
        }

    }

    print = _o_;




    /*****

    Output Print

    *****/

    output = function (t, content) {

        doc = document.body;
        
        switch (t){
            case 'o':
                var p = document.createElement("p");
                doc.appendChild(p);
                p.style.color = $textcolor;
                p.style.fontSize = $textsize + 'px';
                p.style.fontFamily = $textfont;
                p.innerHTML = content;
                break;

            case 'e':
                var d = document.createElement("div");
                doc.appendChild(d);
                d.setAttribute('class','err');
                d.innerHTML = content;
                break;
        }

    }




    /*****

    "run" button creator

    *****/

    run = function (name) {

        doc = document.body;
        var button = document.createElement("button");
        doc.appendChild(button);

        button.setAttribute('class','run');
        button.setAttribute('onclick','process();');
        button.innerHTML = name;
    }

    





    /*****

    Mathematical Functions

    *****/

    add = function () {
        try{    
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                var e = arguments[i];
                var type = typeof (e);

                if (type == 'object') {
                    if (typeof (e.val) == 'number')    
                        sum += e.val;
                    else if (typeof (e.val) == 'string') {
                        if (e.val.match(/^[0-9]+$/)) {
                            e.val = e.val/1;
                            sum += e.val;
                        }
                        else throw '!N';
                    }
                    else throw '!N';
                }
                else if (type == 'number') {
                    sum += e;
                }
                else throw '!N';
            }
            return sum;
        } catch (error) {
            if (error == '!N'){
                var e = ' [<strong>ERROR:</strong> Only numbers can be added] ';
                output('e', e);
            }
        }
    }


    sub = function () {
        try{    
            var sub = 0;
            for (var i = 0; i < arguments.length; i++) {
                var e = arguments[i];
                var type = typeof (e);

                if (type == 'object') {
                    if (typeof (e.val) == 'number') {
                        if (i == 0) sub = e.val;
                        else sub -= e.val;
                    }    
                    else if (typeof (e.val) == 'string') {
                        if (e.val.match(/^[0-9]+$/)) {
                            e.val = e.val/1;
                            if (i == 0) sub = e.val;
                            else sub -= e.val;
                        }
                        else throw '!N';
                    }
                    else throw '!N';
                }
                else if (type == 'number') {
                    if (i == 0) sub = e;
                    else sub -= e;
                }
                else throw '!N';
            }
            return sub;
        } catch (error) {
            if (error == '!N'){
                var e = ' [<strong>ERROR:</strong> Only numbers can be subtracted] ';
                output('e', e);
            }
        }
    }


    mul = function () {
        try{    
            var mul = 1;
            for (var i = 0; i < arguments.length; i++) {
                var e = arguments[i];
                var type = typeof (e);

                if (type == 'object') {
                    if (typeof (e.val) == 'number')    
                        mul *= e.val;
                    else if (typeof (e.val) == 'string') {
                        if (e.val.match(/^[0-9]+$/)) {
                            e.val = e.val/1;
                            mul *= e.val;
                        }
                        else throw '!N';
                    }
                    else throw '!N';
                }
                else if (type == 'number') {
                    mul *= e;
                }
                else throw '!N';
            }
            return mul;
        } catch (error) {
            if (error == '!N'){
                var e = ' [<strong>ERROR:</strong> Only numbers can be multiplied] ';
                output('e', e);
            }
        }
    }


    div = function () {
        try{    
            var div = 1;
            for (var i = 0; i < arguments.length; i++) {
                var e = arguments[i];
                var type = typeof (e);

                if (type == 'object') {
                    if (typeof (e.val) == 'number') {
                        if (i == 0) div = e.val;
                        else div /= e.val;
                    }    
                    else if (typeof (e.val) == 'string') {
                        if (e.val.match(/^[0-9]+$/)) {
                            e.val = e.val/1;
                            if (i == 0) div = e.val;
                            else div /= e.val;
                        }
                        else throw '!N';
                    }
                    else throw '!N';
                }
                else if (type == 'number') {
                    if (i == 0) div = e;
                    else div /= e;
                }
                else throw '!N';
            }
            return div;
        } catch (error) {
            if (error == '!N'){
                var e = ' [<strong>ERROR:</strong> Only numbers can be divided] ';
                output('e', e);
            }
        }
    }

    pow = function (n, e) {
        var r = 1;
        try {

            if (typeof(n) == 'number') {
                if (typeof(e) == 'number') {
                    for (var i = 0; i < e; i++) {
                        r *= n;
                    }
                } else if (typeof(e) == 'object') {
                    var _e = parseFloat(e.val);
                    if (typeof(_e) == 'number' && !isNaN(_e)) {
                        for (var i = 0; i < _e; i++) {
                            r *= n;
                        }
                    } else throw '!N';
                }
            }
            else if (typeof(n) == 'object') {
                var _n = parseFloat(n.val);

                if (typeof(_n) == 'number' && !isNaN(_n)) {
                    if (typeof(e) == 'number') {
                        for (var i = 0; i < e; i++) {
                            r *= _n;
                        }
                    } else if (typeof(e) == 'object') {
                        var _e = parseFloat(e.val);

                        if (typeof(_e) == 'number' && !isNaN(_e)) {
                            for (var i = 0; i < _e; i++) {
                                r *= _n;
                            }
                        } else throw '!N';
                    }
                    else throw '!N';
                }
            }
            else throw '!N';

            return r;
        } catch (error) {
            if (error == '!N') {
                var e = ' [<strong>ERROR:</strong> Not a number] ';
                output('e', e);
            }
        }
    }

    random = function (max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    roundHi = function (n) {
        try {

            if (typeof(n) == 'number') {
                return Math.ceil(n);
            }
            else if (typeof(n) == 'object') {
                if (typeof(n.val) == 'number')
                    return Math.ceil(n.val);
                else throw '!N';
            }
            else throw '!N';
        } catch (error) {
            if (error == '!N') {
                var e = ' [<strong>ERROR:</strong> Not a number] ';
                output('e', e);
            }
        }
    }

    roundLo = function (n) {
        try {

            if (typeof(n) == 'number') {
                return Math.floor(n);
            }
            else if (typeof(n) == 'object') {
                if (typeof(n.val) == 'number')
                    return Math.floor(n.val);
                else throw '!N';
            }
            else throw '!N';
        } catch (error) {
            if (error == '!N') {
                var e = ' [<strong>ERROR:</strong> Not a number] ';
                output('e', e);
            }
        }
    }

    mod = function (n) {
        try {

            if (typeof(n) != 'number' && typeof(n) != 'object')
                throw '!N';
            else {
                if (isNum(n)) {
                    if (typeof(n) == 'number') {
                        return Math.abs(n);
                    }
                    else if (typeof(n) == 'object') {
                        return Math.abs(parseFloat(n.val));
                    }
                }
                else throw '!N';
            }

        } catch (error) {
            if (error == '!N') {
                var e = ' [<strong>ERROR:</strong> Not a number : mod() stopped] ';
                output('e', e);
            }
        }

    }


    





    /*****

    Text Functions

    *****/

    heading = function (t) {
        doc = document.body;
        var head = document.createElement('h1');
        doc.appendChild(head);

        head.setAttribute('class','heading');
        head.style.color = $textcolor;
        head.style.fontSize = $textsize + 'px';
        head.style.fontFamily = $textfont;
        head.innerHTML = t;
    }

    textColor = function (c) {
        $textcolor = c;
    }

    textSize = function (s) {
        $textsize = s;
    }

    textFont = function (f) {
        $textfont = f;
    }

    text = function (s, c, f) {
        try {
            if ( typeof(s) != 'number' ||
                    typeof(c) != 'string' ||
                        typeof(f) != 'string' )
                throw 'error';

            else {
                textSize(s);
                textColor(c);
                textFont(f);
            }

        } catch (error) {
            if (error == 'error'){
                var e = ' [<strong>ERROR:</strong> Invalid arguments : text() stopped] ';
                output('e', e);
            }
        }
    }


    






    /*****

    String Functions

    *****/

    join = function () {
        try {
            var finalString = '';
            for (var i = 0; i < arguments.length; i++) {
                var str = arguments[i];
                if (typeof(str) == 'string') {
                    str = str.trim();
                    if (i == 0) finalString = str;
                    else finalString += str;
                }
                else if (typeof(str) == 'object') {
                    if (typeof(str.val) == 'string') {    
                        str.val = str.val.trim();
                        if (i == 0) finalString = str.val;
                        else finalString += str.val;
                    } else throw '!S';
                }
                else throw '!S';
            }
            return finalString;
        } catch (error) {
            if (error == '!S') {
                var e = ' [<strong>ERROR:</strong> Only words/sentences can be joined] ';
                output('e', e);
            }
        }
    }

    explode = function (s, splitr, num) {
        try {

            if (!splitr) splitr = '';

            if (typeof(s) != 'string' && typeof(s) != 'object')
                throw '!S';
            else {
                if (typeof(s) == 'string') {
                    sArr = s.split(splitr, num);
                    return sArr;
                }
                else if (typeof(s) == 'object') {
                    if (typeof(s.val) == 'string') {
                        sArr = s.val.split(splitr, num);
                        return sArr;
                    }
                    else throw '!S';
                }
            }

        } catch (error) {
            if (error == '!S') {
                var e = ' [<strong>ERROR:</strong> Only strings to be used with explode() ] ';
                output('e', e);
            }
        }
    }

    wordCount = function (s) {
        var cnt = 0;

        try {
            if (typeof(s) != 'string' && typeof(s) != 'object') 
                throw '!S';
            else {
                if (typeof(s) == 'string') {
                    var sArr = s.split(' ');
                    cnt = sArr.length;    
                }
                else if (typeof(s) == 'object') {
                    var sArr = s.val.split(' ');
                    cnt = sArr.length;
                }
                else throw '!S';
            }

            return cnt;
        } catch (error) {
            if (error == '!S') {
                var e = ' [<strong>ERROR:</strong> Not a sentence : wordCount() stopped] ';
                output('e', e);
            }
        }
    }

    toCaps = function (s) {

        try {

            if (typeof(s) != 'string' && typeof(s) != 'object')
                throw '!S';
            else {
                if (typeof(s) == 'string') {
                    return toUpperCase(s);
                }
                else if (typeof(s) == 'object') {
                    if (typeof(s.val) == 'string')
                        return toUpperCase(s.val);
                    else throw '!S';
                }
            }

        } catch (error) {
            if (error == '!S') {
                var e = ' [<strong>ERROR:</strong> Not a word/sentence : toCaps() stopped] ';
                output('e', e);
            }
        }
    }

    toSmall = function (s) {

        try {

            if (typeof(s) != 'string' && typeof(s) != 'object')
                throw '!S';
            else {
                if (typeof(s) == 'string') {
                    return toLowerCase(s);
                }
                else if (typeof(s) == 'object') {
                    if (typeof(s.val) == 'string')
                        return toLowerCase(s.val);
                    else throw '!S';
                }
            }

        } catch (error) {
            if (error == '!S') {
                var e = ' [<strong>ERROR:</strong> Not a word/sentence : toSmall() stopped] ';
                output('e', e);
            }
        }
    }



    





    /*****

    Check Functions

    *****/

    isNum = function (n) {

        var type = typeof (n);

        switch (type) {
            case 'number' :
                return true; break;

            case 'object' :
                if (typeof (n.val) == 'number') {
                    return true;
                }    
                else if (typeof (n.val) == 'string') {
                    if (!isNaN(n.val)) {
                        return true;
                    }
                    else return false;
                }
                else return false;
                break;

            case 'string' :
                return false; break;

            default :
                return false;
        }
    }

    isInt = function (n) {

        var type = typeof (n);

        switch (type) {
            case 'number' :
                if (n == parseInt(n))
                    return true; 
                break;

            case 'object' :
                if (typeof (n.val) == 'number') {
                    if (n.val == parseInt(n.val))
                        return true;
                }    
                else if (typeof (n.val) == 'string') {
                    if (n.val.match(/^[0-9]+$/)) {
                        if (n.val == parseInt(n.val))
                            return true;
                    }
                    else return false;
                }
                else return false;
                break;

            case 'string' :
                return false; break;

            default :
                return false;
        }
    }

    isWord = function (w) {

        var type = typeof (w);

        switch (type) {
            case 'string' :
                if (w.match(/^[a-zA-Z0-9]+$/))
                    return true;
                break;

            case 'object' :
                if (typeof(w.val) == 'string') {
                    if (w.val.match(/^[a-zA-Z0-9]+$/))
                        return true;
                    else return false;
                }
                else return false;
                break;

            default :
                return false;
        }
    }

    isSent = function (s) {

        var type = typeof (s);

        switch (type) {
            case 'string' :
                if (s.match(/^[a-zA-Z0-9 \.]+$/)) {
                    s = s.trim();
                    if (s.search(' ') > 0 || s.search('.') > 0)
                        return true;
                    else return false;
                } else return false;
                break;                 

            case 'object' :
                if (typeof(s.val) == 'string') {
                    if (s.val.match(/^[a-zA-Z0-9 \.]+$/)){
                        s.val = s.val.trim();
                        if (s.val.search(' ') > 0 || s.val.search('.') > 0)
                            return true;
                        else return false;
                    } else return false;
                }
                else return false;
                break;

            default :
                return false;
        }
    }



    





    /*****

    Media Functions

    *****/

    _media_ = {
        O_aRR : {
            A : [],
            V : []
        },

        AUD : function ( ) {

            for (var i = 0;; i++) {
                if (_media_.O_aRR.A[i] == undefined) {
                    _media_.O_aRR.A[i] = i;
                    this.ID = 'audio' + i;
                    this.fID = 'audiofile' + i;
                    break;
                }
            }

                
            doc = document.body;
            audio = document.createElement('audio');
            doc.appendChild(audio);
            audio.setAttribute('id', this.ID);
            audio.setAttribute('controls', true);

            aud_file = document.createElement('input');
            doc.appendChild(aud_file);
            aud_file.setAttribute('id', this.fID);
            $('input#' + this.fID).attr({
                class : 'aud_file',
                style : 'display:none;',
                type : 'file',
                accept : 'audio/*',
                onchange : 'FILE_PLAY(this)'
            });
            aud_file_trig = document.createElement('div');
            doc.appendChild(aud_file_trig);
            aud_file_trig.innerHTML = 'Select File';
            aud_file_trig.setAttribute('id', this.fID);
            $('div#' + this.fID).attr({
                class : 'aud_file',
                onclick : 'FILE_TRIG(this)'
            });

        },

        VID : function ( ) {

            for (var i = 0;; i++) {
                if (_media_.O_aRR.V[i] == undefined) {
                    _media_.O_aRR.V[i] = i;
                    this.ID = 'video' + i;
                    this.fID = 'videofile' + i;
                    break;
                }
            }

            doc = document.body;
            video = document.createElement('video');
            doc.appendChild(video);
            video.setAttribute('id', this.ID);
            video.setAttribute('controls', true);
            
            vid_file = document.createElement('input');
            doc.appendChild(vid_file);
            vid_file.setAttribute('id', this.fID);
            $('#'+this.fID).attr({
                class : 'vid_file',
                style : 'display:none;',
                type : 'file',
                accept : 'video/*',
                onchange : 'FILE_PLAY(this)'
            });
            vid_file_trig = document.createElement('div');
            doc.appendChild(vid_file_trig);
            vid_file_trig.innerHTML = 'Select File';
            vid_file_trig.setAttribute('id', this.fID);
            $('div#' + this.fID).attr({
                class : 'vid_file',
                onclick : 'FILE_TRIG(this)'
            });


        }

    };
    aud = _media_.AUD;
    vid = _media_.VID;




     




    /*****

    Media file 'select and play' Function

    *****/   

    FILE_PLAY = function (e) {
        var files = e.files;
        var file = URL.createObjectURL(files[0]);
        var id = $(e).attr('id');
        id = id.replace('file','');
        document.getElementById(id).src = file;
    }

   FILE_TRIG = function (e) {
    var c = $(e).attr('id');
    $('input#' + c).click();
   }


})()


    

    /*****

    "setvalue" function to assign get() value to object

    *****/

    function setvalue(id, o) {
        o.val =  $("#"+id).val();
    }