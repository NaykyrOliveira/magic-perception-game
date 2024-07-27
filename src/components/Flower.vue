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

<style scoped>
.main {
    width: 95vw;
    height: 30vh;
    margin: auto;
}

.flower {
    position: absolute;
    animation: spin-bloom 5s ease-in-out reverse infinite;
    filter: opacity(60%);
}

    @keyframes spin-bloom {
    0% {
        transform: rotate(290deg);
    }
    50% {
        transform: rotate(90deg) scale(0.1);
    }
    100% {
        transform: rotate(0deg) scale(0.2);
    }
}
</style>
  