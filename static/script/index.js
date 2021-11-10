function sendRequestID(id){
    let xhttp = new XMLHttpRequest();
    const state=id.checked ? "on":"off";
    var req ="/dev/mod/:"+id.getAttribute('id')+"/?state="+state;
    xhttp.open("GET",req, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status==200){
            console.log("GET: "+ req);
        }
    }
}
//sendRequestID("/dash/smart_home/conf/core.php?id="+id+"&sleep_mode=off&"+addon,id);