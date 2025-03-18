// Thông tin chi tiết về các thành viên
const memberInfo = {
    jisoo: {
        fullName: "Kim Ji-soo (김지수)",
        birthday: "3 tháng 1, 1995",
        position: "Lead Vocal, Visual",
        biography: "Jisoo là thành viên lớn tuổi nhất của BLACKPINK. Cô được biết đến với vai trò visual và giọng hát độc đáo. Ngoài ca hát, Jisoo còn là một diễn viên tài năng và là đại sứ thương hiệu cho nhiều nhãn hàng cao cấp.",
        facts: [
            "Có biệt danh là Chi Chi",
            "Là đại sứ toàn cầu của Dior",
            "Có thể nói được 3 ngôn ngữ: Tiếng Hàn, Tiếng Nhật, và Tiếng Anh cơ bản",
            "Đóng vai chính trong bộ phim Snowdrop"
        ]
    },
    jennie: {
        fullName: "Jennie Kim (제니)",
        birthday: "16 tháng 1, 1996",
        position: "Main Rapper, Lead Vocal",
        biography: "Jennie được biết đến với khả năng rap ấn tượng và phong cách thời trang độc đáo. Cô là thành viên đầu tiên ra mắt solo với ca khúc 'SOLO' và được mệnh danh là 'Human Chanel'.",
        facts: [
            "Sống ở New Zealand trong 5 năm",
            "Là đại sứ của Chanel",
            "Có biệt danh là Human Gucci",
            "Thành viên đầu tiên debut solo"
        ]
    },
    rose: {
        fullName: "Roseanne Park (박채영)",
        birthday: "11 tháng 2, 1997",
        position: "Main Vocal, Lead Dancer",
        biography: "Rosé nổi tiếng với giọng hát đặc trưng và kỹ năng chơi guitar. Cô sinh ra ở New Zealand và lớn lên ở Australia trước khi đến Hàn Quốc theo đuổi sự nghiệp âm nhạc.",
        facts: [
            "Có thể chơi đàn guitar và piano",
            "Là đại sứ của Saint Laurent",
            "Có giọng hát cao nhất nhóm",
            "Ra mắt solo với 'On The Ground'"
        ]
    },
    lisa: {
        fullName: "Lalisa Manoban (ลลิสา มโนบาล)",
        birthday: "27 tháng 3, 1997",
        position: "Main Dancer, Lead Rapper",
        biography: "Lisa là thành viên người Thái duy nhất trong nhóm. Cô nổi tiếng với khả năng nhảy xuất sắc và phong cách thời trang độc đáo. Lisa cũng là một mentor được yêu thích trong các show sống còn.",
        facts: [
            "Là người nước ngoài đầu tiên gia nhập YG Entertainment",
            "Là đại sứ của CELINE",
            "Có kênh YouTube cá nhân LILIFILM",
            "Nói được 4 ngôn ngữ: Thái, Hàn, Anh, và Nhật"
        ]
    }
};

// Xử lý sự kiện click cho nút thông tin
document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', function() {
        const member = this.parentElement.dataset.member;
        showMemberInfo(member);
    });
});

// Hiển thị modal thông tin thành viên
function showMemberInfo(member) {
    const modal = document.getElementById('memberModal');
    const modalInfo = document.getElementById('modalInfo');
    const info = memberInfo[member];

    modalInfo.innerHTML = `
        <h2>${info.fullName}</h2>
        <p><strong>Ngày sinh:</strong> ${info.birthday}</p>
        <p><strong>Vị trí:</strong> ${info.position}</p>
        <h3>Tiểu sử</h3>
        <p>${info.biography}</p>
        <h3>Thông tin thú vị</h3>
        <ul>
            ${info.facts.map(fact => `<li>${fact}</li>`).join('')}
        </ul>
    `;

    modal.style.display = 'block';
}

// Đóng modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('memberModal').style.display = 'none';
});

