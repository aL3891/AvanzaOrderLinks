var urlParams = new URLSearchParams(window.location.search);

setTimeout(function () {
    var e = window.document.getElementById("buyVolume");
    if (e === null) {
        e = window.document.getElementById("sellVolume");
    }

    var volume = parseInt(urlParams.get('volume'));
    if(!isNaN(volume)){
        e.value = volume;
        e.dispatchEvent(new Event('input', { 'bubbles': true }));
        e.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    }
    

    e = window.document.getElementById("buyPrice");
    if (e === null) {
        e = window.document.getElementById("sellPrice");
    }

    var price = parseFloat(urlParams.get('price'));
    if(!isNaN(price)){
        e.value = price;
        e.dispatchEvent(new Event('input', { 'bubbles': true }));
        e.dispatchEvent(new Event('keyup', { 'bubbles': true }));
    }
}, 1000);
