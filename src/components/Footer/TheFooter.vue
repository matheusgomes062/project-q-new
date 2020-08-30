<template>
  <footer>
    <!-- sorry i couldn't find another way to make this work with the time i had -->
    <div v-if="winWidth >= 966" class="helpContainer">
      <div class="help">
        <router-link to="/" class="footerSection">
          <img src="@/assets/whatsapp-brands.svg" alt="wppHelp" />
          <div>
            <h3>0800 123 2222</h3>
            <h3>Seg - Sex 8h-22h</h3>
          </div>
        </router-link>
        <router-link to="/" class="footerSection">
          <img src="@/assets/comments-regular.svg" alt="chatHelp" />
          <div>
            <h3>Chat ao vivo</h3>
            <h3>Seg - Sex 8h-22h</h3>
          </div>
        </router-link>
        <router-link to="/" class="footerSection">
          <img src="@/assets/envelope-regular.svg" alt="emailHelp" />
          <div>
            <h3>Mande um e-mail</h3>
            <h3>Respondemos rapidinho</h3>
          </div>
        </router-link>
        <router-link to="/" class="footerSection">
          <img src="@/assets/botao-redondo-de-informacao-white.svg" alt="centralHelp" />
          <div>
            <h3>Central de ajuda</h3>
            <h3>Encontre todas as respostas</h3>
          </div>
        </router-link>
      </div>
      <div class="madeWithLove">
        <p>Feito com</p>
        <img src="@/assets/heart-regular.svg" alt="heart" />
        <p>pela Quero Educação</p>
      </div>
    </div>
    <!-- if mobile
    <div v-else class="helpContainer">
      <div class="help">
        <router-link to="/" class="footerSection wppFooterSection">
          <img
            src="@/assets/whatsapp-brands.svg"
            alt="wppHelp"
            class="iconsHelp"
            style="margin: 0 20px"
          />
          <div class="wppHelpTxt">
            <h3>0800 123 2222</h3>
            <h3 style="font-weight: 100;">Segunda a sexta de 8h às 22h</h3>
          </div>
        </router-link>
        <div class="mobileContainerFooter">
          <router-link to="/" class="footerSection chat">
            <img src="@/assets/comments-regular.svg" alt="wppHelp" class="iconsHelp" />
            <div class="wppHelpTxt">
              <h3>Chat</h3>
            </div>
          </router-link>
          <router-link to="/" class="footerSection email">
            <img src="@/assets/envelope-regular.svg" alt="wppHelp" class="iconsHelp" />
            <div class="wppHelpTxt">
              <h3>E-mail</h3>
            </div>
          </router-link>
          <router-link to="/" class="footerSection helpI">
            <img
              src="@/assets/botao-redondo-de-informacao-white.svg"
              alt="wppHelp"
              class="iconsHelp"
            />
            <div class="wppHelpTxt">
              <h3>Ajuda</h3>
            </div>
          </router-link>
        </div>
      </div>
      <div class="love">
        <p class="heartTxt">Feito com</p>
        <img id="heartIcon" src="@/assets/heart-regular.svg" alt="heart" />
        <p class="heartTxt">pela Quero Educação</p>
      </div>
    </div>-->
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    winWidth: { type: Number }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/footer.scss";
</style>
