class FloatingHearts extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .heart {
                    position: absolute;
                    color: rgba(236, 72, 153, 0.7);
                    font-size: 1.5rem;
                    animation: float 5s linear infinite;
                    pointer-events: none;
                    z-index: 0;
                }
                
                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.7;
                    }
                    50% {
                        transform: translateY(-20px) rotate(10deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-40px) rotate(0deg);
                        opacity: 0;
                    }
                }
            </style>
            <div class="hearts-container"></div>
        `;
        
        this.createHearts();
    }
    
    createHearts() {
        const container = this.shadowRoot.querySelector('.hearts-container');
        const heartCount = 35;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;
            heart.style.animationDuration = `${Math.random() * 10 + 5}s`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(heart);
        }
    }
}

customElements.define('floating-hearts', FloatingHearts);