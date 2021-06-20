<template>
  <div :class="$style.profile">
    <h1 :class="$style.profileTitle">PROFILE</h1>
    <div :class="$style.profileCard">
      <div :class="$style.profileCardAvatar">
        <v-avatar
          size="200"
        >
          <img
            src="~/static/images/meow.png"
            alt="Meowow"
          >
        </v-avatar>
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
        <p :class="$style.profileCardMoreCareer">北海道 帯広市 出身</p>
        <p :class="$style.profileCardMoreCareer">函館高専 情報コース 卒業</p>
        <p :class="$style.profileCardMoreComment">
          最近原付を買って遠出が楽しくなった
        </p>
        <div :class="$style.profileCardMoreAccount">
          <v-btn icon color="green" href="https://github.com/rigelpain" target="_blank" rel="noopener noreferrer">
            <v-icon>fab fa-github-alt</v-icon>
          </v-btn>
          <v-btn icon color="green" href="https://twitter.com/rigelpain" target="_blank" rel="noopener noreferrer">
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
@import "~/assets/variables.scss";

.profile {
  width: 1000px;
  margin: 100px auto;
  &Title {
    font-size: 60px;
    letter-spacing: 0.4em;
  }
  &Card {
    margin: 30px auto;
    display: grid;
    width: 100%;
    grid-template-rows: 70px 90px 100px;
    row-gap: 40px;
    grid-template-columns: 200px 350px 350px;
    column-gap: 60px;
    grid-template-areas:
    "avatar school more"
    "avatar name more"
    "desc desc more"
    ;
    &Avatar {
      grid-area: avatar;
      // margin: 0 40px;
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
      font-size: 12px;
      text-align: center;
      padding: 50px 30px;
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
        justify-content: space-evenly;
      }
    }
  }
}

</style>
