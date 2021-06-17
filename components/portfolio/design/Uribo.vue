<template>
  <div :class="$style.wrapper">
    <div :class="$style.sideNav">
      <p>もくじ</p>
      <ul>
        <li>
          01 URIBO
          <ul>
            <li><v-btn small block depressed color="white" @click="goTo('#overview')">URIBOってなに？</v-btn></li>
            <li><v-btn small block depressed color="white" @click="goTo('#userstory')">ユーザーストーリー</v-btn></li>
            <li><v-btn small block depressed color="white" @click="goTo('#process')">URIBOができるまで</v-btn></li>
            <li><v-btn small block depressed color="white" @click="goTo('#point')">URIBOのポイント</v-btn></li>
            <li><v-btn small block depressed color="white" @click="goTo('#work')">担当した箇所</v-btn></li>
          </ul>
        </li>
      </ul>
    </div>
    <div :class="$style.main">
      <section :class="$style.mainView">
        <h1 :class="$style.title">
          01　URIBO
          <span :class="$style.titleSub">- 生活習慣を整えるロボット -</span>
        </h1>
        <img
          :class="$style.mainViewImg"
          src="/images/uribo_mainview.png"
        />
        <p :class="$style.mainViewCopy">
          家事もお風呂も、「腰を上げるまで」が一番めんどくさい... <br>
          ゲームや趣味に夢中になって家事や睡眠を後回しにしがちなあなた <br>
          URIBOたちと暮らすだけで「めんどくさがり」が少しづつ治っていきます
        </p>
        <p :class="$style.mainViewPlace">
          授業「情報デザイン2」 にてチーム製作したプロダクト
          テーマは「クラウドファンディングを想定した健康に関わるプロダクト」
        </p>
      </section>
      <section :class="$style.overview" id="overview">
        <h2>URIBOってなに？</h2>
        <img src="" alt="">
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
          こうして決まった時間に家事を続けることが生活習慣の改善へと繋がるのです。
        </p>
      </section>
      <section :class="$style.userstory" id="userstory">
        <h2>ユーザーストーリー</h2>
        <v-stepper non-linear  v-model="e1">
          <v-stepper-header>
            <v-stepper-step
              editable
              step="1"
            >
              1
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step
              editable
              step="2"
            >
              2
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step
              step="3"
              editable
            >
              3
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step
              step="4"
              editable
            >
              4
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step
              step="5"
              editable
            >
              5
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <img src="" alt="" :class="$style.userstoryStepImg">
              <div :class="$style.userstoryStepDesc">
                <p>
                  自分の苦手なタスクの場所にCHEBOを置き、<br>
                  帽子のアタッチメントを付けてお仕事をあげます。
                </p>
              </div>
              <v-btn
                color="primary"
                @click="e1 = 2"
              >
                Next >
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <img src="" alt="" :class="$style.userstoryStepImg">
              <div :class="$style.userstoryStepDesc">
                <p>
                  URIBOにあなたの1日を教えてあげます。
                </p>
              </div>
              <v-btn
                @click="e1 = 1"
              >
                prev
              </v-btn>
              <v-btn
                color="primary"
                @click="e1 = 3"
              >
                Next >
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <img src="" alt="" :class="$style.userstoryStepImg">
              <div :class="$style.userstoryStepDesc">
                <p>
                  設定したタスクの時間が来るとYEBOとCHEBOが呼び合います。<br>
                  CHEBOはお仕事によってボイスが変化します。
                </p>
              </div>
              <v-btn
                @click="e1 = 2"
              >
                prev
              </v-btn>
              <v-btn
                color="primary"
                @click="e1 = 4"
              >
                Next >
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <img src="" alt="" :class="$style.userstoryStepImg">
              <div :class="$style.userstoryStepDesc">
                <p>
                  あなたの傍にいるYEBOをCHEBOまでハコんであげましょう。
                </p>
              </div>
              <v-btn
                @click="e1 = 3"
              >
                prev
              </v-btn>
              <v-btn
                color="primary"
                @click="e1 = 5"
              >
                Next >
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="5">
              <img src="" alt="" :class="$style.userstoryStepImg">
              <div :class="$style.userstoryStepDesc">
                <p>
                  URIBOのごきげんなおしゃべりをBGMに、<br>
                  ササッとタスクをこなしてしまいましょう。
                </p>
              </div>
              <v-btn
                @click="e1 = 4"
              >
                prev
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </section>
      <section :class="$style.thinkingProcess" id="process">
        <h2>URIBOができるまで</h2>
        <div :class="$style.thinkingProcessIssue">
          <h3>1. どんな課題を解決しよう？</h3>
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
                  <strong>私生活がだらしないひとの生活習慣を整える</strong>
                  <div class="text-caption">
                    こもりがちな生活様式へと変化して、<br>
                    以前より生活習慣が乱れやすいのではないか？
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
                  <strong>ペルソナ</strong>
                </v-col>
                <v-col>
                  <strong>1人暮らし・後回しクセ有り・気付いたら休日が終わっている</strong>
                  <div class="text-caption mb-2">
                    Hangouts
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
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal darker-1"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>悩む</strong>
                </v-col>
                <v-col>
                  <strong>「めんどくさがり」ってどうやって治す？</strong>
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
                  <strong>気付き</strong>
                </v-col>
                <v-col>
                  <strong>
                    「めんどくさい」って実は動きはじめだけじゃないか？<br>
                    無意識に体が動いてしまうのはどんな時？
                  </strong>
                  <div class="text-caption">
                    こもりがちな生活様式へと変化して、<br>
                    以前より生活習慣が乱れやすいのではないか？
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
                  <strong>ヒアリング</strong>
                </v-col>
                <v-col>
                  <strong>
                    ・自分のためでなく、ペットなど愛情を持つ対象のためなら頑張れる！<br>
                    ・いっしょにやる人がいれば楽しい！
                  </strong>
                  <div class="text-caption mb-2">
                    Hangouts
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
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal darker-1"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>ひらめき</strong>
                </v-col>
                <v-col>
                  <div class="text-caption">
                    定期的に時間を伝える時計 → <strong>インテリア</strong><br>
                  癒しを与える＆愛情を引き出す → <strong>ペット・弱いロボット</strong>
                  </div>
                  <strong>インテリアとペットが合わさった弱いロボットを作ろう！</strong>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </div>
        <div :class="$style.thinkingProcessIssue">
          <h3>そうしてできたのがURIBO</h3>
        </div>
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
      breakpoint: 600,
      fab: false,
      e1: 1,
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
.wrapper {
  display: flex;
}
.title {
    padding: 3px;
}
.sideNav {
  width: 150px;
  font-size: 14px;
}
.main {
  max-width: 1000px;
  margin: 0 200px;
  &Wrap {
    display: flex;

  }
}
.mainView {
  width: 700px;
  height: auto;
}
.userstory {
  &Step {
    &Desc {
      padding: 20px 50px;
      color: $white;
      background-color: $darkgray;
      p {
        font-size: 18px;
        font-weight: $thin;
      }
    }
  }
}
</style>
