<template>
  <header>
    <nav>
      <div class="flex-row">
        <router-link to="/" class="hiw">
          <img src="@/assets/botao-redondo-de-informacao.svg" alt="questionMark" class="smallIcons" />
          <h4 v-if="winWidth.large" style="margin-right: 20px;">Como Funciona</h4>
          <h3 v-else>Ajuda</h3>
        </router-link>
        <router-link to="/" class="wpp" v-if="winWidth.large">
          <img
            src="@/assets/whatsapp-brands-green.svg"
            alt="whatsappImagem"
            class="smallIcons"
            style="margin-left: 20px"
          />
          <div class="wppTxt">
            <h3>0800 123 2222</h3>
            <h5>Envie mensagem ou ligue</h5>
          </div>
        </router-link>
      </div>
      <router-link to="/" class="logo">
        <img src="@/assets/logo-queroBolsa.svg" alt="queroBolsaLogo" />
      </router-link>
      <a class="profileIcon">
        <h4 v-if="winWidth.large">Nome Sobrenome</h4>
        <h3 v-else>Conta</h3>
        <img src="@/assets/user-circle-regular.svg" alt="iconePerfil" class="smallIcons" />
      </a>
    </nav>
    <div class="bottomNav">
      <a v-if="winWidth.large" id="myAccount">Minha conta</a>
      <a v-if="winWidth.large" id="preEnroll">Pré-matrículas</a>
      <a v-if="winWidth.large" id="favScholarhsips">Bolsas favoritas</a>
      <div v-if="winWidth.small" id="bottomNavMenu">Menu</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    winWidth: { type: Object }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../../styles/components/header.scss";
</style>
