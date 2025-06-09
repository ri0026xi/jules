particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, // パーティクルの数を増やす
      "density": {
        "enable": true,
        "value_area": 700 //密度を少し上げる
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
      "opacity": 0.6, // 線の透明度を上げる
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
    gsap.registerPlugin(ScrollTrigger); // GSAP ScrollTriggerプラグインを登録

    let skillCards; // Declare skillCards here

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
        { id: "python", name: "Python", icon: "fab fa-python", progress: 90, description: "サーバーサイド開発、データ分析、機械学習など幅広く活用しています。", relatedSkills: ["aws", "data-analysis"], details: "Pythonは、その汎用性と強力なライブラリ群により、ウェブ開発からデータサイエンス、人工知能まで多岐にわたる分野で活躍します。特にDjangoやFlaskといったフレームワークを用いたウェブアプリケーション開発、NumPyやPandasを利用したデータ分析、Scikit-learnやTensorFlowによる機械学習モデルの実装経験が豊富です。" },
        { id: "csharp", name: "C#", icon: "fas fa-code", progress: 80, description: "WindowsデスクトップアプリやUnityでのゲーム開発経験があります。", relatedSkills: ["unity", "dotnet"], details: "C#は、Microsoftによって開発された強力なオブジェクト指向プログラミング言語です。.NETフレームワークと共に、エンタープライズレベルのアプリケーション開発、Windowsデスクトップアプリケーション、そしてUnityエンジンを用いたクロスプラットフォームのゲーム開発に広く使用されています。非同期処理やLINQなどのモダンな機能も習熟しています。" },
        { id: "aws", name: "AWS", icon: "fab fa-aws", progress: 75, description: "EC2, S3, Lambda, RDSなど基本的なサービスを利用したインフラ構築が可能です。", relatedSkills: ["python", "cloud"], details: "Amazon Web Services (AWS)は、クラウドコンピューティングプラットフォームとして、スケーラブルで信頼性の高いインフラストラクチャを提供します。EC2による仮想サーバー管理、S3でのオブジェクトストレージ、Lambdaを用いたサーバーレスコンピューティング、RDSによるリレーショナルデータベース管理など、主要なサービスを活用した設計・構築・運用経験があります。" },
        { id: "iec61131-3", name: "IEC 61131-3", icon: "fas fa-cogs", progress: 70, description: "PLCプログラミングにおける国際標準言語での制御ロジック開発経験があります。", relatedSkills: ["plc", "automation"], details: "IEC 61131-3は、プログラマブルロジックコントローラ（PLC）のプログラミング言語に関する国際標準です。ラダーダイアグラム（LD）、ファンクションブロックダイアグラム（FBD）、ストラクチャードテキスト（ST）など、複数の言語での開発経験があり、産業オートメーションシステムにおける効率的で信頼性の高い制御ロジックの設計・実装が可能です。" },
        { id: "data-analysis", name: "データ分析", icon: "fas fa-chart-line", progress: 85, description: "統計的手法や機械学習を用いたデータからの知見抽出。", relatedSkills: ["python", "statistics"], details: "データ分析は、収集されたデータから有益な情報を抽出し、意思決定を支援するプロセスです。統計学的な手法、機械学習アルゴリズム（回帰、分類、クラスタリング等）を駆使し、データの可視化を通じて洞察を深めます。PythonのPandas, NumPy, Matplotlib, Seabornなどのライブラリを主に用います。" },
        { id: "unity", name: "Unity", icon: "fab fa-unity", progress: 70, description: "C#を用いたインタラクティブな3D/2Dアプリケーション開発。", relatedSkills: ["csharp", "gamedev"], details: "Unityは、クロスプラットフォーム対応の強力なゲームエンジンであり、3Dおよび2Dのインタラクティブコンテンツ開発に広く用いられています。C#スクリプティングによるロジック実装、アセット管理、UIデザイン、物理演算など、ゲーム開発に必要な一連のスキルを有しています。" },
        { id: "cloud", name: "クラウドコンピューティング", icon: "fas fa-cloud", progress: 80, description: "AWSを中心としたクラウドインフラの設計・構築・運用。", relatedSkills: ["aws", "devops"], details: "クラウドコンピューティングは、オンデマンドで利用可能なITリソースを提供し、ビジネスの俊敏性とスケーラビリティを高めます。主にAWSを活用し、サーバー、ストレージ、データベース、ネットワーキングなどのサービスを組み合わせ、セキュアで効率的なクラウドネイティブアプリケーションの基盤を構築します。" },
        { id: "plc", name: "PLCプログラミング", icon: "fas fa-industry", progress: 65, description: "産業用コントローラのロジック設計と実装。", relatedSkills: ["iec61131-3", "automation"], details: "PLC（プログラマブルロジックコントローラ）は、工場やプラントなどの産業プロセスを自動制御するための堅牢なコンピュータです。IEC 61131-3標準言語に基づいたプログラミングを行い、シーケンス制御、モーションコントロール、プロセス制御などの自動化システムを構築します。" },
        { id: "dotnet", name: ".NET開発", icon: "fas fa-laptop-code", progress: 78, description: "C#を中心とした.NETプラットフォームでのアプリ開発。", relatedSkills: ["csharp", "webdev"], details: ".NETは、Microsoftが提供する開発プラットフォームであり、ウェブアプリケーション、デスクトップアプリケーション、モバイルアプリケーションなど、多様なアプリケーションを構築できます。C#を主要言語とし、ASP.NET Coreを用いたウェブAPI開発や、WPFを用いたデスクトップアプリ開発経験があります。" },
        { id: "statistics", name: "統計学", icon: "fas fa-calculator", progress: 70, description: "データ分析の基礎となる統計的知識と手法の理解。", relatedSkills: ["data-analysis"], details: "統計学は、データの収集、分析、解釈、表示の方法論を提供する学問です。記述統計、推測統計の基本的な概念を理解し、仮説検定、回帰分析などの手法をデータ分析プロジェクトに応用します。" },
        { id: "gamedev", name: "ゲーム開発", icon: "fas fa-gamepad", progress: 68, description: "Unityを用いたゲームメカニクスとロジックの実装。", relatedSkills: ["unity", "csharp"], details: "ゲーム開発は、企画、デザイン、プログラミング、テストといった多岐にわたる工程を経て、インタラクティブなエンターテイメントを創り出す作業です。UnityとC#を主に使用し、キャラクター制御、AI、UI/UXデザイン、物理演算などのゲームメカニクスの実装を行います。" },
        { id: "devops", name: "DevOps", icon: "fas fa-infinity", progress: 72, description: "CI/CDパイプラインの構築と運用、自動化の推進。", relatedSkills: ["cloud", "automation"], details: "DevOpsは、開発（Development）と運用（Operations）を組み合わせた一連のプラクティスであり、アプリケーションのライフサイクル全体を通じて、より迅速かつ信頼性の高いソフトウェアデリバリーを目指します。CI/CDツールの活用、IaC（Infrastructure as Code）、監視、ロギング戦略の策定と実装により、開発プロセスの自動化と効率化を推進します。" },
        { id: "webdev", name: "ウェブ開発", icon: "fas fa-code", progress: 88, description: "フロントエンドからバックエンドまでのフルスタック開発。", relatedSkills: ["python", "dotnet", "javascript"], details: "ウェブ開発は、インターネット上で動作するアプリケーションやウェブサイトを構築するプロセスです。HTML, CSS, JavaScriptを用いたフロントエンド開発、Python (Django/Flask) やC# (ASP.NET Core) を用いたバックエンド開発の両方に精通しており、データベース設計からAPI開発、UI/UXの実装まで一貫して担当できます。" },
        { id: "javascript", name: "JavaScript", icon: "fab fa-js-square", progress: 85, description: "インタラクティブなフロントエンド開発とNode.js。", relatedSkills: ["webdev", "react"], details: "JavaScriptは、ウェブブラウザ上で動作し、ウェブページにインタラクティブ性をもたらす主要なプログラミング言語です。モダンなフレームワーク（Reactなど）を用いたSPA（シングルページアプリケーション）開発や、Node.jsを用いたサーバーサイド開発も行います。非同期処理、DOM操作、イベント処理などを得意とします。" },
        { id: "react", name: "React", icon: "fab fa-react", progress: 80, description: "コンポーネントベースのUIライブラリを用いた開発。", relatedSkills: ["javascript", "webdev"], details: "Reactは、Facebookによって開発された、ユーザーインターフェースを構築するためのJavaScriptライブラリです。コンポーネントベースのアーキテクチャにより、再利用可能で保守性の高いUI部品を作成できます。状態管理（ReduxやContext API）、ルーティング、API連携など、Reactエコシステムを用いた開発経験が豊富です。" },
        { id: "automation", name: "自動化技術", icon: "fas fa-robot", progress: 75, description: "スクリプティングやRPAツールを用いた業務効率化。", relatedSkills: ["python", "devops", "plc"], details: "自動化技術は、手作業で行われている定型的な業務やプロセスを、ソフトウェアやハードウェアを用いて自動的に実行させることです。Pythonスクリプトによるタスク自動化、RPA（Robotic Process Automation）ツールの導入・運用、産業分野におけるPLC制御など、幅広い分野での自動化ソリューションの設計・実装経験があります。" }
    ];

    const skillCardsContainer = document.querySelector('.skill-cards-container');
    // let svgLinesContainer; // SVGコンテナを保持する変数 - ラインアニメーション削除のためコメントアウト

    // Debounce関数 - ラインアニメーション以外でも使う可能性があるので残す
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // ラインアニメーション関連関数は削除
    // getCardCenterPosition, drawnLines, drawSkillLines, debouncedRedrawLines

    function generateSkillCards(skills) {
        skills.forEach(skill => {
            const card = document.createElement('div');
            card.classList.add('skill-card');
            card.setAttribute('data-progress', skill.progress);
            // card.setAttribute('data-aos', 'fade-up'); // AOS属性を削除
            card.setAttribute('data-id', skill.id); // スキルIDをdata-id属性として設定
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
        // SVGコンテナ生成処理を削除
        // svgLinesContainer = document.createElementNS...

        generateSkillCards(skillsData);
        // Assign skillCards after they are generated
        skillCards = document.querySelectorAll('.skill-card');

        // drawSkillLines(); // 削除
        // window.addEventListener('resize', debouncedRedrawLines); // 削除

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

        // // AOS.jsの初期化 - Moved inside the if block to ensure it runs after elements are potentially ready
        // AOS.init({
        //     duration: 800, // アニメーションの継続時間 (ミリ秒)
        //     easing: 'ease-in-out', // アニメーションのイージング
        //     once: true, // アニメーションを一度だけ実行する
        //     mirror: false, // 要素が画面外に出たときにアニメーションをリセットするか (once:true の場合は影響なし)
        //     anchorPlacement: 'top-bottom', // アニメーション開始のトリガー位置
        // });

        // --- モーダル機能 ---
        const modal = document.getElementById('skill-modal');
        const modalSkillName = document.getElementById('modal-skill-name');
        const modalSkillDetails = document.getElementById('modal-skill-details');
        const closeButton = document.querySelector('.modal-close-button');

        function openModal(skillId) {
            const skillData = skillsData.find(s => s.id === skillId);
            if (skillData && modal && modalSkillName && modalSkillDetails) {
                modalSkillName.textContent = skillData.name;
                modalSkillDetails.textContent = skillData.details;
                modal.style.display = 'block';
            }
        }

        function closeModal() {
            if (modal) {
                modal.style.display = 'none';
            }
        }

        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }
        if (modal) {
            window.addEventListener('click', (event) => {
                if (event.target == modal) {
                    closeModal();
                }
            });
        }

        // --- 関連スキルハイライト機能 ---
        skillCards.forEach(card => {
            card.addEventListener('click', () => {
                const skillId = card.getAttribute('data-id');
                openModal(skillId);
            });

            card.addEventListener('mouseenter', () => {
                const currentSkillId = card.getAttribute('data-id');
                const currentSkill = skillsData.find(s => s.id === currentSkillId);

                if (currentSkill && currentSkill.relatedSkills) {
                    skillCards.forEach(otherCard => {
                        const otherSkillId = otherCard.getAttribute('data-id');
                        if (currentSkill.relatedSkills.includes(otherSkillId)) {
                            otherCard.classList.add('highlighted');
                        } else if (otherSkillId !== currentSkillId) {
                            otherCard.classList.add('dimmed');
                        }
                    });
                    card.classList.add('highlighted-by-hover'); // マウスオーバー対象をマーク - これは残しても良い
                    // drawSkillLines(currentSkillId); // 削除
                }
            });

            card.addEventListener('mouseleave', () => {
                skillCards.forEach(otherCard => {
                    otherCard.classList.remove('highlighted');
                    otherCard.classList.remove('dimmed');
                });
                card.classList.remove('highlighted-by-hover'); // マークを削除 - これは残しても良い
                // if (svgLinesContainer) { // 削除
                //     svgLinesContainer.innerHTML = '';
                // }
                // drawnLines.clear(); // 削除
            });
        });

    } else {
        // Fallback AOS initialization if skillCardsContainer does not exist,
        // though most AOS elements are likely within sections that would be affected.
        // Consider if AOS elements outside skill cards need initialization regardless.
        // AOS.init({
        //     duration: 800,
        //     easing: 'ease-in-out',
        //     once: true,
        //     mirror: false,
        //     anchorPlacement: 'top-bottom',
        // });
    }

    // --- コンタクトフォーム処理 ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        const submitButton = contactForm.querySelector('.submit-button');

        function isValidEmail(email) {
            // 簡単な正規表現でのメール形式チェック
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const emailInput = contactForm.querySelector('#email');
            if (!isValidEmail(emailInput.value)) {
                formStatus.textContent = '有効なメールアドレスを入力してください。';
                formStatus.className = 'error'; // className を直接 'error' に設定
                // formStatus.classList.remove('success'); // successクラスがあれば削除
                // formStatus.classList.add('error'); // errorクラスを追加
                // formStatus.style.display = 'block'; // 表示
                return;
            }

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = '送信中...';
            }
            formStatus.textContent = '';
            formStatus.className = ''; // classListをクリアする代わりにclassNameを空に
            // formStatus.style.display = 'none'; // 一旦非表示に

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // const responseData = await response.json(); // サービスによってはjsonが返る
                    formStatus.textContent = 'メッセージが送信されました。ありがとうございます！';
                    formStatus.className = 'success';
                    contactForm.reset();
                } else {
                    // response.json()を試みて、より詳細なエラーメッセージを取得
                    let errorMsg = 'メッセージの送信に失敗しました。後ほど再試行してください。';
                    try {
                        const errorData = await response.json();
                        if (errorData.errors && errorData.errors.length > 0) {
                           errorMsg = errorData.errors.map(err => err.message || err.error || 'エラーが発生しました').join(', ');
                        } else if (errorData.error) {
                           errorMsg = errorData.error;
                        }
                    } catch (e) {
                        // JSONパースに失敗した場合は、汎用エラーメッセージのまま
                        console.error("Error parsing error response:", e);
                    }
                    formStatus.textContent = errorMsg;
                    formStatus.className = 'error';
                }
            } catch (error) {
                console.error('Form submission error:', error);
                formStatus.textContent = 'ネットワークエラーが発生しました。接続を確認して再試行してください。';
                formStatus.className = 'error';
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = '送信';
                }
            }
        });
    }

    // --- GSAPアニメーション初期化 ---
    function initGsapAnimations() {
        // この関数は、matchMediaの外で基本的なセットアップや、
        // デバイスサイズに依存しないアニメーションを定義するために残すか、
        // 全てmatchMedia内に整理することも可能です。
        // ここでは、matchMediaで条件分岐させたい主要なアニメーション以外（ヒーローの初期ロードなど）を記述します。

        // Hero Section Animation (Load Animation - ScrollTriggerなし)
        // clearPropsを削除し、GSAPのデフォルトの挙動（最終状態を維持）に期待
        gsap.from("#hero h1", {
            duration: 0.8,
            y: 50,
            autoAlpha: 1, // opacity: 1, visibility: 'visible' にアニメーション
            ease: "power2.out",
            delay: 0.2
        });
        gsap.from("#hero p", {
            duration: 0.8,
            y: 50,
            autoAlpha: 1,
            ease: "power2.out",
            delay: 0.5 // h1より少し遅れて開始
        });

        // Particles.js background scroll animation - コメントアウト解除
        gsap.to("#particles-js", {
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            scale: 0.9,
            opacity: 0.7,
            ease: "none"
        });

        // Footer Animation - 全デバイス共通
        const footerElements = gsap.utils.toArray("#page-footer .footer-content > *");
        if (footerElements.length > 0) {
            gsap.set(footerElements, {autoAlpha:0, y:30});
            gsap.to(footerElements, {
                scrollTrigger: {
                    trigger: "#page-footer",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }
    }

    // DOMContentLoadedの最後にGSAPアニメーション初期化関数を呼び出し
    if (skillCardsContainer) {
        initGsapAnimations();
    } else {
        initGsapAnimations();
    }


    // ScrollTrigger.matchMedia() でレスポンシブアニメーションを設定
    ScrollTrigger.matchMedia({
        // Desktop and Tablet (min-width: 768px)
        "(min-width: 768px)": function() {
            // particles.js - デスクトップ設定 (app.js冒頭の初期値が適用される)
            // 必要ならここで値を上書き pJS.particles.number.value = 100; pJS.fn.particlesRefresh();

            // Hero Section Mouse Interaction (Desktop only) - コメントアウト解除
            const hero = document.getElementById('hero');
            if (hero) {
                const heroH1 = hero.querySelector('h1');
                const heroP = hero.querySelector('p');
                const particlesJsEl = document.getElementById('particles-js');
                const h1XTo = gsap.quickTo(heroH1, "x", { duration: 0.8, ease: "power3" });
                const h1YTo = gsap.quickTo(heroH1, "y", { duration: 0.8, ease: "power3" });
                const pXTo = gsap.quickTo(heroP, "x", { duration: 0.7, ease: "power3" });
                const pYTo = gsap.quickTo(heroP, "y", { duration: 0.7, ease: "power3" });
                const particlesXTo = gsap.quickTo(particlesJsEl, "x", { duration: 1.2, ease: "power3" });
                const particlesYTo = gsap.quickTo(particlesJsEl, "y", { duration: 1.2, ease: "power3" });

                hero.addEventListener('mousemove', (e) => {
                    const { clientX, clientY } = e;
                    const { offsetWidth, offsetHeight } = hero;
                    const xPos = (clientX / offsetWidth - 0.5) * 2;
                    const yPos = (clientY / offsetHeight - 0.5) * 2;
                    h1XTo(xPos * 15); h1YTo(yPos * 10);
                    pXTo(xPos * 10); pYTo(yPos * 8);
                    particlesXTo(xPos * 25); particlesYTo(yPos * 20);
                });
                hero.addEventListener('mouseleave', (e) => {
                    h1XTo(0); h1YTo(0); pXTo(0); pYTo(0); particlesXTo(0); particlesYTo(0);
                });
            }

            // Section Titles Animation (Contact only, Skills h2 is pinned)
            const regularSectionTitles = gsap.utils.toArray("#contact h2");
            regularSectionTitles.forEach(title => {
                gsap.from(title, {
                    scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none none" },
                    y: 50, autoAlpha: 1, duration: 0.8, ease: "power2.out"
                });
            });

            // Skills Section Pinning and Progress Animation
            const skillsSection = document.getElementById('skills');
            const skillsTitle = document.querySelector('#skills h2');
            const progressBarContainer = document.getElementById('progress-bar-container');
            const progressBarIndicator = document.getElementById('progress-bar-indicator');

            if (skillsSection && skillsTitle && progressBarContainer && progressBarIndicator) {
                ScrollTrigger.create({
                    trigger: skillsSection,
                    start: "top top",
                    end: () => `+=${skillsSection.offsetHeight - skillsTitle.offsetHeight}`,
                    pin: skillsTitle,
                    pinSpacing: true,
                    toggleClass: { targets: skillsTitle, className: "pinned-title" },
                    onUpdate: (self) => {
                        if (self.progress > 0 && self.progress < 1) progressBarContainer.classList.add('visible');
                        else progressBarContainer.classList.remove('visible');
                        gsap.to(progressBarIndicator, { width: `${self.progress * 100}%`, ease: "none", duration: 0.1 });
                        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
                            const pJS = window.pJSDom[0].pJS;
                            pJS.particles.line_linked.opacity = Math.max(0.1, Math.min(0.8, 0.3 + self.progress * 0.5));
                            pJS.particles.move.speed = Math.max(1, Math.min(5, 1 + self.progress * 4));
                        }
                    },
                    onLeave: () => progressBarContainer.classList.remove('visible'),
                    onEnterBack: () => progressBarContainer.classList.add('visible')
                });
            }

            // Skill Cards Animation
            if (skillCards && skillCards.length > 0) {
                 gsap.set(skillCards, { autoAlpha: 0, y: 30 });
                 ScrollTrigger.batch(skillCards, {
                    trigger: skillCardsContainer, start: "top 80%",
                    onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "power2.out" }),
                    onLeaveBack: batch => gsap.set(batch, { autoAlpha: 0, y: 30 })
                });
            }

            // Skill Lines SVG Container and Listeners (Desktop only) - 全て削除またはコメントアウト

            // Revised Skill Card Hover Effect (Desktop only)
            if (skillCards) {
                skillCards.forEach(card => {
                    card.addEventListener('mouseenter', (e) => {
                        const hoveredCard = e.currentTarget;
                        skillCards.forEach(sc => {
                            if (sc === hoveredCard) {
                                sc.classList.add('highlighted');
                                sc.classList.remove('dimmed');
                            } else {
                                sc.classList.add('dimmed');
                                sc.classList.remove('highlighted');
                            }
                        });
                    });

                    card.addEventListener('mouseleave', (e) => {
                        skillCards.forEach(sc => {
                            sc.classList.remove('highlighted');
                            sc.classList.remove('dimmed');
                        });
                    });
                });
            }
        },

        // Mobile (max-width: 767px)
        "(max-width: 767px)": function() {
            // particles.js - モバイル設定
            if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
                const pJS = window.pJSDom[0].pJS;
                pJS.particles.number.value = 40; // パーティクル数を減らす
                pJS.particles.line_linked.opacity = 0.3; // 線の透明度を下げる
                pJS.particles.line_linked.distance = 120; // 線の距離を短くする
                if(pJS.fn.particlesRefresh) pJS.fn.particlesRefresh(); // 変更を適用
            }
             // Hero Mouse Interactionはここでは何もしない (mousemoveがないため)

            // Section Titles Animation (Skills h2も含む)
            const sectionTitlesMobile = gsap.utils.toArray("#skills h2, #contact h2");
            sectionTitlesMobile.forEach(title => {
                gsap.from(title, {
                    scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none none" },
                    y: 30, autoAlpha: 1, duration: 0.7, ease: "power2.out" // 少し控えめなアニメーション
                });
            });

            // Skills Pinning - 無効化 (何もしない)
            // Progress bar for skills section - モバイルでは表示しない (上記pinのScrollTriggerに依存していたため)
            if(document.getElementById('progress-bar-container')) {
                document.getElementById('progress-bar-container').style.display = 'none';
            }


            // Skill Cards Animation (Desktopと同じだが、トリガー位置などを調整しても良い)
            if (skillCards && skillCards.length > 0) {
                 gsap.set(skillCards, { autoAlpha: 0, y: 20 }); // yを少し浅く
                 ScrollTrigger.batch(skillCards, {
                    trigger: skillCardsContainer, start: "top 88%", // 少し遅めにトリガー
                    onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }),
                    onLeaveBack: batch => gsap.set(batch, { autoAlpha: 0, y: 20 })
                });
            }

            // Skill Lines - 無効化
            // const svgLinesMobile = document.getElementById('skill-lines-svg'); // idで取得試行
            // if (svgLinesMobile) { // もし存在していれば非表示に
            //     svgLinesMobile.style.display = 'none';
            // }
            // イベントリスナーはデスクトップ専用なので、ここでは何もしなくて良い
        }
    });


    // --- ページトップへ戻るボタン機能 ---
    function initToTopButton() {
        const toTopButton = document.getElementById('to-top-button');
        if (!toTopButton) return;
        if (!toTopButton) return;

        // スクロールによる表示/非表示
        // ボタンの表示/非表示を管理するGSAPタイムライン（アニメーションさせないため paused(true)）
        const buttonVisibility = gsap.timeline({ paused: true })
            .to(toTopButton, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" });

        ScrollTrigger.create({
            trigger: "body",
            start: "top -30%", // 画面の高さの30%スクロールしたら
            end: 99999, // ページ最下部まで
            onUpdate: self => {
                if (self.isActive && self.direction === 1) { // 下にスクロールしてトリガー位置を通過
                    buttonVisibility.play();
                } else if (self.direction === -1 && self.scroll() < window.innerHeight * 0.3) { // 上にスクロールしてトリガー位置より上に戻った
                    buttonVisibility.reverse();
                }
            },
            // markers: true, // デバッグ用
        });

        // トップへ戻るボタンのクリックイベント
        toTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true }, ease: "power2.inOut" });
        });
    }
    initToTopButton(); // ページトップへ戻るボタンの初期化

});
