particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, // パーティクルの数
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // パーティクルの色
    },
    "shape": {
      "type": "circle", // パーティクルの形状 (circle, edge, triangle, polygon, star, image)
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3, // パーティクルのサイズ
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // パーティクルの移動速度
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // ホバー時のインタラクション (grab, bubble, repulse)
      },
      "onclick": {
        "enable": true,
        "mode": "push" // クリック時のインタラクション (push, remove)
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Typed.jsの初期化
document.addEventListener('DOMContentLoaded', function(){
    var options = {
        strings: ["デジタルソリューションを構築するエンジニア", "クラウド技術とソフトウェア開発が得意です。", "新しい技術に挑戦し続けます。"], // 表示させたい文字列の配列
        typeSpeed: 50, // タイピング速度 (ミリ秒)
        backSpeed: 25, // バックスペース速度 (ミリ秒)
        backDelay: 1500, // タイピング完了後にバックスペースするまでの遅延 (ミリ秒)
        startDelay: 500, // アニメーション開始までの遅延 (ミリ秒)
        loop: true, // ループ再生
        showCursor: true, // カーソル表示
        cursorChar: '|', // カーソルの文字
        contentType: 'html', // HTMLタグを文字列に含めるか (例: 'text' or 'html')
    };

    var typed = new Typed("#typed-intro", options);

    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        const progressBar = card.querySelector('.progress-bar');
        const progress = card.getAttribute('data-progress');

        // 初期状態ではプログレスバーの幅を0に (CSSでも設定可能だが念のため)
        if(progressBar) progressBar.style.width = '0%';

        card.addEventListener('mouseenter', () => {
            if(progressBar) {
                progressBar.style.width = progress + '%';
            }
        });

        card.addEventListener('mouseleave', () => {
            if(progressBar) {
                // ホバーが外れたら0に戻すか、そのままにするか選択
                // progressBar.style.width = '0%';
            }
        });
    });

    // AOS.jsの初期化
    AOS.init({
        duration: 800, // アニメーションの継続時間 (ミリ秒)
        easing: 'ease-in-out', // アニメーションのイージング
        once: true, // アニメーションを一度だけ実行する
        mirror: false, // 要素が画面外に出たときにアニメーションをリセットするか (once:true の場合は影響なし)
        anchorPlacement: 'top-bottom', // アニメーション開始のトリガー位置
    });
});
