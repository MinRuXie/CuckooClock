let hour_hand = $('.clock .clock-face .clock-hour-hand');
let minute_hand = $('.clock .clock-face .clock-minute-hand');
let second_hand = $('.clock .clock-face .clock-second-hand');

function hand_rotate(){
    //現在時間
    let today = new Date();
    
    // 初始化 (0 deg 是 肉眼的 90 deg, 所以算出來的度數要減掉 90 deg)
    let second_deg = today.getSeconds()*6 - 90; // 360deg/60=6deg (每秒鐘旋轉 6 deg)
    let minute_deg = today.getMinutes()*6 - 90; // 360deg/60=6deg (每分鐘旋轉 6 deg)
    let hour_deg = ((today.getHours()%12)*30 + today.getMinutes()*0.5) - 90; // 360 deg/12 = 30 deg (整點與整點間) , 30 deg/60 min = 0.5 deg (每分鐘時針只能旋轉 0.5 度)
    
    second_hand.css('transform', 'rotate(' + second_deg + 'deg)');
    minute_hand.css('transform', 'rotate(' + minute_deg + 'deg)');
    hour_hand.css('transform', 'rotate(' + hour_deg + 'deg)');
}

let second_timer = setInterval("hand_rotate()", 1000); //1000ms=1s