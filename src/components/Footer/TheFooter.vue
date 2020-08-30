<template>
  <footer>
    <div class="helpContainer">
      <div class="help">
        <router-link to="/" class="footerSection" style="margin-bottom: 4px;">
          <img src="@/assets/whatsapp-brands.svg" alt="wppHelp" style="margin: 0 10px 0 0" />
          <div v-if="winWidth.large">
            <h3>0800 123 2222</h3>
            <h3>Seg - Sex 8h-22h</h3>
          </div>
          <div v-else>
            <div>
              <h3>0800 123 2222</h3>
              <h3>Segunda a sexta 8h às 22h</h3>
            </div>
          </div>
        </router-link>
        <router-link
          to="/"
          class="footerSection"
          :class="winWidth.large ? '' :  'smallIconsFooter'"
        >
          <img src="@/assets/comments-regular.svg" alt="chatHelp" />
          <div v-if="winWidth.large">
            <h3>Chat ao vivo</h3>
            <h3>Seg - Sex 8h-22h</h3>
          </div>
          <div v-else>Chat</div>
        </router-link>
        <router-link
          to="/"
          class="footerSection"
          :class="winWidth.large ? '' :  'smallIconsFooter'"
        >
          <img src="@/assets/envelope-regular.svg" alt="emailHelp" />
          <div v-if="winWidth.large">
            <h3>Mande um e-mail</h3>
            <h3>Respondemos rapidinho</h3>
          </div>
          <div v-else>E-mail</div>
        </router-link>
        <router-link
          to="/"
          class="footerSection"
          :class="winWidth.large ? '' :  'smallIconsFooter' "
        >
          <img src="@/assets/botao-redondo-de-informacao-white.svg" alt="centralHelp" />
          <div v-if="winWidth.large">
            <h3>Central de ajuda</h3>
            <h3>Encontre todas as respostas</h3>
          </div>
          <div v-else>Ajuda</div>
        </router-link>
      </div>
      <div class="madeWithLove">
        <p>Feito com</p>
        <img src="@/assets/heart-regular.svg" alt="heart" />
        <p>pela Quero Educação</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    winWidth: { type: Object }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/components/footer.scss";
</style>
