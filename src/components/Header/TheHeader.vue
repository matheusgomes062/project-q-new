<template>
  <header>
    <nav>
      <div class="flex-row">
        <router-link to="/" class="hiw">
          <img src="@/assets/botao-redondo-de-informacao.svg" alt="questionMark" class="smallIcons" />
          <h4 v-if="winWidth >= 966" style="margin-right: 20px;">Como Funciona</h4>
          <h3 v-else>Ajuda</h3>
        </router-link>
        <router-link to="/" class="wpp">
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
        <h4 v-if="winWidth >= 966">Nome Sobrenome</h4>
        <h3 v-else>Conta</h3>
        <img
          v-if="winWidth >= 966"
          src="@/assets/user-circle-regular.svg"
          alt="iconePerfil"
          class="smallIcons"
          style="margin-left: 10px !important; margin-right: 0px !important;"
        />
        <img v-else src="@/assets/user-circle-regular.svg" alt="iconePerfila" class="smallIcons" />
      </a>
    </nav>
    <div class="bottomNav">
      <a id="myAccount">Minha conta</a>
      <a id="preEnroll">Pré-matrículas</a>
      <a id="favScholarhsips">Bolsas favoritas</a>
      <div v-if="winWidth < 966" class="bottomNavTxt" id="bottomNavMenu">Menu</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    winWidth: { type: Number }
  }
};
</script>

<style lang="scss">
@import "../../styles/components/header.scss";
</style>
