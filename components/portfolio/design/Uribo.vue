<template>
  <div :class="$style.wrapper">
    <div :class="$style.sideNav">
      <p>もくじ</p>
      <ul>
        <li>
          01 URIBO
          <ul>
            <li><v-btn small text @click="goTo('#overview')">URIBOってなに？</v-btn></li>
            <li><v-btn small text @click="goTo('#userstory')">ユーザーストーリー</v-btn></li>
            <li><v-btn small text @click="goTo('#process')">URIBOができるまで</v-btn></li>
            <li><v-btn small text @click="goTo('#points')">URIBOのポイント</v-btn></li>
            <li><v-btn small text @click="goTo('#work')">担当した箇所</v-btn></li>
          </ul>
        </li>
      </ul>
    </div>
    <div :class="$style.main">


      <section :class="$style.mainView">
        <h1 :class="$style.title" color="white">
          01 URIBO
          <span :class="$style.titleSub">- 生活リズムを整えるロボット -</span>
        </h1>
        <img src="~/static/images/uribo/uribo_mainview.png" alt="">
        <p :class="$style.mainViewCopy">
          家事もお風呂も、「腰を上げるまで」が一番めんどくさい... <br>
          ゲームや趣味に夢中になって家事や睡眠を後回しにしがちなあなた <br>
          URIBOたちと暮らすだけで「めんどくさがり」が少しづつ治っていきます
        </p>
        <p :class="$style.mainViewDesc">
          授業「情報デザイン2」 にてチーム製作したプロダクト<br>
          テーマは「クラウドファンディングを想定した健康に関わるプロダクト」
        </p>
        <p :class="$style.mainViewDesc">
          <strong>
            はこだて未来展2021　クラウドファンディング部門準グランプリ　獲得
          </strong>
        </p>
      </section>


      <section :class="$style.overview" id="overview">
        <h2>URIBOってなに？</h2>
        <img src="~/static/images/uribo/uribo_top.png" alt="">
        <p :class="$style.overviewDesc">
          自分では動けないハコを家の中でハコびます。
        </p>
        <p :class="$style.overviewDesc">
          小さいYEBOをハコんで大きいCHEBOに会わせに行くと、<br>
          そこには溜まった洗濯モノや汚れたお皿が。
        </p>
        <p :class="$style.overviewDesc">
          ハコ同士がおしゃべりをしている間、ただ待っているのももったいないですし<br>
          後回しにしがちなモロモロを片づけてしまいましょう。
        </p>
        <p :class="$style.overviewDesc">
          掃除も洗濯も、やり始めてしまえば短い時間の出来事です。<br>
          でもやり始めるまでがとっても大変。
        </p>
        <p :class="$style.overviewDesc">
          URIBOはあなたに家の中を歩き回らせ家事ポイントまで導き、<br>
          少しの時間留まらせることで、家事タイムのはじまりを作り出します。
        </p>
        <p :class="$style.overviewDesc">
          こうして決まった時間に家事を続けることが生活リズムの改善へと繋がるのです。
        </p>
      </section>
      <section :class="$style.userstory" id="userstory">
        <h2>ユーザーストーリー</h2>
        <v-stepper non-linear  v-model="e1" class="mt-30">
          <v-stepper-header>
            <div
              v-for="(userstory, i) in userstorys"
              :key="i"
            >
              <v-stepper-step
                x-large
                
                editable
                :step= "userstory.step"
              >
              </v-stepper-step>
            </div>
          </v-stepper-header>
          <v-stepper-items
            aria-setsize=""
            v-for="(userstory, i) in userstorys"
            :key="i"
          >
            <v-stepper-content
              :step="userstory.step"
            >
              <v-img
                :src="userstory.img"
                :aspect-ratio="16/9"
              ></v-img>
              <div :class="$style.userstoryStepDesc">
                <p>
                  {{ userstory.text }}
                </p>
              </div>
              <div :class="$style.userstoryStepButton">
                <v-btn
                  large
                  left
                  v-if="userstory.position != 'first'"
                  @click="e1 = i"
                >
                  ＜ preview
                </v-btn>
                <v-btn
                  large
                  right
                  v-if="userstory.position != 'last'"
                  color="primary"
                  class="ml-auto"
                  @click="e1 = i + 2"
                >
                  Next ＞
                </v-btn>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </section>
      <section :class="$style.thinkingProcess" id="process">
        <h2>URIBOができるまで</h2>


        <div :class="$style.thinkingProcessIssue">
          <h3>1. テーマを理解してグループ内テーマを設定しよう</h3>
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              color="orange"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>テーマ</strong>
                </v-col>
                <v-col>
                  <strong>「クラウドファンディングと健康に関わるプロダクトの提案」</strong>
                  <div class="text-caption">
                    「クラウドファンディング」と「健康」の2つがキーワード
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="pink"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>調査</strong>
                </v-col>
                <v-col>
                  <strong>クラウドファンディングとは？</strong>
                  <div class="text-caption mb-5">
                    起案者がインターネットを介してプロジェクトの企画を拡散し、群衆（クラウド）から少額づつ資金調達（ファンディング）をする仕組みのこと。
                  </div>
                  <strong>実例を見て傾向や流行を掴もう</strong>
                  <div class="text-caption mb-3">
                    CAMPFIREやKICKSTARTERに掲載されているプロダクトを調査しました。<br>
                  </div>
                  <div class="text-caption mb-3">
                    その結果、より多くの資金を集めているのは<br>
                    ・夢やロマンのある魅力的なプロジェクト <br>
                    ・今まで見たこともない全く新しいプロジェクト <br>
                    ・多くの人が抱えるニーズを実現するプロジェクト <br>
                    でした。
                  </div>
                  <div class="text-caption mb-10">
                    また、上記カテゴリから要素を抽出し<br>
                    ・非日常、刺激的、大規模<br>
                    ・新規性、独自性<br>
                    ・高機能、高品質<br>
                    なプロジェクト。とまとめました。
                  </div>
                  <strong>健康とは？</strong>
                  <div class="text-caption mb-5">
                    言葉の指す範囲が広いためブレインストーミングの後にKJ法を用いて、グループ内での健康のイメージを共有しました。
                  </div>
                  <v-card
                    :class="$style.timelineCard"
                    class="mb-5"
                  >
                    <v-img
                      src="/images/uribo/process_01.jpg"
                      :aspect-ratio="4/3"
                    ></v-img>
                    <v-card-subtitle>
                      ツール：<a href="https://miro.com/app/board/o9J_lcqn4Vs=/?moveToWidget=3074457352188373310&cot=14" target="_blank">miro</a>
                    </v-card-subtitle>
                  </v-card>
                  <div class="text-caption mb-5">
                    その結果、<strong>生活リズムを整える</strong>ことが健康的な生活に繋がるとグループで結論付けました。<br>
                    また、健康的な生活をユーザーに送らせるためには手軽さや報酬により継続させることが大事だと考え、グループ内でのプロダクトへのイメージとして生活に寄り添うもの、身に着けるものか家の中で使うようなものといった方向性にしようかと考え始めました。<br>
                    クラウドファンディングから抽出した要素のうち、家の中で収めたいため「大規模」を、「高機能」「高品質」はアイデアにより解決するものではないので除外し、このグループでは
                    <strong>「新規性」「独自性」を強く、「非日常」「刺激的」をアクセントに</strong>取り入れていこうと方針を決定しました。
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal darker-1"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>
                    グループ内<br>
                    テーマの設定
                  </strong>
                </v-col>
                <v-col>
                  <p class="mb-2"><strong>「生活リズムを整えるオリジナリティ溢れるプロダクト」</strong></p>
                  <div class="text-caption mb-5">
                    <p class="mb-2">
                      <strong>解決する課題</strong><br>
                      ・生活リズムを整える
                    </p>
                    <p class="mb-2">
                      <strong>形態</strong><br>
                      ・身に着ける（ウェアラブル）<br>
                      ・家の中で使う（家具・雑貨）
                    </p>


                    <p class="mb-2">
                      <strong>意識する要素</strong><br>
                      ・新規性<br>
                      ・独自性<br>
                      ・（非日常）
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </div>

        <div :class="$style.thinkingProcessIssue">
          <h3>2. グループ内テーマを深堀りして具体案を出そう</h3>
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              color="pink"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>ペルソナ</strong>
                </v-col>
                <v-col>
                  <p class="mb-2"><strong>1人暮らし・後回しクセ有り・気付いたら休日が終わっている</strong></p>
                  <div class="text-caption mb-5">
                    <p class="text-caption mb-2">
                      ・大学生<br>
                      ・20歳<br>
                      ・男性<br>
                      ・バイト週2<br>
                      ・食事はコンビニ弁当<br>
                      ・頻繁に夜更かしをする<br>
                      ・引きこもりがち<br>
                    </p>
                    <p class="text-caption mb-2">
                      など性質を細かく定め、生活リズムが崩れがちな人を深掘りしました。
                    </p>
                  </div>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                    ></v-img>
                  </v-avatar>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                    ></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="orange"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>解決する課題</strong>
                </v-col>
                <v-col>
                  <strong>世に出ているアイテムからアイデアの種を探す</strong>
                  <div class="text-caption mb-5">
                    <p>
                      ・生活に寄り添ったアイデアの宝庫「100円ショップ」<br>
                      ・家具全てが揃う 「ニトリ」<br>
                      を対象に
                    </p>
                  </div>
                  <div class="text-caption mb-5">
                    <p class="mb-2">
                      <strong>解決する課題</strong><br>
                      ・生活リズムを整える
                    </p>
                    <p class="mb-2">
                      <strong>形態</strong><br>
                      ・身に着ける（ウェアラブル）<br>
                      ・家の中で使う（家具・雑貨）
                    </p>


                    <p class="mb-2">
                      <strong>意識する要素</strong><br>
                      ・新規性<br>
                      ・独自性<br>
                      ・（非日常）
                    </p>
                  </div>
                  <div class="text-caption">
                    こもりがちな生活様式へと変化して、<br>
                    以前より生活リズムが乱れやすいのではないか？
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal darker-1"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>具体的な案</strong>
                </v-col>
                <v-col>
                  <strong>グループメンバーによる提案</strong>
                  <v-card
                    :class="$style.timelineCard"
                  >
                    <v-img
                      src="/images/meow.png"
                      :aspect-ratio="4/3"
                    ></v-img>
                    <v-card-title>
                      ブレスト
                    </v-card-title>
                    <v-card-subtitle>
                      miro
                    </v-card-subtitle>
                    <v-card-text>
                      うぇい
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </div>

        <div :class="$style.thinkingProcessSolution">
          <h3>2. どうやって解決しよう？</h3>
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              color="orange"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>発散</strong>
                </v-col>
                <v-col>
                  <strong>
                    ・「めんどくさい」って実は動きはじめだけじゃないか？<br>
                    ・無意識に体が動いてしまうための要素とは何か
                  </strong>
                  <div class="text-caption">
                    サボり癖に共通するのは、動き始めてしまえばなんてことないということ。<br>
                    強制されるより、自発的に生活リズムを改善して欲しい。
                  </div>
                  <v-card
                    :class="$style.timelineCard"
                  >
                    <v-img
                      src="/images/meow.png"
                      :aspect-ratio="4/3"
                    ></v-img>
                    <v-card-title>
                      ブレスト
                    </v-card-title>
                    <v-card-subtitle>
                      miro
                    </v-card-subtitle>
                    <v-card-text>
                      うぇい
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="pink"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>ヒアリング</strong>
                </v-col>
                <v-col>
                  <strong>
                    ・生活の中で時間を意識すること自体が精神的ストレスになっている<br>
                    ・自分のためでなく、ペットなど愛情を持つ対象のためなら頑張れる！
                  </strong>
                  <div class="text-caption mb-2">
                    20～40代 だらしない人 4人
                  </div>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                    ></v-img>
                  </v-avatar>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                    ></v-img>
                  </v-avatar>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                    ></v-img>
                  </v-avatar>
                  <v-avatar>
                    <v-img
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                    ></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal darker-1"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>収束</strong>
                </v-col>
                <v-col>
                  <div class="text-caption">
                    <strong>時計</strong> → 定期的に時間を伝えるインテリア<br>
                    <strong>ペット</strong> → 癒しを与える＆愛情を引き出す
                  </div>
                  <strong>愛らしくて癒されるインテリアとなる「弱いロボット」を作ろう！</strong>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </div>
      </section>

      <section :class="$style.product">
        <h2>そうしてできたのがURIBO</h2>
        <img src="/images/uribo/uribo_mainview.png" alt="">
      </section>

      <section id="points">
        <h2>推しポイント</h2>
        <v-row>
          <v-col
            v-for="(point, i) in points"
            :key="i"
            class="d-flex"
            cols="12"
            sm="12"
            md="6"
            lg="3"
          >
            <v-card
              class="mx-auto"
            >
              <v-img
                :src="point.img"
                :aspect-ratio="4/3"
              ></v-img>
              <v-card-title>
                {{ point.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ point.subtitle }}
              </v-card-subtitle>
              <v-card-text>
                {{ point.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <section id="work">
        <h2>担当した箇所</h2>
        <v-row>
          <v-col
            v-for="(work, i) in works"
            :key="i"
            class="d-flex"
            cols="12"
            sm="12"
            md="12"
            lg="6"
          >
            <v-card
              class="mx-auto"
            >
              <v-img
                :src="work.img"
                :aspect-ratio="4/3"
              ></v-img>
              <v-card-title>
                {{ work.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ work.subtitle }}
              </v-card-subtitle>
              <v-card-text>
                {{ work.text }}
              </v-card-text>
              <v-card-text>
                {{ work.text2 }}
              </v-card-text>
              <v-card-text v-if="work.link">
                <p>関連リンク：</p>
                <span
                  v-for="(link, i) in work.link"
                  :key="i"
                >
                  <a :href="link.url" target="_blank" rel="noopener noreferrer">{{link.text}}</a><br>
                </span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data() {
    return {
      windowWidth : 0,
      breakpoints: 600,
      fab: false,
      e1: 1,
      points: [
        {
          title: 'ビジュアル',
          subtitle: 'スケジュールをアプリで入力',
          text: 'URIBOたちのスリープや今日の家事予定も簡単確認。',
          img: require('~/static/images/meow.png'),
        },
        {
          title: 'キュートなボイス',
          subtitle: 'スケジュールをアプリで入力',
          text: 'URIBOたちのスリープや今日の家事予定も簡単確認。',
          img: require('~/static/images/meow.png'),
        },
        {
          title: 'いきものらしさ',
          subtitle: 'スケジュールをアプリで入力',
          text: 'URIBOたちのスリープや今日の家事予定も簡単確認。',
          img: require('~/static/images/meow.png'),
        },
        {
          title: 'アプリで簡単',
          subtitle: 'スケジュールをアプリで入力',
          text: 'URIBOたちのスリープや今日の家事予定も簡単確認。',
          img: require('~/static/images/meow.png'),
        },
        {
          title: 'NFC通信 - 1',
          subtitle: 'URIBOたちの内部側面にNFCリーダー/タグを搭載',
          text: '手を合わせるように隣に置くとNFCを読み取りおしゃべりを始めます。',
          img: require('~/static/images/meow.png'),
        },
        {
          title: 'NFC通信 - 2',
          subtitle: 'CHEBOの上面内部とぼうしにもNFCリーダー/タグを搭載',
          text: 'CHEBOはぼうしから自分の仕事を読み取ってアプリに情報を送信します。',
          img: require('~/static/images/meow.png'),
        },
      ],
      works: [
        {
          title: 'アイデア',
          subtitle: 'グループリーダーとして課題設定から課題解決法の検討など',
          text: 'まず、「健康」というテーマから様々な要素を抽出しましたが、そのなかでも体調管理を時計によって解決するとグループメンバー全員で方向性を定めました。「時計」「体調管理」「健康」などのキーワードを基にブレインストーミングで発散し、KJ法により収束させました。最終的に私発案の「運んじゃう時計」が採用されましたが、他にも触っちゃう、眺めちゃう時計を提案し、いずれも自分以外のものに強制されてアクションするものでなく、あくまでユーザーの自発的なアクションの火付けとなるものを作りたいと考えていました。そのためユーザーの行動をうまく引き出す、つまり〇〇しちゃうものを作りたい！と思い初期案「ture teku」を発案しました。',
          text2: 'また、初期案ではハコをハコが望む環境につれてくというものでした。たとえば温度の高いところや狭いところに行きたがる、猫のようなハコを考えていたのですが、ユーザーに家の中をうろうろさせる目的は達成できても、そこから家事に繋がりにくいという懸念があったため、台所や脱衣所にビーコンとなる子機を置き、常に携帯する親機を連れて行くという形へとブラッシュアップされました。さらに、ハコ同士が仲のいい友達であるという設定を追加することでハコんで会わせてあげるストーリー性が生まれ、より愛らしいものになったかと思います。',
          img: require('~/static/images/meow.png'),
        },
        {
          title: 'Webサイト',
          subtitle: 'クラファンサイトのコーディング',
          text: 'クラウドファンディングを想定したプロダクトの提案だったため、広報と支援を募るためのクラファンサイトを製作しました。仕様技術はHTML,CSS,JSでレスポンシブ対応しています。ヒーローでは健康で爽やかな生活を感じる画像を用いて、URIBOにより丁寧な暮らしを得た後のビジョンを想像してもらうことで興味や購買意欲を高めようとしています。支援額などクラファン特有のパーツはCAMPFIREを参考にマテリアルデザインを用いました。サイト内の動画は同グループの別メンバーによる製作です。',
          img: require('~/static/images/meow.png'),
          link: [
            {
              url: 'https://rigelpain.tech/x/uribo/',
              text: '紹介サイト「 運ぶ箱と整える生活 | URIBO 」'
            },
          ]
        },
      ],
      userstorys: [
        {
          step: 1,
          title: '',
          img: require('~/static/images/uribo/uribo_userstory_step1.png'),
          text: '自分の苦手なタスクの場所にCHEBOを置き、帽子のアタッチメントを付けてお仕事をあげます。',
          position: 'first',
        },
        {
          step: 2,
          title: '',
          img: require('~/static/images/uribo/uribo_userstory_step2.png'),
          text: 'URIBOにあなたの1日を教えてあげます。',
          position: 'middle',
        },
        {
          step: 3,
          title: '',
          img: require('~/static/images/uribo/uribo_userstory_step3.png'),
          text: '設定したタスクの時間が来るとYEBOとCHEBOが呼び合います。',
          position: 'middle',
        },
        {
          step: 4,
          title: '',
          img: require('~/static/images/uribo/uribo_userstory_step4.png'),
          text: 'あなたの傍にいるYEBOをCHEBOまでハコんであげましょう。',
          position: 'middle',
        },
        {
          step: 5,
          title: '5',
          img: require('~/static/images/uribo/uribo_userstory_step5.png'),
          text: 'URIBOのごきげんなおしゃべりをBGMに、ササッとタスクをこなしてしまいましょう。URIBOのボイスはCHEBOのお仕事によって変化します。',
          position: 'last',
        },
      ],
    }
  },
  watch: {
    steps (val) {
      this.e1 = val
    },
  },
  components: {
    Logo,
    VuetifyLogo,
  },
  mounted() {
    window.addEventListener('resize', this.calculateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateWindowWidth);
  },
  methods: {
    calculateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    goTo (e){
      this.$vuetify.goTo(e)
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style module  lang="scss">
section:not(:first-child) {
  margin-top: 100px;
}
h2 {
  font-size: 36px;
}
img {
  max-width: 860px;
}
.wrapper {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  overflow: visible;
}
.title {
    padding: 3px;
}
.sideNav {
  width: 180px;
  font-size: 14px;
  position: sticky !important;
  top: 160px;
  z-index: 100;
  height: 500px;
  overflow: visible;
}
.main {
  width: 900px;
  padding: 0 20px;
  margin: 0 auto;
  &Wrap {
    display: flex;
    width: 100%;
  }
}
.mainView {
  width: 700px;
  height: auto;
  .title {
    font-size: 60px;
    &Sub {
      font-size: 20px;
    }
  }
  &Img {
    width: 100%;
  }
  &Copy {
    font-size: 20px;
    line-height: 2em;
  }
  &Desc {
    display: block;
    margin-top: 20px;
    font-size: 12px;
    line-height: 2em;
    margin-bottom: 2em;
  }
}
.overview {
  margin-top: 50px;
  p {
    font-size: 20px;
  }
}
.userstory {
  &Step {
    &Desc {
      padding: 20px 50px 5px;
      color: $white;
      background-color: $darkgray;
      p {
        display: inline-block;
        height: 3em;
        font-size: 18px;
        font-weight: $thin;
      }
    }
    &Button {
      display: flex;
      justify-content: space-between;
      margin: 20px 0 10px;
    }
  }
}
.thinkingProcess {
  &Issue {
    margin-top: 30px;
  }
  &Solution {
    margin-top: 30px;
  }
}
.timelineCard {
  margin-top: 20px;
}
</style>
