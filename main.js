const selector = document.querySelector.bind(document)
const selectorAll = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = "PLAYER"

// Sidebar Handle
const navList = selectorAll('.sidebar__nav-item')
const contentContainers = selectorAll('.content-container')

Array.from(navList).map((navItem, index) => navItem.onclick = (e) => {
    e.preventDefault()
    if(contentContainers[index]){
        if(selector('.content-container.active')){
            selector('.content-container.active').classList.remove('active')
        }
        contentContainers[index].classList.add('active')
    }
    if(selector('.sidebar__nav-item.active')){
        selector('.sidebar__nav-item.active').classList.remove('active')
    }
    navItem.classList.add('active')
})

// Header Handle
const headerItems = selectorAll('.header__item')

headerItems.forEach(item => item.onclick = (e) => {
    e.stopPropagation()
    item.classList.toggle('active')
})
document.onclick = () => {
    if(selector('.header__item.active')) selector('.header__item.active').classList.remove('active')
}

// Tab User Handle
const userNavList = selectorAll('.user-navbar__item')
const userContentList = selectorAll('.user-content')

Array.from(userNavList).map((navItem, index) => navItem.onclick = (e) => {
    e.preventDefault()
    if(userContentList[index]){
        if(selector('.user-content.active')){
            selector('.user-content.active').classList.remove('active')
        }
        userContentList[index].classList.add('active')
    }
    if(selector('.user-navbar__item.active')){
        selector('.user-navbar__item.active').classList.remove('active')
    }
    navItem.classList.add('active')
})

// Tab User
const slideOverview = selector('.container__slide-show')

// Player
const togglePlay = selector('.btn-toggle-play')
const audio = selector('#audio')
const cd = selector('.cd')
const cdThumb = selector('.cd-thumb')
const player = selector('#player')
const progress = selector('#progress')
const nextBtn = selector('.btn-next')
const prevBtn = selector('.btn-prev')
const playlists = selectorAll('.user__playlist')
const volume = selector('#volume')
const volumeBtn = selector('.vol-btn')
const volControl = selector('.vol-control')
const gifPlaying = selectorAll('.user__playlist-item__playing')

// Handle slide show
// let imgIndex = 2;
// (function slideShow() {
//     const slideImgFirst = selector('.container__slide-item.first')
//     const slideImgSecond = selector('.container__slide-item.second')
//     const slideImgThird = slideImgs[imgIndex]
//     const slideImgFourth = slideImgs[imgIndex === slideImgs.length -1 ?  0 : imgIndex + 1]
//     slideImgFourth.classList.replace('fourth', 'third')
//     slideImgThird.classList.replace('third', 'second')
//     slideImgSecond.classList.replace('second', 'first')
//     slideImgFirst.classList.replace('first', 'fourth')
//     imgIndex++;
//     if(imgIndex >= slideImgs.length) {
//         imgIndex = 0;
//     }
//     setTimeout(slideShow, 2000)
// })()

