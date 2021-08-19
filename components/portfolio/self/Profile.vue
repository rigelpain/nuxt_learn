<template>
  <div :class="$style.self">
    <div :class="$style.profile">
      <h1 :class="$style.profileTitle">PROFILE</h1>
      <div :class="$style.profileCard">
        <div :class="$style.profileCardAvatar">
          <div :class="$style.profileCardMoreAccountItem">
          <v-avatar
            size="200"
          >
            <img
              src="~/static/images/me.png"
              alt="Meowow"
            >
          </v-avatar>
          </div>
        </div>
        <div :class="$style.profileCardSchool">
          <span>公立はこだて未来大学</span>
          <span>3年　情報デザインコース</span>
        </div>
        <div :class="$style.profileCardName">
          <div>
            <span :class="$style.ja">小林</span>
            <span :class="$style.en">Ｋｏｂａｙａｓｈｉ</span>
          </div>
          <div>
            <span :class="$style.ja">陽昭</span>
            <span :class="$style.en">Ｈａｒｕａｋｉ</span>
          </div>
        </div>
        <p :class="$style.profileCardDescription">モノづくりが好き。過去にHackUやGGJに参加しており、開発では企画・デザイン・フロントエンド・プレゼンを担当することが多いです。身近な課題をユニークなプロダクトで解決するべく、はこだて未来大学でデザインを学んでいます。</p>
        <div :class="$style.profileCardMore">
          <div :class="$style.skills">
            Skills
          </div>
          <h2>Design</h2>
          <div :class="$style.profileCardMoreAccount" class="mt-2">
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-avatar size="50">
                  <img src="~/static/images/meow.png">
                </v-avatar>
              </v-btn>
              <span :class="$style.itemCaption">Cat</span>
            </div>
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-avatar size="50">
                  <img src="~/static/images/affinity.png">
                </v-avatar>
              </v-btn>
              <span :class="$style.itemCaption">Affinity</span>
            </div>
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-avatar size="50">
                  <img src="~/static/images/xd.png">
                </v-avatar>
              </v-btn>
              <span :class="$style.itemCaption">Adobe Xd</span>
            </div>
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-avatar size="50">
                  <img src="~/static/images/Ae.png">
                </v-avatar>
              </v-btn>
              <span :class="$style.itemCaption">Adobe Ae</span>
            </div>
          </div>
          <h2 class="mt-5">Coding</h2>
          <div :class="$style.profileCardMoreAccount" class="mt-2">
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-avatar size="50">
                  <img src="~/static/images/web_icon.png">
                </v-avatar>
              </v-btn>
              <span :class="$style.itemCaption">Web</span>
            </div>
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-avatar size="50">
                  <img src="~/static/images/php.png">
                </v-avatar>
              </v-btn>
              <span :class="$style.itemCaption">php</span>
            </div>
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-avatar size="50">
                  <img src="~/static/images/wordpress.png">
                </v-avatar>
              </v-btn>
              <span :class="$style.itemCaption">WordPress</span>
            </div>
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-avatar size="50">
                  <img src="~/static/images/discord.png">
                </v-avatar>
              </v-btn>
              <span :class="$style.itemCaption">Discord bot</span>
            </div>
            <div :class="$style.item">
              <v-btn fab color="white" rounded depressed>
                <v-icon >
                  C
                </v-icon>
              </v-btn>
              <span :class="$style.itemCaption">C言語</span>
            </div>
          </div>
          <h2 class="mt-5">Account Link</h2>
          <div :class="$style.profileCardMoreAccount" class="mt-2">
            <div :class="$style.item">
              <v-btn fab color="primaryLight" href="https://twitter.com/rigelpain" target="_blank" rel="noopener noreferrer">
                <v-icon color="brown darken-4" size="30">fab fa-twitter</v-icon>
              </v-btn>
              <span :class="$style.itemCaption">Twitter</span>
            </div>
            <div :class="$style.item">
              <v-btn fab color="primaryLight" href="https://github.com/rigelpain" target="_blank" rel="noopener noreferrer">
                <v-icon color="brown darken-4" size="30">fab fa-github-alt</v-icon>
              </v-btn>
              <span :class="$style.itemCaption">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.timeline">
    <v-lazy
      transition="scroll-y-reverse-transition"
    >
      <v-timeline dense align-top>
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            class="mt-15"
          >
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
            <div class="py-4">
              <h2 :class="`headline font-weight-light ${year.color}--text`" class="mb-5">
                {{ year.title }}
              </h2>
                <v-div
                  v-for="(text, i) in year.text"
                  :key="i"
                >
                  {{ text }}
                  <br>
                </v-div>
              <v-row>
                <v-col
                  v-for="(image, i) in year.images"
                  :key="i"
                  cols="4"
                >
                  <v-card class="mt-5">
                    <v-img
                      :src="image"
                      :aspect-ratio="4/3"
                    ></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-lazy>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
    years: [
      {
        color: 'orange',
        year: '2021　NOW！',
        title: 'PBL　テーマ：子供が遊びながら病気の対策を学べるアプリ「りとるme」',
        text: [
          '概要',
          '「子供は気候変動による体調変化が起きやすい」とされているようです。',
          '...でも「薬ヤダ！」「大丈夫だもん！」にお父さんお母さんは困っています。',
          'そんな親子を救うべく、病気のなり方や治し方をアバターを使って子供に遊ばせながら学ばせることで、自然と病気との向き合い方が積極的になっていきます。',
          '　',
          'このプロジェクトは未来大、神奈工、法政、専修の四大学が共同で行っています。',
          '「りとるme」チームは3、5、4、2人の計14人の組織体制で、開発のゴールは「アプリのリリースができる状態にする」ことです。',
          '　',
          '08/16 までの活動ではサービス案のブラッシュアップを重ねつつ開発のための勉強会を開いたり、中間発表を経て企画書・設計書の作成を行ってきました',
          '現在は、夏休み明けの開発スタートに向けて設計書のアップデートや言語の勉強勉強中です',
          '　',
          'アジャイルでの開発に挑戦しており、フレームワークはXPを用いています。',
        ],
        images: [
          require('~/static/images/miraimobile.png'),
          require('~/static/images/littleme.png'),
          require('~/static/images/mirai_allmeeting.png'),
        ],
      },
      {
        color: 'red',
        year: '2020',
        title: '授業製作物',
        text: [
          'URIBO - 生活習慣を整えるロボット -',
          'テーマ：クラウドファンディングを想定した健康に関わるプロダクト',
          '',
          '家事を先延ばしにしがちなめんどくさがりの腰を上げる生活習慣改善ロボット。',
          '家事タスクはやり始めてさえしまえば片付くため、URIBOは動きはじめをサポートします。',
          '',
          '',
          'LightBottle - 光が溜まるボトル -',
          'テーマ：光を用いたメタファの表現',
          '',
          '光を水に見立て、ビンの蓋を開けると水が流れ込むように光が強くなり、ビンを傾けることにより水が流れ出るように消灯します。',
          '傾きと蓋の開閉をセンシングし、光の増減をArduinoで制御しています。',
        ],
        images: [
          require('~/static/images/uribo.png'),
          require('~/static/images/lightbottle.png'),
        ],
      },
      {
        color: 'red',
        year: '2020',
        title: '公立はこだて未来大学 デザインコース に編入学',
        text: [
          '今までのプロダクト製作では自己満足で終わるものが多く、より多くの人に喜んでもらえるモノづくりがしたいと感じ、未来大デザインコースに編入しました。',
          '感染症対策で登校は少ないですが、一人では学べないことが多く進路選択は正解だったかと思います。',
        ],
        images: [
          require('~/static/images/miraidai.jpg'),
        ],
      },
      {
        color: 'red',
        year: '2020',
        title: '函館高専を卒業',
        text: [
        ],
        images: [
          require('~/static/images/kosen5.jpg'),
        ],
      },
      {
        color: 'red',
        year: '2020',
        title: 'Global Game Jam 2020 in Hakodate',
        text: [
          '両手を失った職人による魂の鍛冶',
          '（ヘドバンで鍛冶する音ゲー）',
        ],
        images: [
          require('~/static/images/atamakaji.png'),
          require('~/static/images/forges.gif'),
        ],
      },
      {
        color: 'pink',
        year: '2019',
        title: 'HackU仙台　Cheers - パーティーの会話を活発にするIoTグラス -',
        text: [
          '控えめな人の話したいを乾杯で後押しするデバイス・アプリ',
          '',
          '初めての視点：ビジネスとの繋がり',
          'SORACOM エバンジェリスト 松下さん「社交場での人間の価値がデータとして取れる」',
          '作って楽しい自己満足作品から世の中との関わりを持たせられないか考えるようになった',
          'ユーザーの目的と開発者の目的が完全に違くても良い、むしろそれを狙ってすることは難しそう。',
        ],
        images: [
          require('~/static/images/hacku2019sendai_01.jpg'),
          require('~/static/images/hacku2019sendai_02.jpg'),
        ],
      },
      {
        color: 'pink',
        year: '2019',
        title: 'Web制作会社でアルバイトを始める',
        text: [
          '未来大OBが立ち上げたベンチャー：ハコレコドットコム株式会社',
          '業務：函館市の公式観光サイト、函館の食品会社・福祉施設・大学・私立高校',
          'コーディングとたまにデザイン',
          '最近オフィス移転でオシャレになった',
        ],
        images: [
          require('~/static/images/hakoreco.jpg'),
        ],
      },
      {
        color: 'purple',
        year: '2018',
        title: 'HackU函館 HackU東京 ',
        text: [
          '技術力が低くて1発ネタっぽいもの作った',
          'プレゼンに慣れ始めた',
        ],
        images: [
          require('~/static/images/hacku2018hakodate_01.jpg'),
          require('~/static/images/hacku2018hakodate_02.jpg'),
          require('~/static/images/hacku2018tokyo_01.jpg'),
          require('~/static/images/hacku2018tokyo_02.jpg'),
        ],
      },
      {
        color: 'cyan',
        year: '2017',
        title: 'HackU東京',
        text: [
          '同級生と初ハッカソン 山登りナビアプリ',
          '開発もプレゼンも周りのレベルに圧倒される',
        ],
        images: [
          require('~/static/images/hacku2017tokyo_01.jpg'),
          require('~/static/images/hacku2017tokyo_02.jpg'),
        ],
      },
      {
        color: 'cyan',
        year: '2017',
        title: 'Webにハマる',
        text: [
          '学生会の情報発信に使える',
          '書いたコードの結果が目に見えるから楽しい',
        ],
        images: [
        ],
      },
      {
        color: 'green',
        year: '2015',
        title: '函館高専に入学',
        text: [
          '高専は5年制',
          '生産システム工学科という複合学科に所属し、機械電気情報を横断的に勉強',
          '専攻は情報工学',
        ],
        images: [
        ],
      },
      {
        color: 'indigo',
        year: '2009 ～ 2015',
        title: '子供の科学・大人の科学にハマる',
        text: [
          '電子工作にハマる',
        ],
        images: [
          require('~/static/images/planet.jpg'),
          require('~/static/images/miniguitar.jpg'),
          require('~/static/images/rumba.jpg'),
          require('~/static/images/clock.jpg'),
        ],
      },
      {
        color: 'indigo',
        year: '2009',
        title: '初めてプログラミングに触れる',
        text: [
          'ブロックを組み合わせるビジュアルプログラミングでライントレースカーを動かすキット',
          'センシングと制御に喜びを感じる',
        ],
        images: [
          require('~/static/images/tracecar.png'),
          require('~/static/images/blockprogram.jpg'),
        ],
      },
      {
        color: 'green',
        year: '2000',
        title: '育ち',
        text: [
          '転勤族で色々な町に住んでました',
          '2000 ～ 2009 ： 大樹',
          '2009 ～ 2013 ： 根室',
          '2013 ～ 2015 ： 森',
          '2015 ～ 2021 ： 函館（一人暮らし）',
        ],
        images: [
          require('~/static/images/taiki.png'),
          require('~/static/images/nemuro.png'),
          require('~/static/images/mori.png'),
          require('~/static/images/hakodate.png'),
        ],
      },
      {
        color: 'green',
        year: '2000',
        title: '出身',
        text: [
          '北海道帯広市で生まれました',
          '農業が盛んな地域で祖父母も牛農家でした',
          '銀の匙の舞台になっていて、作者の荒川弘と僕の伯母が帯広農業高校の同級生だったらしいです',
        ],
        images: [
          require('~/static/images/obihiro.png'),
          require('~/static/images/ginsaji.jpg'),
          require('~/static/images/tokachi.jpg'),
        ],
      },
    ],
  }),
}
</script>


