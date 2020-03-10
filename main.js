let canvas = document.getElementById('qr-canvas');
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
  QRCode.toCanvas(canvas, state.qrLink, qrOpts, (error) => {
    if (error) console.error(error)
    console.log('success!');
  })
}

qrLinkEl.addEventListener('input', (e) => {
  state.qrLink = qrLinkEl.value;
  render();
});