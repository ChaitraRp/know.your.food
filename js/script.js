var divState = {}; // to store status of object
function showhide(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);

        divState[id] = (divState[id]) ? false : true; //initialize and invert the status

        //close other open div
        for (var div in divState){
            if (divState[div] && div != id){ // ignore closed ones and the current
                document.getElementById(div).style.display = 'none'; // hide
                divState[div] = false; // reset status
            }
        }

        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
}
