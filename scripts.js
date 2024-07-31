// Configurar título da página
document.getElementById('pageTitle').innerText = 'Vidix Studio';

// Função para redirecionar ao anúncio
function redirectAd() {
    const adUrl = "https://www.example.com"; // Substitua pelo URL do anúncio
    localStorage.setItem('redirectedFromAd', true);
    window.location.href = adUrl;
}

// Verificar se o usuário retornou do anúncio
function checkReturnFromAd() {
    if (localStorage.getItem('redirectedFromAd')) {
        localStorage.removeItem('redirectedFromAd');
        showVideo();
    } else {
        showOverlay();
    }
}

// Mostrar o vídeo
function showVideo() {
    const videoIframe = document.createElement('iframe');
    videoIframe.width = '1280';
    videoIframe.height = '720';
    videoIframe.frameBorder = '0';
    videoIframe.src = 'https://player.vimeo.com/video/992152069?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479';
    videoIframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write';
    videoIframe.title = 'O Colégio Deusa _ Filme de Comédia_ Completo em Português HD(720P_HD)';
    document.getElementById('videoPlaceholder').innerHTML = '';
    document.getElementById('videoPlaceholder').appendChild(videoIframe);
    document.getElementById('adOverlay').style.display = 'none';
}

// Mostrar o overlay
function showOverlay() {
    document.getElementById('adOverlay').style.display = 'flex';
}

// Executar a função ao carregar a página
window.onload = checkReturnFromAd;
