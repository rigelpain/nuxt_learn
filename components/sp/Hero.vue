<template>
  <div id="hero">
    <v-container class="pa-0">
        <!-- white--text:文字白 alignend：下部表示 text-center: pタグ文字中央表示 -->
        <!-- $vuetify.breakpoint.XXXXX: レスポンシブ対応。画面サイズによってクラス出し分け -->            
        <!-- "/image/my-portfolio-top.jpg"がstatic以下に配置した画面へのパス -->            
        <v-responsive :aspect-ratio="16/9">
          <div :class="$style.BackStudy" background="primary">
          <v-responsive :aspect-ratio="1/1">
            <v-img
              class="align-end text-center"
              src="/images/SpHero.svg"
              contain
            >
            </v-img>
          </v-responsive>
          </div>
        </v-responsive>

    </v-container>
  </div>
</template>

<style module>
.BackStudy {
  width: 100%;
  height: 100%;
  background-color: var(--v-primary-base);
}
.BackHobby {
  width: 100%;
  height: 100%;
  background-color: var(--v-primary-base);
}
</style>