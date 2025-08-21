// Complete Channels Data with New Additions
const channels = [
    {
        name: "Rupavahini",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/rupavahini.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:runi01.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "ITN",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/ducchq.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:itn43.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Sirasa TV",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/ucihva.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:sirtv09.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "TV Derana",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/derana.png",
        url: "https://moblive.yuppcdn.net/transhd2/smil:detv04.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Charana TV",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/djwqoh.png",
        url: "https://moblive.yuppcdn.net/transhd2/smil:chtv05.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Swarnawahini",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/ddcjju.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:swani06.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Vasantham TV",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/ngfsik.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:vatv07.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Siyatha TV",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/twchnq.png",
        url: "https://moblive.yuppcdn.net/transhd2/smil:siytv08.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Shakthi TV",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/dmikwb.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:saktv10.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "TV 1",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/vjtiwc.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:tv111.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Supreme TV",
        logo: "https://tv.deshikajayantha.com/images/supmetv.png",
        url: "https://moblive.yuppcdn.net/transsd/smil:tnl12.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Nethra TV",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/udbacm.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:nettv15.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Hiru TV",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/hiru-tv.png",
        url: "https://moblive.yuppcdn.net/transhd2/smil:hitv17.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Star Tamil",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/vztqoe.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:strtml19.smil/chunklist_b596000.m3u8",
        category: "Local"
    },
    {
        name: "Music TV",
        logo: "https://mobond.yuppcdn.net/peotvgo/320/280/content/common/channel/logos/music-television.png",
        url: "https://moblive.yuppcdn.net/trans1sd/smil:muptv14.smil/chunklist_b596000.m3u8",
        category: "Entertainment"
    },
    {
        name: "Star Sports 1 HD",
        logo: "https://toppng.com/uploads/preview/star-sports-hd1-star-sports-2-11563260393mf9fciusph.png",
        url: "http://41.205.93.154/STARSPORTS1/index.m3u8",
        category: "Sports"
    }
];

// Premium Channels with iframe code
const premiumChannels = [
    {
        name: "Sky Sports F1",
        logo: "https://e1.365dm.com/tvlogos/channels/1301-Logo.png",
        iframeCode: '<iframe src="//stream.crichd.sc/update/skyf1.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
    },
    {
        name: "Sky Sports Cricket",
        logo: "https://e0.365dm.com/tvlogos/channels/1333-Logo.png",
        iframeCode: '<iframe src="//stream.crichd.sc/update/skyscric.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>'
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
        loadChannels();
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

// Load Channels
function loadChannels(filter = 'all') {
    const grid = document.getElementById('channelsGrid');
    const sectionTitle = document.getElementById('sectionTitle');
    
    // Hide premium section, show regular
    document.getElementById('premiumChannelsSection').classList.add('hidden');
    document.querySelector('.channels-section').classList.remove('hidden');
    
    grid.innerHTML = '';
    
    let filteredChannels = channels;
    let title = 'ALL CHANNELS';
    
    if (filter !== 'all') {
        filteredChannels = channels.filter(ch => ch.category === filter);
        title = filter.toUpperCase() + ' CHANNELS';
    }
    
    sectionTitle.textContent = title;
    
    filteredChannels.forEach((channel, index) => {
        const card = createChannelCard(channel, index);
        grid.appendChild(card);
    });
    
    // Animate cards
    const cards = grid.querySelectorAll('.channel-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Create Channel Card
function createChannelCard(channel, index) {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    card.innerHTML = `
        <div class="card-badge">LIVE</div>
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
    const cards = grid.querySelectorAll('.channel-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
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
            lowLatencyMode: false, // Changed to false for stability
            backBufferLength: 90, // Increased for better buffering
            maxBufferLength: 60, // Increased buffer length
            maxMaxBufferLength: 120, // Maximum buffer length
            maxBufferSize: 60 * 1000 * 1000, // 60MB buffer size
            maxBufferHole: 0.5,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: 0.1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: 0.25,
            enableSoftwareAES: true,
            startLevel: -1, // Auto quality selection
            fragLoadingTimeOut: 20000, // Increased timeout
            fragLoadingMaxRetry: 6, // More retries
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
                // Add play button overlay if autoplay fails
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
                        // Retry with same URL after 2 seconds
                        setTimeout(() => {
                            playHlsChannel(name, url);
                        }, 2000);
                        break;
                }
            }
        });
        
        // Monitor buffer health
        hls.on(Hls.Events.FRAG_BUFFERED, function(event, data) {
            console.log('Fragment buffered:', data.frag.sn);
        });
        
        // Quality switching
        hls.on(Hls.Events.LEVEL_SWITCHED, function(event, data) {
            console.log('Quality switched to:', data.level);
        });
        
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari/iOS
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
    
    // Add event listeners for better error handling
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

// Filter Channels
function filterChannels(category, button) {
    document.querySelectorAll('.cyber-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (button) {
        button.classList.add('active');
    }
    
    loadChannels(category);
}

// Search Channels
function searchChannels() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('channelsGrid');
    
    if (!searchTerm) {
        loadChannels('all');
        return;
    }
    
    grid.innerHTML = '';
    
    const filtered = channels.filter(ch => 
        ch.name.toLowerCase().includes(searchTerm) ||
        ch.category.toLowerCase().includes(searchTerm)
    );
    
    if (filtered.length > 0) {
        filtered.forEach((channel, index) => {
            const card = createChannelCard(channel, index);
            grid.appendChild(card);
        });
        
        // Animate filtered cards
        const cards = grid.querySelectorAll('.channel-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    } else {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 48px; color: rgba(0, 255, 255, 0.3); margin-bottom: 16px;"></i>
                <p style="color: rgba(255, 255, 255, 0.5); font-size: 18px;">No channels found for "${searchTerm}"</p>
            </div>
        `;
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
    
    // Additional shortcuts
    if (isPlayerActive) {
        const video = document.getElementById('hlsVideo');
        
        switch(e.key) {
            case ' ': // Spacebar for play/pause
                e.preventDefault();
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
                break;
                
            case 'f': // F for fullscreen
            case 'F':
                toggleFullscreen();
                break;
                
            case 'ArrowLeft': // Seek backward
                video.currentTime -= 10;
                break;
                
            case 'ArrowRight': // Seek forward
                video.currentTime += 10;
                break;
                
            case 'ArrowUp': // Volume up
                video.volume = Math.min(1, video.volume + 0.1);
                break;
                
            case 'ArrowDown': // Volume down
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

// Page Visibility API to pause when tab is not visible
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