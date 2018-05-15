setInterval(function(){ var req = new XMLHttpRequest();
    req.open("GET", "http://51.15.59.130:46260/fetch", true);
    req.send();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json_obj = JSON.parse(this.responseText);
            var msg = json_obj.responses[0].message;
            var new_msg = document.createElement("div");
            var flexGrower = document.createElement("div");
            var time = document.createElement("div");
            var pro_pic = document.createElement("img");
            var msg_span = document.createElement("div");
            msg_span.innerHTML = msg;
            time.setAttribute("class", "time_shower");
            var d = new Date();
            time.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            msg_span.setAttribute("class", "my_text_box")
            flexGrower.setAttribute("class", "flex_grower");
            pro_pic.setAttribute("class", "my_pro");
            pro_pic.setAttribute("src", poshti_pic);
            new_msg.setAttribute("class", "my_msg");
            new_msg.appendChild(flexGrower);
            new_msg.appendChild(time);
            new_msg.appendChild(msg_span);
            new_msg.appendChild(pro_pic);
            document.getElementById("chat_in").appendChild(new_msg);
        }
    }; }, 5000);

function send_msg() {
    var msg = document.getElementById("write_chat").value;
    if (msg == "")
        return;
    var new_msg = document.createElement("div");
    var flexGrower = document.createElement("div");
    var pro_pic = document.createElement("img");
    var msg_span = document.createElement("div");
    var time = document.createElement("div");
    msg_span.innerHTML = msg;
    time.setAttribute("class", "time_shower");
    var d = new Date();
    time.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    msg_span.setAttribute("class", "my_text_box")
    flexGrower.setAttribute("class", "flex_grower");
    pro_pic.setAttribute("class", "my_pro");
    pro_pic.setAttribute("src", "./pics/my_pro.jpg")
    new_msg.setAttribute("class", "my_msg");
    new_msg.appendChild(pro_pic);
    new_msg.appendChild(msg_span);
    new_msg.appendChild(time);
    new_msg.appendChild(flexGrower);
    document.getElementById("chat_in").appendChild(new_msg);
    document.getElementById("write_chat").value = "";
}
function trans() {
    document.getElementById("poshtibani_before").setAttribute("style", "display: none;")
    document.getElementById("poshtibani_after").setAttribute("style", "display: block;")
}

function chat_close() {
    document.getElementById("poshtibani_before").setAttribute("style", "display: block;")
    document.getElementById("poshtibani_after").setAttribute("style", "display: none;")
}
function loaded(){
    var first_req = new XMLHttpRequest();
    first_req.open("GET", "http://51.15.59.130:46260/start");
    first_req.send();
    first_req.onreadystatechange = function () {
        var a = 0;
    };
    var supporterRequest = new XMLHttpRequest();
    supporterRequest.open("GET", "http://51.15.59.130:46260/support");
    supporterRequest.send();
    supporterRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("poshti_name").innerHTML = myObj.support.first + " " + myObj.support.last;
            document.getElementById("poshti_last").innerHTML = "پشتیبانی فنی";
            document.getElementById("posthiban_ax").src = myObj.support.picture;
            poshti_pic = myObj.support.picture;
        }
    };
}