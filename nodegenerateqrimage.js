const QRCode = require('qrcode');

const generateQR = async text => {
    try {
        await QRCode.toFile('./pjkoehler.qr-code.png', text);
    }   catch(err) {
        console.log(err);
    }
}

generateQR("http://www.pjkoehler.com");