// Đóng modal khi click bên ngoài
window.addEventListener('click', function(event) {
    const modal = document.getElementById('memberModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Thêm smooth scrolling cho các liên kết
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Thêm hiệu ứng parallax cho hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
}); 
// ... existing code ...

// Thông tin các bài hát
const musicList = [
    {
        title: "Pink Venom",
        thumbnail: "images/pink-venom.jpg",
        releaseDate: "19 tháng 8, 2022",
        views: "1.5B",
        youtubeLink: "https://www.youtube.com/watch?v=gQlMMD8auMs"
    },
    {
        title: "How You Like That",
        thumbnail: "images/how-you-like-that.jpg",
        releaseDate: "26 tháng 6, 2020",
        views: "1.2B",
        youtubeLink: "https://www.youtube.com/watch?v=ioNng23DkIM"
    },
    {
        title: "DDU-DU DDU-DU",
        thumbnail: "images/ddu-du.jpg",
        releaseDate: "15 tháng 6, 2018",
        views: "2.1B",
        youtubeLink: "https://www.youtube.com/watch?v=IHNzOHi8sJs"
    },
    {
        title: "Kill This Love",
        thumbnail: "images/kill-this-love.jpg",
        releaseDate: "4 tháng 4, 2019",
        views: "1.8B",
        youtubeLink: "https://www.youtube.com/watch?v=2S24-y0Ij3Y"
    },
    {
        title: "Shut Down",
        thumbnail: "images/shut-down.jpeg",
        releaseDate: "16 tháng 9, 2022",
        views: "590M",
        youtubeLink: "https://www.youtube.com/watch?v=POe9SOEKotk"
    },
    {
        title: "Ice Cream (with Selena Gomez)",
        thumbnail: "images/ice-cream.jpg",
        releaseDate: "28 tháng 8, 2020",
        views: "850M",
        youtubeLink: "https://www.youtube.com/watch?v=vRXZj0DzXIA"
    }
];

// Hiển thị danh sách bài hát
function displayMusicList() {
    const musicGrid = document.querySelector('.music-grid');
    
    musicList.forEach(song => {
        const musicItem = document.createElement('div');
        musicItem.className = 'music-item';
        
        musicItem.innerHTML = `
            <img src="${song.thumbnail}" alt="${song.title}">
            <div class="play-button">
                <a href="${song.youtubeLink}" target="_blank">
                    <i class="fas fa-play"></i>
                </a>
            </div>
            <div class="music-info">
                <h3>${song.title}</h3>
                <p class="release-date">${song.releaseDate}</p>
                <div class="views">
                    <i class="fab fa-youtube"></i>
                    <span>${song.views} lượt xem</span>
                </div>
            </div>
        `;
        
        musicGrid.appendChild(musicItem);
    });
}

// Gọi hàm hiển thị khi trang web được tải
document.addEventListener('DOMContentLoaded', displayMusicList);

// ... existing code ..
// Banner Slider
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    // Tạo dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });

    // Hiển thị slide đầu tiên
    slides[0].classList.add('active');

    // Chuyển đến slide được chọn
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.dot')[currentSlide].classList.add('active');
    }

    // Chuyển đến slide tiếp theo
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    // Chuyển đến slide trước
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prev);
    }

    // Tự động chuyển slide
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Chuyển slide mỗi 5 giây
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });

    // Dừng autoplay khi hover vào slider
    document.querySelector('.hero-slider').addEventListener('mouseenter', stopSlideShow);
    document.querySelector('.hero-slider').addEventListener('mouseleave', startSlideShow);

    // Bắt đầu slideshow
    startSlideShow();
}

// Khởi tạo slider khi trang được tải
document.addEventListener('DOMContentLoaded', initSlider);

// Album Photo Gallery
function initPhotoAlbum() {
    const albumPhotos = [
        {
            frontImage: "images/album/bp-1.jpeg",
            frontCaption: "BLACKPINK World Tour 2023",
        },
        {
            frontImage: "images/album/bp-2.jpg",
            frontCaption: "Born Pink Album Release"
        },
        {
            frontImage: "images/album/bp-3.jpg",
            frontCaption: "Coachella Performance",
        },
        {
            frontImage: "images/album/bp-4.jpg",
            frontCaption: "MTV VMAs 2022"
        },
        {
            frontImage: "images/album/bp-5.jpeg",
            frontCaption: "Pink Venom MV Behind",
            backImage: "images/album/bp-6.jpg",
            backCaption: "Shut Down Recording"
        },
        {
            frontImage: "images/album/bp-7.jpg",
            frontCaption: "Magazine Photoshoot",
            backImage: "images/album/bp-8.jpg",
            backCaption: "Summer Diary 2023"
        }
    ];

    const book = document.querySelector('.book');
    const bookPages = document.querySelector('.book-pages');
    const prevBtn = document.querySelector('.prev-page');
    const nextBtn = document.querySelector('.next-page');
    let currentPage = 0;
    let isAnimating = false;

    // Tạo book-cover (trang đầu tiên)
    const firstPage = document.createElement('div');
    firstPage.className = 'page first-page';
    firstPage.innerHTML = `
        <div class="book-cover">
            <div class="cover-content">
                <h3>BLACKPINK</h3>
                <p>THE ALBUM</p>
                <div class="cover-design">
                    <img src="images/bp-logo.png" alt="BLACKPINK Logo" class="cover-logo">
                </div>
            </div>
        </div>
    `;
    bookPages.appendChild(firstPage);

    // Tạo các trang ảnh
    albumPhotos.forEach((photo, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.style.zIndex = albumPhotos.length - index;
        
        page.innerHTML = `
            <div class="page-content front">
                <img src="${photo.frontImage}" alt="BLACKPINK">
                <p class="page-caption">${photo.frontCaption}</p>
            </div>
            <div class="page-content back">
                <img src="${photo.backImage}" alt="BLACKPINK">
                <p class="page-caption">${photo.backCaption}</p>
            </div>
        `;
        bookPages.appendChild(page);
    });

    const pages = document.querySelectorAll('.page');

    function turnPage(direction) {
        if (isAnimating) return;
        isAnimating = true;

        if (direction === 'next' && currentPage < pages.length - 1) {
            pages[currentPage].style.transform = 'rotateY(-180deg)';
            currentPage++;
        } else if (direction === 'prev' && currentPage > 0) {
            currentPage--;
            pages[currentPage].style.transform = 'rotateY(0deg)';
        }

        updateButtonStates();

        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    }

    function updateButtonStates() {
        prevBtn.disabled = currentPage === 0;
        prevBtn.style.opacity = currentPage === 0 ? '0.5' : '1';

        nextBtn.disabled = currentPage === pages.length - 1;
        nextBtn.style.opacity = currentPage === pages.length - 1 ? '0.5' : '1';
    }

    nextBtn.addEventListener('click', () => turnPage('next'));
    prevBtn.addEventListener('click', () => turnPage('prev'));

    book.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        book.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    book.addEventListener('mouseleave', () => {
        book.style.transform = 'rotateY(0) rotateX(0)';
    });

    updateButtonStates();
}

// Khởi tạo album khi trang được tải
document.addEventListener('DOMContentLoaded', initPhotoAlbum);