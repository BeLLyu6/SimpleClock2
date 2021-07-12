// function setTimer() {
//     let min = 25;
//     let sec = 00;

//     let time = `${min}:${sec}`;
//     document.querySelector(".pomodoro-timer").innerText = time;
// };

    // var count = 180;　//カウントダウンの数字を格納する変数
    // var min = 0;　//残り時間「分」を格納する変数
    // var sec = 0;　//残り時間「秒」を格納する変数
    // var stp = null; //setInerval・clearInervalを制御する変数
    // var i = 0;　//ボタンの2回クリック等禁止イベントを制御する変数
    
    // //1000ミリ秒毎にcont_down関数を呼び出す
    // stp = setInterval(count_down,1000);

    //GitHubテスト用にコメント追加してみた
 
    //カウンドダウン表示
   function min_count_down(){

        var min = document.getElementById("pomodoro-min").innerText;

        min = min - 1;
        document.querySelector(".pomodoro-min").innerText = min;

        if (min == 0) {
            rest_time_mode()
        }
    }

    setInterval(min_count_down, 59000);

    function sec_count_down(){

        var sec = document.getElementById("pomodoro-sec").innerText;  

                if (sec == 00) {
                    sec = 60;
                }

                    if (sec.length == 1 
                        || sec == 10 
                        || sec == 9
                        || sec == 8
                        || sec == 7
                        || sec == 6
                        || sec == 5
                        || sec == 4
                        || sec == 3
                        || sec == 2
                        || sec == 1
                        || sec == 0) {
                        sec = sec - 1;
                        sec =  "0" + sec;
                
                    } else {
                        sec = sec - 1;
                    }
    
         document.querySelector(".pomodoro-sec").innerText = sec;      
    }
    
    setInterval(sec_count_down, 1000);

    function rest_time_mode () {

        claerInterval(min_count_down);
        claerInterval(sec_count_down);

        var restmin = document.getElementById("pomodoro-min").innerText;
        restmin = 4;
        var restsec = document.getElementById("pomodoro-sec").innerText;  
        restsev = 59;

        restmin = restmin - 1;
        document.querySelector(".pomodoro-min").innerText = restmin;


            if (restsec == 00) {
                restsec = 60;
            }

                if (restsec.length == 1 
                    || restsec == 10 
                    || restsec == 9
                    || restsec == 8
                    || restsec == 7
                    || restsec == 6
                    || restsec == 5
                    || restsec == 4
                    || restsec == 3
                    || restsec == 2
                    || restsec == 1
                    || restsec == 0) {
                    restsec = restsec - 1;
                    restsec =  "0" + restsec;
            
                } else {
                    restsec = restsec - 1;
                }

            document.querySelector(".pomodoro-sec").innerText = restsec; 



    }
