@extends('layouts.top')

@section('title', '履歴書')
@section('content')
    <section class="container py-3 my-3">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-9">
                <div class=" py-3">
                    <!-- ✅ Session Messages -->
                    @if (session('message'))
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            {{ session('message') }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                    @endif
                    @if (session('success'))
                        <div class="alert alert-success text-center">{{ session('success') }}</div>
                    @endif

                    @if (session('error'))
                        <div class="alert alert-danger text-center">{{ session('error') }}</div>
                    @endif
                    <div class="container mt-2">
                        <div class="card py-3 px-1" style="border: 1px #bc1c45 solid;">
                            <h5 class="text-center fw-bold fs-f28 text-main-theme2">【しごとナビ】ご登録の求職者の方へ</h5>
                            <hr class="border-0 mx-auto my-3 text-main-theme" style="height: 1px; background-color: #000; width: 100%;">
                    
                            {{-- ✅ 「／」で改行 --}}
                            <p class="text-center px-2 fs-f18">
                                いつも当サービスをご利用いただき、誠にありがとうございます。<br>
                                この度、お客様の登録データの一部が正しく保存されていない事象が確認されましたので、<br>
                                ご報告と案内をさせていただきます。
                            </p>
                    
                            <div class="text-center fw-bold text-main-theme2">
                                <hr class="mx-auto my-3" style="border-top: 1px dashed #000; width: 100%;">
                                発生日時と該当期間<br>
                                2025年4月3日 13時頃 ～ 4月7日 16時頃
                                <hr class="mx-auto my-3" style="border-top: 1px dashed #000; width: 100%;">
                            </div>
                    
                            <p class="text-center fs-f18">
                                本来、サーバーに登録されるはずの個人情報の一部が正しく保存されないままでログオフの状態になっています。<br>
                                そのため、お手数ですが、下記のボタン【基本情報を確認する】より該当の期間に登録の方は、<br>
                                データが反映されているかご確認ください。
                            </p>
                    
                            {{-- ✅ ボタンのサイズを半分に縮小 --}}
                            <div class="text-center my-4 check-button">
                                <a href="{{ route('matchings.create') }}">
                                    <img src="{{ asset('/img/sn-web-button-check.png') }}" alt="基本情報を確認する">
                                </a>
                            </div>
                    
                            <p class="text-center fs-f18">
                                なお、この件に関しての外部への流出や漏れなどはしておりませんのでご安心ください。
                            </p>
                            <p class="text-center fs-f18">
                                お客様にはご不便をおかけしましたこと、深くお詫び申し上げます。<br>
                                今後はこのような事が無いように再発防止に努めてまいります。
                            </p>
                            <p class="text-center fs-f18">
                                何かご不明点やご質問がございましたら、お気軽にお知らせください。
                            </p>
                    
                            <p class="text-center mt-5">しごとナビ運営　リス株式会社</p>
                        </div>
                    </div> 
                    <div class="mt-3">
                        <p class="text-main-theme fs-f24 text-center">学歴・職歴・自己PR・志望動機などの内容を入力して、履歴書または職務経歴書を作成</p>
                    </div>
                    <div>
                        <p>
                            転職活動に必要な履歴書や職務経歴書が「学歴・職歴」「志望動機」などの項目に沿って入力するだけで作成できます。<br>
                            豊富なテンプレートをご用意しています。印刷やメール添付に最適なPDF形式や、パソコンでの管理に便利なExcel形式<br>での出力が可能です。
                            写真登録機能によって、証明写真付きの履歴書が簡単に作成できます。
                        </p>
                    </div>
                    {{--  <!-- ✅ 学歴・職歴入力 -->  --}}
                    <div class="row mt-4 g-3 px-3">
                        <div class="col-md-6">
                            <a href="{{ route('educate-history') }}" class="btn btn-outline-primary w-100">
                                <i class="fa-solid fa-file text-main-theme"></i>
                                学歴・職歴入力
                            </a>
                        </div>
                        <div class="col-md-6">
                            {{--  <a href="{{ route('self_pr') }}" class="btn btn-outline-primary w-100">
                                <i class="fa-solid fa-user text-main-theme"></i>
                                自己PR 志望動機
                            </a>  --}}
                            <a class="btn btn-outline-primary w-100" href="{{ route('matchings.create') }}">
                                <i class="fa-solid fa-file-pen text-main-theme"></i> 
                                基本情報変更
                            </a>
                        </div>
                        
                    </div>
                    <div class="row mt-4 g-3 px-3">
                        <div class="col-md-6">
                            <a href="{{ route('self_pr') }}" class="btn btn-outline-primary w-100">
                                <i class="fa-solid fa-user text-main-theme"></i>
                                自己PR 志望動機
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="{{ route('upload.form') }}" class="btn btn-outline-primary w-100">
                                <i class="fa-solid fa-image-portrait text-main-theme"></i>
                                証明写真の登録
                            </a>
                        </div>
                    </div>
                    {{--  <p class="row mt-4 px-4">基本情報・学歴・職歴・自己PR・証明写真などの内容を入力してから、履歴書または、職務経歴書ダウンロード</p>  --}}
                    <div class="mt-4 px-3">
                        <li>履歴書または職務経歴書を自分に最適な形式でダウンロードしてください。</li>
                    </div>
                    <!-- ✅ 履歴書ダウンロード -->
                    <div class="mt-4 px-3">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <a href="{{ route('export') }}" class="btn btn-outline-primary w-100">
                                    <i class="fa-solid fa-file-arrow-down text-main-theme"></i>
                                    履歴書EXCELダウンロード
                                </a>
                            </div>
                            <div class="col-md-6">
                                <a href="{{ route('pdf') }}" class="btn btn-outline-primary w-100">
                                    <i class="fa-solid fa-file-arrow-down text-main-theme"></i>
                                    履歴書PDFダウンロード
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- ✅ 職務経歴書ダウンロード -->
                    <div class="mt-4 px-3">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <a href="careersheet" class="btn btn-outline-primary w-100">
                                    <i class="fa-solid fa-file-arrow-down text-main-theme"></i>
                                    職務経歴書EXCELダウンロード
                                </a>

                            </div>
                            <div class="col-md-6">
                                <a href="careerpdf" class="btn btn-outline-primary w-100">
                                    <i class="fa-solid fa-file-arrow-down text-main-theme"></i>
                                    職務経歴書PDFダウンロード
                                </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </section>
@endsection
