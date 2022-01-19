//page loading
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

var boutonElt = document.getElementById('btn_body');
boutonElt.addEventListener('click', boutonClicked);
}

function boutonClicked() {
    alert('btn is clicked!');
}