const app = {
    songs: JSON.parse(localStorage.getItem(SONG_PLAYLISTS_KEY) || '[]'),
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMuted: false,
    currentIndex : 0,
    currentPlaylist: 0,
    imgIndex: 2,
    indexArr: [],

    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY) || '{}'),

    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },

    renderSongs: function() {
        const htmls = this.songs[this.currentPlaylist].map(function(song, index) {
            return`
                <li class="user__playlist-item ${index === app.currentIndex ? 'active' : ''}" data-index="${index}"}
                >
                    <div class="user__playlist-item-left">
                        <div class="user__playlist-item-left-icon">
                            <i class="ti-music-alt"></i>
                        </div>           
                        <div class="user__playlist-item__img-wrap">
                            <div class="user__playlist-item__img" style="background-image: url(${song.image});">
                            </div>
                            <div class="user__playlist-item__playing" style="background: url(./assets/img/icon-playing.gif) no-repeat 50% / contain;">
                            </div>
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="user__playlist-item__info">
                            <h2 class="user__playlist-item__title">${song.name}</h2>
                            <h5 class="user__playlist-item__singer">${song.singer}</h5>
                        </div>
                    </div>

                    <div class="user__playlist-item-center hide-on-mobile-tablet">
                        <span>${song.duration}</span>
                    </div>

                    <div class="user__playlist-item-right">
                        <div class="user__playlist-item__action">
                            <i class="ti-align-center"></i>
                        </div>
                        <div class="user__playlist-item__action-like active">
                            <i class="far fa-heart heart-off"></i>
                            <i class="fas fa-heart heart-on"></i>
                        </div>
                        <div class="user__playlist-item__action">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </li>
            `                    
        })
        playlists.forEach((playlist, index) => {
            playlist.innerHTML = htmls.join('')
        })
    },

    renderSlideOverview: function() {
        const htmls = this.songs[this.currentPlaylist].map(function(song, index) {
            return`
                <div class="container__slide-item 
                            ${index === 0 && 'first' || index === 1 && 'second' || index === 2 && 'third' || index > 2 && 'fourth'}">
                    <div style="background: url(${song.image}) no-repeat center center / cover" class="container__slide-img"></div>
                </div>
            `                    
        })
        slideOverview.innerHTML = htmls.join('')
    },

    slideShow() {        
        const slideImgs = selectorAll('.container__slide-item')
        const slideImgFirst = selector('.container__slide-item.first')
        const slideImgSecond = selector('.container__slide-item.second')
        const slideImgThird = slideImgs[app.imgIndex]
        const slideImgFourth = slideImgs[app.imgIndex === slideImgs.length -1 ?  0 : app.imgIndex + 1]
        slideImgFourth.classList.replace('fourth', 'third')
        slideImgThird.classList.replace('third', 'second')
        slideImgSecond.classList.replace('second', 'first')
        slideImgFirst.classList.replace('first', 'fourth')
        app.imgIndex++;
        if(app.imgIndex >= slideImgs.length) {
            app.imgIndex = 0;
        }
        setTimeout(app.slideShow, 2000)
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentPlaylist][this.currentIndex]
            }
        })
    },

    smoothAnimation(element) {
        element.style.willChange = 'transform, opacity';
    },

    handleEvents: function() {
        const cdWidth = cd.offsetWidth
        const _this = this

        //Scrolling
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        //Xử lý khi nhấn play
        togglePlay.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {                
                audio.play()
            }
        }
        
        //Xử lý quay đĩa
        _this.smoothAnimation(cdThumb)
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' } 
        ], {
            duration: 10000,
            iterations: Infinity,
        })
        cdThumbAnimate.pause()

        //Khi bài hát được play/pause
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            selectorAll('.user__playlist-item__playing')[_this.currentIndex].classList.add('active')
            selectorAll('.user__playlist-item__playing')[_this.currentIndex + _this.songs[_this.currentPlaylist].length].classList.add('active')
            cdThumbAnimate.play()            
        }
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            selectorAll('.user__playlist-item__playing')[_this.currentIndex].classList.remove('active')
            selectorAll('.user__playlist-item__playing')[_this.currentIndex + _this.songs[_this.currentPlaylist].length].classList.remove('active')
            cdThumbAnimate.pause()
        }
        
        //Khi thanh volume thay đổi
        volume.oninput = function (e) {
            audio.volume = e.target.value / 100
            if (audio.volume === 0) {
            volControl.classList.add('mute')
            }
            else {
                volControl.classList.remove('mute')
            }           
        }

        
        //Khi nhấn btn volume
        volumeBtn.onclick = function() {
            _this.isMuted = !_this.isMuted
            volControl.classList.toggle('mute', _this.isMuted)
            if(_this.isMuted) {
                audio.volume = 0
            }
            else {
                audio.volume = volume.value / 100
            }
        }

        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {            
            const curTime = selector('.curTime')
            const durTime = selector('.durationTime')

            let newIndex = _this.currentIndex

            curTime.textContent = app.secondsToMs(this.currentTime)
            if(this.duration){
                durTime.textContent = app.secondsToMs(this.duration)
            }

            if (audio.duration) {
                progress.value = Math.floor(audio.currentTime / audio.duration * 100)
            }
            if (audio.currentTime === audio.duration) {
                if (!_this.isRepeat) {
                    if (_this.isRandom) {
                        _this.randomSong()
                    } else {
                        _this.nextSong()
                    }
                } else {
                    _this.currentIndex = newIndex
                    _this.loadCurrentSong()
                }
                _this.renderSongs()
                audio.play()
            }
        }

        //Xử lý khi tua bài hát
        progress.oninput = function(e) {
            audio.currentTime = e.target.value * audio.duration / 100            
        }        

        //Xử lý khi Next/Prev
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.renderSongs()
        }

        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.renderSongs()
        }

        //Xử lý khi nhấn Random
        const randomBtn = selector('.btn-random')
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom            
            randomBtn.classList.toggle('active')
        }

        //Xử lý khi nhấn Repeat
        const repeatBtn = selector('.btn-repeat')
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active')
        }
        
        // Lắng nghe khi ấn vào playlist
        playlists.forEach((playlist, index) => {
            playlist.onclick = function(e) {
                const songNode = e.target.closest('.user__playlist-item:not(.active)')
                if (songNode || e.target.closest('.user__playlist-item-right')) {
                    //Xử lý khi nhấn vào song
                    if(songNode) {
                        _this.currentIndex = Number(songNode.dataset.index)
                        _this.loadCurrentSong()
                        _this.renderSongs()
                        audio.play()
                    }
                    //Xử lý khi nhấn vào option
                    if (e.target.closest('.user__playlist-item-right')) {
    
                    }
                }
            }    
        })

        //lay element cha
        function getParent (element, selector) {
            while (element.parentElement) {
                if (element.parentElement.matches(selector)) {
                    return element.parentElement
                }
                element = element.parentElement
            }
        }

        // Khi ấn Play 1 playlist bất kỳ
        const listPlayBtns = selectorAll('.user-content__playlist-item-actions--play')
        listPlayBtns.forEach((listPlayBtn, index) => {
            listPlayBtn.onclick = () => {
                const listOverview = getParent(listPlayBtn, '.user-content__playlist-item-link')
                if(selector('.user-content__playlist-item-link.active')) {
                    selector('.user-content__playlist-item-link.active').classList.remove('active')
                } 
                listOverview.classList.add('active')
                app.currentPlaylist = index
                app.imgIndex = 2
                app.renderSongs()
                app.renderSlideOverview()                
                app.loadCurrentSong()
                audio.play()
            }
        })
    },

    secondsToMs: function(d){
        d = Number(d)
        var m = Math.floor(d % 3600 / 60)
        var s = Math.floor(d % 3600 % 60)
        var mDisplay = m > 9 ? m : `0${m}`
        var sDisplay = s > 9 ? s : `0${s}`
        return `${mDisplay}:${sDisplay}`
    },

    loadCurrentSong: function() {    
        const singer = selector('.songs-info h5')
        const songName = selector('.songs-info h2')
        songName.textContent = this.currentSong.name
        singer.textContent = this.currentSong.singer
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path        
    },

    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs[this.currentPlaylist].length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex <= 0) {
            this.currentIndex = this.songs[this.currentPlaylist].length-1
        }
        this.loadCurrentSong()
    },

    randomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs[this.currentPlaylist].length)
        } while (newIndex === this.currentIndex || this.indexArr.includes(newIndex))
        this.indexArr.push(newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
        if(this.indexArr.length === this.songs[this.currentPlaylist].length) {
            this.indexArr = [];
        }
    },

    render: function() {
        this.renderSongs()
        this.renderSlideOverview()
    },

    start: function() {
        //định nghĩa thuộc tính cho obj
        this.defineProperties()        

        //Tải thông tin bài hát đầu tiên vào UI khi chạy app
        this.loadCurrentSong()

        //render playlist
        this.render()

        // slide overview animate
        this.slideShow()

        //lắng nghe sự kiện
        this.handleEvents()
    }
}

app.start()

