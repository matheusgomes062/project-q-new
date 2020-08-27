<template>
  <header>
    <nav>
      <div class="leftContainer">
        <router-link to="/" class="hiw">
          <img src="@/assets/botao-redondo-de-informacao.svg" alt="questionMark" class="smallIcons" />
          <h4 v-if="winWidth >= 966" class="headerTxt" style="margin-right: 20px;">Como Funciona</h4>
          <h3 v-else class="headerTxt">Ajuda</h3>
        </router-link>
        <router-link to="/" class="wpp">
          <img
            src="@/assets/whatsapp-brands-green.svg"
            alt="whatsappImagem"
            class="smallIcons"
            style="margin-left: 20px"
          />
          <div class="wppTxt">
            <h3 class="headerTxt">0800 123 2222</h3>
            <h5 class="headerTxt">Envie mensagem ou ligue</h5>
          </div>
        </router-link>
      </div>
      <router-link to="/" class="logo">
        <img src="@/assets/logo-queroBolsa.svg" alt="queroBolsaLogo" />
      </router-link>
      <router-link to="/login" class="profileIcon">
        <h4 v-if="winWidth >= 966" class="headerTxt">Nome Sobrenome</h4>
        <h3 v-else class="headerTxt">Conta</h3>
        <img
          v-if="winWidth >= 966"
          src="@/assets/user-circle-regular.svg"
          alt="iconePerfil"
          class="smallIcons"
          style="margin-left: 10px !important; margin-right: 0px !important;"
        />
        <img v-else src="@/assets/user-circle-regular.svg" alt="iconePerfila" class="smallIcons" />
      </router-link>
    </nav>
    <div class="bottomNav">
      <div class="bottomNavTxt" id="myAccount">Minha conta</div>
      <div class="bottomNavTxt" id="preEnroll">Pré-matrículas</div>
      <div class="bottomNavTxt" id="favScholarhsips">Bolsas favoritas</div>
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

<style lang="css">
@import "./styles/TheHeaderStyle.css";
</style>
