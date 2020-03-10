let qrCanvas = document.getElementById('qr-canvas');
let qrLinkEl = document.getElementById('qr-link-input');

let state = {
  qrLink: '',
  textLink: ''
};

function render() {
  let qrOpts = {
    'color': { 'light': '#FFF0' },
    'width': 600
  };
  QRCode.toCanvas(qrCanvas, state.qrLink, qrOpts, (error) => {
    if (error) {
      console.error(error)
      qrCanvas.getContext('2d').clearRect(0, 0, qrCanvas.width, qrCanvas.height);
    }
    console.log('success!');
  })
}

qrLinkEl.addEventListener('input', (e) => {
  state.qrLink = qrLinkEl.value;
  render();
});