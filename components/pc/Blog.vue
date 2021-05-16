<template>
    <div id="hero">
        <v-container
        fluid>
　　　　　　　<!-- 100vw:カードを画面いっぱいの広さに設定 -->
            <v-card
              width="100vw"
            >
　　　　　　　<!-- white--text:文字白 alignend：下部表示 text-center: pタグ文字中央表示 -->
　　　　　　　<!-- $vuetify.breakpoint.XXXXX: レスポンシブ対応。画面サイズによってクラス出し分け -->            
　　　　　　　<!-- "/image/my-portfolio-top.jpg"がstatic以下に配置した画面へのパス -->            
            <v-img
            class="white--text align-end text-center font-italic"
            :class="{'headline': $vuetify.breakpoint. smAndDown, 'display-1': $vuetify.breakpoint. mdAndUp}"
            src="/image/my-portfolio-top.jpg"
            >
　　　　　　　<!-- v-img内にpタグ配置で画像上に文字が表示 --> 
            <p>aaaa Wissen ist Macht</p>
            <p>知は力なり</p>
            </v-img>
            </v-card>
        </v-container>
    </div>
</template>