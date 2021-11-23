function xhReq(rq){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",rq, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status==200){
            console.log("ok");
        }
    }
}

function sendRequestID(id){
    const state=id.checked ? "on":"off";
    let req ="/dev/mod/"+id.getAttribute('id')+"/?state="+state;
    xhReq(req);
}
function changeColor(id){
    let req ="/dev/mod/"+id.getAttribute('id')+"/?color="+id.value.substr(1);
    console.log(req);
    xhReq(req);
}
