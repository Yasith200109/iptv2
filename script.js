// Complete Channels Data with New Additions
const channels = [
    {
        name: "Rupavahini",
        logo: "logo/rupavahini-logo.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:runi01.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "ITN",
        logo: "logo/itn-logo.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:itn43.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Sirasa TV",
        logo: "logo/sirasa-logo.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:sirtv09.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "TV Derana",
        logo: "logo/derana-logo.png",
        url: "https://moblive.yuppcdn.net/transhd2/smil:detv04.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Charana TV",
        logo: "logo/charanatv-logo.png",
        url: "https://moblive.yuppcdn.net/transhd2/smil:chtv05.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Swarnawahini",
        logo: "logo/swarnavahini-logo.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:swani06.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Vasantham TV",
        logo: "logo/vasantham-logo.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:vatv07.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Siyatha TV",
        logo: "logo/siyatha-logo.png",
        url: "https://moblive.yuppcdn.net/transhd2/smil:siytv08.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Shakthi TV",
        logo: "logo/shakthitv-logo.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:saktv10.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "TV 1",
        logo: "logo/tv1-logo.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:tv111.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Supreme TV",
        logo: "logo/supreme-logo.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:tnl12.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Nethra TV",
        logo: "logo/nethratv-logo.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:nettv15.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Hiru TV",
        logo: "logo/hiru-logo.png",
        url: "https://moblive.yuppcdn.net/transhd2/smil:hitv17.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Star Tamil",
        logo: "logo/startamil-logo.jpg",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:strtml19.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Music TV",
        logo: "logo/musictv-logo.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:muptv14.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Star Sports 1 HD",
        logo: "logo/startsporthd1-logo.png",
        url: "http://41.205.93.154/STARSPORTS1/index.m3u8",
        category: "International"
    },
    {
        name: "Sky Cinema Family",
        logo: "logo/skycinemafamily-logo.png",
        url: "https://d17lsiabqrlwa2.cloudfront.net/pl_138/207480-6535776-1/playlist.m3u8",
        category: "International"
    },
    {
        name: "Grand Cinema",
        logo: "logo/grandcinema-logo.png",
        url: "https://gcinemahls.wns.live/hls/stream.m3u8",
        category: "International"
    },
    {
        name: "Cartoon Network",
        logo: "logo/cn-logo.png",
        url: "https://vodzong.mjunoon.tv:8087/streamtest/cartoon-network-87/playlist.m3u8",
        category: "International"
    },
    {
        name: "Nickelodeon",
        logo: "logo/nickelodeon-logo.png",
        url: "http://fl1.moveonjoy.com/NICKELODEON/index.m3u8",
        category: "International"
    }
];

// Premium Channels with iframe code
const premiumChannels = [
    {
        name: "Sky Sports F1",
        logo: "logo/skysportf1-logo.png",
        iframeCode: '<iframe src="//stream.crichd.sc/update/skyf1.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
    },
    {
        name: "Sky Sports Cricket",
        logo: "logo/skysportcric-logo.png",
        iframeCode: '<iframe src="//stream.crichd.sc/update/skys2.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
    },
    {
        name: "Sky Sports Main Event",
        logo: "https://e0.365dm.com/tvlogos/channels/1303-Logo.png",
        iframeCode: '<iframe src="//stream.crichd.sc/update/skysme.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
    },
    {
        name: "Sky Sports Football",
        logo: "https://e0.365dm.com/tvlogos/channels/1322-Logo.png",
        iframeCode: '<iframe src="//stream.crichd.sc/update/skysfoot.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
    },
    {
        name: "BT Sport 1",
        logo: "https://img.sport-tv-guide.live/images/tv-station-bt-sport-1-100.png",
        iframeCode: '<iframe src="//stream.crichd.sc/update/bt1.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
    },
    {
        name: "BT Sport 2",
        logo: "https://img.sport-tv-guide.live/images/tv-station-bt-sport-2-101.png",
        iframeCode: '<iframe src="//stream.crichd.sc/update/bt2.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
    }
];

