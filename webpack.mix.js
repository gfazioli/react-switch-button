let mix = require( 'laravel-mix' );

/*
 |--------------------------------------------------------------------------
 | Webpack Strip Blocks
 |--------------------------------------------------------------------------
 |
 | Here you can define your custom strip tags. For example, you may use:
 | [ 'develblock', 'debug' ]
 | inorder to strip "debug:start" and "debug:end" as well
 |
 */

const blocks = mix.inProduction() ? [ 'develblock' ] : null;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .less( "less/react-switch-button.less", "dist" )
  .react( "src/react-switch-button.jsx", "dist" );

mix
  .less( "example/src/app.less", "example/dist" )
  .react( "example/src/app.jsx", "example/dist" )
  .copy( "example/src/index.html", "example/dist" );

mix.webpackConfig( {
  resolve : {
    extensions : [ '*', '.js', '.jsx', '.vue' ],
    alias      : {
      'vue$'       : 'vue/dist/vue.common.js',
      'components' : __dirname + '/src',
    },
  },
  module  : {
    rules : [
      {
        test    : /\.js$/,
        enforce : 'pre',
        exclude : /(node_modules|bower_components|\.spec\.js)/,
        use     : [
          {
            loader  : 'webpack-strip-blocks',
            options : {
              blocks : blocks,
              start  : '/*',
              end    : '*/'
            }
          }
        ]
      }
    ]
  }
} );

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.ts(src, output); <-- Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
