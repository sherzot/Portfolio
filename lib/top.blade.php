<!DOCTYPE html>
<html lang="ja">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>しごとナビ</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Favicon & Icons -->
        <link rel="icon" href="{{ asset('assets/img/favicon.png') }}">
        <link rel="apple-touch-icon" href="{{ asset('assets/img/icon.png') }}">
        <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" rel="stylesheet">
        <!-- CDN (6.4.2 ishlovchi versiya) -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

        <!-- Bootstrap -->
        <link href="{{ asset('assets/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">

        <!-- Custom CSS -->
        <link rel="stylesheet" href="{{ asset('style/main.css') }}">
        <link rel="stylesheet" href="{{ asset('style/snavi.css') }}">

        @stack('styles')
        @livewireStyles

        <style>
            @font-face {
                font-family: 'NotoSansJP';
                src: url('/fonts/noto/NotoSansJP-Regular.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
            }

            @font-face {
                font-family: 'NotoSansJP';
                src: url('/fonts/noto/NotoSansJP-Bold.ttf') format('truetype');
                font-weight: bold;
                font-style: normal;
            }

            html,
            body {
                font-family: 'NotoSansJP', Helvetica, Arial, sans-serif;
                font-size: var(--bs-body-font-size);
                font-weight: var(--bs-body-font-weight);
                line-height: var(--bs-body-line-height);
                margin: 0;
                {{--  padding-bottom: 50px;  --}} height: 100%;
                scroll-behavior: smooth;
                overflow-x: hidden !important;
            }

            main {
                flex: 1;
            }

            .btn-main-theme {
                background-color: #FF6347 !important;
                color: white !important;
            }

            .btn-main-theme:hover {
                background-color: #FF4500 !important;
            }

            .text-main-theme {
                color: #FF6347 !important;
            }

            .text-main-theme2 {
                color: #bc1c45 !important;
            }

            .check-button img {
                max-width: 250px;
                width: 100%;
                height: auto;
            }

            @keyframes pulse {
                0% {
                    transform: scale(1);
                    box-shadow: 0 0 0 0 rgba(255, 99, 71, 0.7);
                }

                70% {
                    transform: scale(1.05);
                    box-shadow: 0 0 0 10px rgba(255, 99, 71, 0);
                }

                100% {
                    transform: scale(1);
                    box-shadow: 0 0 0 0 rgba(255, 99, 71, 0);
                }
            }

            #scroll-top {
                position: fixed;
                right: 20px;
                bottom: 80px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                {{--  background: linear-gradient(135deg, #FF6347, #FF4500);  --}} {{--  color: white;  --}} font-size: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1060;
                cursor: pointer;
                {{--  opacity: 0.8;
                animation: pulse 2s infinite;
                transition: all 0.3s ease-in-out;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);  --}}
            }

            #scroll-top img {
                width: 60px;
                height: 60px;
            }

            #scroll-top:hover {
                opacity: 1;
                transform: scale(1.1);
                animation: none;
            }
            @media screen and (max-width: 500px) {
                #scroll-top {
                    right: 10px;
                    bottom: 50px;
                }
                .fs-f28{
                    font-size: 18px !important;
                    line-height: 1.6 !important;
                    text-align: center !important;
                }
                .fs-f18 {
                    font-size: 14px !important;
                    line-height: 1.6 !important;
                    padding-left: 10px !important;
                    padding-right: 10px !important;
                    text-align: center !important;
                }
            
                .text-center {
                    text-align: center !important; /* mobilda chapga */
                }
            }
        </style>
    </head>

    <body class="d-flex flex-column min-vh-100">
        <div id="top"></div>

        {{-- Sticky Navbar --}}
        @include('partials.topbar1')

        {{-- Main --}}
        <main class="pb-3">
            @yield('content')
        </main>

        {{-- Sticky Footer --}}
        {{--  @include('partials.footer1')  --}}
        <footer class="bg-secondary text-white text-center py-3 shadow">
            <div class="container">
                <div class="d-flex flex-wrap justify-content-center gap-2 mb-2">
                    <a href="{{ route('agent.login') }}" class="btn btn-outline-light btn-sm">エージェント</a>
                    <a href="{{ route('company.login') }}" class="btn btn-outline-light btn-sm">企業</a>
                    <a href="{{ route('contact.form') }}" class="btn btn-outline-light btn-sm">お問い合わせ</a>
                </div>
                <a href="https://www.shigotonavi.co.jp/privacy/privacymark.asp" target="_blank"
                    class="d-inline-block text-white text-decoration-none">
                    <div class="small">しごとナビ利用規約・<br class="d-sm-none">個人情報保護に関する事項</div>
                </a>
            </div>
        </footer>


        {{-- Scroll-to-top button --}}
        <a href="#top" id="scroll-top">
            <img src="/img/page-top.svg" alt="">
        </a>

        @livewireScripts
        @stack('scripts')

        <script>
            const scrollTopButton = document.getElementById("scroll-top");

            scrollTopButton.addEventListener("click", function(e) {
                e.preventDefault();
                const target = document.getElementById('top');
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            });
        </script>


    </body>

</html>
