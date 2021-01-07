let mix = require('laravel-mix');

mix
	.js('src/js/app.js', 'js')
	.sass('src/scss/app.scss', 'css')
	.sourceMaps()
	.options({
		processCssUrls: false,
		postCss: [require('autoprefixer')],
	})
	.sourceMaps(true, 'source-map')
	.setPublicPath('dist');

mix.autoload({
	jquery: ['$', 'window.jQuery'],
});
