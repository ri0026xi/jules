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

    // Obsolete skill card selection removed.
    // The event listeners will be added after dynamic generation.

    const skillsData = [
        { name: "Python", icon: "fab fa-python", progress: 90, description: "サーバーサイド開発、データ分析、機械学習など幅広く活用しています。" },
        { name: "C#", icon: "fas fa-code", progress: 80, description: "WindowsデスクトップアプリやUnityでのゲーム開発経験があります。" },
        { name: "AWS", icon: "fab fa-aws", progress: 75, description: "EC2, S3, Lambda, RDSなど基本的なサービスを利用したインフラ構築が可能です。" },
        { name: "IEC 61131-3", icon: "fas fa-cogs", progress: 70, description: "PLCプログラミングにおける国際標準言語での制御ロジック開発経験があります。" }
    ];

    const skillCardsContainer = document.querySelector('.skill-cards-container');

    function generateSkillCards(skills) {
        skills.forEach(skill => {
            const card = document.createElement('div');
            card.classList.add('skill-card');
            card.setAttribute('data-progress', skill.progress);
            card.setAttribute('data-aos', 'fade-up');
            // data-aos-delay can be added here if staggered animation is desired for dynamic cards

            const skillInfo = document.createElement('div');
            skillInfo.classList.add('skill-info');

            const icon = document.createElement('i');
            icon.className = skill.icon; // Assign multiple classes directly

            const span = document.createElement('span');
            span.textContent = skill.name;

            skillInfo.appendChild(icon);
            skillInfo.appendChild(span);

            const description = document.createElement('p');
            description.classList.add('skill-description');
            description.textContent = skill.description;

            const progressBarContainer = document.createElement('div');
            progressBarContainer.classList.add('progress-bar-container');

            const progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');

            progressBarContainer.appendChild(progressBar);

            card.appendChild(skillInfo);
            card.appendChild(description); // Add description
            card.appendChild(progressBarContainer);

            skillCardsContainer.appendChild(card);
        });
    }

    if (skillCardsContainer) {
        generateSkillCards(skillsData);
    }

    // Re-select skillCards after they are generated
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        const progressBar = card.querySelector('.progress-bar');
        const progress = card.getAttribute('data-progress');

        if(progressBar) progressBar.style.width = '0%'; // Initial state

        card.addEventListener('mouseenter', () => {
            if(progressBar) {
                progressBar.style.width = progress + '%';
            }
        });

        card.addEventListener('mouseleave', () => {
            // Keep progress visible or reset to 0%
            // progressBar.style.width = '0%';
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
