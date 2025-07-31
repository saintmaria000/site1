
// --- グローバル変数 ---
const fileName = "magiceffect";

function preload() {
  sound = loadSound('music/magiceffect.mp3'); // 音楽ファイルをここに
}

// --- 初期化 ---
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
 //setupUI();
  setupAudio();
  initVisual4();

  // ファイル名を表示
  const nameDisplay = document.getElementById("file-name-display");
  if (nameDisplay) {
    nameDisplay.textContent = `${fileName}`;
  }

  noFill();
  stroke(255);
  strokeWeight(2);
}

// --- 描画ループ ---
function draw() {
  updateAudio(); // 音の更新（fft.analyzeなど）を audio.js 側で実行
  //background(0);
  let spectrum = getSpectrum();
  let bass = getBass();
  drawVisual4(); 
  
  // // デバッグ情報表示
  // if (isPlaying()) {
  //   const waveform = getWaveform();
  //   const bass = getBass();
  //   const mid = getMid();
  //   const hi = getHi();
  //   const volume = getVolumeLevel();

  //   noStroke();
  //   fill(120, 100, 100); rect(50, height - bass, 30, bass);
  //   fill(40, 100, 100); rect(100, height - mid, 30, mid);
  //   fill(340, 100, 100); rect(150, height - hi, 30, hi);

  //   updateDebugInfo({
  //     waveformLength: waveform.length,
  //     isPlaying: true,
  //     volume: volume.toFixed(2),
  //     bass: bass.toFixed(1),
  //     mid: mid.toFixed(1),
  //     hi: hi.toFixed(1)
  //   });
  // }
  
  updateTimeDisplay();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