let hls = null;
let isPlayerActive = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    animateStats();
    
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        loadChannels('all');
    }, 2000);
    
    // Update viewer count
    setInterval(updateViewerCount, 5000);
});

// Particle Animation
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.3;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Animate Stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-value'));
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 30);
    });
}

// FIXED: Load Channels with both categories on home page
function loadChannels(filter = 'all') {
    // Hide premium section by default
    document.getElementById('premiumChannelsSection').classList.add('hidden');
    document.querySelector('.channels-section').classList.remove('hidden');
    
    if (filter === 'all') {
        // Show both Local and International categories
        loadCategorizedChannels();
    } else {
        // Show filtered channels in single grid
        loadFilteredChannels(filter);
    }
}

// Load categorized channels (Local and International)
function loadCategorizedChannels() {
    const section = document.querySelector('.channels-section .section-container');
    
    // Create the dual category structure
    section.innerHTML = `
        <div class="category-section">
            <div class="section-header">
                <h2 class="section-title">
                    <span class="title-line"></span>
                    <span class="title-text">
                        <i class="fas fa-broadcast-tower"></i>
                        LOCAL CHANNELS
                    </span>
                    <span class="title-line"></span>
                </h2>
            </div>
            <div id="localChannelsGrid" class="cyber-grid local-grid">
                <!-- Local channels will be loaded here -->
            </div>
        </div>

        <div class="category-section" style="margin-top: 60px;">
            <div class="section-header">
                <h2 class="section-title international">
                    <span class="title-line purple"></span>
                    <span class="title-text">
                        <i class="fas fa-globe"></i>
                        INTERNATIONAL CHANNELS
                    </span>
                    <span class="title-line purple"></span>
                </h2>
            </div>
            <div id="internationalChannelsGrid" class="cyber-grid international-grid">
                <!-- International channels will be loaded here -->
            </div>
        </div>
    `;
    
    // Get the grids after creating them
    const localGrid = document.getElementById('localChannelsGrid');
    const internationalGrid = document.getElementById('internationalChannelsGrid');
    
    // Filter and display local channels
    const localChannels = channels.filter(ch => ch.category === 'Local');
    if (localChannels.length > 0) {
        localChannels.forEach((channel, index) => {
            const card = createChannelCard(channel, index, 'local');
            localGrid.appendChild(card);
        });
    } else {
        localGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tv-slash"></i>
                <p>No local channels available</p>
            </div>
        `;
    }
    
    // Filter and display international channels
    const internationalChannels = channels.filter(ch => ch.category === 'International');
    if (internationalChannels.length > 0) {
        internationalChannels.forEach((channel, index) => {
            const card = createChannelCard(channel, index, 'international');
            internationalGrid.appendChild(card);
        });
    } else {
        internationalGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tv-slash"></i>
                <p>No international channels available</p>
            </div>
        `;
    }
    
    // Animate cards
    animateChannelCards();
}

