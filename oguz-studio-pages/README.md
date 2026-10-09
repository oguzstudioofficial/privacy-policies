# Oguz Studio — GitHub Pages

Bu klasör, Oguz Studio'nun üç Android uygulamasını tanıtan statik web sitesidir.

## Dosya yapısı

```text
oguz-studio-pages/
├── index.html
├── README.md
├── assets/
│   ├── favicon.svg
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
└── privacy/
    ├── vitametrix.html
    ├── unpuff.html
    └── tetrixblock.html
```

## GitHub Pages'e ekleme

1. Bu dosyaları gizlilik politikalarının bulunduğu repoya yükle.
2. Eğer mevcut gizlilik politikası dosyalarının yolları farklıysa, `index.html` içindeki `privacy/...` bağlantılarını mevcut dosya yollarına göre düzelt.
3. Repo ayarlarından **Settings → Pages** bölümüne gir.
4. **Deploy from a branch** seç; kullandığın dalı (genellikle `main`) ve `/(root)` klasörünü seçip kaydet.
5. Birkaç dakika sonra GitHub Pages adresini aç. Kullanıcı/organizasyon reposu ve proje reposu adres biçimleri farklı olabilir.

## Yayına almadan önce kontrol et

- `oguzstudio.contact@gmail.com` adresini kullanmak istemiyorsan `index.html` içindeki e-posta adresini kendi iletişim adresinle değiştir.
- Uygulama açıklamalarını mağazadaki gerçek özelliklerle eşleştir.
- Gizlilik sayfası linkleri mevcut dosyalarınla eşleşmeli. Bu paketteki `privacy` klasörü örnek bağlantıları göstermek içindir; mevcut gizlilik politikalarını silme veya bunların yerine doğrulamadan kullanma.
- Üç test linki, verdiğin Google Play kapalı test URL'lerine yönlendirilir.
