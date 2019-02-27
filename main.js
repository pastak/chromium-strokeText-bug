(() => {
  'use strict'

  const onChangeFontsizeSelect = () => {
    const fontsize = document.querySelector('#fontsizeSelect').value + 'px';
    const lineWidth = +document.querySelector('#lineWidthSelect').value;
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = `bold ${fontsize} sans-serif`;
    context.textBaseline = 'top';
    context.lineWidth = lineWidth;

    const text = 'aあ桜ア亜Д';

    context.strokeStyle = 'rgb(0, 255, 0)';
    context.strokeText(text, 50, 100);

    document.querySelector('#fontsize').textContent = fontsize;
    document.querySelector('#lineWidth').textContent = lineWidth;
  };
  ['#lineWidthSelect', '#fontsizeSelect'].forEach(id => document.querySelector(id).addEventListener('input', onChangeFontsizeSelect));
  onChangeFontsizeSelect();
})()
