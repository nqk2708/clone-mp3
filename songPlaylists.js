const songs = [
    [ // 1
        {
            name: 'Hoa Nở Không Màu',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/HoaNoKhongMau1-HoaiLam-6281704.mp3',
            duration: '05:28',
            image:"./assets/img/songList1/HoaNoKhongMau.jpg"
        },
        {
            name: 'Buồn Làm Chi Em Ơi',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/BuonLamChiEmOi1-HoaiLam-6297318.mp3',
            duration: '04:32',
            image:"./assets/img/songList1/BuonLamChiEmOi.jpg"
        },
        {
            name: 'Như Những Phút Ban Đầu',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Nhu Nhung Phut Ban Dau - Hoai Lam (NhacPro.net).mp3',
            duration: '05:34',
            image:"./assets/img/songList1/NhuNhungPhutBanDau.jpg"
        },
        {
            name: 'Có Khi',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Co-Khi-Hoai-Lam.mp3',
            duration: '04:15',
            image:"./assets/img/songList1/CoKhi.jpg"
        },
        {
            name: 'Một Thời Đã Xa',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Mot-thoi-da-xa-Hoai-Lam.mp3',
            duration: '05:23',
            image:"./assets/img/songList1/MotThoiDaXa.jpg"
        },
        {
            name: 'Thương Nhớ Người Dưng',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Thuong-nho-nguoi-dung-Hoai-Lam.mp3',
            duration: '05:03',
            image:"./assets/img/songList1/ThuongNhoNguoiDung.jpg"
        },
        {
            name: 'Nỗi Nhớ Mang Tên Mình',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Noi-Nho-Mang-Ten-Minh.mp3',
            duration: '05:10',
            image:"./assets/img/songList1/NoiNhoMangTenMinh.jpg"
        },
        {
            name: 'Mẹ',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Me-Hoai-Lam.mp3',
            duration: '04:55',
            image:"./assets/img/songList1/Me.jpg"
        },
        {
            name: 'Trộm Nhìn Nhau',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Trom-Nhin-Nhau-Hoai-Lam.mp3',
            duration: '05:13',
            image:"./assets/img/songList1/TromNhinNhau.jpg"
        },
        {
            name: 'Xin Lỗi Vì Đã Yêu Nhau',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Xin-Loi-Vi-Da-Yeu-Nhau-Hoai-Lam.mp3',
            duration: '04:48',
            image:"./assets/img/songList1/XinLoiViDaYeuNhau.jpg"
        },
        {
            name: 'Có Khi Nào Rời Xa',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Co-Khi-Nao-Roi-Xa-Hoai-Lam.mp3',
            duration: '03:41',
            image:"./assets/img/songList1/CoKhiNaoRoiXa.jpg"
        },
        {
            name: 'Về Đâu Mái Tóc Người Thương',
            singer: 'Hoài Lâm',
            path: './assets/songs/List 1/Ve-Dau-Mai-Toc-Nguoi-Thuong-Hoai-Lam.mp3',
            duration: '04:23',
            image:"./assets/img/songList1/VeDauMaiTocNguoiThuong.jpg"
        },
        {
            name: 'Nếu Như Là Định Mệnh',
            singer: 'Hoài Lâm, Binz',
            path: './assets/songs/List 1/Neu-Nhu-La-Dinh-Menh-Hoai-Lam-Binz.mp3',
            duration: '04:38',
            image:"./assets/img/songList1/NeuNhuLaDinhMenh.jpg"
        },
    ],
    [ //2
        {
            name: 'Đại Ngư / 大鱼',
            singer: 'Châu Thâm',
            path: './assets/songs/List 2/CaLon-ChauThamZhouShen-5299966.mp3',
            duration: '05:14',
            image:"./assets/img/songList2/DaiNgu.jpg"
        },
        {
            name: 'Con Đường Bình Phàm / 平凡之路',
            singer: 'Hoa Thần Vũ',
            path: './assets/songs/List 2/ConDuongBinhPhamLive-HoaThanVu-5431294.mp3',
            duration: '06:51',
            image:"./assets/img/songList2/ConDuongBinhPham.jpg"
        },
        {
            name: 'Đại Thiên Bồng / 大天蓬',
            singer: 'Lộ Gia',
            path: './assets/songs/List 2/DaiThienBong-LoGiaLuYe-6889620.mp3',
            duration: '04:05',
            image:"./assets/img/songList2/DaiThienBong.jpg"
        },
        {
            name: 'Đạp Sơn Hà / 踏山河',
            singer: 'Thập Thất Thúc Ni',
            path: './assets/songs/List 2/DapSonHa-ThapThatThucNi-6855032.mp3',
            duration: '02:53',
            image:"./assets/img/songList2/DapSonHa.jpg"
        },
        {
            name: 'Hạ Sơn / 下山',
            singer: '要不要買菜',
            path: './assets/songs/List 2/HaSon-YeuBatYeuMaiThaiYaoBuYaoMaiCai-6150900.mp3',
            duration: '02:53',
            image:"./assets/img/songList2/HaSon.jpg"
        },
        {
            name: 'Không Thể Nói / 不可说',
            singer: 'Hoắc Kiến Hoa, Triệu Lệ Dĩnh',
            path: './assets/songs/List 2/KhongTheNoiHoaThienCotOST-HoacKienHoaWallaceHuoZhaoLiYingTrieuLeDinh-4043045.mp3',
            duration: '03:43',
            image:"./assets/img/songList2/KhongTheNoi.jpg"
        },
        {
            name: 'Lạnh Lẽo / 涼涼',
            singer: 'Dương Tông Vỹ, Trương Bích Thần',
            path: './assets/songs/List 2/LanhLeoTamSinhTamTheThapLyDaoHoaOst-AskaYangDuongTongVyZhangBiChenTruongBichThan-4744167.mp3',
            duration: '05:33',
            image:"./assets/img/songList2/LanhLeo.jpg"
        },
        {
            name: 'Luyến Nhân Tâm / 恋人心',
            singer: 'Ngụy Tân Vũ',
            path: './assets/songs/List 2/LuyenNhanTam-NguyTanVu-4583893.mp3',
            duration: '03:26',
            image:"./assets/img/songList2/LuyenNhanTam.jpg"
        },
        {
            name: 'Ly Nhân Sầu / 离人愁',
            singer: 'Lý Viên Kiệt',
            path: './assets/songs/List 2/LyNhanSau-LyVienKiet-5411802.mp3',
            duration: '04:09',
            image:"./assets/img/songList2/LyNhanSau.jpg"
        },
        {
            name: 'Mang Chủng / 芒种',
            singer: 'Âm Khuyết Thi Thính, Triệu Phương Tịnh',
            path: './assets/songs/List 2/MangChung-TrieuPhuongTinhAmKhuyetThiThinh-5989054.mp3',
            duration: '03:36',
            image:"./assets/img/songList2/MangChung.jpg"
        },
        {
            name: 'Niên Luân / 年輪',
            singer: 'Trương Bích Thần',
            path: './assets/songs/List 2/NienLuanHoaThienCotOst-TruongBichThan-4024398.mp3',
            duration: '04:35',
            image:"./assets/img/songList2/NienLuan.jpg"
        },
        {
            name: 'Tam Sinh Tam Thế / 三生三世',
            singer: 'Trương Kiệt',
            path: './assets/songs/List 2/TamSinhTamTheTamSinhTamTheThapLyDaoHoaOst-JasonZhangTruongKiet-4748050.mp3',
            duration: '04:18',
            image:"./assets/img/songList2/TamSinhTamThe.jpg"
        },
        {
            name: 'Thiên Cổ / 千古',
            singer: 'Alan',
            path: './assets/songs/List 2/ThienCoHoaThienCotOst-ALan-4053302.mp3',
            duration: '04:16',
            image:"./assets/img/songList2/ThienCo.jpg"
        },
        {
            name: 'Xuất Sơn / 出山',
            singer: 'Hoa Chúc, Vương Thắng Nam',
            path: './assets/songs/List 2/XuatSon-HoaChucVuongThangNam-5883657.mp3',
            duration: '03:20',
            image:"./assets/img/songList2/XuatSon.jpg"
        },
        {
            name: 'Yến Vô Hiết / 燕无歇',
            singer: 'Tưởng Tuyết Nhi (Cher Chiang)',
            path: './assets/songs/List 2/YenVoHiet-TuongTuyetNhiCherChiang-6520166.mp3',
            duration: '03:21',
            image:"./assets/img/songList2/YenVoHiet.jpg"
        },
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