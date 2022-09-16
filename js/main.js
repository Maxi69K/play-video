/************************************************************************
// Pocedualni nacin koda
const playImg = document.getElementById('playImg'),
      reloadImg = document.getElementById('reloadImg'),
      video = document.querySelector('video');

playImg.addEventListener('click', startVideo);
reloadImg.addEventListener('click', reloadVideo);

function startVideo() {
    if (this.getAttribute('src') === 'img/play.svg') {
        video.play();
        this.setAttribute('src', 'img/pause.svg');
    } else {
        video.pause();
        this.setAttribute('src', 'img/play.svg');
    }
}

function reloadVideo() {
    video.load();
    playImg.setAttribute('src', 'img/play.svg');
} 

****************************************************************************/

// Code encapsulation
/***************************************************************************

(function () {
    let videoPlayer = {
        playImg: document.getElementById('playImg'),
        reloadImg: document.getElementById('reloadImg'),
        video: document.querySelector('video'),
        init: function () {
            this.playImg.addEventListener('click', this.startVideo);
            this.reloadImg.addEventListener('click', this.reloadVideo);
        },
        startVideo: function () {
            if (this.getAttribute('src') === 'img/play.svg') {
                videoPlayer.video.play();
                this.setAttribute('src', 'img/pause.svg');
            } else {
                videoPlayer.video.pause();
                this.setAttribute('src', 'img/play.svg');
            }
        },
        reloadVideo: function () {
            videoPlayer.video.load();
            videoPlayer.playImg.setAttribute('src', 'img/play.svg');
        }
    }
    videoPlayer.init();
})()

******************************************************************************/

// Video player constrator funcion
/*

(function () {
    function VideoPlayer() {
        let self = this;
        this.playImg = document.getElementById('playImg');
        this.reloadImg = document.getElementById('reloadImg');
        this.video = document.querySelector('video');
        this.init = function () {
            this.playImg.addEventListener('click', this.startVideo);
            this.reloadImg.addEventListener('click', this.reloadVideo);
        };
        this.startVideo = function () {
            if (this.getAttribute('src') === 'img/play.svg') {
                self.video.play();
                this.setAttribute('src', 'img/pause.svg');
            } else {
                self.video.pause();
                this.setAttribute('src', 'img/play.svg');
            }
        };
        this.reloadVideo = function () {
            self.video.load();
            self.playImg.setAttribute('src', 'img/play.svg');
        }
    }
    let videoPlayer = new VideoPlayer();
    videoPlayer.init();
})()

*/

//Za jedan video ( prepraviti clase na id u html)
/*

(function () {
    function VideoPlayer() {
        this.playImg = document.getElementById('playImg');
        this.reloadImg = document.getElementById('reloadImg');
        this.video = document.querySelector('video');
        this.init = function () {
            this.playImg.addEventListener('click', this.startVideo.bind(this));
            this.reloadImg.addEventListener('click', this.reloadVideo.bind(this));
        };
        this.startVideo = function () {
            if (this.playImg.getAttribute('src') === 'img/play.svg') {
                this.video.play();
                this.playImg.setAttribute('src', 'img/pause.svg');
            } else {
                this.video.pause();
                this.playImg.setAttribute('src', 'img/play.svg');
            }
        };
        this.reloadVideo = function () {
            this.video.load();
            this.playImg.setAttribute('src', 'img/play.svg');
        }
    }
    let videoPlayer = new VideoPlayer();
    videoPlayer.init();
})()

*/

//Za vise videa
(function () {
    function VideoPlayer(id) {
        this.videoHolder = document.getElementById(id);
        this.playImg = this.videoHolder.querySelector('.playImg');
        this.reloadImg = this.videoHolder.querySelector('.reloadImg');
        this.video = this.videoHolder.querySelector('video');
        this.init = function () {
            this.playImg.addEventListener('click', this.startVideo.bind(this));
            this.reloadImg.addEventListener('click', this.reloadVideo.bind(this));
        };
        this.startVideo = function () {
            if (this.playImg.getAttribute('src') === 'img/play.svg') {
                this.video.play();
                this.playImg.setAttribute('src', 'img/pause.svg');
            } else {
                this.video.pause();
                this.playImg.setAttribute('src', 'img/play.svg');
            }
        };
        this.reloadVideo = function () {
            this.video.load();
            this.playImg.setAttribute('src', 'img/play.svg');
        }
    }
    let videoPlayer1 = new VideoPlayer('video1').init();
    let videoPlayer2 = new VideoPlayer('video2').init();
})()