// Load filtered channels (single category)
function loadFilteredChannels(filter) {
    const section = document.querySelector('.channels-section .section-container');
    
    let filteredChannels = channels.filter(ch => ch.category === filter);
    let title = filter.toUpperCase() + ' CHANNELS';
    let icon = filter === 'Local' ? 'fa-broadcast-tower' : 'fa-globe';
    
    // Create single grid view
    section.innerHTML = `
        <div class="category-section">
            <div class="section-header">
                <h2 class="section-title ${filter.toLowerCase()}">
                    <span class="title-line ${filter === 'International' ? 'purple' : ''}"></span>
                    <span class="title-text">
                        <i class="fas ${icon}"></i>
                        ${title}
                    </span>
                    <span class="title-line ${filter === 'International' ? 'purple' : ''}"></span>
                </h2>
            </div>
            <div id="filteredGrid" class="cyber-grid ${filter.toLowerCase()}-grid">
                <!-- Channels will be loaded here -->
            </div>
        </div>
    `;
    
    const grid = document.getElementById('filteredGrid');
    
    if (filteredChannels.length > 0) {
        filteredChannels.forEach((channel, index) => {
            const card = createChannelCard(channel, index, filter.toLowerCase());
            grid.appendChild(card);
        });
    } else {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tv-slash"></i>
                <p>No channels available in this category</p>
            </div>
        `;
    }
    
    // Animate cards
    animateChannelCards();
}

// Create channel card
function createChannelCard(channel, index, categoryClass = '') {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    // Determine badge class based on category
    const badgeClass = channel.category === 'International' ? 'international' : 'local';
    
    card.innerHTML = `
        <div class="card-badge ${badgeClass}">LIVE</div>
        <div class="card-logo">
            <img src="${channel.logo}" alt="${channel.name}" onerror="this.src='https://via.placeholder.com/100'">
        </div>
        <h3 class="card-name">${channel.name}</h3>
        <p class="card-category">${channel.category}</p>
        <div class="play-button" onclick="playHlsChannel('${channel.name}', '${channel.url}')">
            <i class="fas fa-play"></i>
        </div>
    `;
    
    return card;
}

// Show Premium Channels
function showPremiumChannels() {
    // Hide regular, show premium
    document.querySelector('.channels-section').classList.add('hidden');
    document.getElementById('premiumChannelsSection').classList.remove('hidden');
    
    const grid = document.getElementById('premiumChannelsGrid');
    grid.innerHTML = '';
    
    premiumChannels.forEach((channel, index) => {
        const card = createPremiumCard(channel, index);
        grid.appendChild(card);
    });
    
    // Animate cards
    animateChannelCards();
}

// Create Premium Card
function createPremiumCard(channel, index) {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    card.innerHTML = `
        <div class="card-badge premium">PREMIUM</div>
        <div class="card-logo">
            <img src="${channel.logo}" alt="${channel.name}" onerror="this.src='https://via.placeholder.com/100'">
        </div>
        <h3 class="card-name">${channel.name}</h3>
        <p class="card-category">Premium Sports</p>
        <div class="play-button" onclick="playPremiumChannel('${channel.name}', ${index})">
            <i class="fas fa-play"></i>
        </div>
    `;
    
    return card;
}

// Animate channel cards
function animateChannelCards() {
    const cards = document.querySelectorAll('.channel-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 30);
    });
}

// Filter Channels
function filterChannels(category, button) {
    // Remove active class from all buttons
    document.querySelectorAll('.cyber-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    if (button) {
        button.classList.add('active');
    }
    
    // Load channels based on category
    loadChannels(category);
}

// Search Channels
function searchChannels() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        filterChannels('all');
        return;
    }
    
    const filtered = channels.filter(ch => 
        ch.name.toLowerCase().includes(searchTerm) ||
        ch.category.toLowerCase().includes(searchTerm)
    );
    
    // Display search results in single grid
    const section = document.querySelector('.channels-section .section-container');
    section.innerHTML = `
        <div class="category-section">
            <div class="section-header">
                <h2 class="section-title">
                    <span class="title-line"></span>
                    <span class="title-text">
                        <i class="fas fa-search"></i>
                        SEARCH RESULTS (${filtered.length})
                    </span>
                    <span class="title-line"></span>
                </h2>
            </div>
            <div id="searchResultsGrid" class="cyber-grid">
                <!-- Search results will be loaded here -->
            </div>
        </div>
    `;
    
    const grid = document.getElementById('searchResultsGrid');
    
    if (filtered.length > 0) {
        filtered.forEach((channel, index) => {
            const card = createChannelCard(channel, index);
            grid.appendChild(card);
        });
        animateChannelCards();
    } else {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>No channels found for "${searchTerm}"</p>
            </div>
        `;
    }
}

