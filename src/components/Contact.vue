<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="contact-info">
                <h3 class="contact">Contato:</h3>
                <div class="contact-link">
                    <div class="info-item">
                        <img :src="github" alt="GitHub Logo" class="contact-img">
                        <a :href="githubLink" target="_blank" rel="noopener noreferrer">
                            <p class="github">GitHub</p>
                        </a>
                    </div>
                    <div class="info-item">
                        <img :src="linkedin" alt="LinkedIn Logo" class="contact-img">
                        <a :href="linkedinLink" target="_blank" rel="noopener noreferrer">
                            <p class="linkedin">LinkedIn</p>
                        </a>
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
            githubLink: 'https://github.com/NaykyrOliveira/magic-perception-game', 
            linkedinLink: 'https://www.linkedin.com/in/naykyr-oliveira/' 
        };
    }
};
</script>

<style>
@import '/public/assets/css/contact.css';
</style>
