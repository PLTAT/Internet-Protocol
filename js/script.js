
/*
JavaScript
function () { }
*/

// script.js

/*
Go
*/


// the html load done
window.onload = function () {
    // add a 'keydown' type "listener event" for 'ServerInput' | 'scan' is script name
    document.getElementById('scan_input').addEventListener('keydown', function (scan) {
        // 'Enter' key or 'NumpadEnter' key
        if (scan.key === 'Enter' || scan.key === 'NumpadEnter') {
            // ban Default do
            scan.preventDefault();
            // open window | '_blank' is new tab | '//bgp.he.net/ip/' is link "+ document.getElementById('scan_input').value" is add 'scan_input' to the end
            // | // is unsure web link | / is file | some web is 'www.webdnsname' not just 'webdnsname' | some web did't have http jump to https so use // is good
            window.open('//bgp.he.net/ip/' + document.getElementById('scan_input').value, '_blank');
        }
    });
}


/*
End
*/
