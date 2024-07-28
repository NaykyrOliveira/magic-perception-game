<template>
  <div class="book-container">
    <div class="book-image-wrapper">
      <img 
        src="/assets/image/book.webp" 
        alt="Livro de Criaturas Mágicas" 
        class="book-image" 
      />
      <div 
        class="clickable-area" 
        @click="handleClick"
        :style="areaStyle"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      area: { top: '50px', left: '50px', width: '100px', height: '100px' } 
    };
  },
  computed: {
    areaStyle() {
      return {
        position: 'absolute',
        top: this.area.top,
        left: this.area.left,
        width: this.area.width,
        height: this.area.height,
        backgroundColor: 'transparent', 
        cursor: 'pointer'
      };
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<style>
@import '/public/assets/css/book.css';
</style>
  