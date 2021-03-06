let mix = require('laravel-mix');
// mix.js(['_source/js/main.js'], 'assets/js/main.js');
// mix.extract(['jquery']);
mix.sass('_source/scss/main.scss', 'assets/css/', {sassOptions: {outputStyle: 'expanded'}});
mix.sass('_source/scss/print.scss', 'assets/css/', {sassOptions: {outputStyle: 'expanded'}});
mix.options({
	autoprefixer: { options: { browsers: ['last 2 versions'] } },
	processCssUrls: false,
	postCss: [require('postcss-discard-comments')({removeAll: true})],
});
mix.sourceMaps();
mix.webpackConfig({ devtool: 'source-map' });
// mix.browserSync({
// 	proxy: 'localhost/',
// 	files: [
// 		'**/*.html',
// 		'**/*.php',
// 		'assets/js/*.js',
// 		'assets/css/*.css',
// 	],
// });
mix.disableSuccessNotifications();
