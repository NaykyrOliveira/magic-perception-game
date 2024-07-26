<template>
  <div class="about">
    <div class="letter">

      <section>
        <h2>Sobre o Projeto</h2>
        <p>{{ projectDescription }}</p>
      </section>

      <section>
        <h2>Objetivo</h2>
        <p>{{ projectObjective }}</p>
      </section>

      <section>
        <h2>Impacto Esperado</h2>
        <p>{{ expectedImpact }}</p>
      </section>

      <section>
        <h2>Sobre o TEA</h2>
        <p>{{ teaExplanation }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectDescription: 'Este projeto é uma experiência interativa inspirada no universo de Harry Potter, com o objetivo de unir magia e conscientização sobre o Transtorno do Espectro Autista (TEA). O jogo visa proporcionar uma compreensão mais profunda do TEA de maneira envolvente e educativa.',
      projectObjective: 'Nosso objetivo é criar uma plataforma onde jogadores possam explorar, aprender e interagir com conceitos relacionados ao TEA, promovendo a empatia e o entendimento através de uma narrativa envolvente e desafios interativos.',
      expectedImpact: 'Esperamos que o jogo não apenas ofereça entretenimento, mas também uma nova perspectiva sobre o TEA, ajudando a aumentar a conscientização e a empatia em relação às pessoas com essa condição.',
      teaExplanation: 'O Transtorno do Espectro Autista (TEA) afeta como as pessoas percebem e interagem com o mundo. Este projeto busca iluminar essas experiências e oferecer uma maneira divertida e educativa de entender o TEA.'
    };
  }
};
</script>

<style>
@import '/public/assets/css/about.css';
</style>
