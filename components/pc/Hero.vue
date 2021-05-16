<template>
  <div id="hero">
    <v-container>
        <!-- white--text:文字白 alignend：下部表示 text-center: pタグ文字中央表示 -->
        <!-- $vuetify.breakpoint.XXXXX: レスポンシブ対応。画面サイズによってクラス出し分け -->            
        <!-- "/image/my-portfolio-top.jpg"がstatic以下に配置した画面へのパス -->            
        <v-img
          class="align-end text-center"
          src="/images/hero.png"
        >
          <!-- v-img内にpタグ配置で画像上に文字が表示 --> 
          <!-- <p>aaaa Wissen ist Macht</p>
          <p>知は力なり</p> -->
        </v-img>
    </v-container>
  </div>
</template>

