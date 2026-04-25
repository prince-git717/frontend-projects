
const inputText  = document.getElementById('inputText');
const reverseBtn = document.getElementById('reverseBtn');
const result     = document.getElementById('result');
const outputBox  = document.getElementById('outputBox');
const charCount  = document.getElementById('charCount');
const statusText = document.getElementById('statusText');
const statusDot  = document.querySelector('.status-dot');
const statusTime = document.getElementById('statusTime');
const copyBtn    = document.getElementById('copyBtn');
const copyText   = document.getElementById('copyText');
const latency    = document.getElementById('latency');

function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#00f5ff', '#ff2d78', '#bf5fff', '#39ff14'];
  const count = window.innerWidth < 480 ? 15 : 30;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.top  = `${Math.random() * 100}%`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width  = `${Math.random() * 3 + 1}px`;
    p.style.height = p.style.width;
    p.style.animationDuration  = `${Math.random() * 15 + 8}s`;
    p.style.animationDelay     = `${Math.random() * 10}s`;
    p.style.boxShadow = `0 0 6px ${p.style.background}`;
    container.appendChild(p);
  }
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  statusTime.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

inputText.addEventListener('input', () => {
  const len = inputText.value.length;
  charCount.textContent = len;

  if (len === 0) {
    setStatus('AWAITING_INPUT', 'active');
  } else {
    setStatus(`INPUT_LENGTH: ${len}`, 'active');
  }
});

function setStatus(msg, type = 'active') {
  statusText.textContent = msg;
  statusDot.className = `status-dot ${type}`;
}

function executeReverse() {
  const text = inputText.value;

  if (!text.trim()) {
    setStatus('ERROR: NO_INPUT_DETECTED', 'error');
    inputText.style.borderColor = 'var(--neon-pink)';
    inputText.style.boxShadow   = '0 0 15px rgba(255,45,120,0.2), inset 0 0 10px rgba(255,45,120,0.05)';
    setTimeout(() => {
      inputText.style.borderColor = '';
      inputText.style.boxShadow   = '';
      setStatus('SYSTEM_READY', 'active');
    }, 1500);
    return;
  }

  const startTime = performance.now();
  reverseBtn.classList.add('executing');
  setStatus('PROCESSING...', 'active');

  setTimeout(() => {
    const reversed = text.split('').reverse().join('');
    const ms = (performance.now() - startTime).toFixed(1);

    result.className = 'result-text';
    result.textContent = reversed;

    void result.offsetWidth; 
    result.classList.add('reveal');

    outputBox.classList.add('has-result');
    latency.textContent = `${ms}ms`;

    reverseBtn.classList.remove('executing');
    setStatus('REVERSE_COMPLETE ✓', 'active');

    outputBox.style.borderColor = 'rgba(57,255,20,0.8)';
    setTimeout(() => {
      outputBox.style.borderColor = '';
    }, 600);

  }, 180);
}

reverseBtn.addEventListener('click', executeReverse);

inputText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') executeReverse();
});

copyBtn.addEventListener('click', () => {
  const text = result.textContent;
  if (!text || text === '_' || !outputBox.classList.contains('has-result')) return;

  navigator.clipboard.writeText(text).then(() => {
    copyBtn.classList.add('copied');
    copyText.textContent = '✓ COPIED';
    setStatus('OUTPUT_COPIED_TO_CLIPBOARD', 'active');

    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyText.textContent = '⎘ COPY';
    }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity  = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    copyBtn.classList.add('copied');
    copyText.textContent = '✓ COPIED';
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyText.textContent = '⎘ COPY';
    }, 2000);
  });
});

createParticles();
setStatus('SYSTEM_READY', 'active');

result.classList.add('empty');
inputText.addEventListener('input', () => {
  if (inputText.value.length === 0 && !outputBox.classList.contains('has-result')) {
    result.classList.add('empty');
  }
});