// FIXED: Play HLS Channel with Better Buffering Configuration
function playHlsChannel(name, url) {
    closePremiumPlayer();
    
    const playerSection = document.getElementById('hlsPlayerSection');
    const video = document.getElementById('hlsVideo');
    const channelName = document.getElementById('hlsChannelName');
    
    channelName.textContent = name;
    playerSection.classList.remove('hidden');
    
    playerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Show loading indicator
    video.poster = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=';
    
    if (Hls.isSupported()) {
        if (hls) {
            hls.destroy();
        }
        
        // FIXED: Optimized HLS Configuration for Better Streaming
        hls = new Hls({
            debug: false,
            enableWorker: true,
            lowLatencyMode: false,
            backBufferLength: 90,
            maxBufferLength: 60,
            maxMaxBufferLength: 120,
            maxBufferSize: 60 * 1000 * 1000,
            maxBufferHole: 0.5,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: 0.1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: 0.25,
            enableSoftwareAES: true,
            startLevel: -1,
            fragLoadingTimeOut: 20000,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1000,
            fragLoadingMaxRetryTimeout: 64000,
            manifestLoadingTimeOut: 10000,
            manifestLoadingMaxRetry: 4,
            manifestLoadingRetryDelay: 1000,
            manifestLoadingMaxRetryTimeout: 64000,
            levelLoadingTimeOut: 10000,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1000,
            levelLoadingMaxRetryTimeout: 64000,
            xhrSetup: function(xhr, url) {
                xhr.withCredentials = false;
            }
        });
        
        hls.loadSource(url);
        hls.attachMedia(video);
        
        // Handle HLS Events
        hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
            console.log('Manifest loaded, starting playback');
            video.play().catch(e => {
                console.log('Auto-play failed, user interaction required');
                addPlayOverlay(video);
            });
        });
        
        hls.on(Hls.Events.ERROR, function(event, data) {
            console.error('HLS Error:', data);
            
            if (data.fatal) {
                switch(data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        console.log('Network error, trying to recover');
                        setTimeout(() => {
                            hls.startLoad();
                        }, 1000);
                        break;
                        
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.log('Media error, trying to recover');
                        hls.recoverMediaError();
                        break;
                        
                    default:
                        console.error('Fatal error, reinitializing');
                        if (hls) {
                            hls.destroy();
                        }
                        setTimeout(() => {
                            playHlsChannel(name, url);
                        }, 2000);
                        break;
                }
            }
        });
        
        hls.on(Hls.Events.FRAG_BUFFERED, function(event, data) {
            console.log('Fragment buffered:', data.frag.sn);
        });
        
        hls.on(Hls.Events.LEVEL_SWITCHED, function(event, data) {
            console.log('Quality switched to:', data.level);
        });
        
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', function() {
            video.play().catch(e => {
                console.log('Auto-play failed');
                addPlayOverlay(video);
            });
        });
    } else {
        alert('Your browser does not support HLS streaming');
    }
    
    video.addEventListener('error', function(e) {
        console.error('Video error:', e);
        handleVideoError(e, name, url);
    });
    
    video.addEventListener('waiting', function() {
        console.log('Video buffering...');
        showBufferingIndicator();
    });
    
    video.addEventListener('playing', function() {
        console.log('Video playing');
        hideBufferingIndicator();
    });
    
    video.addEventListener('stalled', function() {
        console.log('Video stalled, trying to recover');
        if (hls) {
            hls.startLoad();
        }
    });
    
    isPlayerActive = true;
}

// Add play overlay for manual play
function addPlayOverlay(video) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.7);
        padding: 20px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
    `;
    overlay.innerHTML = '<i class="fas fa-play" style="font-size: 40px; color: white;"></i>';
    overlay.onclick = function() {
        video.play();
        overlay.remove();
    };
    video.parentElement.appendChild(overlay);
}

// Show buffering indicator
function showBufferingIndicator() {
    const video = document.getElementById('hlsVideo');
    if (!document.getElementById('bufferingIndicator')) {
        const indicator = document.createElement('div');
        indicator.id = 'bufferingIndicator';
        indicator.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 16px;
            background: rgba(0,0,0,0.7);
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 10;
        `;
        indicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Buffering...';
        video.parentElement.appendChild(indicator);
    }
}

