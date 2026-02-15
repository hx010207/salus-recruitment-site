/* ============================================================
   SALUS CLUB — script.js
   Terminal Loader → PNG Logo Reveal → Animations
   NO Three.js — lightweight, performance-optimized
   ============================================================ */

(function () {
    'use strict';

    /* ---- Performance detection ---- */
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const PARTICLE_COUNT = isMobile ? 22 : 50;
    const BINARY_COLS = isMobile ? 8 : 18;
    const HERO_BINARY_COLS = isMobile ? 10 : 22;

    /* ============ BINARY RAIN (CSS-driven, no heavy JS) ============ */
    function initBinaryRain() {
        const container = document.getElementById('binaryRain');
        if (!container || prefersReduced) return;

        for (let i = 0; i < BINARY_COLS; i++) {
            const col = document.createElement('span');
            col.className = 'binary-col';
            // Random binary string
            let txt = '';
            const len = 30 + Math.floor(Math.random() * 20);
            for (let j = 0; j < len; j++) txt += Math.random() > 0.5 ? '1' : '0';
            col.textContent = txt;
            col.style.left = (Math.random() * 100) + '%';
            col.style.animationDuration = (12 + Math.random() * 18) + 's';
            col.style.animationDelay = (-Math.random() * 20) + 's';
            col.style.fontSize = (12 + Math.random() * 4) + 'px';
            col.style.opacity = (0.3 + Math.random() * 0.5).toString();
            container.appendChild(col);
        }
    }

    /* ============ HERO BINARY BACKGROUND (blurred, moving) ============ */
    function initHeroBinary() {
        const container = document.getElementById('heroBinaryBg');
        if (!container || prefersReduced) return;

        for (let i = 0; i < HERO_BINARY_COLS; i++) {
            const col = document.createElement('span');
            col.className = 'hb-col';
            let txt = '';
            const len = 25 + Math.floor(Math.random() * 20);
            for (let j = 0; j < len; j++) txt += Math.random() > 0.5 ? '1' : '0';
            col.textContent = txt;
            col.style.left = (Math.random() * 100) + '%';
            col.style.animationDuration = (14 + Math.random() * 16) + 's';
            col.style.animationDelay = (-Math.random() * 25) + 's';
            col.style.fontSize = (13 + Math.random() * 5) + 'px';
            col.style.opacity = (0.3 + Math.random() * 0.5).toString();
            container.appendChild(col);
        }
    }

    /* ============ TERMINAL LOADING SCREEN ============ */
    const termLines = [
        { text: '> SALUS SYSTEM v4.2 INITIALIZING...', cls: 't-prompt' },
        { text: '> Loading secure modules..............  OK', cls: 't-ok', delay: 400 },
        { text: '> Mounting encrypted partitions.......  OK', cls: 't-ok', delay: 350 },
        { text: '> Verifying identity..................  OK', cls: 't-ok', delay: 300 },
        { text: '> Fetching recruitment data...........  OK', cls: 't-ok', delay: 350 },
        { text: '> Recruitment portal ready.', cls: 't-warn', delay: 300 },
        { text: '> ACCESS GRANTED _', cls: 't-prompt', delay: 500 },
    ];

    const termBody = document.getElementById('termBody');
    const termLoader = document.getElementById('terminalLoader');
    let termDone = false;

    function finishTerminal() {
        if (termDone) return;
        termDone = true;
        termLoader.classList.add('done');
        document.body.style.overflow = '';
        revealHero();
    }

    function runTerminal() {
        let i = 0;
        function next() {
            if (termDone) return;
            if (i >= termLines.length) {
                setTimeout(finishTerminal, 600);
                return;
            }
            const line = termLines[i];
            const el = document.createElement('div');
            el.className = 't-line';
            el.innerHTML = '<span class="' + line.cls + '">' + line.text + '</span>';
            termBody.appendChild(el);
            i++;
            setTimeout(next, line.delay || 200);
        }
        setTimeout(next, 300);
    }

    // Block scroll during terminal
    document.body.style.overflow = 'hidden';
    // Safety: auto-skip after 5s
    setTimeout(finishTerminal, 5000);

    /* ============ HERO REVEAL (Logo fade+scale, no circle) ============ */
    function revealHero() {
        // Logo fade-in (no circle, no ring)
        const logo = document.getElementById('heroLogo');
        if (logo) logo.classList.add('visible');

        // GSAP text reveal
        if (window.gsap) {
            gsap.from('.hero-tag', { y: 20, opacity: 0, duration: 0.8, delay: 0.1 });
            gsap.from('.hero-text h1', { y: 30, opacity: 0, duration: 0.9, delay: 0.25 });
            gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.7, delay: 0.45 });
            gsap.from('.hero-btns', { y: 20, opacity: 0, duration: 0.7, delay: 0.6 });
        }
    }

    /* ============ ICONS ============ */
    document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        runTerminal();
        initBinaryRain();
        initHeroBinary();
    });

    /* ============ CUSTOM CURSOR ============ */
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    if (!isMobile && dot && ring) {
        // Dot: instant 1:1 tracking on mousemove — zero lag
        document.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            dot.style.transform = 'translate3d(' + (mx - 3) + 'px,' + (my - 3) + 'px, 0)';
        });
        // Ring: fast lerp (0.45) for snappy trailing feel
        (function tickRing() {
            rx += (mx - rx) * 0.45;
            ry += (my - ry) * 0.45;
            ring.style.transform = 'translate3d(' + (rx - 18) + 'px,' + (ry - 18) + 'px, 0)';
            requestAnimationFrame(tickRing);
        })();
    }

    /* ============ SMOOTH SCROLL (LENIS) ============ */
    let lenis;
    function initLenis() {
        if (!window.Lenis) return;
        lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
    }

    document.addEventListener('click', e => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target && lenis) lenis.scrollTo(target, { offset: -70 });
        else if (target) target.scrollIntoView({ behavior: 'smooth' });
    });

    /* ============ NAVBAR ============ */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.addEventListener('click', e => {
            if (e.target.tagName === 'A') navLinks.classList.remove('open');
        });
    }

    /* ============ PARTICLES (Canvas, performance-adaptive) ============ */
    const canvas = document.getElementById('heroCanvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    let particles = [];

    class Particle {
        constructor(w, h) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.r = Math.random() * 1.8 + 0.3;
            this.a = Math.random() * 0.4 + 0.1;
            this.c = Math.random() > 0.5 ? '59,130,246' : '220,38,38';
        }
        update(w, h) {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > w) this.vx *= -1;
            if (this.y < 0 || this.y > h) this.vy *= -1;
        }
        draw(c) {
            c.fillStyle = 'rgba(' + this.c + ',' + this.a + ')';
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, 6.2832);
            c.fill();
        }
    }

    function initCanvas() {
        if (!canvas || !ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle(canvas.width, canvas.height));
    }

    function drawParticles() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const w = canvas.width, h = canvas.height;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.update(w, h);
            p.draw(ctx);

            // Connection lines (desktop only)
            if (!isMobile) {
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const ddx = p.x - q.x, ddy = p.y - q.y;
                    const dist = ddx * ddx + ddy * ddy;
                    if (dist < 10000) {
                        ctx.strokeStyle = 'rgba(59,130,246,' + (0.08 * (1 - dist / 10000)) + ')';
                        ctx.lineWidth = 0.6;
                        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
                    }
                }
            }
        }
        requestAnimationFrame(drawParticles);
    }

    window.addEventListener('resize', () => {
        if (canvas) { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    }, { passive: true });

    initCanvas();
    drawParticles();

    /* ============ GSAP SCROLL ANIMATIONS ============ */
    function initScrollAnims() {
        if (!window.gsap || !window.ScrollTrigger) return;
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.sec-head, .about-body, .about-body p, .info-card, .ben-row').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 85%' },
                y: 35, opacity: 0, duration: 0.7, ease: 'power2.out'
            });
        });

        /* t-card animation handled by initTeamStack below */
    }

    /* ============ TEAM STACKED CARDS ANIMATION ============ */
    function initTeamStack() {
        const container = document.getElementById('teamsStack');
        const cards = gsap.utils.toArray('#teamsStack .t-card');
        if (!container || !cards.length || !window.gsap || !window.ScrollTrigger) return;

        const GAP = 24; // spacing between cards when unstacked
        const STACK_OFFSET = 28; // vertical offset per card when stacked
        const SCALE_STEP = 0.04; // scale decrease per card when stacked

        // Measure card height (all cards roughly same size)
        // Temporarily make first card relative to measure
        cards[0].style.position = 'relative';
        const cardH = cards[0].offsetHeight;
        cards[0].style.position = '';

        // Total height when fully spread
        const totalH = cards.length * cardH + (cards.length - 1) * GAP;
        container.style.height = totalH + 'px';

        // Set initial stacked state
        cards.forEach((card, i) => {
            gsap.set(card, {
                y: i * STACK_OFFSET,
                scale: 1 - i * SCALE_STEP,
                zIndex: cards.length - i,
                opacity: i === 0 ? 1 : Math.max(0.5, 1 - i * 0.12)
            });
        });

        // ScrollTrigger scrub timeline — reverses on scroll up
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 65%',
                end: 'top 5%',
                scrub: 0.5,
            }
        });

        cards.forEach((card, i) => {
            tl.to(card, {
                y: i * (cardH + GAP),
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'none'
            }, i * 0.12);
        });
    }

    /* ============ TEAM MODAL ============ */
    function initTeamModal() {
        const overlay = document.getElementById('teamModalOverlay');
        const modal = document.getElementById('teamModal');
        const modalTitle = document.getElementById('teamModalTitle');
        const modalDesc = document.getElementById('teamModalDesc');
        const closeBtn = document.getElementById('teamModalClose');
        if (!overlay || !modal) return;

        function openModal(card) {
            const title = card.querySelector('h3').textContent;
            const desc = card.getAttribute('data-desc');
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            overlay.classList.add('active');
        }

        function closeModal() {
            overlay.classList.remove('active');
        }

        document.querySelectorAll('.t-card').forEach(card => {
            card.addEventListener('click', () => openModal(card));
        });

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', e => {
            if (e.target === overlay) closeModal();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
        });
    }

    /* ============ MAGNETIC BUTTONS ============ */
    function initMagnetic() {
        if (isMobile) return;
        document.querySelectorAll('.btn-fill, .btn-outline, .nav-cta-link').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect();
                const ox = e.clientX - r.left - r.width / 2;
                const oy = e.clientY - r.top - r.height / 2;
                btn.style.transform = 'translate(' + (ox * 0.12) + 'px,' + (oy * 0.12) + 'px)';
            });
            btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
        });
    }

    /* ============ BOOT ============ */
    window.addEventListener('load', () => {
        initLenis();
        initScrollAnims();
        initTeamStack();
        initTeamModal();
        initMagnetic();
    });

    console.log('%c🛡️ SALUS CLUB', 'font-size:18px;font-weight:bold;color:#3b82f6');
    console.log('%cSecuring the Digital Frontier', 'font-size:12px;color:#dc2626');
})();
