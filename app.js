/**
 * BHĀRATA KALĀ - Indian Art Heritage Portal
 * Comprehensive Interactive Application Logic
 * Featuring 14 Canonical Indian Art Masterpieces
 */

(function() {
    'use strict';

    // =========================================================================
    // 1. DATA SOURCE - 14 CANONICAL ARTIFACTS & GEOGRAPHIC ORIGINS
    // =========================================================================
    const artifactsData = [
        {
            id: 'indus',
            place: "Mohenjo-Daro",
            region: "Sindh, Indus Valley",
            coords: [27.3292, 68.1388],
            date: "2500 BCE",
            title: "The Dancing Girl",
            period: "Indus Valley Civilization",
            epoch: "ancient",
            image: "dancing-girl.jpg",
            medium: "Lost-wax cast bronze statuette",
            desc: "<strong>Historical Context:</strong> A prehistoric bronze statuette sculpted using the lost-wax (cire-perdue) technique circa 2300–1750 BCE in the Indus Valley metropolis of Mohenjo-Daro.<br><br><strong>Cultural Significance:</strong> Demonstrates remarkable metallurgical mastery and artistic naturalism. Adorned with bangles covering her left arm and an amulet necklace, her confident stance provides rare insight into the aesthetics, dress, and social identity of ancient Harappan society."
        },
        {
            id: 'yakshi',
            place: "Patna",
            region: "Bihar",
            coords: [25.6100, 85.1414],
            date: "3rd Century BCE",
            title: "Didarganj Yakshi",
            period: "Mauryan Empire",
            epoch: "mauryan",
            image: "yakshi.jpg",
            medium: "Chunar sandstone with mirror-like Mauryan polish",
            desc: "<strong>Historical Context:</strong> Unearthed on the banks of the Ganges in Didarganj, Patna, this life-sized fly-whisk bearer represents the apex of Mauryan monumental stone sculpting.<br><br><strong>Cultural Significance:</strong> Her lustrous mirror polish, voluptuous contours, and intricate heavy jewels epitomize the classical Indian ideal of feminine grace and fertility (Yakshi). Considered by art historians as one of the world's most breathtaking ancient stone sculptures."
        },
        {
            id: 'maurya',
            place: "Sarnath",
            region: "Uttar Pradesh",
            coords: [25.3811, 83.0222],
            date: "250 BCE",
            title: "Lion Capital of Ashoka",
            period: "Mauryan Empire",
            epoch: "mauryan",
            image: "lion-capital.jpg",
            medium: "Carved polished Chunar sandstone monolith",
            desc: "<strong>Historical Context:</strong> Carved out of a single block of polished Chunar sandstone under Emperor Ashoka the Great circa 250 BCE at Deer Park in Sarnath, where the Buddha first proclaimed the Dharma.<br><br><strong>Cultural Significance:</strong> An undisputed pinnacle of Mauryan monumental sculpture. The four addorsed lions symbolizing sovereignty, valor, and moral law were officially adopted in 1950 as the National Emblem of the Republic of India."
        },
        {
            id: 'sanchi',
            place: "Sanchi",
            region: "Madhya Pradesh",
            coords: [23.4795, 77.7397],
            date: "1st Century BCE",
            title: "Sanchi Great Stupa & Toranas",
            period: "Shunga & Satavahana Epoch",
            epoch: "mauryan",
            image: "sanchi.jpg",
            medium: "Ashlar stone masonry & carved sandstone Torana gateways",
            desc: "<strong>Historical Context:</strong> The oldest stone sanctuary in India, originally commissioned by Emperor Ashoka and embellished with four monumental carved Torana gateways during the Satavahana era.<br><br><strong>Cultural Significance:</strong> The intricate relief panels narrate Jataka tales, aniconic symbols of the Buddha, and lush salabhanjika yakshinis. Marked the monumental transition of Indian architecture from perishable timber to eternal stone."
        },
        {
            id: 'ajanta',
            place: "Ajanta Caves",
            region: "Maharashtra",
            coords: [20.5519, 75.7033],
            date: "5th Century CE",
            title: "Ajanta Cave Frescoes",
            period: "Gupta Golden Age",
            epoch: "classical",
            image: "ajanta.webp",
            medium: "Mineral pigment fresco tempera on rock-cut mud plaster",
            desc: "<strong>Historical Context:</strong> Masterpiece mural frescoes created inside rock-cut Buddhist cave sanctuaries in Maharashtra, reaching their zenith during the Harishena reign of the Vakataka and Gupta Golden Age.<br><br><strong>Cultural Significance:</strong> Represents the classical golden age of ancient Indian painting. With expressive eyes, nuanced mudras, and mineral palettes, masterpieces like the Bodhisattva Padmapani embody spiritual peace and have deeply inspired Asian art."
        },
        {
            id: 'mahabalipuram',
            place: "Mamallapuram",
            region: "Tamil Nadu",
            coords: [12.6172, 80.1927],
            date: "7th Century CE",
            title: "Descent of the Ganges & Shore Temple",
            period: "Pallava Dynasty",
            epoch: "classical",
            image: "mahabalipuram.jpg",
            medium: "Monolithic open-air granite cliff bas-relief",
            desc: "<strong>Historical Context:</strong> Carved during the reign of King Narasimhavarman I (Mamalla) along the Coromandel coast of the Bay of Bengal.<br><br><strong>Cultural Significance:</strong> The world's largest monolithic open-air rock relief. Spanning two enormous granite boulders, it depicts the descent of the sacred river Ganga to earth amidst life-sized elephants, rishis, kinnaras, and animals in harmonious celebration."
        },
        {
            id: 'ellora',
            place: "Ellora Caves",
            region: "Maharashtra",
            coords: [20.0268, 75.1790],
            date: "8th Century CE",
            title: "Kailasa Rock-Cut Temple",
            period: "Rashtrakuta Dynasty",
            epoch: "classical",
            image: "ellora.jpg",
            medium: "Monolithic top-down excavation from solid basalt cliff",
            desc: "<strong>Historical Context:</strong> Excavated vertically from top to bottom out of a single volcanic basalt cliff face under Rashtrakuta King Krishna I in the 8th century CE.<br><br><strong>Cultural Significance:</strong> An engineering and artistic marvel twice the footprint of the Parthenon in Athens. Carved without assembling stones, it features towering monolithic elephant sculptures and dramatic relief panels of Ravana shaking Mount Kailasa."
        },
        {
            id: 'khajuraho',
            place: "Khajuraho",
            region: "Madhya Pradesh",
            coords: [24.8530, 79.9199],
            date: "11th Century CE",
            title: "Kandariya Mahadeva Temple Reliefs",
            period: "Chandela Dynasty",
            epoch: "medieval",
            image: "khajuraho.jpg",
            medium: "Buff sandstone Nagara architectural sculpture",
            desc: "<strong>Historical Context:</strong> Commissioned by Chandela monarchs circa 1030 CE as the grandest shrine dedicated to Lord Shiva at Khajuraho.<br><br><strong>Cultural Significance:</strong> Celebrated for over 800 intricately carved sandstone figures depicting the celebration of cosmic life, divine union, musicians, and celestial apsaras. Emphasizes the sacred harmony between the spiritual and sensual dimensions in medieval Indian thought."
        },
        {
            id: 'chola',
            place: "Thanjavur",
            region: "Tamil Nadu",
            coords: [10.7828, 79.1318],
            date: "11th Century CE",
            title: "Bronze Nataraja",
            period: "Imperial Chola Dynasty",
            epoch: "medieval",
            image: "nataraja.webp",
            medium: "Lost-wax cire-perdue sacred panchaloha bronze",
            desc: "<strong>Historical Context:</strong> Created by master sthapatis in the Kaveri Delta under imperial Chola patronage (9th–13th century CE), centering around Thanjavur and Chidambaram.<br><br><strong>Cultural Significance:</strong> A profound visual synthesis of metaphysics, science, and sacred dance depicting Shiva as Lord of Cosmic Dance (Ananda Tandava) inside an aureole of fire. Celebrated globally as one of humanity's highest sculptural achievements."
        },
        {
            id: 'konark',
            place: "Konark",
            region: "Odisha",
            coords: [19.8876, 86.0945],
            date: "13th Century CE",
            title: "Sun Temple Great Stone Chariot Wheel",
            period: "Eastern Ganga Dynasty",
            epoch: "medieval",
            image: "konark.jpg",
            medium: "Carved Khondalite stone & chlorite reliefs",
            desc: "<strong>Historical Context:</strong> Built by King Narasimhadeva I of the Eastern Ganga Dynasty circa 1250 CE on the shores of the Bay of Bengal in Odisha.<br><br><strong>Cultural Significance:</strong> Conceived as a colossal celestial chariot for the Sun God Surya, pulled by seven horses with 24 carved stone wheels. Each 3-meter wheel functions as an astronomical sundial calculating precise time down to the minute, adorned with detailed friezes of Odishan courtly life."
        },
        {
            id: 'hampi',
            place: "Hampi",
            region: "Karnataka",
            coords: [15.3350, 76.4600],
            date: "16th Century CE",
            title: "Vijayanagara Stone Chariot",
            period: "Vijayanagara Empire",
            epoch: "imperial",
            image: "hampi.jpg",
            medium: "Interlocking carved granite blocks & ornate stone wheels",
            desc: "<strong>Historical Context:</strong> Erected inside the Vijaya Vittala temple complex under Emperor Krishnadevaraya during the golden age of the Vijayanagara Empire.<br><br><strong>Cultural Significance:</strong> This iconic monolithic shrine carved to resemble the processional vehicle of Garuda symbolizes the peak of Vijayanagara imperial architecture, flanked by battle reliefs and musical granite pillar colonnades."
        },
        {
            id: 'tanjore',
            place: "Thanjavur",
            region: "Tamil Nadu",
            coords: [10.7870, 79.1378],
            date: "16th–17th Century CE",
            title: "Thanjavur Painting of Lord Krishna",
            period: "Maratha & Nayaka Epoch",
            epoch: "imperial",
            image: "tanjore.jpg",
            medium: "22-karat gold foil relief, glass stones & natural pigments on teak wood",
            desc: "<strong>Historical Context:</strong> Flourished under the patronage of the Nayaka and Maratha rulers of Thanjavur during the 16th to 18th centuries.<br><br><strong>Cultural Significance:</strong> Distinguished by raised relief gesso work layered with pure 22-karat gold foil and embedded glass gems. This opulent portrait of baby Krishna illustrates the royal South Indian synthesis of sacred icon painting and royal jewelry craft."
        },
        {
            id: 'mughal',
            place: "Agra",
            region: "Uttar Pradesh",
            coords: [27.1767, 78.0081],
            date: "17th Century CE",
            title: "Mughal Miniature Paintings",
            period: "Mughal Empire",
            epoch: "imperial",
            image: "jahangir.jpg",
            medium: "Opaque watercolor, lapis lazuli, gold leaf on wasli paper",
            desc: "<strong>Historical Context:</strong> Flourished under imperial atelier patronage across Agra, Delhi, and Lahore under emperors Akbar, Jahangir, and Shah Jahan during the 16th to 17th centuries.<br><br><strong>Cultural Significance:</strong> Blended Persian precision, indigenous Indian vibrancy, and European chiaroscuro realism. Employing ground lapis lazuli, malachite, and gold leaf, these miniature folios document imperial court life, flora, fauna, and mystic poetry with breathtaking detail."
        },
        {
            id: 'bani-thani',
            place: "Kishangarh",
            region: "Rajasthan",
            coords: [26.5744, 74.8643],
            date: "18th Century CE",
            title: "Kishangarh Radha (Bani Thani)",
            period: "Rajput Kingdom of Marwar",
            epoch: "imperial",
            image: "bani-thani.jpg",
            medium: "Fine gouache miniature on handmade paper",
            desc: "<strong>Historical Context:</strong> Painted by royal master artist Nihal Chand under the patron poet-king Sawant Singh of Kishangarh circa 1750 CE.<br><br><strong>Cultural Significance:</strong> Revered worldwide as the 'Mona Lisa of India', Bani Thani is depicted with elongated lotus-petal eyes, arched brows, a delicate enigmatic smile, and a sheer gossamer veil, defining the lyrical apex of Rajasthani romantic art."
        }
    ];

    // =========================================================================
    // 2. PARTICLE CONSTELLATION & MOUSE GLOW ENGINE
    // =========================================================================
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    let W, H, particles = [];
    let mouse = { x: -1000, y: -1000 };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const PARTICLE_COUNT = reduceMotion ? 0 : (window.innerWidth < 768 ? 24 : 45);

    function resizeCanvas() {
        if (!canvas || !ctx) return;
        const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = Math.round(W * ratio);
        canvas.height = Math.round(H * ratio);
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.r = Math.random() * 1.8 + 0.6;
            this.baseR = this.r;
            this.alpha = Math.random() * 0.45 + 0.15;
            this.goldHue = Math.random() > 0.4;
        }
        update() {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 0 && dist < 170) {
                const force = (170 - dist) / 170;
                this.vx += (dx / dist) * force * 0.08;
                this.vy += (dy / dist) * force * 0.08;
                this.r = this.baseR + force * 2.2;
            } else {
                this.r += (this.baseR - this.r) * 0.1;
            }
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= 0.99;
            this.vy *= 0.99;
            if (this.x < -40 || this.x > W + 40 || this.y < -40 || this.y > H + 40) {
                this.reset();
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = this.goldHue
                ? `rgba(212, 175, 55, ${this.alpha})`
                : `rgba(180, 200, 255, ${this.alpha * 0.8})`;
            ctx.fill();
        }
    }

    if (canvas && ctx && !reduceMotion) {
        for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

        function drawConnections() {
            const count = particles.length;
            for (let i = 0; i < count; i++) {
                const pi = particles[i];
                for (let j = i + 1; j < count; j++) {
                    const pj = particles[j];
                    const dx = pi.x - pj.x;
                    const dy = pi.y - pj.y;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < 18225) {
                        const dist = Math.sqrt(distSq);
                        ctx.beginPath();
                        ctx.moveTo(pi.x, pi.y);
                        ctx.lineTo(pj.x, pj.y);
                        ctx.strokeStyle = `rgba(212, 175, 55, ${0.14 * (1 - dist / 135)})`;
                        ctx.lineWidth = 0.65;
                        ctx.stroke();
                    }
                }
            }
        }

        let animId;
        function animateParticles() {
            ctx.clearRect(0, 0, W, H);
            particles.forEach(p => { p.update(); p.draw(); });
            drawConnections();
            animId = requestAnimationFrame(animateParticles);
        }
        animateParticles();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(animId);
            else animateParticles();
        });
    }

    // ── Mouse Tracking & 3D Tilt ──
    const mouseGlow = document.getElementById('mouseGlow');
    const glassCard = document.getElementById('glassCard');
    const mesh = document.querySelector('.bg-mesh');
    let targetRx = 0, targetRy = 0, rx = 0, ry = 0;
    let lastMove = 0;

    document.addEventListener('pointermove', e => {
        const now = performance.now();
        if (now - lastMove < 16) return;
        lastMove = now;

        const mx = e.clientX;
        const my = e.clientY;
        mouse.x = mx;
        mouse.y = my;

        if (mouseGlow) {
            mouseGlow.style.left = mx + 'px';
            mouseGlow.style.top = my + 'px';
        }

        if (mesh) {
            mesh.style.setProperty('--bg-x', `${50 + (mx / window.innerWidth - 0.5) * 8}%`);
            mesh.style.setProperty('--bg-y', `${50 + (my / window.innerHeight - 0.5) * 8}%`);
        }

        if (glassCard && !reduceMotion) {
            const rect = glassCard.getBoundingClientRect();
            const cX = rect.left + rect.width / 2;
            const cY = rect.top + rect.height / 2;
            targetRx = ((my - cY) / (window.innerHeight / 2)) * -4.5;
            targetRy = ((mx - cX) / (window.innerWidth / 2)) * 4.5;
        }
    });

    if (glassCard && !reduceMotion) {
        function tiltLoop() {
            rx += (targetRx - rx) * 0.08;
            ry += (targetRy - ry) * 0.08;
            glassCard.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
            requestAnimationFrame(tiltLoop);
        }
        tiltLoop();

        document.addEventListener('pointerleave', () => {
            targetRx = 0; targetRy = 0;
            mouse.x = -1000; mouse.y = -1000;
        });
    }

    // =========================================================================
    // 3. LIQUID GLASS AUTHENTICATION SYSTEM (HARDCODED AUTH)
    // =========================================================================
    const HARDCODED_EMAIL = 'nisheedkumarrout@gmail.com';
    const HARDCODED_PASS = '1234';

    const authScreen = document.getElementById('authScreen');
    const appPortal = document.getElementById('appPortal');
    const loginView = document.getElementById('loginView');
    const signupView = document.getElementById('signupView');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function switchAuthView(fromView, toView) {
        if (!fromView || !toView) return;
        fromView.classList.remove('view-active');
        fromView.classList.add('view-hidden');
        toView.classList.remove('view-hidden');
        toView.classList.add('view-active');
        const input = toView.querySelector('input');
        if (input) input.focus({ preventScroll: true });
    }

    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');
    if (toSignup) toSignup.addEventListener('click', e => { e.preventDefault(); switchAuthView(loginView, signupView); });
    if (toLogin) toLogin.addEventListener('click', e => { e.preventDefault(); switchAuthView(signupView, loginView); });

    function attachRipple(button) {
        button.addEventListener('click', function(e) {
            const r = document.createElement('span');
            r.className = 'ripple';
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px`;
            button.appendChild(r);
            setTimeout(() => r.remove(), 600);
        });
    }
    document.querySelectorAll('.btn-primary, .btn-demo').forEach(attachRipple);

    document.querySelectorAll('.pw-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const input = document.getElementById(toggle.dataset.target);
            if (!input) return;
            const eye = toggle.querySelector('.eye-icon');
            const eyeOff = toggle.querySelector('.eye-off-icon');
            const isPw = input.type === 'password';
            input.type = isPw ? 'text' : 'password';
            if (eye) eye.style.display = isPw ? 'none' : 'block';
            if (eyeOff) eyeOff.style.display = isPw ? 'block' : 'none';
        });
    });

    const signupPassword = document.getElementById('signupPassword');
    const pwStrength = document.getElementById('pwStrength');
    const pwStrengthBar = document.getElementById('pwStrengthBar');
    if (signupPassword && pwStrength && pwStrengthBar) {
        signupPassword.addEventListener('input', () => {
            const val = signupPassword.value;
            pwStrength.classList.toggle('visible', val.length > 0);
            let score = 0;
            if (val.length >= 6) score++;
            if (val.length >= 10) score++;
            if (/[A-Z]/.test(val)) score++;
            if (/[0-9]/.test(val)) score++;
            if (/[^A-Za-z0-9]/.test(val)) score++;
            score = Math.min(score, 4);
            const colors = ['#f87171', '#fb923c', '#facc15', '#34d399'];
            const widths = ['20%', '45%', '70%', '100%'];
            pwStrengthBar.style.width = widths[score] || '0%';
            pwStrengthBar.style.background = colors[score] || colors[0];
        });
    }

    function setInputStatus(input, status) {
        if (!input) return;
        input.classList.remove('error', 'success');
        if (status) input.classList.add(status);
    }

    function shakeCard() {
        if (!glassCard) return;
        glassCard.classList.remove('shake');
        void glassCard.offsetWidth;
        glassCard.classList.add('shake');
        setTimeout(() => glassCard.classList.remove('shake'), 450);
    }

    function grantAccess(userName) {
        const nameToUse = userName || 'Nisheed Kumar Rout';
        sessionStorage.setItem('bharata_user', nameToUse);

        const userNameDisplay = document.getElementById('userNameDisplay');
        const avatarInitial = document.getElementById('avatarInitial');
        if (userNameDisplay) userNameDisplay.textContent = nameToUse;
        if (avatarInitial) avatarInitial.textContent = nameToUse.charAt(0).toUpperCase();

        authScreen.classList.add('hidden');
        setTimeout(() => {
            authScreen.style.display = 'none';
            appPortal.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400);
    }

    const signInBtn = document.getElementById('signInBtn');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const authError = document.getElementById('authError');
    const instantGuestBtn = document.getElementById('instantGuestBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    function validateAndLogin() {
        if (!loginEmail || !loginPassword) return;

        const emailVal = loginEmail.value.trim().toLowerCase();
        const pwVal = loginPassword.value.trim();

        const isEmailValid = (emailVal === HARDCODED_EMAIL);
        const isPassValid = (pwVal === HARDCODED_PASS);

        if (isEmailValid && isPassValid) {
            if (authError) authError.style.display = 'none';
            setInputStatus(loginEmail, 'success');
            setInputStatus(loginPassword, 'success');

            if (signInBtn) {
                signInBtn.disabled = true;
                const originalHtml = signInBtn.innerHTML;
                signInBtn.innerHTML = `
                    <span class="auth-spinner"></span>
                    <span>Authenticating...</span>
                `;
                setTimeout(() => {
                    signInBtn.innerHTML = originalHtml;
                    signInBtn.disabled = false;
                    grantAccess("Nisheed Kumar Rout");
                }, 500);
            } else {
                grantAccess("Nisheed Kumar Rout");
            }
        } else {
            if (!isEmailValid) setInputStatus(loginEmail, 'error');
            else setInputStatus(loginEmail, 'success');

            if (!isPassValid) setInputStatus(loginPassword, 'error');
            else setInputStatus(loginPassword, 'success');

            if (authError) {
                authError.innerHTML = '<strong>Access Denied:</strong> Invalid credentials.<br>Use Email: <code>nisheedkumarrout@gmail.com</code> & Password: <code>1234</code>';
                authError.style.display = 'block';
            }
            shakeCard();
        }
    }

    if (signInBtn) {
        signInBtn.addEventListener('click', e => {
            e.preventDefault();
            validateAndLogin();
        });
    }

    [loginEmail, loginPassword].forEach(input => {
        if (!input) return;
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                validateAndLogin();
            }
        });
        input.addEventListener('input', () => {
            if (authError) authError.style.display = 'none';
            input.classList.remove('error');
        });
    });

    if (instantGuestBtn) {
        instantGuestBtn.addEventListener('click', e => {
            e.preventDefault();
            if (loginEmail) loginEmail.value = HARDCODED_EMAIL;
            if (loginPassword) loginPassword.value = HARDCODED_PASS;
            validateAndLogin();
        });
    }

    if (signUpBtn) {
        signUpBtn.addEventListener('click', e => {
            e.preventDefault();
            const name = document.getElementById('signupName');
            const email = document.getElementById('signupEmail');
            const pw = document.getElementById('signupPassword');
            let valid = true;

            if (!name.value.trim()) { setInputStatus(name, 'error'); valid = false; }
            else setInputStatus(name, 'success');

            if (!email.value || !emailRe.test(email.value)) { setInputStatus(email, 'error'); valid = false; }
            else setInputStatus(email, 'success');

            if (!pw.value || pw.value.length < 4) { setInputStatus(pw, 'error'); valid = false; }
            else setInputStatus(pw, 'success');

            if (!valid) {
                shakeCard();
                return;
            }

            signUpBtn.disabled = true;
            const originalHtml = signUpBtn.innerHTML;
            signUpBtn.innerHTML = `
                <span class="auth-spinner"></span>
                <span>Creating Profile...</span>
            `;

            setTimeout(() => {
                signUpBtn.innerHTML = originalHtml;
                signUpBtn.disabled = false;
                grantAccess(name.value.trim());
            }, 700);
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('bharata_user');
            appPortal.classList.remove('active');
            setTimeout(() => {
                authScreen.style.display = 'flex';
                void authScreen.offsetWidth;
                authScreen.classList.remove('hidden');
                if (loginEmail) {
                    loginEmail.value = HARDCODED_EMAIL;
                    loginEmail.classList.remove('error', 'success');
                }
                if (loginPassword) {
                    loginPassword.value = HARDCODED_PASS;
                    loginPassword.classList.remove('error', 'success');
                }
                if (authError) authError.style.display = 'none';
            }, 300);
        });
    }

    // Always display the login screen cleanly on load/refresh so the user can test credentials
    sessionStorage.removeItem('bharata_user');

    // =========================================================================
    // 4. PORTAL TAB NAVIGATION CONTROLLER
    // =========================================================================
    const tabButtons = document.querySelectorAll('.nav-tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchPortalTab(targetTabId) {
        tabButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === targetTabId);
        });

        tabContents.forEach(section => {
            if (section.id === targetTabId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (targetTabId === 'tab-map' && window.leafletMapInstance) {
            setTimeout(() => {
                window.leafletMapInstance.invalidateSize();
            }, 100);
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchPortalTab(btn.dataset.tab));
    });

    const brandHomeBtn = document.getElementById('brandHomeBtn');
    if (brandHomeBtn) brandHomeBtn.addEventListener('click', () => switchPortalTab('tab-home'));

    const launchActivity1 = document.getElementById('launchActivity1');
    if (launchActivity1) launchActivity1.addEventListener('click', () => switchPortalTab('tab-timeline'));

    const launchActivity2 = document.getElementById('launchActivity2');
    if (launchActivity2) launchActivity2.addEventListener('click', () => switchPortalTab('tab-map'));

    // =========================================================================
    // 5. ACTIVITY 1: INDIAN ART HISTORY TIMELINE CONTROLLER
    // =========================================================================
    const timelineList = document.getElementById('timelineList');
    const artifactModal = document.getElementById('artifactModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalPeriodSubtitle = document.getElementById('modalPeriodSubtitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalToMapBtn = document.getElementById('modalToMapBtn');
    const modalPrevBtn = document.getElementById('modalPrevBtn');
    const modalNextBtn = document.getElementById('modalNextBtn');
    const modalCounter = document.getElementById('modalCounter');

    let currentModalIndex = 0;

    function renderTimeline(filterEra) {
        if (!timelineList) return;
        timelineList.innerHTML = '';

        const filtered = filterEra && filterEra !== 'all'
            ? artifactsData.filter(art => art.epoch === filterEra || art.id === filterEra)
            : artifactsData;

        filtered.forEach((art, idx) => {
            const sideClass = idx % 2 === 0 ? 'left' : 'right';
            const nodeEl = document.createElement('div');
            nodeEl.className = `timeline-node ${sideClass}`;
            nodeEl.id = `timeline-item-${art.id}`;
            nodeEl.innerHTML = `
                <div class="timeline-content" data-art-id="${art.id}">
                    <div class="timeline-thumb-preview">
                        <img src="${art.image}" alt="${art.title}" loading="lazy">
                    </div>
                    <h3 class="timeline-date cinzel-font">${art.date}</h3>
                    <h4 class="timeline-title">${art.title}</h4>
                    <p class="timeline-period">${art.period} &bull; ${art.place}</p>
                    <div class="timeline-action">
                        <span>Inspect Replica &bull; High-Res</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
                <div class="timeline-dot"></div>
            `;
            timelineList.appendChild(nodeEl);
        });

        timelineList.querySelectorAll('.timeline-content').forEach(card => {
            card.addEventListener('click', () => {
                const idx = artifactsData.findIndex(a => a.id === card.dataset.artId);
                openArtifactModalByIndex(idx >= 0 ? idx : 0);
            });
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.08 });

        timelineList.querySelectorAll('.timeline-node').forEach(node => observer.observe(node));
    }

    renderTimeline('all');

    const timelineFilterBar = document.getElementById('timelineFilterBar');
    if (timelineFilterBar) {
        timelineFilterBar.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                timelineFilterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderTimeline(btn.dataset.filter);
            });
        });
    }

    function openArtifactModalByIndex(index) {
        if (!artifactsData[index] || !artifactModal) return;

        currentModalIndex = index;
        const art = artifactsData[index];

        modalTitle.textContent = art.title;
        if (modalPeriodSubtitle) {
            modalPeriodSubtitle.textContent = `${art.period} (${art.date}) • ${art.place} (${art.region})`;
        }
        modalImage.src = art.image;
        modalImage.alt = art.title;

        if (modalCounter) {
            modalCounter.textContent = `${index + 1} / ${artifactsData.length}`;
        }

        modalDescription.innerHTML = `
            <div class="artifact-medium-tag">🏛️ ${art.medium}</div>
            <p><strong>Geographic Origin:</strong> ${art.place}, ${art.region}</p>
            <p><strong>Historical Epoch:</strong> ${art.period} &bull; ${art.date}</p>
            <div class="sidebar-divider"></div>
            ${art.desc}
        `;

        artifactModal.style.display = 'block';
        void artifactModal.offsetWidth;
        artifactModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function navigateModal(direction) {
        let newIndex = currentModalIndex + direction;
        if (newIndex < 0) newIndex = artifactsData.length - 1;
        if (newIndex >= artifactsData.length) newIndex = 0;
        openArtifactModalByIndex(newIndex);
    }

    if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => navigateModal(-1));
    if (modalNextBtn) modalNextBtn.addEventListener('click', () => navigateModal(1));

    function closeArtifactModal() {
        if (!artifactModal) return;
        artifactModal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => {
            artifactModal.style.display = 'none';
        }, 350);
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeArtifactModal);

    window.addEventListener('click', e => {
        if (e.target === artifactModal) closeArtifactModal();
    });

    document.addEventListener('keydown', e => {
        if (artifactModal && artifactModal.classList.contains('show')) {
            if (e.key === 'Escape') closeArtifactModal();
            else if (e.key === 'ArrowLeft') navigateModal(-1);
            else if (e.key === 'ArrowRight') navigateModal(1);
        }
    });

    if (modalToMapBtn) {
        modalToMapBtn.addEventListener('click', () => {
            const activeArt = artifactsData[currentModalIndex];
            closeArtifactModal();
            switchPortalTab('tab-map');
            if (activeArt) {
                setTimeout(() => {
                    locateArtifactOnMap(activeArt.id);
                }, 250);
            }
        });
    }

    // =========================================================================
    // 6. ACTIVITY 2: GEOGRAPHIC ART MAP (LEAFLET) CONTROLLER
    // =========================================================================
    let mapInstance = null;
    const markersMap = {};
    const mapSidebar = document.getElementById('mapSidebar');
    const closeMapSidebar = document.getElementById('closeMapSidebar');
    const mapArtImg = document.getElementById('mapArtImg');
    const mapArtTitle = document.getElementById('mapArtTitle');
    const mapArtPlace = document.getElementById('mapArtPlace');
    const mapArtDate = document.getElementById('mapArtDate');
    const mapArtPeriod = document.getElementById('mapArtPeriod');
    const mapArtMedium = document.getElementById('mapArtMedium');
    const mapArtDesc = document.getElementById('mapArtDesc');
    const sidebarToTimelineBtn = document.getElementById('sidebarToTimelineBtn');
    const sidebarPrevBtn = document.getElementById('sidebarPrevBtn');
    const sidebarNextBtn = document.getElementById('sidebarNextBtn');
    const sidebarCounter = document.getElementById('sidebarCounter');

    let currentMapIndex = 0;

    function initMap() {
        const mapContainer = document.getElementById('map');
        if (!mapContainer || typeof L === 'undefined') return;

        mapInstance = L.map('map', {
            center: [22.8, 78.9],
            zoom: 5,
            zoomControl: false,
            minZoom: 4,
            maxZoom: 14,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 100
        });
        window.leafletMapInstance = mapInstance;

        L.control.zoom({ position: 'bottomleft' }).addTo(mapInstance);

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
            maxZoom: 16
        }).addTo(mapInstance);

        const customMarkerIcon = L.divIcon({
            className: 'custom-marker-wrapper',
            html: '<div class="custom-marker-pin"></div>',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        artifactsData.forEach((art, index) => {
            const marker = L.marker(art.coords, { icon: customMarkerIcon }).addTo(mapInstance);
            markersMap[art.id] = marker;

            marker.bindTooltip(`${art.title} (${art.place})`, {
                permanent: false,
                direction: 'top',
                offset: [0, -12],
                className: 'custom-tooltip'
            });

            marker.on('click', () => {
                locateArtifactOnMap(art.id);
            });
        });
    }

    function locateArtifactOnMap(artId) {
        const index = artifactsData.findIndex(a => a.id === artId);
        if (index < 0 || !mapInstance) return;

        currentMapIndex = index;
        const art = artifactsData[index];

        const isWide = window.innerWidth > 768;
        const targetCoords = isWide
            ? [art.coords[0], art.coords[1] - 3.8]
            : art.coords;

        mapInstance.flyTo(targetCoords, 6.5, {
            duration: 1.25,
            easeLinearity: 0.25
        });

        mapArtImg.src = art.image;
        mapArtImg.alt = art.title;
        mapArtTitle.textContent = art.title;
        mapArtPlace.textContent = `📍 ${art.place} (${art.region})`;
        mapArtDate.textContent = `Epoch: ${art.date}`;
        mapArtPeriod.textContent = art.period;
        if (mapArtMedium) mapArtMedium.textContent = `🏛️ ${art.medium}`;
        mapArtDesc.innerHTML = art.desc;

        if (sidebarCounter) {
            sidebarCounter.textContent = `${index + 1} / ${artifactsData.length}`;
        }

        mapSidebar.classList.remove('hidden');

        const mapQuickPills = document.getElementById('mapQuickPills');
        if (mapQuickPills) {
            mapQuickPills.querySelectorAll('.map-pill-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.place === art.id);
            });
        }
    }

    function navigateSidebar(direction) {
        let newIndex = currentMapIndex + direction;
        if (newIndex < 0) newIndex = artifactsData.length - 1;
        if (newIndex >= artifactsData.length) newIndex = 0;
        locateArtifactOnMap(artifactsData[newIndex].id);
    }

    if (sidebarPrevBtn) sidebarPrevBtn.addEventListener('click', () => navigateSidebar(-1));
    if (sidebarNextBtn) sidebarNextBtn.addEventListener('click', () => navigateSidebar(1));

    if (closeMapSidebar) {
        closeMapSidebar.addEventListener('click', () => {
            mapSidebar.classList.add('hidden');
            if (mapInstance) {
                mapInstance.flyTo([22.8, 78.9], 5, { duration: 1 });
            }
            const mapQuickPills = document.getElementById('mapQuickPills');
            if (mapQuickPills) {
                mapQuickPills.querySelectorAll('.map-pill-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.place === 'all');
                });
            }
        });
    }

    if (sidebarToTimelineBtn) {
        sidebarToTimelineBtn.addEventListener('click', () => {
            const activeArt = artifactsData[currentMapIndex];
            switchPortalTab('tab-timeline');
            if (activeArt) {
                setTimeout(() => {
                    const targetEl = document.getElementById(`timeline-item-${activeArt.id}`);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        const card = targetEl.querySelector('.timeline-content');
                        if (card) {
                            card.style.borderColor = 'var(--gold)';
                            card.style.boxShadow = '0 0 35px var(--gold-glow)';
                            setTimeout(() => {
                                card.style.borderColor = '';
                                card.style.boxShadow = '';
                            }, 2000);
                        }
                    }
                }, 300);
            }
        });
    }

    const mapQuickPills = document.getElementById('mapQuickPills');
    if (mapQuickPills) {
        mapQuickPills.querySelectorAll('.map-pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const placeId = btn.dataset.place;
                if (placeId === 'all') {
                    if (mapSidebar) mapSidebar.classList.add('hidden');
                    if (mapInstance) mapInstance.flyTo([22.8, 78.9], 5, { duration: 1 });
                    mapQuickPills.querySelectorAll('.map-pill-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                } else {
                    locateArtifactOnMap(placeId);
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }

})();
