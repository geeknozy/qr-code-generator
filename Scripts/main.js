const generateBtn = document.getElementById('generate-btn');
const textInput = document.getElementById('text-input');
const qrContainer = document.getElementById('qrcode');
const downloadBtn = document.getElementById('download-btn');

function clearQRCode() {
  qrContainer.innerHTML = '';
  downloadBtn.style.display = 'none'; // Hide download button initially
}

generateBtn.addEventListener('click', () => {
  const inputText = textInput.value.trim();

  if (!inputText) {
    alert("Please enter some text or a URL.");
    return;
  }

  clearQRCode();

  const qrCode = new QRCode(qrContainer, {
    text: inputText,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Delay needed because QRCode renders asynchronously
  setTimeout(() => {
    const qrImg = qrContainer.querySelector('img');
    if (qrImg) {
      downloadBtn.href = qrImg.src;
      downloadBtn.style.display = 'inline-block';
    }
  }, 300);
});
