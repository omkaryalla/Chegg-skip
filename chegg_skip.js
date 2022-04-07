setInterval(function fn(){
    var bottom_container = document.getElementsByClassName('sc-jftFmt kZGTLY');
    var answer_text = document.getElementsByClassName('sc-1eq90u-1 cTFvZJ');
    var answer_button = document.getElementsByClassName('sc-1eq90u-3 sc-1eq90u-4 cggaqZ ljAeAm');
    var timer_minutes = document.getElementsByClassName('sc-ekrjqK iUkJrt');

    if(timer_minutes[1].innerHTML == '00' && answer_text[0].innerHTML == 'Answer'){
        answer_button[0].click();
    }

    if(!document.body.contains(document.getElementById('skip')) && answer_text[0].innerHTML == 'Answer'){
        var skip_btn = document.getElementsByClassName('sc-1eq90u-5');
        var div = document.createElement('div');
        var btn = document.createElement('button');
        var text = document.createTextNode('Skip+');

        btn.appendChild(text);
        div.appendChild(btn);
        bottom_container[0].appendChild(div);

        div.id = 'skip'
        div.style.justifyContent = 'center';
        div.style.border = '16px solid white';
        div.style.position = 'absolute';
        div.style.right = '1rem';
        div.style.height = '43.2px';
        btn.style.paddingRight = '24px';
        btn.style.paddingLeft = '24px';
        btn.style.paddingTop = '8px';
        btn.style.paddingBottom = '8px';
        btn.style.border = '2px solid rgb(0, 121, 158)';
        btn.style.borderRadius = '2rem';
        btn.style.fontWeight = '700';
        btn.style.fontSize = '1.25rem';
        btn.style.background = 'none';
        btn.style.color = 'rgb(0, 121, 158)';
        btn.style.cursor = 'pointer';

        btn.onclick = function(){
            console.log('hell');
            skip_btn[0].click();
            setTimeout(function(){
                document.getElementsByClassName('q4pgtx-1')[3].click();
                document.getElementsByClassName('iRbxZC')[0].click();
            },100);
        };
    }

    else if(document.body.contains(document.getElementById('skip')) && answer_text[0].innerHTML == 'Submit'){
        bottom_container[0].removeChild(bottom_container[0].lastChild);
    }
},1000);