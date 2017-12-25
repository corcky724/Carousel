(function (window, $, EKTweener) {
	
	'use strict';
	
	var Carousel = {};
	
	Carousel.Modules = {};
	
	// Modules 公用背景動畫建構函式 ----- ----- ----- ----- ----- ----- ----- -----
	/*
		* 預計功能。
		
			** 返回一個物件。
			
			** 該物件可以執行、停止背景動畫。
			
		* 使用方式。
		
			** 接收 AnimateConstructor 返回的物件。
			
			** 執行物件的 set() 方法開始動畫。
			
			** 執行物件的 clear() 方法結束動畫。
			
			var backAnimations = new Carousel.AnimateConstructor({
				'width': xxx,
				'height': xxx,
				'col': xx,
				'endCol': xx,
				'row': xx,
				'fps': xx,
				'dom': DOM,
				'init': true / false,
				'infinite': true / false,
			});
	*/
	Carousel.AnimateConstructor = function ( json ) {
		// col 列。
		// row 行。
		this.width = json.width;
		this.height = json.height;
		
		this.col = json.col;
		this.endCol = json.endCol;
		
		this.row = json.row;
		
		this.nowCol = 0;
		this.nowRow = 0;
		
		this.fps = json.fps;
		this.dom = json.dom;
		
		// 是否在 clear 方法執行時，回到初始值。
		this.init = json.init || false;
		
		// 是否重複。
		this.infinite = json.infinite || false;
		
		// 開關先保留，也許會有用。
		this.onOff = true;
		
		// 保存動畫排程。
		this.setFunc = null;
		
		// 也許有結束時執行的函式。
		this.func = json.func || null;
	};
	
	Carousel.AnimateConstructor.prototype.set = function () {
		var that = this;
		
		this.clear();
		
		// 開關先保留，也許會有用。
		this.onOff = false;
		
		this.nowCol = 0, this.nowRow = 0;
		
		this.dom.style.backgroundPosition = '0 0';
		
		this.setFunc = setInterval(function () {
			that.dom.style.backgroundPosition = (-that.width * that.nowCol) + 'px ' + (-that.height * that.nowRow) + 'px';
			
			that.nowCol++;

			if ( that.nowCol === that.col && that.nowRow !== that.row - 1 ) {
				that.nowCol = 0;
				that.nowRow++;
			};

			if ( that.nowRow === that.row - 1 && that.nowCol === that.endCol ) {
				if ( !that.infinite ) {
					that.clear();
					if ( that.func ) that.func();
				} else {
					that.nowCol = 0;
					that.nowRow = 0;
				};
			};
		}, 1000 / that.fps);
	};
	
	Carousel.AnimateConstructor.prototype.clear = function () {
		clearInterval( this.setFunc );
		this.onOff = true;
		if ( this.init ) this.dom.style.backgroundPosition = '0 0';
	};
	
	// Modules 公用背景影片響應式 ----- ----- ----- ----- ----- ----- ----- -----
	
	Carousel.VideoRWD = function ( VideoDom ) {
		if ( VideoDom.clientHeight < VideoDom.parentNode.offsetHeight ) {
			VideoDom.style.width = 'auto';
			VideoDom.style.height = VideoDom.parentNode.offsetHeight + 'px';
		};

		if ( VideoDom.clientWidth < VideoDom.parentNode.offsetWidth ) {
			VideoDom.style.width = VideoDom.parentNode.offsetWidth + 'px';
			VideoDom.style.height = 'auto';
		};
	};
	
	window.Carousel = Carousel;
	
})(window, $, EKTweener);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

