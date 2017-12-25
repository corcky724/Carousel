// Loder
(function (window, document, $, EKTweener, Carousel) {
	
	var Loader = Carousel.Modules.Loader = {};
	
	Loader.init = function () {
		var that = this;
		
		/*
			* 所有圖片與影片的 Src 值。
			
			* 圖片影片 Src 採用 ./images/... 的目錄方式，以根目錄的角度來看。
		*/
		this.src = {};
		
		this.src.images = [
			// Nav Src 27 ----- ----- ----- ----- ----- -----
			'./images/nav/1.png',
			'./images/nav/2.png',
			'./images/nav/3.png',
			'./images/nav/4.png',
			'./images/nav/5.png',
			'./images/nav/6.png',
			'./images/nav/7.png',
			'./images/nav/8.png',
			'./images/nav/9.png',
			'./images/nav/10.png',
			'./images/nav/11.png',
			'./images/nav/12.png',
			'./images/nav/13.png',
			'./images/nav/14.png',
			'./images/nav/background.gif',
			'./images/nav/facebook.png',
			'./images/nav/gray.jpg',
			'./images/nav/home-close.png',
			'./images/nav/logo.png',
			'./images/nav/menu.png',
			'./images/nav/nav-r.gif',
			'./images/nav/nav-r-selected.gif',
			'./images/nav/sound.png',
			'./images/nav/sprite.png',
			'./images/nav/twitter.png',
			'./images/nav/zxc01.jpg',
			'./images/nav/zxc02.jpg',
			// Nav Src ----- ----- ----- ----- ----- -----
			
			// Loader Src 4 ----- ----- ----- ----- ----- -----
			'./images/00loader/circle-loader.png',
			'./images/00loader/loader.png',
			'./images/00loader/tutorial.gif',
			'./images/00loader/txt-dragprojects.gif',
			// Loader Src ----- ----- ----- ----- ----- -----
			
			// WhoWeAre 7 ----- ----- ----- ----- ----- -----
			'./images/01whoweare/background.jpg',
			'./images/01whoweare/bottom.png',
			'./images/01whoweare/cursor-close.png',
			'./images/01whoweare/deliver.png',
			'./images/01whoweare/directors.png',
			'./images/01whoweare/seek.png',
			'./images/01whoweare/whoweare.png',
			// WhoWeAre ----- ----- ----- ----- ----- -----
			
			// RalphLauren 8 ----- ----- ----- ----- ----- -----
			'./images/02ralphlauren/animation.gif',
			'./images/02ralphlauren/launch-normal.png',
			'./images/02ralphlauren/launch-over.png',
			'./images/02ralphlauren/photo1.jpg',
			'./images/02ralphlauren/photo2.jpg',
			'./images/02ralphlauren/photo3.jpg',
			'./images/02ralphlauren/video1.jpg',
			'./images/02ralphlauren/video2.jpg',
			// RalphLauren ----- ----- ----- ----- ----- -----
			
			// Bose 6 ----- ----- ----- ----- ----- -----
			'./images/03bose/background.jpg',
			'./images/03bose/evolve.png',
			'./images/03bose/making.png',
			'./images/03bose/over.png',
			'./images/03bose/ready.png',
			'./images/03bose/sounddesign.png',
			// Bose ----- ----- ----- ----- ----- -----
			
			// BullittAgency 28 ----- ----- ----- ----- ----- -----
			'./images/04bullittagency/a.jpg',
			'./images/04bullittagency/aa.jpg',
			'./images/04bullittagency/b.jpg',
			'./images/04bullittagency/background.jpg',
			'./images/04bullittagency/bb.jpg',
			'./images/04bullittagency/c.jpg',
			'./images/04bullittagency/clic.png',
			'./images/04bullittagency/e.jpg',
			'./images/04bullittagency/ee.jpg',
			'./images/04bullittagency/eee.jpg',
			'./images/04bullittagency/eeee.jpg',
			'./images/04bullittagency/eeeee.jpg',
			'./images/04bullittagency/h.jpg',
			'./images/04bullittagency/k.jpg',
			'./images/04bullittagency/l.jpg',
			'./images/04bullittagency/launch.png',
			'./images/04bullittagency/launch-hover.png',
			'./images/04bullittagency/line.jpg',
			'./images/04bullittagency/lineline.jpg',
			'./images/04bullittagency/m.jpg',
			'./images/04bullittagency/p.jpg',
			'./images/04bullittagency/r.jpg',
			'./images/04bullittagency/t.jpg',
			'./images/04bullittagency/text.png',
			'./images/04bullittagency/tt.jpg',
			'./images/04bullittagency/ttt.jpg',
			'./images/04bullittagency/w.jpg',
			'./images/04bullittagency/wetry.jpg',
			// BullittAgency ----- ----- ----- ----- ----- -----
			
			// Adisseo 9 ----- ----- ----- ----- ----- -----
			'./images/05adisseo/background.jpg',
			'./images/05adisseo/casestudy.png',
			'./images/05adisseo/content.png',
			'./images/05adisseo/content-hover.png',
			'./images/05adisseo/elipse.png',
			'./images/05adisseo/launch.png',
			'./images/05adisseo/separation.png',
			'./images/05adisseo/sprite.png',
			'./images/05adisseo/sprite-hover.png',
			// Adisseo ----- ----- ----- ----- ----- -----
			
			// Kindy 11 ----- ----- ----- ----- ----- -----
			'./images/06kindy/1.jpg',
			'./images/06kindy/2.jpg',
			'./images/06kindy/3.jpg',
			'./images/06kindy/adventures.png',
			'./images/06kindy/circle.png',
			'./images/06kindy/current.png',
			'./images/06kindy/find.png',
			'./images/06kindy/launch.png',
			'./images/06kindy/spriteCircle.png',
			'./images/06kindy/spriteIn.png',
			'./images/06kindy/spriteTitle.png',
			// Kindy ----- ----- ----- ----- ----- -----
			
			// Sanofi 10 ----- ----- ----- ----- ----- -----
			'./images/07sanofi/background.jpg',
			'./images/07sanofi/flou.jpg',
			'./images/07sanofi/find.png',
			'./images/07sanofi/known.png',
			'./images/07sanofi/launch.png',
			'./images/07sanofi/lines.png',
			'./images/07sanofi/stockholm.png',
			'./images/07sanofi/stroke.png',
			'./images/07sanofi/stroke1.png',
			'./images/07sanofi/stroke2.png',
			// Sanofi ----- ----- ----- ----- ----- -----
			
			// News 24 ----- ----- ----- ----- ----- -----
			'./images/08news/background.jpg',
			'./images/08news/background.png',
			'./images/08news/hot.png',
			'./images/08news/kiss-the-blade.png',
			'./images/08news/kiss-the-blade2.png',
			'./images/08news/kiss-the-blade3.png',
			'./images/08news/lines.png',
			'./images/08news/multaq-guidelines.png',
			'./images/08news/multaq-guidelines2.png',
			'./images/08news/multaq-guidelines3.png',
			'./images/08news/open-your-eyes.png',
			'./images/08news/open-your-eyes2.png',
			'./images/08news/open-your-eyes3.png',
			'./images/08news/pieces-of-heroes.png',
			'./images/08news/pieces-of-heroes2.png',
			'./images/08news/pieces-of-heroes3.png',
			'./images/08news/pixel.png',
			'./images/08news/scroll.png',
			'./images/08news/shocking.png',
			'./images/08news/shocking2.png',
			'./images/08news/shocking3.png',
			'./images/08news/the-dancer.png',
			'./images/08news/the-dancer2.png',
			'./images/08news/the-dancer3.png',
			// News ----- ----- ----- ----- ----- -----
			
			// Twist 11 ----- ----- ----- ----- ----- -----
			'./images/09twist/background2.jpg',
			'./images/09twist/launch.jpg',
			'./images/09twist/background.png',
			'./images/09twist/circle.png',
			'./images/09twist/go.png',
			'./images/09twist/launch.png',
			'./images/09twist/launch-hover.png',
			'./images/09twist/sprite1.png',
			'./images/09twist/sprite2.png',
			'./images/09twist/sprite3.png',
			'./images/09twist/sprite4.png',
			// Twist ----- ----- ----- ----- ----- -----
			
			// Luminarc 5 ----- ----- ----- ----- ----- -----
			'./images/10luminarc/background.jpg',
			'./images/10luminarc/launch.png',
			'./images/10luminarc/logo.png',
			'./images/10luminarc/over.png',
			'./images/10luminarc/text.png',
			// Luminarc ----- ----- ----- ----- ----- -----
			
			// Client 21 ----- ----- ----- ----- ----- -----
			'./images/11client/background.jpg',
			'./images/11client/adidas.png',
			'./images/11client/adisseo.png',
			'./images/11client/axa.png',
			'./images/11client/back.png',
			'./images/11client/background.png',
			'./images/11client/bose.png',
			'./images/11client/Citroen.png',
			'./images/11client/cristal-darc.png',
			'./images/11client/fond.png',
			'./images/11client/good.png',
			'./images/11client/kindy.png',
			'./images/11client/launch.png',
			'./images/11client/luminarc.png',
			'./images/11client/maybeline.png',
			'./images/11client/Novalab.png',
			'./images/11client/over.png',
			'./images/11client/ralph-lauren.png',
			'./images/11client/remy.png',
			'./images/11client/Sanofi.png',
			'./images/11client/work.png',
			// Client ----- ----- ----- ----- ----- -----
			
			// Ownthesky 3 ----- ----- ----- ----- ----- -----
			'./images/12ownthesky/background.jpg',
			'./images/12ownthesky/launch.png',
			'./images/12ownthesky/logo.png',
			// Ownthesky ----- ----- ----- ----- ----- -----
			
			// Citroen 72 ----- ----- ----- ----- ----- -----
			'./images/13citroen/drag-over.gif',
			'./images/13citroen/sprite.gif',
			'./images/13citroen/background.jpg',
			'./images/13citroen/line.jpg',
			
			'./images/13citroen/sequence_00000.jpg',
			'./images/13citroen/sequence_00001.jpg',
			'./images/13citroen/sequence_00002.jpg',
			'./images/13citroen/sequence_00003.jpg',
			'./images/13citroen/sequence_00004.jpg',
			'./images/13citroen/sequence_00005.jpg',
			'./images/13citroen/sequence_00006.jpg',
			'./images/13citroen/sequence_00007.jpg',
			'./images/13citroen/sequence_00008.jpg',
			'./images/13citroen/sequence_00009.jpg',
			
			'./images/13citroen/sequence_00010.jpg',
			'./images/13citroen/sequence_00011.jpg',
			'./images/13citroen/sequence_00012.jpg',
			'./images/13citroen/sequence_00013.jpg',
			'./images/13citroen/sequence_00014.jpg',
			'./images/13citroen/sequence_00015.jpg',
			'./images/13citroen/sequence_00016.jpg',
			'./images/13citroen/sequence_00017.jpg',
			'./images/13citroen/sequence_00018.jpg',
			'./images/13citroen/sequence_00019.jpg',
			
			'./images/13citroen/sequence_00020.jpg',
			'./images/13citroen/sequence_00021.jpg',
			'./images/13citroen/sequence_00022.jpg',
			'./images/13citroen/sequence_00023.jpg',
			'./images/13citroen/sequence_00024.jpg',
			'./images/13citroen/sequence_00025.jpg',
			'./images/13citroen/sequence_00026.jpg',
			'./images/13citroen/sequence_00027.jpg',
			'./images/13citroen/sequence_00028.jpg',
			'./images/13citroen/sequence_00029.jpg',
			
			'./images/13citroen/sequence_00030.jpg',
			'./images/13citroen/sequence_00031.jpg',
			'./images/13citroen/sequence_00032.jpg',
			'./images/13citroen/sequence_00033.jpg',
			'./images/13citroen/sequence_00034.jpg',
			'./images/13citroen/sequence_00035.jpg',
			'./images/13citroen/sequence_00036.jpg',
			'./images/13citroen/sequence_00037.jpg',
			'./images/13citroen/sequence_00038.jpg',
			'./images/13citroen/sequence_00039.jpg',
			
			'./images/13citroen/sequence_00040.jpg',
			'./images/13citroen/sequence_00041.jpg',
			'./images/13citroen/sequence_00042.jpg',
			'./images/13citroen/sequence_00043.jpg',
			'./images/13citroen/sequence_00044.jpg',
			'./images/13citroen/sequence_00045.jpg',
			'./images/13citroen/sequence_00046.jpg',
			'./images/13citroen/sequence_00047.jpg',
			'./images/13citroen/sequence_00048.jpg',
			'./images/13citroen/sequence_00049.jpg',
			
			'./images/13citroen/sequence_00050.jpg',
			'./images/13citroen/sequence_00051.jpg',
			'./images/13citroen/sequence_00052.jpg',
			'./images/13citroen/sequence_00053.jpg',
			
			'./images/13citroen/imagine.png',
			'./images/13citroen/launch.png',
			'./images/13citroen/launch-hover.png',
			'./images/13citroen/logo.png',
			'./images/13citroen/obj1.png',
			'./images/13citroen/obj2.png',
			'./images/13citroen/obj3.png',
			'./images/13citroen/obj4.png',
			'./images/13citroen/obj5.png',
			'./images/13citroen/obj6.png',
			'./images/13citroen/obj7.png',
			'./images/13citroen/obj8.png',
			'./images/13citroen/obj9.png',
			'./images/13citroen/obj10.png',
			// Citroen ----- ----- ----- ----- ----- -----
		];
		
		this.src.videos = [
			// WhoWeAre ----- ----- ----- ----- ----- -----
			'./videos/01whoweare/loop.mp4',
			// WhoWeAre ----- ----- ----- ----- ----- -----
			
			// ralphlauren ----- ----- ----- ----- ----- -----
			'./videos/02ralphlauren/loop.mp4',
			'./videos/02ralphlauren/video.mp4',
			// ralphlauren ----- ----- ----- ----- ----- -----
			
			// Bose ----- ----- ----- ----- ----- -----
			'./videos/03bose/loop.mp4',
			'./videos/03bose/video.mp4',
			// Bose ----- ----- ----- ----- ----- -----
			
			// BullittAgency ----- ----- ----- ----- ----- -----
			'./videos/04bullittagency/loop.mp4',
			// BullittAgency ----- ----- ----- ----- ----- -----
			
			// Adisseo ----- ----- ----- ----- ----- -----
			'./videos/05adisseo/video.mp4',
			// Adisseo ----- ----- ----- ----- ----- -----
			
			// Kindy ----- ----- ----- ----- ----- -----
			'./videos/06kindy/loop.mp4',
			'./videos/06kindy/video1.mp4',
			'./videos/06kindy/video2.mp4',
			'./videos/06kindy/video3.mp4',
			// Kindy ----- ----- ----- ----- ----- -----
			
			// Sanofi ----- ----- ----- ----- ----- -----
			'./videos/07sanofi/video.mp4',
			// Sanofi ----- ----- ----- ----- ----- -----
			
			// News ----- ----- ----- ----- ----- -----
			'./videos/08news/loop.mp4',
			// News ----- ----- ----- ----- ----- -----
			
			// Twist ----- ----- ----- ----- ----- -----
			'./videos/09twist/video.mp4',
			// Twist ----- ----- ----- ----- ----- -----
			
			// Luminarc ----- ----- ----- ----- ----- -----
			'./videos/10luminarc/loop.mp4',
			'./videos/10luminarc/video.mp4',
			// Luminarc ----- ----- ----- ----- ----- -----
			
			// Client ----- ----- ----- ----- ----- -----
			'./videos/11client/loop.mp4',
			// Client ----- ----- ----- ----- ----- -----
			
			// Ownthesky ----- ----- ----- ----- ----- -----
			'./videos/12ownthesky/loop.mp4',
			'./videos/12ownthesky/video.mp4',
			// Ownthesky ----- ----- ----- ----- ----- -----
			
			// Citroen ----- ----- ----- ----- ----- -----
			'./videos/13citroen/video.mp4',
			// Citroen ----- ----- ----- ----- ----- -----
		];
		
		// 進度相關。
		this.start = 0;
		this.srcLength = this.src.images.length + this.src.videos.length;
		this.nowLoader = 0;
		
		// 元素相關。
		this.$MainLoaderItem= $('#loader .main-loader-item');
		this.$LoaderBack = $('#loader .main-loader-background');
		this.$Tutorial = $('#loader .tutorial');
		this.$TextDrag = $('#loader .txt-drag');
		
		this.imageAnimate = new Carousel.AnimateConstructor({
			'width': 226,
			'height': 68,
			'col': 8,
			'row': 6,
			'endCol': 4,
			'fps': 20,
			'dom': this.$Tutorial[0],
			'init': true,
			'infinite': true,
		});
		
		// 進度達成時相關。
		this.$Handler = $('#handler');
		this.$Nav = $('#nav');
		this.onOff = true;
	};
	
	Loader.LoaderSrcInit = function ( Object ) {
		var that = this;
		
		// var x = document.createElement("video");
		var oImage = null, oVideo = null;
		var i = 0, len = 0;
		
		oImage = new Image();
		
		oImage.addEventListener('load', function () {
			that.$MainLoaderItem.show();
			
			for (i = 0, len = that.src.images.length; i < len; i++) {
				oImage = new Image();
				
				oImage.addEventListener('load', function () {
					that.LoaderCallBack();
				});
				
				oImage.src = that.src.images[i];
			};
			
			for (i = 0, len = that.src.videos.length; i < len; i++) {
				oVideo = document.createElement('video');
				
				oVideo.addEventListener('canplay', function () {
					that.LoaderCallBack();
				});
				
				oVideo.src = that.src.videos[i];
			};
		});
		
		oImage.src = './images/00loader/loader.png';
		
		// ----- ----- ----- -----
		
		window.addEventListener('load', function () {
			if ( !that.onOff ) return;
			that.onOff = false;
			
			that.LoaderEndFunc( Object );
		});
		
		// 關於 Chrome 卡住的情況。
		setTimeout(function () {
			if ( !that.onOff ) return;
			that.onOff = false;
			
			that.$LoaderBack.stop(true, false).animate({'width': '100%'}, 400, 'swing', function () {
				that.LoaderEndFunc( Object );
			});
		}, 6000);
	};
	
	Loader.LoaderEndFunc = function ( Object ) {
		// 只執行一次。
		if ( this.imageAnimate.onOff ) {
			this.start = this.srcLength;
			this.nowLoader = 100;
			this.$LoaderBack.css('width', this.nowLoader + '%');
			
			this.$Tutorial.fadeIn(1000);
			this.$TextDrag.fadeIn(1000);
			
			// that.set(); -> this.imageAnimate.set(); -> that.imageAnimate.onOff = false;
			this.set();
			
			// 避免 window.onLoad 以前已經執行過 RWD() 方法。
			Object.RWD();
			
			setTimeout(function () {
				/*
					* 某個條件不滿足則執行 Modules 左右移動動畫。
					
					* 條件應該是 NowModule === 0 的時候執行自動跳轉。
				*/
				if ( 0 === Object.nowModule ) {
					Object.nowModule = 1;
					Object.onOff = false;
					Object.HandlerAnimate( true );
				};
			}, 12000);
		};
	};
	
	// 將 CarouselController 放進，並在 Loader LoaderCallBack 內部執行 Modules 左右移動動畫。
	// 可能會出現 Loader 結束前，手動先拖拽。
	// 傳參順序 Loader.LoaderSrcInit( Object ) -> that.LoaderCallBack( Object ) -> Loader.LoaderCallBack = function ( Object ) {};
	Loader.LoaderCallBack = function () {
		var that = this;
		
		// 關於 Chrome 的卡住情況。
		if ( this.start >= this.srcLength ) return;
		
		this.start += 1;
		this.nowLoader = parseInt(this.start / this.srcLength * 100);
		
		this.$LoaderBack.css('width', this.nowLoader + '%');
	};
	
	// 模塊啟動動畫。
	Loader.set = function () {
		this.imageAnimate.set();
	};
	
	// 模塊結束動畫。
	Loader.clear = function () {
		this.imageAnimate.clear();
		this.$Nav.css('display', 'block');
	};
	
	// Loader ----- ----- ----- ----- ----- ----- ----- -----
	
})(window, document, $, EKTweener, Carousel);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

