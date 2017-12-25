(function (window, $, EKTweener, Carousel) {
	
	'use strict';
	
	var CarouselController = Carousel.Controller;
	
	CarouselController.init();
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Loder = Carousel.Modules.Loader;
	
	Loder.init();
	
	CarouselController.ModuleArr.push(Loder);
	
	Loder.LoaderSrcInit(CarouselController);
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var WhoWeAre = Carousel.Modules.WhoWeAre;
	
	WhoWeAre.init();
	
	CarouselController.ModuleArr.push(WhoWeAre);
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var RalphLauren = Carousel.Modules.RalphLauren;
	
	RalphLauren.init();
	
	CarouselController.ModuleArr.push(RalphLauren);
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Bose = Carousel.Modules.Bose;
	
	Bose.init();
	
	CarouselController.ModuleArr.push( Bose );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var BullittAgency = Carousel.Modules.BullittAgency;
	
	BullittAgency.init();
	
	CarouselController.ModuleArr.push( BullittAgency );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Adisseo = Carousel.Modules.Adisseo;
	
	Adisseo.init();
	
	CarouselController.ModuleArr.push( Adisseo );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Kindy = Carousel.Modules.Kindy;
	
	Kindy.init();
	
	CarouselController.ModuleArr.push( Kindy );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Sanofi = Carousel.Modules.Sanofi;
	
	Sanofi.init();
	
	CarouselController.ModuleArr.push( Sanofi );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var News = Carousel.Modules.News;
	
	News.init();
	
	CarouselController.ModuleArr.push( News );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Twist = Carousel.Modules.Twist;
	
	Twist.init();
	
	CarouselController.ModuleArr.push( Twist );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Luminarc = Carousel.Modules.Luminarc;
	
	Luminarc.init();
	
	CarouselController.ModuleArr.push( Luminarc );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Client = Carousel.Modules.Client;
	
	Client.init();
	
	CarouselController.ModuleArr.push( Client );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Ownthesky = Carousel.Modules.Ownthesky;
	
	Ownthesky.init();
	
	CarouselController.ModuleArr.push( Ownthesky );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Citroen = Carousel.Modules.Citroen;
	
	Citroen.init();
	
	CarouselController.ModuleArr.push( Citroen );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
	var Contact = Carousel.Modules.Contact;
	
	Contact.init();
	
	CarouselController.ModuleArr.push( Contact );
	
	// ----- ----- ----- ----- ----- ----- ----- -----
	
})(window, $, EKTweener, Carousel);