const songs = [
    [ // 1
        {
            name: 'Hoa Nở Không Màu',
            singer: 'Hoài Lâm',
            path: './assets/songs/HoaNoKhongMau1-HoaiLam-6281704.mp3',
            duration: '05:28',
            image:"./assets/img/HoaNoKhongMau.jpg"
        },
        {
            name: 'Buồn Làm Chi Em Ơi',
            singer: 'Hoài Lâm',
            path: './assets/songs/BuonLamChiEmOi1-HoaiLam-6297318.mp3',
            duration: '04:32',
            image:"./assets/img/BuonLamChiEmOi.jpg"
        },
        {
            name: 'Như Những Phút Ban Đầu',
            singer: 'Hoài Lâm',
            path: './assets/songs/Nhu Nhung Phut Ban Dau - Hoai Lam (NhacPro.net).mp3',
            duration: '05:34',
            image:"./assets/img/NhuNhungPhutBanDau.jpg"
        },
        {
            name: 'Có Khi',
            singer: 'Hoài Lâm',
            path: './assets/songs/Co-Khi-Hoai-Lam.mp3',
            duration: '04:15',
            image:"./assets/img/BuonLamChiEmOi.jpg"
        },
        {
            name: 'Một Thời Đã Xa',
            singer: 'Hoài Lâm',
            path: './assets/songs/Mot-thoi-da-xa-Hoai-Lam.mp3',
            duration: '05:23',
            image:"./assets/img/MotThoiDaXa.jpg"
        }
    ],
    [ //2
        {
            name: 'Thương Nhớ Người Dưng',
            singer: 'Hoài Lâm',
            path: './assets/songs/Thuong-nho-nguoi-dung-Hoai-Lam.mp3',
            duration: '05:42',
            image:"./assets/img/MotThoiDaXa.jpg"
        },
        {
            name: 'Nỗi Nhớ Mang Tên Mình',
            singer: 'Hoài Lâm',
            path: './assets/songs/Noi-Nho-Mang-Ten-Minh.mp3',
            duration: '05:42',
            image:"./assets/img/NhuNhungPhutBanDau.jpg"
        },
        {
            name: 'Mẹ',
            singer: 'Hoài Lâm',
            path: './assets/songs/Me-Hoai-Lam.mp3',
            duration: '05:42',
            image:"./assets/img/NhuNhungPhutBanDau.jpg"
        },
        {
            name: 'Trộm Nhìn Nhau',
            singer: 'Hoài Lâm',
            path: './assets/songs/Trom-Nhin-Nhau-Hoai-Lam.mp3',
            duration: '05:42',
            image:"./assets/img/TromNhinNhau.jpg"
        },
        {
            name: 'Xin Lỗi Vì Đã Yêu Nhau',
            singer: 'Hoài Lâm',
            path: './assets/songs/Xin-Loi-Vi-Da-Yeu-Nhau-Hoai-Lam.mp3',
            duration: '05:42',
            image:"./assets/img/MotThoiDaXa.jpg"
        }
    ],
    [ // 3
        {
            name: 'Có Khi Nào Rời Xa',
            singer: 'Hoài Lâm',
            path: './assets/songs/Co-Khi-Nao-Roi-Xa-Hoai-Lam.mp3',
            duration: '05:42',
            image:"./assets/img/BuonLamChiEmOi.jpg"
        },
        {
            name: 'Về Đâu Mái Tóc Người Thương',
            singer: 'Hoài Lâm',
            path: './assets/songs/Ve-Dau-Mai-Toc-Nguoi-Thuong-Hoai-Lam.mp3',
            duration: '05:42',
            image:"./assets/img/NhuNhungPhutBanDau.jpg"
        },
        {
            name: 'Nếu Như Là Định Mệnh',
            singer: 'Hoài Lâm, Binz',
            path: './assets/songs/Neu-Nhu-La-Dinh-Menh-Hoai-Lam-Binz.mp3',
            duration: '05:42',
            image:"./assets/img/MotThoiDaXa.jpg"
        },
    ]
]

const SONG_PLAYLISTS_KEY = "SONG_PLAYLISTS"
localStorage.setItem(SONG_PLAYLISTS_KEY, JSON.stringify(songs))