//WhoWeAre
(function (window, document, $, EKTweener, Carousel) {
	
	"use strict";
	
	var WhoWeAre = Carousel.Modules.WhoWeAre = {};
	
	WhoWeAre.init = function () {
		// 模塊主體。
		this.$WhoWeAre = $('#whoweare');
		
		// 背景影片。
		this.$WhoWeAreVideoBox = $('#whoweare-loop-video');
		this.$WhoWeAreVideo = $('#whoweare .back-video');
		
		this.$WhoWeAreContainer = $('#whoweare-section-container');
		this.$WhoWeAreHover = this.$WhoWeAreContainer.find('.hover');
		this.$WhoWeAreTitle = this.$WhoWeAreHover.find('.whoweare-title');
		this.$WhoWeAreSpan = this.$WhoWeAreTitle.find('span');
		this.$WhoWeAreSectionHover = this.$WhoWeAreTitle.find('.section-hover');
		this.$WhoWeArePopup = this.$WhoWeAreTitle.find('.whoweare-popup');
		
		this.onOff = true;
		this.setTimeoutFun = null;
		
		$.each(this.$WhoWeAreHover, function (i, Ele) {
			Ele.index = i;
		});
		
		this.BindEvent();
	};
	
	WhoWeAre.set = function () {
		var that = this;
		
		// Modules 公用背景影片響應式
		Carousel.VideoRWD( this.$WhoWeAreVideo[0] );
		that.$WhoWeAreVideo[0].load();
		
		this.setTimeoutFun = setTimeout(function () {
			EKTweener.to(that.$WhoWeAreVideoBox[0], 1, {'opacity': 1});
			that.$WhoWeAreVideo[0].play();
		}, 2000);
	};
	
	WhoWeAre.clear = function () {
		var that = this;
		
		clearTimeout( this.setTimeoutFun );
		EKTweener.to(that.$WhoWeAreVideoBox[0], 1, {'opacity': 0, 'onComplete': function () {
			that.$WhoWeAreVideo[0].load();
		}});
	};
	
	WhoWeAre.BindEvent = function () {
		this.OverEvent();
		this.ClickEvent();
	};
	
	// 動畫 Animate ----- ----- ----- ----- ----- ----- ----- -----
	
	WhoWeAre.OverAnimate = function ( Boolean, i ) {
		if ( Boolean ) {
			// 滑鼠移入。
			// #whoweare-section-container.
			EKTweener.to(this.$WhoWeAreContainer[0], .4,{'marginTop': -126});
			
			// .whoweare-title.
			EKTweener.to(this.$WhoWeAreTitle[i], .4, {
				'height': 87,
				'marginTop': 27,
				'marginBottom': 27,
			});
			
			// .section-hover 灰色遮罩。
			EKTweener.to(this.$WhoWeAreSectionHover[i], .4, {'opacity': .2});
		} else {
			// 滑鼠移出。
			// #whoweare-section-container.
			EKTweener.to(this.$WhoWeAreContainer[0], .4,{'marginTop': -67});
			
			// .whoweare-title.
			EKTweener.to(this.$WhoWeAreTitle[i], .4, {
				'height': 24,
				'marginTop': 0,
				'marginBottom': 0,
			});
			
			// .section-hover 灰色遮罩。
			EKTweener.to(this.$WhoWeAreSectionHover[i], .4, {'opacity': 0});
		};
	};
	
	WhoWeAre.ClickAnimate = function ( Boolean, i ) {
		if ( Boolean ) {
			// 展開。
			// #whoweare-section-container.
			EKTweener.to(this.$WhoWeAreContainer[0], .4,{'marginTop': -160});
			
			// .whoweare-section.
			this.$WhoWeAreHover.eq(i).addClass('selected');
			
			// .whoweare-title.
			EKTweener.to(this.$WhoWeAreTitle[i], .4, {
				'height': 176,
				'marginTop': 10,
				'marginBottom': 10,
			});
			
			// .whoweare-title > span.
			this.$WhoWeAreSpan.eq(i).css('display', 'none');
			
			// .section-hover 灰色遮罩。
			EKTweener.to(this.$WhoWeAreSectionHover[i], .4, {'opacity': 1});
			
			// .whoweare-popup.
			this.$WhoWeArePopup.eq(i).css('display', 'block');
		} else {
			// 關閉。
			// #whoweare-section-container.
			EKTweener.to(this.$WhoWeAreContainer[0], .4,{'marginTop': -67});
			
			// .whoweare-title.
			EKTweener.to(this.$WhoWeAreTitle[i], .4, {
				'height': 24,
				'marginTop': 0,
				'marginBottom': 0,
			});
			
			// .whoweare-section.
			this.$WhoWeAreHover.eq(i).removeClass('selected');
			
			// .whoweare-title > span.
			this.$WhoWeAreSpan.eq(i).css('display', 'block');
			
			// .section-hover 灰色遮罩。
			EKTweener.to(this.$WhoWeAreSectionHover[i], .4, {'opacity': 0});
			
			// .whoweare-popup.
			this.$WhoWeArePopup.eq(i).css('display', 'none');
		};
		
		this.onOff = !this.onOff;
	};
	
	// 事件 Event ----- ----- ----- ----- ----- ----- ----- -----
	
	WhoWeAre.OverEvent = function () {
		var that = this;
		
		this.$WhoWeAreHover.on('mouseenter', function () {
			that.OverAnimate(true, this.index);
		});
		
		this.$WhoWeAreHover.on('mouseleave', function () {
			that.OverAnimate(false, this.index);
			
			if ( !that.onOff ) that.ClickAnimate( that.onOff, this.index );
		});
	};
	
	WhoWeAre.ClickEvent = function () {
		var that = this;
		
		this.$WhoWeAreHover.on('click', function () {
			that.ClickAnimate( that.onOff, this.index );
		});
	};
	
})(window, document, $, EKTweener, Carousel);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// RalphLauren
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var RalphLauren = Carousel.Modules.RalphLauren = {};
	
	RalphLauren.init = function () {
		
		this.$RalphContainer = $('#ralph-container');
		
		this.$RalphLaunch = $('#ralph-launch');
		this.$RalphLaunch_Normal = this.$RalphLaunch.find('.ralph-launch-normal');
		this.$RalphLaunch_Over = this.$RalphLaunch.find('.ralph-launch-over');
		
		// 下方影片。
		this.$BackVideo = this.$RalphContainer.find('.back-video');
		
		// 上方影片。
		this.$Video = $('#ralph-video > video');
		this.$Video[0].volume = 0.1;
		this.$RalphBack = $('#ralph-back');
		
		// 模塊當前螢幕在下。
		this.nowWindow = false;
		
		this.BandEvent();
	};
	
	RalphLauren.BandEvent = function () {
		var that = this;
		
		this.$RalphLaunch.on({
			'mouseenter': function () {
				// #ralph-launch
				that.OverAnimate( true );
			},
			'mouseleave': function () {
				// #ralph-launch
				that.OverAnimate( false );
			},
			'click': function () {
				if ( true === that.nowWindow) return;
				
				// 模塊當前螢幕在上。
				that.nowWindow = true;
				
				// #ralph-container. TopVideo.
				that.ContainerAnimate( that.nowWindow );
				
				return false;
			},
		});
		
		this.$RalphBack.on('click', function () {
			if ( false === that.nowWindow) return;
			
			// 模塊當前螢幕在下。
			that.nowWindow = false;
			
			// #ralph-container. TopVideo.
			that.ContainerAnimate( that.nowWindow );
			
			return false;
		});
		
	};
	
	RalphLauren.set = function () {
		var that = this;
		
		// Modules 公用背景影片響應式
		Carousel.VideoRWD( this.$BackVideo[0] );
		
		// TopVideo.
		this.$Video[0].load();
		
		// 下方影片。
		this.$BackVideo[0].load();
		this.$BackVideo.stop(true, false).delay(1000).animate({'opacity': 1}, 1000, 'swing', function () {
			that.$BackVideo[0].play();
		});
	};
	
	RalphLauren.clear = function () {
		var that = this;
		
		this.nowWindow = false;
		
		// TopVideo.
		this.$Video[0].load();
		
		// 下方影片。
		this.$BackVideo.stop(true, false).animate({'opacity': 0}, 1000, 'swing', function () {
			that.$BackVideo[0].load();
		});
		
		// #ralph-container. TopVideo.
		this.ContainerAnimate( this.nowWindow );
	};
	
	// #ralph-launch.
	RalphLauren.OverAnimate = function ( Boolean ) {
		if ( Boolean ) {
			this.$RalphLaunch.stop(true, false).animate({
				'backgroundPositionX': 0,
			}, 120, 'swing');
			this.$RalphLaunch_Normal.css('display', 'none');
			this.$RalphLaunch_Over.css('display', 'block');
		} else {
			// #ralph-launch
			this.$RalphLaunch.stop(true, false).animate({
				'backgroundPositionX': -1060,
			}, 120, 'swing');
			this.$RalphLaunch_Normal.css('display', 'block');
			this.$RalphLaunch_Over.css('display', 'none');
		};
	};
	
	// #ralph-container. TopVideo.
	RalphLauren.ContainerAnimate = function (Boolean) {
		var that = this;
		
		if ( Boolean ) {
			// #ralph-container
			this.$RalphContainer.stop(true, false).animate({
				'top': '100%',
			}, 1000, 'swing', function () {
				// TopVideo.
				that.$Video[0].play();
			});
		} else {
			// #ralph-container
			this.$RalphContainer.stop(true, false).animate({
				'top': '0',
			}, 1000, 'swing', function () {
				// TopVideo.
				that.$Video[0].load();
			});
		};
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Bose
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Bose = Carousel.Modules.Bose = {};
	
	Bose.init = function () {
		
		// #bose-container
		this.$BoseContainer = $('#bose-container');
		this.$BoseBack = $('#bose-back');
		this.$Video = $('#bose-video > video');
		this.$Video[0].volume = 0.1;
		
		// IntroAnimate.
		this.$BoseReady = $('#bose-ready');
		this.$BoseSounddesign = $('#bose-sounddesign');
		this.$BoseEvolve = $('#bose-evolve');
		this.$BoseLine = $('#bose-line');
		this.$BoseOver = $('#bose-over');
		
		// .back-video.
		this.$BoseLoop = $('#bose-loop');
		this.$BackVideo = $('#bose-loop > .back-video');
		
		this.setTimeoutFun = null;
		
		this.event();
	};
	
	Bose.event = function () {
		var that = this;
		
		this.$BoseReady.on({
			'mouseenter': function () {
				that.$BoseOver.css('display', 'block');
			},
			'mouseleave': function () {
				that.$BoseOver.css('display', 'none');
			},
			'click': function () {
				that.ContainerAnimate( true );
			},
		});
		
		this.$BoseBack.on('click', function () {
			that.ContainerAnimate( false );
		});
	};
	
	Bose.set = function () {
		var that = this;
		
		// Modules 公用背景影片響應式
		Carousel.VideoRWD( this.$BackVideo[0] );
		
		this.setTimeoutFun = setTimeout(function () {
			that.IntroAnimate( true );
			EKTweener.to(that.$BoseLoop[0], .4, {'opacity': 1, 'delay': 1.2});
			
			that.$BackVideo[0].play();
		}, 1500);
	};
	
	Bose.clear = function () {
		clearTimeout( this.setTimeoutFun );
		EKTweener.to(this.$BoseLoop[0], 1, {'opacity': 0});
		this.$BackVideo[0].load();
		this.IntroAnimate( false );
		
		// TopVideo.
		this.$Video[0].load();
		this.ContainerAnimate( false );
	};
	
	Bose.IntroAnimate = function ( Boolean ) {
		if ( Boolean ) {
			EKTweener.to(this.$BoseReady, .4, {'width': 285});
			EKTweener.to(this.$BoseSounddesign, .4, {'width': 196, delay: .4});
			EKTweener.to(this.$BoseEvolve, .4, {'width': 86, delay: .6});
			EKTweener.to(this.$BoseLine, .4, {'width': 278, delay: .9});
		} else {
			EKTweener.to(this.$BoseReady, 0, {'width': 0});
			EKTweener.to(this.$BoseSounddesign, 0, {'width': 0});
			EKTweener.to(this.$BoseEvolve, 0, {'width': 0});
			EKTweener.to(this.$BoseLine, 0, {'width': 0});
		};
	};
	
	Bose.ContainerAnimate = function ( Boolean ) {
		var that = this;
		
		if ( Boolean ) {
			this.$BoseContainer.stop(true, false).animate({'top': '100%'}, 1000, function () {
				that.$Video[0].play();
			});
		} else {
			this.$BoseContainer.stop(true, false).animate({'top': 0}, 1000, function () {
				that.$Video[0].load();
			});
		};
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// BullittAgency
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var Math = window.Math;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var BullittAgency = Carousel.Modules.BullittAgency = {};
	
	BullittAgency.init = function () {
		
		// 背景影片。
		this.$BullittLoop = $('#bullitt-loop'); 
		this.$BackVideo = $('#bullitt-loop > .back-video');
		
		this.$BullittText = $('#bullitt-text');
		this.$BullittLaunch = $('#bullitt-launch');
		
		// #bullitt-intro、#bullitt-intro > div.
		this.$BullittIntro = $('#bullitt-intro');
		this.$BullittIntro_Div = null;
		
		// 保存 #bullitt-intro > div 編號。
		this.arrIndex = [];
		this.arrIndexLength = 0;
		
		// 可以點擊。
		this.onOff = true;
		
		// 保存排程，避免出現問題。
		this.setTimeoutFun = null;
		
		// #bullitt-intro、#bullitt-intro > div 相關。
		this.CreateDiv();
		
		this.event();
	};
	
	// #bullitt-intro、#bullitt-intro > div 相關。
	BullittAgency.CreateDiv = function () {
		this.width = document.documentElement.clientWidth;
		this.height = document.documentElement.clientHeight;
		
		if ( 1440 > this.width ) this.width = 1440;
		if ( 600 > this.height ) this.height = 600;
		
		// 列行相關。
		var col = Math.ceil(this.width / 92);
		var row = Math.ceil(this.height / 93);
		
		// {w: Math.ceil((div.w - 9) / 2) + 1, Math.floor((div.h - 5) / 2) + 1};
		// 背景圖片，在 Div 生成結束後再賦值，這樣就不用條件判斷。
		var startCol = Math.ceil((col - 9) / 2) + 1;
		var startRow = Math.floor((row - 5) / 2) + 1;
		var startIndex = (startRow - 1) * col + startCol - 1;
		
		var i = 0, len = col * row;
		var str = '';
		for (; i < len; i++) {
			this.arrIndex[i] = i;
			str += '<div></div>';
		};
		this.$BullittIntro.css({
			'width': col * 92 + 'px',
			'height': row * 93 + 'px',
			'marginLeft': -(col * 92 / 2) + 'px',
			'marginTop':  -(row * 93  / 2)+ 'px',
		});
		// this.$BullittIntro.html( str );
		this.$BullittIntro[0].innerHTML = str;
		
		// #bullitt-intro > div.
		this.$BullittIntro_Div = this.$BullittIntro.children('div');
		
		// 打亂陣列排序。
		this.arrIndex.sort(function () {
			return Math.random() > 0.5 ? -1 : 1;
		});
		
		this.arrIndexLength = this.arrIndex.length;
		
		// #bullitt-intro > div style backgroundImage. ----- ----- -----
		this.$BullittIntro_Div[ startIndex ].style.backgroundImage = 'url(./images/04bullittagency/wetry.jpg)';
		
		this.$BullittIntro_Div[ startIndex + 1 + col].style.backgroundImage = 'url(./images/04bullittagency/m.jpg)';
		this.$BullittIntro_Div[ startIndex + 2 + col].style.backgroundImage = 'url(./images/04bullittagency/a.jpg)';
		this.$BullittIntro_Div[ startIndex + 3 + col].style.backgroundImage = 'url(./images/04bullittagency/k.jpg)';
		this.$BullittIntro_Div[ startIndex + 4 + col].style.backgroundImage = 'url(./images/04bullittagency/e.jpg)';
		
		this.$BullittIntro_Div[ startIndex + 1 + col * 2].style.backgroundImage = 'url(./images/04bullittagency/t.jpg)';
		this.$BullittIntro_Div[ startIndex + 2 + col * 2].style.backgroundImage = 'url(./images/04bullittagency/h.jpg)';
		this.$BullittIntro_Div[ startIndex + 3 + col * 2].style.backgroundImage = 'url(./images/04bullittagency/ee.jpg)';
		this.$BullittIntro_Div[ startIndex + 4 + col * 2].style.backgroundImage = 'url(./images/04bullittagency/line.jpg)';
		this.$BullittIntro_Div[ startIndex + 5 + col * 2].style.backgroundImage = 'url(./images/04bullittagency/w.jpg)';
		this.$BullittIntro_Div[ startIndex + 6 + col * 2].style.backgroundImage = 'url(./images/04bullittagency/eee.jpg)';
		this.$BullittIntro_Div[ startIndex + 7 + col * 2].style.backgroundImage = 'url(./images/04bullittagency/b.jpg)';
		
		this.$BullittIntro_Div[ startIndex + 1 + col * 3].style.backgroundImage = 'url(./images/04bullittagency/aa.jpg)';
		this.$BullittIntro_Div[ startIndex + 2 + col * 3].style.backgroundImage = 'url(./images/04bullittagency/lineline.jpg)';
		this.$BullittIntro_Div[ startIndex + 3 + col * 3].style.backgroundImage = 'url(./images/04bullittagency/bb.jpg)';
		this.$BullittIntro_Div[ startIndex + 4 + col * 3].style.backgroundImage = 'url(./images/04bullittagency/eeee.jpg)';
		this.$BullittIntro_Div[ startIndex + 5 + col * 3].style.backgroundImage = 'url(./images/04bullittagency/tt.jpg)';
		this.$BullittIntro_Div[ startIndex + 6 + col * 3].style.backgroundImage = 'url(./images/04bullittagency/ttt.jpg)';
		this.$BullittIntro_Div[ startIndex + 7 + col * 3].style.backgroundImage = 'url(./images/04bullittagency/eeeee.jpg)';
		this.$BullittIntro_Div[ startIndex + 8 + col * 3].style.backgroundImage = 'url(./images/04bullittagency/r.jpg)';
		
		this.$BullittIntro_Div[ startIndex + 1 + col * 4].style.backgroundImage = 'url(./images/04bullittagency/p.jpg)';
		this.$BullittIntro_Div[ startIndex + 2 + col * 4].style.backgroundImage = 'url(./images/04bullittagency/l.jpg)';
		this.$BullittIntro_Div[ startIndex + 3 + col * 4].style.backgroundImage = 'url(./images/04bullittagency/a.jpg)';
		this.$BullittIntro_Div[ startIndex + 4 + col * 4].style.backgroundImage = 'url(./images/04bullittagency/c.jpg)';
		this.$BullittIntro_Div[ startIndex + 5 + col * 4].style.backgroundImage = 'url(./images/04bullittagency/e.jpg)';
		// #bullitt-intro > div style backgroundImage. ----- ----- -----
		
	};
	
	BullittAgency.event = function () {
		var that = this;
		
		window.addEventListener('resize', function () {
			var width = document.documentElement.clientWidth;
			var height = document.documentElement.clientHeight;
			
			if ( that.width < width || that.height < height ) {
				that.CreateDiv();
			};
		});
		
		this.$BullittIntro.on('mouseenter', '> div',function () {
			if ( !that.onOff ) return;
			
			EKTweener.to(this, 0, {'opacity': 0});
			
			return false;
		});
		
		this.$BullittIntro.on('mouseleave', '> div',function () {
			if ( !that.onOff ) return;
			
			EKTweener.to(this, .2, {'opacity': 1, delay: 0.6});
			
			return false;
		});
		
		this.$BullittIntro.on('click', function () {
			if ( !that.onOff ) return;
			that.onOff = false;
			
			$.each(that.arrIndex, function (i, Ele) {
				EKTweener.to(that.$BullittIntro_Div[Ele], 0,{
					'opacity': 0,
					'delay': 2 / that.arrIndexLength * i,
				});
			});
			
			that.setTimeoutFun = setTimeout(function () {
				that.$BullittIntro.css('display', 'none');
				
				that.$BullittText.css('display', 'block');
				that.$BullittLaunch.css('display', 'block');
			}, 2000);
			
			return false;
		});
	};
	
	BullittAgency.set = function () {
		// Modules 公用背景影片響應式
		Carousel.VideoRWD( this.$BackVideo[0] );
		this.$BackVideo[0].load();
		
		EKTweener.to(this.$BullittLoop[0], 1, {'opacity': 1});
		this.$BackVideo[0].play();
	};
	
	BullittAgency.clear = function () {
		var that = this;
		
		clearTimeout( this.setTimeoutFun );
		
		this.onOff = true;
		
		EKTweener.to(this.$BullittLoop[0], 1, {'opacity': 1, 'onComplete': function () {
			that.$BackVideo[0].load();
		}});
		
		this.$BullittIntro.css('display', 'block');
		$.each(this.$BullittIntro_Div, function (i, Ele) {
			EKTweener.to(Ele, 0,{'opacity': 1});
		});
		
		this.$BullittText.css('display', 'none');
		this.$BullittLaunch.css('display', 'none');
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Adisseo
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Adisseo = Carousel.Modules.Adisseo = {};
	
	Adisseo.init = function () {
		// #adisseo-container.
		this.$AdisseoContainer = $('#adisseo-container');
		
		// 背景圖片。
		this.$AdisseoBg = $('#adisseo-bg');
		
		// #adisseo-content
		this.$AdisseoConetnet = $('#adisseo-content');
		this.$AdisseoHover = $('#adisseo-hover');
		
		// 背景圖片運動。
		this.$AdisseoSprite = this.$AdisseoHover.find('.adisseo-sprite');
		this.imageAnimations = new Carousel.AnimateConstructor({
			'width': 100,
			'height': 55,
			'col': 20,
			'row': 3,
			'endCol': 13,
			'fps': 20,
			'dom': this.$AdisseoSprite[0],
			'init': true,
			'infinite': true,
		});
		
		// #adisseo-launch.
		this.$AdisseoLaunch = $('#adisseo-launch');
		
		// 上半部分。
		this.$AdisseoBack = $('#adisseo-back');
		this.$Video =$('#adisseo-placeholder > video');
		this.$Video[0].volume = 0.1;
		
		// 保存排程。
		this.setTimeoutFun = null;
		
		// 當前畫面在下。
		this.nowWindow = false;
		
		this.event();
	};
	
	Adisseo.event = function () {
		var that = this;
		
		this.$AdisseoHover.on('click', function () {
			that.$AdisseoBg.stop(true, false).animate({'bottom': '-10%'}, 1000, 'swing');
			that.$AdisseoConetnet.stop(true, false).animate({'bottom': '-110%'}, 1000, 'swing');
		});
		
		this.$AdisseoLaunch.on('click', function () {
			if ( that.nowWindow ) return;
			
			that.$AdisseoContainer.stop(true, false).animate({'top': '100%'}, 1000, 'swing', function () {
				that.nowWindow = true;
				that.$Video[0].play();
			});
		});
		
		this.$AdisseoBack.on('click', function () {
			if ( !that.nowWindow ) return;
			
			that.$AdisseoContainer.stop(true, false).animate({'top': 0}, 1000, 'swing', function () {
				that.nowWindow = false;
				that.$Video[0].load();
			});
			
			that.$AdisseoBg.stop(true, false).animate({'bottom': 0}, 1000, 'swing');
			that.$AdisseoConetnet.stop(true, false).animate({'bottom': '35%'}, 1000, 'swing');
		});
	};
	
	Adisseo.set = function () {
		var that = this;
		
		this.$Video[0].load();
		
		this.setTimeoutFun = setTimeout(function () {
			that.imageAnimations.set();
		}, 1500);
	};
	
	Adisseo.clear = function () {
		this.$Video[0].load();
		
		clearTimeout(this.setTimeoutFun);
		this.imageAnimations.clear();
		
		this.$AdisseoContainer.stop(true, false).animate({'top': '0'}, 1000, 'swing');
		this.nowWindow = false;
		this.$AdisseoBg.stop(true, false).animate({'bottom': 0}, 1000, 'swing');
		this.$AdisseoConetnet.stop(true, false).animate({'bottom': '35%'}, 1000, 'swing');
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Kindy
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Kindy = Carousel.Modules.Kindy = {};
	
	Kindy.init = function () {
		var that = this;
		
		// 當前編號。
		this.nowIndex = 0;
		// 過去編號
		this.oldIndex = 0;
		
		// 當前螢幕在下。
		this.nowWindow = false;
		
		// 可以點擊。
		this.onOff = true;
		
		// 保存排程。
		this.setTimeoutFun = null;
		
		// 模塊上下移動。
		this.$KindyContainer = $('#kindy-container');
		
		// 上半部分。
		this.$KindyBack = $('#kindy-back');
		this.$Videos = $('#kindy-placeholder-video > video');
		this.$Videos.each(function (i, Ele) {
			Ele.volume = 0.1;
		});
		
		// 下半部分。
		
		// 背景影片。
		this.$BackVideo = $('#kindy-background .back-video');
		
		// 圖片運動-圈圈。
		this.$SpriteCircle = $('#spriteCircle');
		this.CircleAnimations = new Carousel.AnimateConstructor({
			'width': 632,
			'height': 632,
			'col': 3,
			'endCol': 3,
			'row': 1,
			'fps': 18,
			'dom': this.$SpriteCircle[0],
		});
		
		// 掃把。
		this.$KindyLaunch = $('#kindy-launch');
		
		// #kindy-section > ul > li. 按鈕。依照編號顯示的圖片。
		this.$KindySectionLis = $('#kindy-section li');
		this.$KindySectionLis.each(function (i, Ele) {
			Ele.index = i;
		});
		
		// 圖片運動-SpriteIn.
		this.$SpriteIn = $('#spriteIn');
		this.InAnimations = new Carousel.AnimateConstructor({
			'width': 380,
			'height': 380,
			'col': 5,
			'endCol': 3,
			'row': 5,
			'fps': 18,
			'dom': this.$SpriteIn[0],
			'func': function () {
				that.onOff = true;
				that.SpriteToggle();
			},
		});
		
		// 圖片運動-文字。
		this.$SpriteTitle= $('#spriteTitle');
		this.TitleAnimations = new Carousel.AnimateConstructor({
			'width': 135,
			'height': 98,
			'col': 14,
			'endCol': 10,
			'row': 4,
			'fps': 20,
			'dom': this.$SpriteTitle[0],
			'infinite': true,
		});
		
		// .kindy-section 圖片。
		this.$KindySectionImages = $('#kindy-intro .kindy-section');
		
		this.event();
	};

	Kindy.event = function () {
		var that = this;
		
		this.$KindySectionLis.on('click', function () {
			if ( !that.onOff || that.nowIndex === this.index || that.nowWindow ) return;
			that.nowIndex = this.index;
			
			that.onOff = false;
			that.SpriteToggle();
			
			that.TabIndex();
			
			that.CircleAnimations.set();
			that.InAnimations.set();
		});
		
		this.$KindyLaunch.on('click', function () {
			var Launch = this;
			
			if ( that.nowWindow ) return;
			
			EKTweener.to(Launch, .5, {'marginTop': -1300, 'onComplete': function () {
				EKTweener.to(Launch, 1, {'marginTop': -1900, 'onComplete': function () {
					EKTweener.to(Launch, 0, {'marginTop': -1400});
				}});
				
				that.$KindyContainer.stop(true, false).animate({'top': '100%'}, 1000, 'swing', function () {
					that.nowWindow = true;
					that.$Videos[that.nowIndex].play();
				});
			}});
		});
		
		this.$KindyBack.on('click', function () {
			if ( !that.nowWindow ) return;
			
			that.$KindyContainer.stop(true, false).animate({'top': 0}, 1000, 'swing', function () {
				that.nowWindow = false;
				that.$Videos[that.nowIndex].load();
			});
		});
	};

	Kindy.TabIndex = function () {
		var that = this;
		
		// #kindy-section > ul > li. 按鈕。
		this.$KindySectionLis.eq(this.oldIndex).removeClass('current');
		
		// 上半部分影片。
		this.$Videos[this.oldIndex].style.display = 'none';
		
		// ----- ----- ----- ----- -----
		
		// #kindy-section > ul > li. 按鈕。
		this.$KindySectionLis.eq(this.nowIndex).addClass('current');
		
		// 上半部分影片。
		this.$Videos[this.nowIndex].style.display = 'block';
		this.$Videos[this.nowIndex].load();
		
		// ----- ----- ----- ----- -----
		
		setTimeout(function () {
			// 依照編號顯示的圖片。
			that.$KindySectionImages[that.oldIndex].style.display = 'none';
			that.$KindySectionImages[that.nowIndex].style.display = 'block';
			
			that.oldIndex = that.nowIndex;
		}, 500);
	};
	
	Kindy.SpriteToggle = function () {
		if ( this.onOff ) {
			this.$SpriteCircle[0].style.display = 'none';
			this.$SpriteIn[0].style.display = 'none';
		} else {
			this.$SpriteCircle[0].style.display = 'block';
			this.$SpriteIn[0].style.display = 'block';
		};
	};
	
	Kindy.set = function () {
		var that = this;
		// Modules 公用背景影片響應式
		Carousel.VideoRWD( this.$BackVideo[0] );
		this.$BackVideo[0].load();
		
		this.setTimeoutFun = setTimeout(function () {
			EKTweener.to(that.$BackVideo[0], 1, {'opacity': 1});
			that.TitleAnimations.set();
			that.$BackVideo[0].play();
		}, 2000);
	};
	
	Kindy.clear = function () {
		var that = this;
		
		// 上半部分 ----- ----- -----
		this.$KindyContainer.stop(true, false).animate({'top': 0}, 1000, 'swing');
		this.$Videos[this.nowIndex].load();
		
		// 下半部分 ----- ----- -----
		clearTimeout(this.setTimeoutFun);
		
		EKTweener.to(this.$BackVideo[0], 0, {'opacity': 0});
		
		this.TitleAnimations.clear();
		this.$SpriteTitle[0].style.backgroundPosition = '0 0';
		
		this.$BackVideo[0].load();
		
		this.nowIndex = 0;
		this.nowWindow = false;
		this.TabIndex();
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Sanofi
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Sanofi = Carousel.Modules.Sanofi = {};
	
	Sanofi.init = function () {
		this.$MainSanofi = $('#main-sanofi');
		this.width = this.$MainSanofi[0].clientWidth;
		this.height = this.$MainSanofi[0].clientHeight;
		
		// 動畫中使用 Left、Top 的 Div 元素。
		this.$SanofiBackground = $('#sanofi-background');
		// 動畫中使用 Left、Top 的 Div 元素。
		this.$SanofiFlou = $('#sanofi-flou');
		
		// 動畫中使用 MarginLeft、MarginTop 的 Div 集合。
		this.$ParallaxBbjs = $('#sanofi-intro .parallax-obj');
		
		// 用於設置 mousemove 越靠近中心，透明度越低。
		// 用於設置 click 事件。
		this.$SanofiLaunch = $('#sanofi-launch');
		
		// 所有動畫的 Div 的父元素。
		this.$SanofiIntro = $('#sanofi-intro');
		this.onOff = true;
		
		// 用於設置 click 事件。
		this.$SanofiBack = $('#sanofi-back');
		this.$Video = $('#sanofi-placeholder video');
		this.$Video[0].volume = 0.1;
		
		// 模塊上下移動。
		this.$SanofiContainer = $('#sanofi-container');
		
		this.event();
	};

	Sanofi.event = function () {
		var that = this;
		
		var moveX = 0, moveY = 0;
		var left = 0, top = 0;
		this.$MainSanofi.on('mousemove', function (e) {
			if ( that.onOff ) that.$SanofiIntro.stop(true, false).animate({'opacity': 1}, 1000);
			that.onOff = false;
			
			left = 20 * e.clientX / that.width;
			top = 20 * e.clientY / that.height;
			
			that.$SanofiBackground[0].style.left = left + 'px';
			that.$SanofiBackground[0].style.top = top + 'px';
			
			that.$SanofiFlou[0].style.left = left + 'px';
			that.$SanofiFlou[0].style.top = top + 'px';
			
			moveX = e.clientX - that.width / 2;
			moveY = e.clientY - that.height / 2;
			
			that.$ParallaxBbjs.each(function (i, Ele) {
				Ele.style.marginLeft = (Ele.dataset.depth * moveX) + parseFloat(Ele.dataset.left) + 'px';
				Ele.style.marginTop = (Ele.dataset.depth * moveY) + parseFloat(Ele.dataset.top) + 'px';
			});
			
			// 越接近中心點，隱形度越低。
			moveX = e.clientX > that.width / 2 ? that.width  - e.clientX : e.clientX;
	
			that.$SanofiLaunch[0].style.opacity = moveX / that.width * 2;
		});
		
		this.$SanofiLaunch.on('click', function () {
			that.$SanofiContainer.stop(true, false).animate({'top': '100%'}, 1000, 'swing', function () {
				that.$Video[0].play();
			});
		});
		
		this.$SanofiBack.on('click', function () {
			that.$SanofiContainer.stop(true, false).animate({'top': 0}, 1000, 'swing', function () {
				that.$Video[0].load();
			});
		});
		
		window.addEventListener('resize', function () {
			that.width = that.$MainSanofi[0].clientWidth;
			that.height = that.$MainSanofi[0].clientHeight;
		});
	};
	
	Sanofi.set = function () {
		this.$Video[0].load();
	};
	
	Sanofi.clear = function () {
		this.onOff = true;
		this.$SanofiIntro.stop(true, false).animate({'opacity': 0}, 1000);
		
		this.$SanofiContainer.stop(true, false).animate({'top': 0}, 1000, 'swing');
		this.$Video[0].load();
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// News
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var News = Carousel.Modules.News = {};
	
	News.init = function () {
		this.$Window = $(window);
		this.$Window_Height = this.$Window.height();
		
		this.$NewsLoop = $('#news-loop');
		this.$BackVideo = $('#news-loop .back-video');
		
		this.$NewsItem = $('#news-placeholder .news-item');
		this.$NewsItem.each(function (i, Ele) {
			Ele.index = i;
		});
		this.$NewsVisuel = $('#news-placeholder .news-visuel');
		this.$NewsItemImgs = $('.news-item img');
		this.arrIndex = [0, 0, 0, 0, 0, 0, 0, 0];
		
		this.$JspTrack = $('#news-container .jspTrack');
		this.$JspDrag = $('#news-container .jspDrag');
		this.$JspPane = $('#news-container .jspPane');
		
		this.Max_Drag_Top = this.$JspTrack.height() - this.$JspDrag.height() - 28;
		this.Max_Pane_Top = this.$Window_Height - this.$JspPane.height();
		
		this.setTimeoutFun = null;
		
		this.event();
	};

	News.event = function () {
		var that = this;
		
		var oldIndex = 0, nowIndex = 0;
		this.$NewsItem.on({
			'mouseenter': function () {
				EKTweener.to(that.$NewsVisuel[this.index], 0.6, {'opacity': 1});
			},
			'mouseleave': function () {
				EKTweener.to(that.$NewsVisuel[this.index], 0.6, {'opacity': 0});
			},
			'click': function () {
				oldIndex = that.arrIndex[this.index];
				nowIndex = that.arrIndex[this.index] += 1;
				
				if ( nowIndex > 2 ) nowIndex = that.arrIndex[this.index] = 0;
				
				that.$NewsItemImgs[ this.index * 3 + oldIndex ].style.display = 'none';
				that.$NewsItemImgs[ this.index * 3 + nowIndex ].style.display = 'block';
			},
		});
		
		var downY = 0, moveY = 0, nowTop = 0;
		this.$JspDrag.on('mousedown', function (Event) {
			downY = Event.clientY;
			nowTop = that.$JspDrag.offset().top;
			
			that.$Window.on('mousemove', function (Event) {
				moveY = nowTop + Event.clientY - downY;
				
				if ( moveY < 0 ) moveY = 0;
				if ( moveY > that.Max_Drag_Top) moveY = that.Max_Drag_Top;
				
				that.$JspDrag.css('top', moveY);
				that.$JspPane.css('top', that.Max_Pane_Top * moveY / that.Max_Drag_Top);
			});
			
			that.$Window.on('mouseup', function (Event) {
				that.$Window.off('mousemove mouseup');
			});
			
			return false;
		});
		
		// onmousewheel ie chrome
		$('#main-news').on('mousewheel', function (Event) {
			// Event.originalEvent.deltaY
			// 往下 100, 往上 -100.
			
			NewsScroll( Event.originalEvent.deltaY );
		});
		
		// DOOMouseScroll firefox
		$('#main-news').on('DOMMouseScroll', function (Event) {
			// Event.originalEvent.detail
			// 往下 3, 往上 -3.
			
			NewsScroll( Event.originalEvent.detail );
		});
		
		function NewsScroll ( detail ) {
			nowTop = that.$JspDrag.offset().top;
			
			if ( detail > 0 ) {
				moveY = nowTop + that.$Window_Height / 10;
			} else {
				moveY = nowTop - that.$Window_Height / 10;
			};
			
			if ( moveY < 0) moveY = 0;
			if ( moveY > that.Max_Drag_Top) moveY = that.Max_Drag_Top;
			
			that.$JspDrag.css('top', moveY);
			that.$JspPane.css('top', that.Max_Pane_Top * moveY / that.Max_Drag_Top);
		};
		
		
		this.$Window.on('resize', function () {
			var oldWindowHeight = that.$Window_Height;
			var oldDragPercenTop = that.$JspDrag.offset().top / that.Max_Drag_Top;
			var oldPanePercenTop = that.$JspPane.offset().top / that.Max_Pane_Top;
			
			that.$Window_Height = that.$Window.height();
			that.Max_Drag_Top = that.$JspTrack.height() - that.$JspDrag.height() - 28;
			that.Max_Pane_Top = that.$Window_Height - that.$JspPane.height();
			
			that.$JspDrag.css('top', oldDragPercenTop * that.Max_Drag_Top);
			that.$JspPane.css('top', oldPanePercenTop * that.Max_Pane_Top);
		});
	};
	
	News.set = function () {
		var that = this;
		
		Carousel.VideoRWD( this.$BackVideo[0] );
		this.$BackVideo[0].load();
		
		this.setTimeoutFun = setTimeout(function () {
			that.$BackVideo[0].play();
			EKTweener.to(that.$NewsLoop[0], 1, {'opacity': 1});
		}, 1500);
	};
	
	News.clear = function () {
		clearTimeout( this.setTimeoutFun );
		
		this.$BackVideo[0].load();
		EKTweener.to(this.$NewsLoop[0], 0, {'opacity': 0});
		
		this.$NewsVisuel.css('opacity', 0);
		this.$NewsItemImgs.attr('style', '');
		this.arrIndex = [0, 0, 0, 0, 0, 0, 0, 0];
		
		this.$JspDrag.css('top', 0);
		this.$JspPane.css('top', 0);
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Twist
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Twist = Carousel.Modules.Twist = {};
	
	Twist.init = function () {
		this.$TwistAction = $('#twist-action');
		this.$TwistCircle = $('#twist-circle');
		this.$TwistGo = $('#twist-go');
		
		this.$TwistContainer = $('#twist-container');
		
		this.$TwistBack = $('#twist-back');
		
		this.$Video = $('#twist-placeholder > video');
		this.$Video[0].volume = 0.1;
		
		this.$TwistLaunch = $('#twist-launch');
		
		// 當前畫面在下。
		this.nowWindow = false;
		
		this.$TwistEcran1 = $('#twist-ecran1');
		
		this.$TwistSprite1 = $('#twist-sprite1');
		this.$TwistSprite2 = $('#twist-sprite2');
		this.$TwistSprite3 = $('#twist-sprite3');
		this.$TwistSprite4 = $('#twist-sprite4');
		
		this.$TwistSprite1 = new Carousel.AnimateConstructor({
			'width': 70, 'height': 93,
			'col': 14, 'endCol': 12, 'row': 3,
			'fps': 16,
			'dom': $('#twist-sprite1')[0],
			'init': true, 'infinite': true,
		});
		
		this.$TwistSprite2 = new Carousel.AnimateConstructor({
			'width': 44, 'height': 53,
			'col': 23, 'endCol': 17, 'row': 2,
			'fps': 16,
			'dom': $('#twist-sprite2')[0],
			'init': true, 'infinite': true,
		});
		
		this.$TwistSprite3 = new Carousel.AnimateConstructor({
			'width': 159, 'height': 157,
			'col': 12, 'endCol': 4, 'row': 4,
			'fps': 16,
			'dom': $('#twist-sprite3')[0],
			'init': true, 'infinite': true,
		});
		
		this.$TwistSprite4 = new Carousel.AnimateConstructor({
			'width': 257, 'height': 187,
			'col': 7, 'endCol': 5, 'row': 6,
			'fps': 16,
			'dom': $('#twist-sprite4')[0],
			'init': true, 'infinite': true,
		});
		
		this.event();
	};

	Twist.event = function () {
		var that = this;
		
		this.$TwistAction.on({
			'mouseenter': function () {
				that.TwistCircleGo( true );
			},
			'mouseleave': function () {
				that.TwistCircleGo( false );
			},
			'click': function () {
				EKTweener.to(that.$TwistEcran1[0], 1, {
					'opacity': 0,
					'onComplete': function () {
						that.$TwistEcran1.css('display', 'none');
					},
				});
				
				that.$TwistSprite1.set();
				that.$TwistSprite2.set();
				that.$TwistSprite3.set();
				that.$TwistSprite4.set();
			},
		});
		
		this.$TwistLaunch.on('click', function () {
			if ( that.nowWindow ) return;
			
			that.$TwistContainer.stop(true, false).animate({'top': '0%'}, 1000, 'swing', function () {
				that.nowWindow = true;
				that.$Video[0].play();
			});
		});
		
		this.$TwistBack.on('click', function () {
			if ( !that.nowWindow ) return;
			
			that.$TwistContainer.stop(true, false).animate({'top': '-100%'}, 1000, 'swing', function () {
				that.nowWindow = false;
				that.$Video[0].load();
			});
		});
	};
	
	Twist.TwistCircleGo = function ( Boolean ) {
		if ( Boolean ) {
			EKTweener.to(this.$TwistCircle[0], 0.8, {
				'marginTop': -196,
				'marginLeft': -155,
				'height': 372,
				'width': 372,
				'opacity': 1,
				'ease': 'easeInOutElastic',	 
			});

			EKTweener.to(this.$TwistGo[0], 0.8, {
				'marginTop': 70,
				'marginLeft': 150,
				'height': 82,
				'width': 82,
				'opacity': 1,
				'ease': "easeInOutElastic",
			});
		} else {
			EKTweener.to(this.$TwistCircle[0], .8, {
				'marginTop': 0,
				'marginLeft': 101,
				'height': 0,
				'width': 0,
				'opacity': 0,
				'ease': "easeInOutElastic",
			});

			EKTweener.to(this.$TwistGo[0], .8, {
				'marginTop': 132,
				'marginLeft': 232,
				'height': 0,
				'width': 0,
				'opacity': 0,
				'ease': "easeInOutElastic",
			});
		};
	};
	
	Twist.set = function () {
		this.$Video[0].load();
	};
	
	Twist.clear = function () {
		var that = this;
		
		this.$TwistEcran1.css('display', 'block');
		EKTweener.to(this.$TwistEcran1[0], 0, {'opacity': 1});
		
		this.$TwistSprite1.clear();
		this.$TwistSprite2.clear();
		this.$TwistSprite3.clear();
		this.$TwistSprite4.clear();
		
		this.nowWindow = false;
		this.$TwistContainer.stop(true, false).animate({'top': '-100%'}, 1000, 'swing', function () {
			that.nowWindow = false;
			that.$Video[0].load();
		});
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Luminarc
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Luminarc = Carousel.Modules.Luminarc = {};
	
	Luminarc.init = function () {
		this.$LuminarcContainer = $('#luminarc-container');
		
		// 上半部。
		this.$LuminarcBack = $('#luminarc-back');
		this.$Video = $('#luminarc-placeholder > video');
		this.$Video[0].volume = 0.1;
		
		// 下半部。
		this.$LuminarcLoop = $('#luminarc-loop');
		this.$BackVideo = $('#luminarc-loop > .back-video');
		this.$LuminarcLaunch = $('#luminarc-launch');
		
		// 當前畫面在下。
		this.nowWindow = false;
		
		this.setTimeoutFun = null;
		
		this.event();
	};

	Luminarc.event = function () {
		var that = this;
		
		this.$LuminarcLaunch.on('click', function () {
			if ( that.nowWindow ) return;
			that.nowWindow = true;
			
			that.ContainerAnimate( true );
		});
		
		this.$LuminarcBack.on('click', function () {
			if ( !that.nowWindow ) return;
			that.nowWindow = false;
			
			that.ContainerAnimate( false );
		});
	};
	
	Luminarc.ContainerAnimate = function ( Boolean ) {
		var that = this;
		
		if ( Boolean ) {
			this.$LuminarcContainer.stop(true, false).animate({'top': '100%'}, 1000, 'swing', function () {
				that.$Video[0].play();
			});
		} else {
			this.$LuminarcContainer.stop(true, false).animate({'top': '0'}, 1000, 'swing', function () {
				that.$Video[0].load();
			});
		};
	};
	
	Luminarc.set = function () {
		var that = this;
		
		Carousel.VideoRWD(this.$BackVideo[0]);
		
		this.$Video[0].load();
		this.$BackVideo[0].load();
		
		this.setTimeoutFun = setTimeout(function () {
			that.$BackVideo[0].play();
			EKTweener.to(that.$LuminarcLoop[0], 1, {'opacity': 1});
		}, 2000);
	};
	
	Luminarc.clear = function () {
		var that = this;
		
		this.nowWindow = false;
		
		clearTimeout(this.setTimeoutFun);
		
		EKTweener.to(this.$LuminarcLoop[0], 1, {'opacity': 0, 'onComplete': function () {
			that.$BackVideo[0].load();
		}});
		
		that.ContainerAnimate( false );
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Client
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Client = Carousel.Modules.Client = {};
	
	Client.init = function () {
		var that = this;
		
		this.$ClientLoop = $('#client-loop');
		this.$BackVideo = $('#client-loop video');
		
		this.$ClientWork = $('#client-work');
		this.$ClientGood = $('#client-good');
		this.$ClientLaunch = $('#client-launch');
		this.$ClientBack = $('#client-back');
		
		this.$ItemClients = $('#main-client .item-client');
		this.arrIndex = [];
		
		this.$ItemClients.each(function (i, Ele) {
			that.arrIndex[i] = i;
		});
		
		this.arrIndex.sort(function () {
			return Math.random() > 0.5 ? -1 : 1;
		});
		
		this.setTimeoutFun = null;
		
		this.event();
	};

	Client.event = function () {
		var that = this;
		
		this.$ClientLaunch.on('click', function () {
			that.Tab(true);
		});
		
		this.$ClientBack.on('click', function () {
			that.Tab(false);
		});
	};
	
	Client.Tab = function (Boolean) {
		var that = this;
		
		if (Boolean) {
			this.$ClientWork.css('display', 'none');
			this.$ClientLaunch.css('display', 'none');
			this.$ClientBack.css('display', 'block');
			
			EKTweener.to(this.$ClientGood[0], .6, {
				'opacity': 0,
				'marginTop': 0,
				'onComplete': function () {
					$.each(that.arrIndex, function (i) {
						EKTweener.to(that.$ItemClients[i], 0, {
							'opacity': 1,
							'delay': 1 / that.arrIndex.length * i,
						});
					});
				},
			});
		} else {
			this.$ClientWork.css('display', 'block');
			this.$ClientLaunch.css('display', 'block');
			this.$ClientBack.css('display', 'none');
			
			EKTweener.to(this.$ClientGood[0], .6, {'opacity': 1, 'marginTop': -66});
			
			this.$ItemClients.each(function (i, Ele) {
				EKTweener.to(Ele, 0, {'opacity': 0});
			});
		};
	};
	
	Client.set = function () {
		var that = this;
		
		Carousel.VideoRWD( this.$BackVideo[0] );
		
		this.$BackVideo[0].load();
		
		this.setTimeoutFun = setTimeout(function () {
			EKTweener.to(that.$ClientLoop[0], 1, {'opacity': 1});
			that.$BackVideo[0].play();
		}, 2000);
	};
	
	Client.clear = function () {
		clearTimeout(this.setTimeoutFun);
		
		EKTweener.to(this.$ClientLoop[0], 0, {'opacity': 0});
		this.$BackVideo[0].load();
		
		this.Tab(false);
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Ownthesky
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Ownthesky = Carousel.Modules.Ownthesky = {};
	
	Ownthesky.init = function () {
		this.$Ownthesky_Container = $('#ownthesky-container');
		
		this.$Ownthesky_Back = $('#ownthesky-back');
		this.$Video = $('#ownthesky-placeholder > video');
		this.$Video[0].volume = 0.1;
		
		this.$Ownthesky_Loop = $('#ownthesky-loop');
		this.$BackVideo = $('#ownthesky-loop .back-video');
		
		this.$Ownthesky_Launch = $('#ownthesky-launch');
		
		this.nowWindow = false;
		this.setTimeoutFun = null;
		
		this.event();
	};

	Ownthesky.event = function () {
		var that = this;
		
		this.$Ownthesky_Launch.on('click', function () {
			if ( !that.nowWindow ) {
				that.ContainerAnimate( true );
			};
		});
		
		this.$Ownthesky_Back.on('click', function () {
			if ( that.nowWindow ) {
				that.ContainerAnimate( false );
			};
		});
	};
	
	Ownthesky.set = function () {
		var that = this;
		
		this.$Video[0].load();
		this.$BackVideo[0].load();
		Carousel.VideoRWD( this.$BackVideo[0] );
		
		this.setTimeoutFun = setTimeout(function () {
			EKTweener.to(that.$Ownthesky_Loop[0], 1, {'opacity': 1});
			that.$BackVideo[0].play();
		}, 1500);
	};
	
	Ownthesky.clear = function () {
		var that = this;
		
		clearTimeout( this.setTimeoutFun );
		
		EKTweener.to(that.$Ownthesky_Loop[0], 1, {
			'opacity': 0,
			'onComplete': function () {
				that.$BackVideo[0].load();
			},
		});
		
		this.ContainerAnimate( false );
	};
	
	Ownthesky.ContainerAnimate = function ( Boolean ) {
		var that = this;
		
		if ( Boolean ) {
			this.$Ownthesky_Container.stop(true, false).animate({'top': '100%'}, 1000, 'swing', function () {
				that.nowWindow = true;
				that.$Video[0].play();
			});
		} else {
			this.$Ownthesky_Container.stop(true, false).animate({'top': 0}, 1000, 'swing', function () {
				that.nowWindow = false;
				that.$Video[0].load();
			});
		};
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Citroen
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Citroen = Carousel.Modules.Citroen = {};
	
	Citroen.init = function () {
		this.$Window = $(window);
		
		this.$Citroen_Drag_Bg = $('#citroen-drag-bg');
		this.$Citroen_Logo = $('#citroen-logo');
		
		this.$Main_Sequence = $('#main-sequence');
		this.$Main_Sequence_Image = $('#main-sequence > img');
		this.sequence = 0;
		
		this.$Citroen_Dragbar = $('#citroen-dragbar');
		this.$Citroen_Drag_Over = $('#citroen-drag-over');
		this.$Citroen_Drag = $('#citroen-drag');
		
		this.$Citroen_Drag_Animate = new Carousel.AnimateConstructor({
			'width': 150,
			'height': 35,
			'col': 13,
			'endCol': 5,
			'row': 3,
			'fps': 16,
			'dom': this.$Citroen_Drag[0],
			'init': true,
			'infinite': true,
		});
		
		// ----- ----- ----- ----- -----
		
		this.$Citroen_Container = $('#citroen-container');
		
		this.$Citroen_Back = $('#citroen-back');
		
		this.$Citroen_Video = $('#citroen-placeholder video');
		this.$Citroen_Video[0].volume = 0.1;
		
		this.$Citroen_Launch = $('#citroen-launch');
		
		this.nowWindow = false;
		
		// ----- ----- ----- ----- -----
		
		this.Width = document.documentElement.clientWidth;
		this.Height = document.documentElement.clientHeight;
		
		this.$Citroen_Background = $('#citroen-background');
		this.$Citroen_Intro = $('#citroen-intro');
		this.$Citroen_Obj = $('#citroen-intro .citroen-obj');
		
		this.event();
	};

	Citroen.event = function () {
		var that = this;
		
		var downX = 0, moveX = 0, nowLeft = 0;
		this.$Citroen_Drag_Over.on('mousedown', function (Event) {
			nowLeft = that.$Citroen_Drag_Over[0].offsetLeft;
			downX = Event.clientX;
			
			that.$Window.on('mousemove', function (Event) {
				moveX = Event.clientX - downX + nowLeft;
				
				if ( moveX > 270 ) moveX = 270;
				if ( moveX < 0 ) moveX = 0;
				
				that.$Citroen_Drag_Over.css('left', moveX);
				that.$Citroen_Drag.css('left', moveX);
				
				that.sequence = Math.round(moveX / 270 * 53);
				that.sequence = that.sequence < 10 ? '0' + that.sequence: that.sequence;
				that.$Main_Sequence_Image[0].src = './images/13citroen/sequence_000' + that.sequence + '.jpg';
				
				return false;
			});
			
			that.$Window.on('mouseup', function () {
				that.$Window.off('mousemove mouseup');
				
				if ( 53 === that.sequence ) {
					that.$Citroen_Drag_Bg.stop(true, false).animate({'top': '100%'}, 600, 'swing', function () {
						that.$Citroen_Drag_Bg.hide();
						that.$Citroen_Logo.fadeOut(1000);
					});
					that.$Main_Sequence.hide();
					that.$Citroen_Dragbar.hide();
				};
			});
			
			return false;
		});
		
		this.$Citroen_Launch.on('click', function () {
			if ( that.nowWindow ) return;
			that.ContainerAnimate( true );
		});
		
		this.$Citroen_Back.on('click', function () {
			if ( !that.nowWindow ) return;
			that.ContainerAnimate( false );
		});
		
		var moveX = 0, moveY = 0;
		var depth = 0, sLeft = 0, sTop = 0;
		this.$Citroen_Intro.on('mousemove', function ( Event ) {
			depth = that.$Citroen_Background.data('depth');
			that.$Citroen_Background.css({
				'left': depth * Event.clientX,
				'top': depth * Event.clientY,
			});
			
			that.$Citroen_Obj.each(function (i, Ele) {
				depth = parseFloat(Ele.dataset.depth);
				sLeft = parseFloat(Ele.dataset.left);
				sTop = parseFloat(Ele.dataset.top);
				
				Ele.style.marginLeft = sLeft + depth * Event.clientX + 'px';
				Ele.style.marginTop = sTop + depth * Event.clientY + 'px';
			});
		});
	};
	
	Citroen.set = function () {
		this.$Citroen_Video[0].load();
		this.$Citroen_Drag_Animate.set();
	};
	
	Citroen.clear = function () {
		var that = this;
		
		this.$Citroen_Drag_Animate.clear();
		
		this.$Citroen_Drag_Over[0].style.left = 0;
		this.$Citroen_Drag[0].style.left = 0;
		this.$Main_Sequence_Image[0].src = './images/13citroen/sequence_00000.jpg';
		this.sequence = 0;
		
		
		this.$Citroen_Drag_Bg.show();
		this.$Citroen_Drag_Bg.stop(true, false).animate({'top': '0'}, 600, 'swing', function () {
			that.$Citroen_Logo.fadeIn(1000);
			that.$Main_Sequence.show();
			that.$Citroen_Dragbar.show();
		});
		
		this.ContainerAnimate( false );
	};
	
	Citroen.ContainerAnimate = function ( Boolean ) {
		var that = this;
		
		if ( Boolean ) {
			this.$Citroen_Container.stop(true, false).animate({'top': '100%'}, 1000, 'swing', function () {
				that.nowWindow = true;
				that.$Citroen_Video[0].play();
			});
		} else {
			this.$Citroen_Container.stop(true, false).animate({'top': 0}, 1000, 'swing', function () {
				that.nowWindow = false;
				that.$Citroen_Video[0].load();
			});
		};
	};
	
})(window);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Contact
(function (window) {
	
	"use strict";
	
	var document = window.document;
	var $ = window.$;
	var EKTweener = window.EKTweener;
	var Carousel = window.Carousel;
	
	var Contact = Carousel.Modules.Contact = {};
	
	Contact.init = function () {
		this.$Contact_Loop_Box = $('#contact-loop');
		this.$Contact_Loop = $('#contact-loop .back-video');
		
		this.$See_All = $('#see-all');
		
		this.setTimeoutFun = null;
		
		this.event();
	};

	Contact.event = function () {
		var $Contact_Hello_Background = $('#contact-hello-bg');
		$('#contact-email').on({
			'mouseenter': function () {
				$Contact_Hello_Background.show();
			},
			'mouseleave': function () {
				$Contact_Hello_Background.hide();
			},
		});
	};
	
	Contact.set = function () {
		var that = this;
		
		Carousel.VideoRWD( this.$Contact_Loop[0] );
		this.$Contact_Loop[0].load();
		
		this.setTimeoutFun = setTimeout(function () {
			that.$Contact_Loop_Box.stop(true, false).animate({'opacity': 1}, 1000, 'swing');
			that.$Contact_Loop[0].play();
			
			that.$See_All.stop(true, false).animate({'bottom': 60}, 400, 'swing');
		}, 2000);
	};
	
	Contact.clear = function () {
		var that = this;
		
		clearTimeout( this.setTimeoutFun );
		
		that.$Contact_Loop_Box.stop(true, false).animate({'opacity': 0}, 1000, 'swing', function () {
			that.$Contact_Loop[0].load();
			
			that.$See_All.stop(true, false).animate({'bottom': -135}, 400, 'swing');
		});
	};
	
})(window);