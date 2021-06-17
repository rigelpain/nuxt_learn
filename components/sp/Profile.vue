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
        <!-- <span :class="$style.profileCardNameSub">Kobayashi Haruaki</span> -->
      </div>
      <p :class="$style.profileCardDescription">モノづくりが好きで、企画・フロントエンド・プレゼンを担当することが多いです。身近な課題をユニークなプロダクトで解決するべく、はこだて未来大学でデザインを学んでいます。</p>
      <div :class="$style.profileCardMore">
        <p :class="$style.profileCardMoreCareer">北海道 帯広市 出身</p>
        <p :class="$style.profileCardMoreCareer">函館高専 情報コース 卒業</p>
        <p :class="$style.profileCardMoreComment">
          最近原付を買って遠出が楽しくなった
        </p>
        <div :class="$style.profileCardMoreAccount">
          <v-btn>
            <v-icon>fab fa-github-alt</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