// Hide buffering indicator
function hideBufferingIndicator() {
    const indicator = document.getElementById('bufferingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Handle video errors
function handleVideoError(error, name, url) {
    const video = document.getElementById('hlsVideo');
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
        background: rgba(0,0,0,0.8);
        padding: 20px;
        border-radius: 10px;
        z-index: 10;
    `;
    errorMsg.innerHTML = `
        <p style="margin-bottom: 15px;">Stream temporarily unavailable</p>
        <button onclick="retryStream('${name}', '${url}')" style="
            padding: 10px 20px;
            background: linear-gradient(135deg, #00ffff, #ff00ff);
            border: none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            font-weight: bold;
        ">
            <i class="fas fa-redo"></i> Retry
        </button>
    `;
    video.parentElement.appendChild(errorMsg);
}

// Retry stream
window.retryStream = function(name, url) {
    const errorMsg = document.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();
    playHlsChannel(name, url);
};

// Play Premium Channel
function playPremiumChannel(name, index) {
    closeHlsPlayer();
    
    const premiumSection = document.getElementById('premiumIframeSection');
    const container = document.getElementById('premiumIframeContainer');
    const channelName = document.getElementById('premiumChannelName');
    
    const channel = premiumChannels[index];
    
    channelName.textContent = name;
    container.innerHTML = channel.iframeCode;
    
    premiumSection.classList.remove('hidden');
    premiumSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Close Players
function closeHlsPlayer() {
    const playerSection = document.getElementById('hlsPlayerSection');
    const video = document.getElementById('hlsVideo');
    
    playerSection.classList.add('hidden');
    video.pause();
    video.src = '';
    
    // Remove any overlays
    const overlays = video.parentElement.querySelectorAll('div');
    overlays.forEach(overlay => {
        if (overlay.id !== 'hlsVideo') {
            overlay.remove();
        }
    });
    
    if (hls) {
        hls.destroy();
        hls = null;
    }
    
    isPlayerActive = false;
}

function closePremiumPlayer() {
    const premiumSection = document.getElementById('premiumIframeSection');
    const container = document.getElementById('premiumIframeContainer');
    
    premiumSection.classList.add('hidden');
    container.innerHTML = '';
}

// Reload Premium
function reloadPremium() {
    const container = document.getElementById('premiumIframeContainer');
    const currentContent = container.innerHTML;
    container.innerHTML = '<div style="text-align: center; padding: 50px; color: white;">Reloading...</div>';
    setTimeout(() => {
        container.innerHTML = currentContent;
    }, 500);
}

// Toggle Fullscreen
function toggleFullscreen() {
    const playerSection = document.getElementById('hlsPlayerSection');
    
    if (!document.fullscreenElement) {
        playerSection.requestFullscreen().catch(err => {
            console.error('Fullscreen error:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Update Viewer Count
function updateViewerCount() {
    const viewerCount = document.getElementById('viewerCount');
    if (viewerCount && isPlayerActive) {
        const count = (Math.random() * 5 + 1).toFixed(1);
        viewerCount.textContent = `${count}K`;
    }
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeHlsPlayer();
        closePremiumPlayer();
    }
    
    if (isPlayerActive) {
        const video = document.getElementById('hlsVideo');
        
        switch(e.key) {
            case ' ':
                e.preventDefault();
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
                break;
                
            case 'f':
            case 'F':
                toggleFullscreen();
                break;
                
            case 'ArrowLeft':
                video.currentTime -= 10;
                break;
                
            case 'ArrowRight':
                video.currentTime += 10;
                break;
                
            case 'ArrowUp':
                video.volume = Math.min(1, video.volume + 0.1);
                break;
                
            case 'ArrowDown':
                video.volume = Math.max(0, video.volume - 0.1);
                break;
        }
    }
});

// Window Resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Page Visibility API
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlayerActive) {
        const video = document.getElementById('hlsVideo');
        if (!video.paused) {
            video.pause();
        }
    }
});

// Network status monitoring
window.addEventListener('online', () => {
    console.log('Network connection restored');
    if (isPlayerActive && hls) {
        hls.startLoad();
    }
});

window.addEventListener('offline', () => {
    console.log('Network connection lost');
    if (isPlayerActive) {
        showBufferingIndicator();
    }
});