(function (window, document, $, EKTweener, Carousel) {
	
	'use strict';
	
	var CarouselController = Carousel.Controller = {};
	
	CarouselController.init = function () {
		var that = this;
		
		// 參數 ----- ----- ----- -----
		
		// 當前畫面在上。
		this.nowWindow = true;
		
		// 當前、過去模塊。
		this.nowModule = 0;
		this.oldModule = 0;
		
		// 當前、過去 Item.
		this.nowItem = 0;
		this.oldItem = 0;
		
		// 當前、過去 Item .selected.
		this.nowSelected = 0;
		this.oldSelected = 0;
		
		// 拖放開關。
		this.onOff = true;
		
		// 極限左邊距。
		this.maxLeft = $('#handler').width() / 15 * 14;
		
		// Item 開關。
		this.onItem = true;
		
		// 保存模塊。
		this.ModuleArr = [];
		
		// 視窗大小。
		this.Width = document.documentElement.clientWidth;
		this.Height = document.documentElement.clientHeight;
		
		this.$Window = $(window);
		
		// 模塊部分 ----- ----- ----- -----
		
		this.$Main = $('#main');
		this.$Handler = $('#handler');
		
		// Home 部分 ----- ----- ----- -----
		
		this.$Home_Back_Container = $('#home .home-back-container');
		this.$Home_Back_Container_Off = {};
		
		this.$Home_Back_Item = $('#home .home-back-item');
		this.$Home_Back_Item_Number = $('#home .home-back-item-nb');
		this.$Home_Back_Item_Box = $('#home .home-back-item-bg');
		this.$Home_Back_Item_Background = $('#home .home-back-item-background');
		this.$Home_Back_Item_Transition = $('#home .home-back-item-transition');
		this.$Home_Back_Item_Transition.eq(0).css('backgroundPosition', '723px 1446px');
		this.ItemTransitionInit();
		
		
		
		this.$Home_Front_Container = $('#home .home-front-container');
		this.$Home_Front_Container_Off = {};
		
		this.$Home_Front_Item = $('#home .home-front-item');
		this.$Home_Front_Item_A = $('#home .home-front-item a');
		
		// #Nav 部分 ----- ----- ----- -----
		
		this.$Nav = $('#Nav');
		this.$Nav_Logo = $('#nav .logo');
		this.$Nav_Container = $('#nav .nav-container');
		this.$Nav_Mask = $('#nav .mask-nav');
		this.$Nav_Hover = $('#nav .mask-hover');
		this.$Nav_Menu = $('#nav .mask-menu');
		this.$Nav_Social = $('#nav .social');
		this.$Nav_Credit = $('#nav .credit');
		
		this.$Nav_Items = $('#nav .navigator-item');
		this.$Nav_Drag = $('#nav .navigator-drag');
		
		// 循環 部分 ----- ----- ----- -----
		
		this.$Nav_Items.each(function (i, Ele) {
			// 索引編號
			Ele.index = i;
			that.$Home_Front_Item_A[i].index = i;
			
			that.$Home_Back_Item_Number[i].style.marginTop = 1650 - i * 135 + 'px';
			that.$Home_Back_Item_Box[i].style.marginTop = 1650 - i * 135 + 'px';
			that.$Home_Back_Item_Background[i].style.backgroundImage = 'url(./images/nav/'+ (i+1) +'.png)';
		});
		
		// 麻煩的背景影片。
		this.$BackVideos = $('.back-video');
		
		this.BindEvent();
		
		this.RWD();
	};
	
	// 響應式 ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	
	CarouselController.RWD = function () {
		// 視窗大小。
		this.Width = document.documentElement.clientWidth;
		this.Height = document.documentElement.clientHeight;
		
		// #Main
		if ( this.nowWindow ) {
			this.$Main.css('top', 0);
		} else {
			this.$Main.css('top', -this.Height);
		};
		
		// Module 部分。
		this.$Handler.css('left', -this.Width * this.nowModule);
		
		// #Home .home-back-container
		this.$Home_Back_Container_Off.top =  -(this.Height / 2 + 3830);
		this.$Home_Back_Container_Off.left =  -this.Width / 2;
		this.$Home_Back_Container.css({
			'top': this.$Home_Back_Container_Off.top + this.nowItem * 135 + 'px',
			'left': this.$Home_Back_Container_Off.left - this.nowItem * 135 + 'px',
			'paddingTop': (this.Height + 2040) + 'px',
			'paddingBottom': (this.Height + 1890) + 'px',
			'backgroundPosition': (this.Width) + 'px ' + (this.Height + 48) + 'px',
		});
		
		// #Home .home-front-container
		this.$Home_Front_Container_Off.left = (this.Width - 470) / 2;
		this.$Home_Front_Container.css('left', this.$Home_Front_Container_Off.left - this.nowItem * 470);
		
		// 極限左邊距。
		this.maxLeft = $('#handler').width() / 15 * 14;
	};
	
	// 各種事件 ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	
	CarouselController.BindEvent = function () {
		var that = this;
		
		this.ClickEvent();
		
		this.OverEvent();
		
		this.MoveEvent();
		
		this.$Window.on('resize', function () {
			that.RWD();
			
			that.$BackVideos.each(function (i, Ele) {
				Carousel.VideoRWD(Ele);
			});
		});
		
		this.$Window.on('load', function () {
			that.$BackVideos.each(function (i, Ele) {
				Carousel.VideoRWD(Ele);
			});
		});
	};
	
	CarouselController.ClickEvent = function () {
		var that = this;
		
		// #Nav 部分 ----- ----- ----- -----
		
		this.$Nav_Menu.on('click', function () {
			if ( that.nowWindow ) {
				that.MainAnimate( false );
				
				that.onItem = false;
				
				// 立刻禁止拖放。
				that.onOff = false;
				
				that.ModuleArr[that.nowModule].clear();
			};
			
			return false;
		});
		
		this.$Nav_Hover.on('click', function () {
			if ( that.nowWindow ) {
				that.MainAnimate( false );
				
				that.onItem = false;
				
				// 立刻禁止拖放。
				that.onOff = false;
				
				that.ModuleArr[that.nowModule].clear();
			};
			
			return false;
		});
		
		this.$Nav_Drag.on('click', function () {
			if ( !that.nowWindow ) {
				that.onItem = true;
				that.nowSelected= that.nowItem;
				that.nowModule = that.nowItem + 1;
				that.oldModule = that.nowModule;
				
				that.HandlerAnimate( false );
				
				that.MainAnimate( true );
				
				that.SelectedAnimate();
				
				that.ModuleArr[that.nowModule].set();
			};
			
			return false;
		});
		
		this.$Home_Front_Item_A.on('click', function () {
			that.onItem = true;
			that.nowItem = this.index;
			that.nowSelected = this.index;
			that.nowModule = this.index + 1;
			that.oldModule = this.index + 1;
			
			that.HandlerAnimate( false );
			
			that.MainAnimate(true, function () {
				that.NavItemAnimate();
			});
			
			that.SelectedAnimate();
			
			that.ModuleArr[that.nowModule].set();
		});
	};
	
	CarouselController.OverEvent = function () {
		var that = this;
		
		// #Nav 部分 ----- ----- ----- -----
		
		this.$Nav_Container.on({
			'mouseover': function () {
				if ( that.nowWindow ) EKTweener.to(that.$Nav_Hover[0], .4, {'bottom': 0});
			},
			'mouseleave': function () {
				EKTweener.to(that.$Nav_Hover[0], .6, {'bottom': -34});
			},
		});
		
		this.$Nav_Items.on('mouseover', function () {
			that.nowItem = this.index;
			
			// 這裡有 BUG 需要思考。
			// if ( !that.nowWindow ) that.nowModule = this.index + 1;
			
			that.NavItemAnimate( that.nowWindow );
		});
	};
	
	CarouselController.MoveEvent = function () {
		var that = this;
		
		var downX = 0, moveX = 0, nowLeft = 0, onMove = false;
		this.$Handler.on('mousedown', function (Event) {
			// 判斷是否可以拖放。
			if ( false === that.onOff ) return;
			
			downX = Event.clientX;
			nowLeft = that.$Handler.offset().left;
			
			that.$Window.on('mousemove', function (Event) {
				moveX = Event.clientX - downX;
				
				// 判斷確實有移動。
				onMove = true;
				
				// 防止在 Loder 模塊時往右拖。
				if (nowLeft + moveX > 0) {
					onMove = false;
					moveX = 0;
				};
				
				// 防止在最後模塊時往左拖。
				if (nowLeft + moveX < -that.maxLeft) {
					onMove = false;
					moveX = 0;
				};
				
				that.$Handler.css('left', nowLeft + moveX);
			});
			
			that.$Window.on('mouseup', function () {
				that.$Window.off('mousemove mouseup');
				
				// 若無移動則停止執行。
				if ( !onMove ) return;
				onMove = false;
				
				// 確實有拖移過，動畫結束再開啟。
				that.onOff = false;
				
				if ( Math.abs(moveX) > 300 ) {
					if ( moveX > 0 ) {
						that.nowModule -= 1;
					} else {
						that.nowModule += 1;
					};
					
					if ( 0 === that.nowModule ) that.nowModule = 1;
					if ( 15 === that.nowModule ) that.nowModule = 14;
					
					that.nowItem = that.nowModule - 1;
					that.nowSelected = that.nowItem;
				};
				
				that.HandlerAnimate( true );
				
				that.NavItemAnimate();
				
				that.SelectedAnimate();
			});
			
			return false;
		});
	};
	
	// 各種動畫 ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	
	CarouselController.HandlerAnimate = function ( Boolean ) {
		var that = this;
		
		if ( Boolean ) {
			EKTweener.to(this.$Handler[0], .6, {
				'left': -this.Width * this.nowModule,
				'onComplete': function () {
					that.onOff = that.onOff = true;
					that.SetClear();
				},
			});
		} else {
			this.$Handler.css('left', -this.Width * this.nowModule);
			this.SetClear();
		};
	};
	
	CarouselController.MainAnimate = function ( Boolean, func ) {
		var that = this;
		
		if ( Boolean ) {
			// #Main
			EKTweener.to(this.$Main[0], .4, {
				'top': 0,
				'onComplete': function () {
					that.nowWindow = that.onOff = true;
					if ( func ) func();
				},
			});
			
			// #Nav .logo
			this.$Nav_Logo.css('bottom', '-20px');
			
			// #Nav .nav-container
			EKTweener.to(this.$Nav_Container[0], .4, {'height': 32});
			
			// #Nav .mask-nav
			this.$Nav_Mask.css('bottom', '0');
			
			// #Nav .mask-hover
			this.$Nav_Hover.css({'display': 'block'});
			
			// #Nav .mask-menu
			this.$Nav_Menu.css('bottom', '14px');
			
			// #Nav .social
			this.$Nav_Social.css('bottom', '-20px');
			
			// #Nav .credit
			this.$Nav_Credit.css('display', 'none');
		} else {
			// #Main
			EKTweener.to(this.$Main[0], .4, {
				'top': -this.Height,
				'onComplete': function () {
					that.nowWindow = false;
				},
			});
			
			// #Nav .logo
			this.$Nav_Logo.css('bottom', '17px');
			
			// #Nav .nav-container
			this.$Nav_Container.css('height', '63px');
			
			// #Nav .mask-nav
			this.$Nav_Mask.css('bottom', '-34px');
			
			// #Nav .mask-hover
			this.$Nav_Hover.css({'bottom': '-34px', 'display': 'none'});
			
			// #Nav .mask-menu
			this.$Nav_Menu.css('bottom', '-24px');
			
			// #Nav .social
			this.$Nav_Social.css('bottom', '23px');
			
			// #Nav .credit
			this.$Nav_Credit.css('display', 'block');
		};
	};
	
	CarouselController.NavItemAnimate = function () {
		if ( this.nowItem === this.oldItem ) return;
		
		// #Home .navigator-item
		this.$Home_Back_Item.eq( this.oldItem ).removeClass('selected');
		this.$Home_Back_Item.eq( this.nowItem ).addClass('selected');

		// #Home .home-back-item
		this.$Home_Front_Item.eq( this.oldItem ).removeClass('selected');
		this.$Home_Front_Item.eq( this.nowItem ).addClass('selected');
		
		if ( this.onItem ) {
			this.$Nav_Drag.css('left', this.nowItem * 30);
			
			this.$Home_Back_Container.css({
				'top': this.$Home_Back_Container_Off.top + this.nowItem * 135,
				'left': this.$Home_Back_Container_Off.left - this.nowItem * 135,
			});
			
			this.$Home_Front_Container.css('left', this.$Home_Front_Container_Off.left - this.nowItem * 470);
			
			this.$Home_Back_Item_Transition.eq( this.oldItem ).css('backgroundPosition', '0 0');
			this.$Home_Back_Item_Transition.eq( this.nowItem ).css('backgroundPosition', '723px 1446px');
		} else {
			EKTweener.to(this.$Nav_Drag[0], .8, {'left': this.nowItem * 30});
			
			EKTweener.to(this.$Home_Back_Container[0], .8, {
				'top': this.$Home_Back_Container_Off.top + this.nowItem * 135,
				'left': this.$Home_Back_Container_Off.left - this.nowItem * 135,
			});
			
			EKTweener.to(this.$Home_Front_Container[0], .8, {'left': this.$Home_Front_Container_Off.left - this.nowItem * 470});
			
			this.$Home_Back_Item_Transition.eq( this.oldItem ).css('backgroundPosition', '0 0');
			this.setItemTransitionFun();
		};
		
		this.oldItem = this.nowItem;
	};
	
	CarouselController.SelectedAnimate = function () {
		this.$Nav_Items.eq( this.oldSelected ).removeClass('selected');
		this.$Nav_Items.eq( this.nowSelected ).addClass('selected');
		
		this.oldSelected = this.nowSelected;
	};
	
	CarouselController.ItemTransitionInit = function () {
		var that = this;
		var width = 241, height = 241;
		/*
			* col 列。
			
			* row 行。
		*/
		var col = 4, row = 7;
		var nowCol = 0, nowRow = 0, endCol = 4;
		
		this.setItemTransitionFun = function () {
			nowCol = 0, nowRow = 0;
			
			clearTimeout( that.setItemTransition );
			that.setItemTransition = setInterval(function () {
				nowCol++;

				if ( nowCol === col ) {
					nowCol = 0;
					nowRow++;
				};
				
				if ( nowRow === row - 1 && nowCol === endCol - 1 ) clearInterval( that.setTransition );

				that.$Home_Back_Item_Transition.eq( that.nowItem ).css('backgroundPosition', ( -width * nowCol) + 'px ' + ( -height * nowRow ) + 'px' );
			}, 14);
		};
	};
	
	// 模塊動畫 ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	
	CarouselController.SetClear = function () {
		if ( this.nowWindow ) {
			if ( this.oldModule !== this.nowModule ) {
				this.ModuleArr[this.nowModule].set();
				this.ModuleArr[this.oldModule].clear();

				this.oldModule = this.nowModule;
			};
		};
	};
	
})(window, document, $, EKTweener, Carousel);