<style module lang="scss">
@import "~/assets/variables.scss";

.self {
  display: flex;
  width: 100%;
  margin: 30px 0;
}

.timeline {
  margin-left: 700px;
  width: 100%;
}

.profile {
  position: fixed;
  width: 600px;
  &Title {
    font-size: 60px;
    letter-spacing: 0.4em;
  }
  &Card {
    margin: 30px auto;
    display: grid;
    width: 100%;
    grid-template-rows: 70px 90px;
    row-gap: 40px;
    grid-template-columns: 200px 350px;
    column-gap: 60px;
    grid-template-areas:
    "avatar school"
    "avatar name"
    "desc desc"
    "desc desc"
    "more more"
    ;
    &Avatar {
      grid-area: avatar;
    }
    &School {
      grid-area: school;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      text-align-last: justify;
      &Sub {
        text-align-last: justify;
        // letter-spacing: 0.6rem;
      }
      div {
        display: flex;
        justify-content: space-between;
      }
    }
    &Name {
      grid-area: name;
      display: flex;
      justify-content: space-between;
      text-align-last: justify;
      div {
        display: flex;
        flex-direction: column;
        .ja {
          width: 130px;
          font-size: 48px;
          font-weight: bold;
          text-align-last: justify;
          // letter-spacing: 0.5em;
        }
        .en {
          font-size: 10px;
          width: 100%;
          text-align-last: justify;
          text-align: bottom;
        }
      }

    }
    &Description {
      grid-area: desc;
      font-size: 16px;
    }
    &More {
      grid-area: more;
      height: 100%;
      background-color: $themeColorMain;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      font-size: 12px;
      text-align: center;
      padding: 30px 50px;
      .skills {
        position: absolute;
        bottom: 115px;
        right: -80px;
        transform: rotateZ(-90deg);
        font-size: 4rem;
        letter-spacing: .5rem;
        font-weight: 700;
      }
      &Comment {
        display: inline-block;
        margin: 0 30px;
        padding: 10px 0;
        border-top: 2px $white solid;
        border-bottom: 2px $white solid;
        font-weight: bold;
      }
      &Account {
        display: flex;
        justify-content: left;
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          &:not(:first-child) {
            margin-left: 20px;
          }
          &Caption {
            font-weight: 700;
          }
        }
      }
    }
  }
}

</style>
