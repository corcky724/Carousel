//	Gulp 自動化工作 任務 設置

// 嚴格模式 JavaScript
'use strict';

/*
	* 引入 Gulp 基本 API 與 Gulp 各項差件。
*/
var Gulp = require('gulp');

// gulp-cssmin. 壓縮 css.
var Gulp_CssMin = require('gulp-cssmin');

// gulp-imagemin. 壓縮圖片。
var Gulp_ImageMin = require('gulp-imagemin');

// gulp-uglify. 壓縮 js.
var Gulp_Uglify = require('gulp-uglify');

// gulp-concat. 合併 css 或 js.
var Gulp_Concat = require('gulp-concat');

// gulp-htmlmin. 壓縮 html.
var Gulp_HtmlMin = require('gulp-htmlmin');

// gulp-useref. 依照 html 內的註釋進行合併，並可以在 Gulp 任務中操作(壓縮)。
var Gulp_Useref = require('gulp-useref');

// gulp-if. 配合 gulp-useref 使用。
var Gulp_If = require('gulp-if');

/*
	* Gulp 基本 API
	
		** gulp.task( 任務名稱, 任務函式 )	// 定義任務
		
		** gulp.src( 目錄 )	 			// 獲取檔案
		
		** gulp.pipe( 差件調用 )			// 獲取檔案後，設置每一個步驟的方法。
		
		** gulp.dest( 目錄 )	 			 // 存放檔案
		
		** gulp.	// 監視檔案
*/

Gulp.task('copyFont', function () {
	// 獲取所有字體。
	Gulp.src('./src/css/font/**/*')
	
	// 放到目標目錄。
	.pipe(Gulp.dest('./dist/css/font'))
});

Gulp.task('copyVideo', function () {
	// 獲取所有影片。
	Gulp.src('./src/videos/**/*')
	
	// 放到目標目錄。
	.pipe(Gulp.dest('./dist/videos'))
});

Gulp.task('copyLibs', function () {
	// 獲取所有差件。
	Gulp.src('./src/libs/**/*')
	
	// 放到目標目錄。
	.pipe(Gulp.dest('./dist/libs'))
});

Gulp.task('image', function () {
	// 獲取所有圖片。
	Gulp.src('./src/images/**/*')
	
	// 壓縮所有圖片。
	.pipe(Gulp_ImageMin())
	
	// 放到目標目錄。
	.pipe(Gulp.dest('./dist/images'))
});

Gulp.task('useref', function () {
	// 獲取所有 html.
	Gulp.src('./src/*.html')
	
	// 依照 html 的註釋，合併 html 外部引入的檔案，並將合併的檔案重新命名和引入。
	// 命名和引入都依照 html 的註釋。
	.pipe(Gulp_Useref())
	
	// 使用 gulp-if 差件，對已經合併且重新命名的 js 檔案使用 gulp-uglify 差件。
	.pipe(Gulp_If('*.js', Gulp_Uglify()))
	
	// 使用 gulp-if 差件，對已經合併且重新命名的 css 檔案使用 gulp-cssmin 差件。
	.pipe(Gulp_If('*.css', Gulp_CssMin()))
	
	// 使用 gulp-if 差件，對 html 檔案使用 gulp-htmlmin 差件。
	/*
		// 刪除 HTML 換行區域。
		collapseWhitespace
		
		// 刪除 HTML 註釋。
		removeComments
		
		// 刪除 HTML Style 標籤內的註釋。
		minifyCSS
		
		// 刪除 HTML Script 標籤內的註釋。
		minifyJS
		
		// 其他屬性需要查看文檔。
	*/
	.pipe(Gulp_If('*.html', Gulp_HtmlMin({
		collapseWhitespace: true,
		removeComments: true,
		minifyCSS: true,
		minifyJS: true
	})))
	
	// 將所有檔案依照原來的結構放到指定目錄。
	.pipe(Gulp.dest('./dist'))
});