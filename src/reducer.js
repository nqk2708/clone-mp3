import storage from "../data/storage.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const SIDEBAR_NAV_KEY = "SIDEBAR NAV"
const SIDEBAR_SUBNAV_KEY = "SIDEBAR SUBNAV"
const TABUSER_NAV_KEY = "TAB-USER NAV"
const PLAYLIST_KEY = "PLAYLIST"
const PLAYER_KEY = "PLAYER"


const init = {
    sidebarNav: storage.get(SIDEBAR_NAV_KEY),
    sidebarSubnav: storage.get(SIDEBAR_SUBNAV_KEY),
    tabUserNav: storage.get(TABUSER_NAV_KEY),
    songs: storage.get(PLAYLIST_KEY),
    headerSettingActive: false
}

const songs = [
        {
            name: 'Hoa Nở Không Màu',
            singer: 'Hoài Lâm',
            path: './assets/songs/HoaNoKhongMau1-HoaiLam-6281704.mp3',
            image:"./assets/img/HoaNoKhongMau.jpg",
            duration: '05:42',
            isActive: true
        },
        {
            name: 'Buồn Làm Chi Em Ơi',
            singer: 'Hoài Lâm',
            path: './assets/songs/BuonLamChiEmOi1-HoaiLam-6297318.mp3',
            image:"./assets/img/BuonLamChiEmOi.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Như Những Phút Ban Đầu',
            singer: 'Hoài Lâm',
            path: './assets/songs/Nhu Nhung Phut Ban Dau - Hoai Lam (NhacPro.net).mp3',
            image:"./assets/img/NhuNhungPhutBanDau.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Có Khi',
            singer: 'Hoài Lâm',
            path: './assets/songs/Co-Khi-Hoai-Lam.mp3',
            image:"./assets/img/BuonLamChiEmOi.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Một Thời Đã Xa',
            singer: 'Hoài Lâm',
            path: './assets/songs/Mot-thoi-da-xa-Hoai-Lam.mp3',
            image:"./assets/img/MotThoiDaXa.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Thương Nhớ Người Dưng',
            singer: 'Hoài Lâm',
            path: './assets/songs/Thuong-nho-nguoi-dung-Hoai-Lam.mp3',
            image:"./assets/img/MotThoiDaXa.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Nỗi Nhớ Mang Tên Mình',
            singer: 'Hoài Lâm',
            path: './assets/songs/Noi-Nho-Mang-Ten-Minh.mp3',
            image:"./assets/img/NhuNhungPhutBanDau.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Mẹ',
            singer: 'Hoài Lâm',
            path: './assets/songs/Me-Hoai-Lam.mp3',
            image:"./assets/img/NhuNhungPhutBanDau.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Trộm Nhìn Nhau',
            singer: 'Hoài Lâm',
            path: './assets/songs/Trom-Nhin-Nhau-Hoai-Lam.mp3',
            image:"./assets/img/TromNhinNhau.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Xin Lỗi Vì Đã Yêu Nhau',
            singer: 'Hoài Lâm',
            path: './assets/songs/Xin-Loi-Vi-Da-Yeu-Nhau-Hoai-Lam.mp3',
            image:"./assets/img/MotThoiDaXa.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Có Khi Nào Rời Xa',
            singer: 'Hoài Lâm',
            path: './assets/songs/Co-Khi-Nao-Roi-Xa-Hoai-Lam.mp3',
            image:"./assets/img/BuonLamChiEmOi.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Về Đâu Mái Tóc Người Thương',
            singer: 'Hoài Lâm',
            path: './assets/songs/Ve-Dau-Mai-Toc-Nguoi-Thuong-Hoai-Lam.mp3',
            image:"./assets/img/NhuNhungPhutBanDau.jpg",
            duration: '05:42',
            isActive: false
        },
        {
            name: 'Nếu Như Là Định Mệnh',
            singer: 'Hoài Lâm, Binz',
            path: './assets/songs/Neu-Nhu-La-Dinh-Menh-Hoai-Lam-Binz.mp3',
            image:"./assets/img/MotThoiDaXa.jpg",
            duration: '05:42',
            isActive: false
        },
    ]

localStorage.setItem(PLAYLIST_KEY, JSON.stringify(songs))

const actions = {
    audio : $('#audio'),
    addActive(state, element, index) {
        if (Object.keys(state).includes(element)) {
            switch(element) {
                default:
                    state[element].map(e => e.isActive = false)
                    state[element][index].isActive = true
                    window.audio.src = './assets/songs/Nhu Nhung Phut Ban Dau - Hoai Lam (NhacPro.net).mp3'
                    console.log(window.audio.play())

                case 'sidebarNav':
                    state[element].map(e => e.isActive = false)
                    state.sidebarSubnav.map(e => e.isActive = false)
                    state[element][index].isActive = true                    
                    break;

                case 'sidebarSubnav':
                    state[element].map(e => e.isActive = false)
                    state.sidebarNav.map(e => e.isActive = false)
                    state[element][index].isActive = true
                    break;

                case 'headerSettingActive':
                    state[element] = !state[element]
                    break;
            }
        }
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state    
}