<template>
<div class="main">
    <img
    src="/assets/image/flower-pot.png"
    alt="flower spinning"
    class="flower"
    v-for="kembang in kembangs"
    :key="kembang.id"
    :style="{ width: kembang.width, top: kembang.top, left: kembang.left }"
    />
    <p v-if="feedback">{{ feedback }}</p>
</div>
</template>

<script>
export default {
name: "Flower",
data() {
    return {
    kembangs: [],
    };
},
created() {
    this.makeProp();
},
methods: {
    makeProp() {
    const i = Math.floor(Math.random() * 27 + 1);
    for (let n = 0; n < i; n++) {
        const id = n;
        const top = Math.floor(Math.random() * 80 + 1) + "vh";
        const left = Math.floor(Math.random() * 90 + 1) + "vw";
        const width = Math.floor(Math.random() * 5 + 1) + "em";
        this.kembangs.push({ id, top, left, width });
    }
    },
},
};
</script>

<style>
@import '/public/assets/css/flower.css';
</style>
  