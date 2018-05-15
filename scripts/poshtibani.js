setInterval(function(){ var fetchRequest = new XMLHttpRequest();
    fetchRequest.open("GET", "http://51.15.59.130:46260/fetch", true);
    fetchRequest.send();
    fetchRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var myObj = JSON.parse(this.responseText);
            var message = myObj.responses[0].message;



            var new_msg = document.createElement("div");
            var flexGrower = document.createElement("div");
            var pro_pic = document.createElement("img");
            var msg_span = document.createElement("span");



            msg_span.innerHTML = message;
            flexGrower.setAttribute("class", "flex_grower");
            pro_pic.setAttribute("class", "my_pro");
            pro_pic.setAttribute("src", poshti_pic);
            new_msg.setAttribute("class", "my_msg");
            new_msg.appendChild(pro_pic);
            new_msg.appendChild(msg_span);
            new_msg.appendChild(flexGrower);
            document.getElementById("chat_in").appendChild(new_msg);



        }
    }; }, 3000);

function send_msg() {
    var msg = document.getElementById("write_chat").value;
    if (msg == "")
        return;

    var new_msg = document.createElement("div");
    var flexGrower = document.createElement("div");
    var pro_pic = document.createElement("img");
    var msg_span = document.createElement("span");
    msg_span.innerHTML = msg;
    flexGrower.setAttribute("class", "flex_grower");
    pro_pic.setAttribute("class", "my_pro");
    pro_pic.setAttribute("src", "./pics/mail_icon copy.png")
    new_msg.setAttribute("class", "my_msg");
    new_msg.appendChild(pro_pic);
    new_msg.appendChild(msg_span);
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
            document.getElementById("poshti_name").innerHTML = myObj.support.first;
            document.getElementById("poshti_last").innerHTML = myObj.support.last;
            document.getElementById("posthiban_ax").src = myObj.support.picture;
            poshti_pic = myObj.support.picture;
        }
    };
}