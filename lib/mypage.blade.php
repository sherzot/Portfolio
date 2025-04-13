@extends('layouts.top')

@section('title', 'マイページ')
@section('content')
    <section class="container py-2">
        <div class="row justify-content-center">
            <div class="col-12 col-md-9 col-lg-10">
                <div class=" py-3">
                    <div class="card-body text-center">
                        {{--  <h5 class="fw-bold">
                            {{ Auth::user()->name ?? '' }} 様
                        </h5>  --}}
                        @if (!empty($matchJobCount) && !is_null($matchingJobCount))
                            <h5 class="fw-bold">
                                マッチングされた求人:
                                <span class="text-main-theme">{{ $matchingJobCount }}</span> 件
                            </h5>
                        @endif

                        <!-- ✅ Session Messages -->
                        @if (session('message'))
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                {{ session('message') }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            </div>
                        @endif

                        <!-- ✅ Session Messages -->
                        @if (session('success'))
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                {{ session('success') }}
                                @if (session('mode') === 'regist')
                                    <br>仕事内容は {{ session('jobDetail') }}
                                @elseif (session('mode') === 'cancel')
                                    <br>求人票内容は {{ session('jobDetail') }} のオファーをキャンセルしました。
                                @endif

                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            </div>
                        @endif

                        @if ($errors->has('error'))
                            <div class="alert text-main-theme">{{ $errors->first('error') }}</div>
                        @endif
                        {{--  <div class="mt-4 px-3">
                            <img src="{{ asset('img/offer.png') }}" class="img-fluid">
                        </div>  --}}
                        <!-- ✅ Jobs List -->
                        <div class="text-start mt-3">
                            @if (!empty($jobs) && count($jobs) > 0)
                                @foreach ($jobs as $job)
                                    @if ($job->offer_flag !== '3')
                                        <p>
                                            (<a
                                                href="https://match.shigotonavi.co.jp/matchings/detail/{{ $job->order_code }}">{{ $job->order_code }}
                                            </a>)
                                            {{ $job->job_type_detail }}

                                            @if ($job->offer_flag === '1')
                                                <span class="badge bg-success">にオファー済み</span>
                                            @elseif ($job->offer_flag === '2')
                                                <span class="badge bg-danger">キャンセル確定済み、再オファーできます。</span>
                                            @endif
                                        </p>
                                    @endif
                                @endforeach

                                @if ($hasConfirmedCancel || $hasCompletedOffer)
                                    {{--  <p class="text-main-theme">新しいオファーができます。</p>  --}}
                                @endif
                            @else
                                {{--  <p class="text-muted">まだオファーされていません</p>  --}}
                            @endif
                        </div>
                    </div>
                    {{-- PC 用画像（md以上） --}}
                    <div class="my-4 px-0 d-none d-md-block">
                        <img src="{{ asset('img/canpin-PC.webp') }}" class="img-fluid w-100" alt="PC用画像">
                    </div>

                    {{-- スマホ用画像（sm以下） --}}
                    <div class="my-4 px-0 d-block d-md-none">
                        <img src="{{ asset('img/canpin-SP.webp') }}" class="img-fluid" style="width: 400px; height: 500px;"
                            alt="スマホ用画像">
                    </div>
                    <div class="mt-3">
                        @if (!$hasMatching)
                            <div class="row">
                                {{--  @foreach (explode("\n", '希望条件を登録してください。求人票が自動マッチングされます。') as $line)
                                    <div class="col-12 col-md-12 col-lg-12 my-2 ">
                                        <p class="text-break fs-f18">{{ $line }}</p>
                                    </div>
                                @endforeach  --}}
                                @foreach (explode("\n", '希望条件を登録すると、求人票が自動マッチングされます。') as $line)
                                    <div class="col-12 col-md-12 col-lg-12 my-2 ">
                                        <p class="text-break text-main-theme fs-f28 text-start">{{ $line }}</p>
                                    </div>
                                @endforeach
                            </div>

                            <a href="{{ url('matchings/match') }}" class="btn btn-primary my-3 btn-sm py-3 px-3 fs-f18">
                                希望条件でおしごとを探す
                            </a>
                        @else
                            {{-- PC 用画像（md以上） --}}
                            <div class="my-4 px-0 d-none d-md-block">
                                <p class="fs-f22 text-start">登録した希望条件で、あなたにベストな求人票を選んで、<span
                                        class="text-main-theme2 fw-bold">面談依頼する【オファー】</span> ボタンを <br> 押してください！</p>
                            </div>
                            {{-- スマホ用画像（sm以下） --}}
                            <div class="my-4 px-0 d-block d-md-none">
                                <p class="text-start">登録した希望条件で、あなたにベストな <br> 求人票を選んで、<span
                                        class="text-main-theme2 fw-bold">面談依頼する【オファー】</span> <br> ボタンを押してください！</p>
                            </div>

                            <a href="{{ route('matchings.showmatch') }}"
                                class="btn btn-main-theme2 btn-sm mb-3 mt-0 py-3 px-3 fs-f18">マッチングされた求人票一覧を見る</a>
                        @endif
                    </div>

                    <div class="mt-5 container">
                        <h5 class="text-main-theme2 mt-5 fs-f27">履歴書または職務経歴書作成</h5>
                        <p class="fs-f17">
                            <span class="text-main-theme2 fw-bold">「しごとナビ」</span>では、転職サポートだけではなく、
                            手書きの履歴書や職務経歴書作成にかかる手間を軽減するため、
                            登録者全員に無料で作成できるウェブサービスを提供しています。
                            これにより、志望動機やアピールポイントを変更する際のミスや時間の浪費を防げます。<br>
                            {{--  <a href="{{ route('resume') }}" class="text-primary fs-f22">
                                履歴書または職務経歴書作成はこちら
                            </a>  --}}
                        </p>
                        <p class="fs-f17">
                            会員登録後に利用できるサービス「コンプリ（コンビニプリント）」を使えば、履歴書をコンビニで印刷できます。
                        </p>
                        <div class="d-flex flex-wrap justify-content-center gap-2 mt-3">
                            <div class="col-2 col-sm-2 col-md-1 col-lg-1">
                                <img src="{{ asset('img/seven.png') }}" alt="Seven Eleven"
                                    class="img-fluid rounded shadow w-100">
                            </div>
                            <div class="col-2 col-sm-2 col-md-1 col-lg-1">
                                <img src="{{ asset('img/family.png') }}" alt="Family Mart"
                                    class="img-fluid rounded shadow w-100">
                            </div>

                            <div class="col-2 col-sm-2 col-md-1 col-lg-1">
                                <img src="{{ asset('img/lowson.webp') }}" alt="Lawson"
                                    class="img-fluid rounded shadow w-100">
                            </div>
                            <div class="col-2 col-sm-2 col-md-1 col-lg-1">
                                <img src="{{ asset('img/ministop.jpg') }}" alt="Family Mart"
                                    class="img-fluid rounded shadow w-100">
                            </div>
                        </div>
                        <div class="mt-3">
                            <a href="{{ route('resume') }}" class="text-primary mt-5 fs-f22">
                                履歴書または職務経歴書作成はこちら
                            </a>
                        </div>



                        {{--  <h5 class="text-main-theme2 mt-5 fs-f27">運営会社</h5>

                        <div class="mt-3">
                            <p>
                                44年以上の歴史を持つ総合人材サービス <br> <a href="https://www.lis21.co.jp" target="_new"
                                    rel="noopener noreferrer">リス株式会社</a>
                            </p>
                        </div>  --}}
                    </div>
                </div>


            </div>
        </div>
    </section>
@endsection
