// Incorporar anúncio horizontal
const horizontalAdScript = document.createElement('script');
horizontalAdScript.async = true;
horizontalAdScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7992396831352494';
horizontalAdScript.crossOrigin = 'anonymous';
document.head.appendChild(horizontalAdScript);

const horizontalAdIns = document.createElement('ins');
horizontalAdIns.className = 'adsbygoogle';
horizontalAdIns.style.display = 'block';
horizontalAdIns.dataset.adClient = 'ca-pub-7992396831352494';
horizontalAdIns.dataset.adSlot = '6236011642';
horizontalAdIns.dataset.adFormat = 'auto';
horizontalAdIns.dataset.fullWidthResponsive = 'true';
document.getElementById('horizontalAdPlaceholder').appendChild(horizontalAdIns);

const horizontalAdScript2 = document.createElement('script');
horizontalAdScript2.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
document.getElementById('horizontalAdPlaceholder').appendChild(horizontalAdScript2);
