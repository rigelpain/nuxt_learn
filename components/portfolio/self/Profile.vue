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
      <v-timeline dense >
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
        >
          <div class="py-4">
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              Lorem ipsum
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '200',
        tiitle: '生まれ',
      },
      {
        color: 'green',
        year: '1970',
      },
      {
        color: 'pink',
        year: '1980',
      },
      {
        color: 'amber',
        year: '1990',
      },
      {
        color: 'orange',
        year: '2000',
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
  margin: 100px 0;
}

.timeline {
  margin-left: 700px;
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
        bottom: 100px;
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
