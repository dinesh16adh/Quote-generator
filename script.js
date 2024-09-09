document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
  
  let fontSize = 1.5;
  
  document.getElementById('increase-font').addEventListener('click', () => {
    fontSize += 0.1;
    document.getElementById('quote-text').style.fontSize = fontSize + 'em';
  });
  
  document.getElementById('decrease-font').addEventListener('click', () => {
    fontSize = Math.max(1, fontSize - 0.1);
    document.getElementById('quote-text').style.fontSize = fontSize + 'em';
  });
  