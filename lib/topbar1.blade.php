<nav class="navbar navbar-light bg-white sticky-top shadow-sm" style="z-index: 1050;">
    <div class="container d-flex justify-content-between align-items-center">
        <!-- Logotip -->
        {{--  <a class="navbar-brand" href="https://www.shigotonavi.co.jp/indexm.asp">
            <img src="{{ asset('img/logo02.png') }}" alt="logo" class="img-fluid" style="max-width: 120px;">
        </a>  --}}
        <a class="navbar-brand" href="/">
            {{--  <img src="{{ asset('img/shigotonavi-logoA.svg') }}" alt="logo">  --}}
            <img src="/img/shigotonavi-logoA.svg" alt="logo" width="150" class="img-fluid">
        </a>

        @if (Auth::check())
            @php
                $user = Auth::user();
            @endphp

            <div class="d-flex align-items-center gap-2">
                <!-- マイページ (Doim korinib turadi) -->
                <a href="{{ route('mypage') }}" class="btn btn-main-theme">マイページ</a>

                <!-- Hamburger menyu tugmasi -->
                <button class="navbar-toggler border-0 p-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <!-- Offcanvas menyu (hamburger bosilganda chiqadigan panel) -->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasMenuLabel">メニュー</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="{{ route('profile.profile') }}">
                                <i class="fa-solid fa-user-tie text-main-theme"></i> 基本情報
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="{{ route('matchings.create') }}">
                                <i class="fa-solid fa-file-pen text-main-theme"></i> 基本情報変更
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('educate-history') }}" class="nav-link text-dark">
                                <i class="fa-solid fa-file text-main-theme"></i>
                                学歴・職歴入力
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('self_pr') }}" class="nav-link text-dark">
                                <i class="fa-solid fa-user text-main-theme"></i>
                                自己PR 志望動機
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('upload.form') }}" class="nav-link text-dark">
                                <i class="fa-solid fa-image-portrait text-main-theme"></i>
                                証明写真の登録
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a href="{{ route('export') }}" class="nav-link text-dark">
                                <i class="fa-solid fa-file-arrow-down text-main-theme"></i>
                                履歴書EXCELダウンロード
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('pdf') }}" class="nav-link text-dark">
                                <i class="fa-solid fa-file-arrow-down text-main-theme"></i>
                                履歴書PDFダウンロード
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="{{ route('careersheet') }}" class="nav-link text-dark">
                                <i class="fa-solid fa-file-arrow-down text-main-theme"></i>
                                職務経歴書EXCELダウンロード
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('careerpdf') }}" class="nav-link text-dark">
                                <i class="fa-solid fa-file-arrow-down text-main-theme"></i>
                                職務経歴書PDFダウンロード
                            </a>
                        </li>
                        <li class="nav-item">
                            <!-- Logout tugmasi -->
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-inline">
                                @csrf
                                <button type="submit" class="btn btn-main-theme btn-sm w-100">
                                    <i class="fa-solid fa-right-from-bracket"></i> ログアウト
                                </button>
                            </form>
                        </li>
                        <li class="nav-item pt-5">
                            <button id="deleteAccountBtn" class="btn btn-danger">アカウントを退会する</button>
                            <script>
                                document.getElementById('deleteAccountBtn').addEventListener('click', function() {
                                    if (window.confirm('本当にアカウントを削除しますか？')) {
                                        // フォームを作成して送信する
                                        let form = document.createElement('form');
                                        form.method = 'POST';
                                        form.action = "{{ route('account.delete') }}"; // ルート案内
                            
                                        // CSRFトークンを追加する
                                        let csrf = document.createElement('input');
                                        csrf.type = 'hidden';
                                        csrf.name = '_token';
                                        csrf.value = "{{ csrf_token() }}";
                                        form.appendChild(csrf);
                            
                                        document.body.appendChild(form);
                                        form.submit();
                                    }
                                });
                            </script>
                        </li>
                    </ul>
                </div>
            </div>
        @else
            <div class="d-flex align-items-bottom gap-2">
                <!-- Foydalanuvchi kirmagan bo‘lsa -->
                <a class="btn btn-main-theme" href="{{ route('signin') }}">会員登録</a>
                <a class="btn btn-main-theme ms-2" href="{{ route('login') }}">ログイン</a>
            </div>
        @endif
    </div>
</nav>


<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
</script>
