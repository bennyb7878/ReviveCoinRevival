document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Staking Calculator
    const stakingInput = document.querySelector('.staking-input');
    if (stakingInput) {
        stakingInput.addEventListener('input', updateStakingRewards);
    }

    function updateStakingRewards() {
        const rvnAmount = parseFloat(stakingInput.value) || 0;
        const rewardSpan = document.querySelector('.staking-reward');
        const apy = 0.15; // 15% APY
        const reward = rvnAmount * apy;
        rewardSpan.textContent = reward.toFixed(2);
    }

    // Roadmap Animation
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    window.addEventListener('scroll', () => {
        roadmapItems.forEach(item => {
            const position = item.getBoundingClientRect();
            if (position.top < window.innerHeight * 0.8) {
                item.classList.add('visible');
            }
        });
    });
});
