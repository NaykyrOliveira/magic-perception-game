<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="contact-info">
                <h3 class="contact">Contato:</h3>
                <div class="contact-link">
                    <div class="info-item">
                        <img :src="github" :alt="git" class="contact-img">
                        <p class="github">GitHub</p>
                    </div>
                    <div class="info-item">
                        <img :src="linkedin" :alt="linkedin" class="contact-img">
                        <p class="linkedin">LinkedIn</p>
                    </div>
                </div>
            </div>
            <span class="footer__copy">
                &#169;  2024. Todos os direitos reservados
            </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            github: '../assets/image/github.png',
            linkedin: '../assets/image/linkedin.png',
        };
    }
};
</script>

<style>
@import '/public/assets/css/contact.css';
</style>