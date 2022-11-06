<p align="center">
<img src="https://github.com/Ronzz-Ofc/ZiahBotzV2/blob/master/temp/media/logoNya.jpg" alt="ZiahBotz" width="100"/>


</p>
<p align="center">
<a href="#"><img title="ZIAHBOTZ MULTI DEVICE" src="https://img.shields.io/badge/ZIAHBOTZ MULTI DEVICE-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/Ronzz-Ofc"><img title="Author" src="https://img.shields.io/badge/Author-Ronzz YT-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/Ronzz-Ofc/followers"><img title="Followers" src="https://img.shields.io/github/followers/Ronzz-Ofc?color=red&style=flat-square"></a>
<a href="https://github.com/Ronzz-Ofc/ZiahBotzV2/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/Ronzz-Ofc/ZiahBotzV2?color=blue&style=flat-square"></a>
<a href="https://github.com/Ronzz-Ofc/ZiahBotzV2/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Ronzz-Ofc/ZiahBotzV2?color=red&style=flat-square"></a>
<a href="https://github.com/Ronzz-Ofc/ZiahBotzV2/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/Ronzz-Ofc/ZiahBotzV2?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/Ronzz-Ofc/ZiahBotzV2"><img title="Open Source" src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103"></a>
<a href="https://github.com/Ronzz-Ofc/ZiahBotzV2/"><img title="Size" src="https://img.shields.io/github/repo-size/Ronzz-Ofc/ZiahBotzV2?style=flat-square&color=green"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FRonzz-Ofc%2FZiahBotzV2&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2300FF6D&title=hits&edge_flat=false"/></a>
<a href="https://github.com/Ronzz-Ofc/ZiahBotzV2/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>&nbsp;&nbsp;
</p>
</div>

---

## Contents:
- [Information](#information)
- [Language Support](#support-language)
- [Buildpack Heroku](#heroku-buildpack)
- [Download Via MediaFire](#download-via-mediafire)
- [Command For Termux](#command-for-termux)
- [Mongodb Account](#how-to-get-mongodb-uri)
- [Mongodb Connect](#how-to-connect-to-mongodb)
- [Edit Owner](#edit-owner)
- [Deploy to heroku](#how-to-deploy)
- [Donate](#donate)
- [Official group](#official-group)
- [Thanks to](#thanks-to)

---

## Information
> ZiahBotz adalah bot dalam tahap perkembangan. ZiahBotz is a bot whatsapp using a [Baileys](https://github.com/adiwajshing/baileys) library.

## Support Language

- [x] Indonesia
- [x] English

But some I haven't changed the language 🛐

## Heroku Buildpack
```bash
heroku/nodejs
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

## Download Via MediaFire
- [Download Script  Via MediaFire](https://youtu.be/lBh31zXSoJU)

<p align="center">
<a href="https://youtu.be/lBh31zXSoJU"><img src="https://telegra.ph/file/95fef3e690ae041ffd7fd.jpg" />
</p>

## Command For Termux
```bash
pkg upgrade && pkg update
pkg install nodejs
pkg install libwebp
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
pkg install git
git clone https://github.com/Ronzz-Ofc/ZiahBotzV2
termux-setup-storage
cd /sdcard
cd ZiahBotzV2
yarn install
npm start
```

- Download [Termux V18](https://sharelink.pw/apktermuxmod)

## How to Get Mongodb URI

- Belum Support

## HOW TO CONNECT TO MONGODB

- Belum Support

## Edit Owner 

<details>
    <summary> <b>Edit Owner Settings.js</b></summary><br/>

```ts
 {
 "contactOwner": "628xxx", 
 "botName": "Nama Bot", 
 "ownerName": "Nama Owner", 
 "sessionName": "session", 
 "footer": "Nama Bot © 2022", 
 "packname": "Nama Bot", 
 "author": "Nama Owner", 

 "youtube": "YouTube", 
 "github": "Github", 
 "instagram": "Instagram", 
 "tiktok": "TikTok", 
 "website": "Website", 
 "email": "Email", 
 "gender": "Gender/Jenis Kelamin", 
 "agama": "Agama", 
 "tanggallahir": "Tanggal Lahir", 
 "umur": "Umur", 
 "kelas": "Kelas", 
 "hobi": "Hobi", 
 "sifat": "Sifat", 
 "tinggal": "Tempat Tinggal", 
 "suka": "Kesukaan", 
 "benci": "Kebencian", 
 
  "api_alpha": "https://alphabot-api.herokuapp.com", 
  "apikey_alpha": "APIKEY", 
  
  "api_ronzz": "https://ronzz-api.herokuapp.com", 
  "apikey_ronzz": "APIKEY", 
 
 "api_zenz": "lexxybotygy", 
 "apikey_antlatic": "APIKEY", 

 "payment": {
    "qris": {
      "link_nya": "Link Qris/Foto qris", 
      "atas_nama": "Nama" 
    },
    "dana": {
      "nomer": "Nomor Dana", 
      "atas_nama": "Nama" 
    }},
    
  "pathQris": "./temp/media/qris.jpg", 
  "pathCont": "./temp/media/contributor.jpg", 
  "pathBc": "./temp/media/bc.jpg", 
  "pathThumb": "./temp/media/logoNya.jpg", 
  "pathThumb2": "./temp/media/logo.jpg", 
  "pathMenfes": "./temp/media/menfes.jpg" 
  }
```

</details>

## ```HOW TO DEPLOY```

[`Click Here For Tutorial`](https://youtu.be/RaUQUTrXK90?t=4m28s)<br>

----------

<p align="center">
  <a href="https://youtu.be/SdKHkld2NcI"><img src="https://a.top4top.io/p_2081imvxm1.jpg" />
</p>

## Donate
<details>
<summary> <b>Qris All Payment</b></summary><br/>
<img src="https://telegra.ph/file/3c485ff201d9337be14ef.jpg" />
</details>

- Dana / Gopay / Ovo : 08817839722
- [Saweria](https://saweria.co/RonzzYT)
- [SociaBuzz](https://sociabuzz.com/ronzzofc/donate)

# Official Group
<a href="https://chat.whatsapp.com/Eamzpgum2MXFUch9TBx75M"><img src="https://img.shields.io/badge/Official Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />

# Thanks to
- Allah SWT.
- Nabi Muhammad SAW.
- Orang Tua
- Ronzz YT ( Gw )
- Rapz Loloth
- Irfan / Rtwone
- Christian ID
- Zeeone Ofc
- conn ID
- Lexxy Official
- Penyedia Apikey
- My Subscriber
- All Konten Kreator Bot