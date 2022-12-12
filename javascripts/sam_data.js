var button1 = document.getElementById('button1');
    var qrbtn = document.getElementsByClassName('btn').id;
    var container = document.getElementById('container');
    var display = document.getElementById('display');
    var display1 = document.getElementById('display1');
    var productname = document.querySelectorAll('tr');

    button1.addEventListener("click", () => {
        html2pdf().from(container).save(title)
    })

    function generateQRCode(id) {
        var i1 = id.getAttribute('id')
        console.log(window.location.href)
        new QRCode(document.getElementById("display"), window.location.href + "par?id=" + i1);
        html2pdf().from(display).save("QRcode.pdf")
        setTimeout(()=>{
            document.location.reload()
        },1000)

    }

    function sethref(id) {
        var getid = id.getAttribute('id')
        console.log(getid)
        var dev_info_display = document.getElementById('dev_info'+getid);
        var dev_info = document.getElementsByClassName('dev_info')
        var new_href = '/devices/par?id='+getid
        console.log("Take it now",dev_info_display)
        id.setAttribute('href', new_href)
        new QRCode(document.getElementById("display"), new_href);
        console.log("Set href")
        console.log(id.getAttribute('id'))
        dev_info_display.style.display = 'block'
    }

    console.log(window.location.href)