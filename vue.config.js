const fs = require( 'fs' );
const path = require( 'path' );




module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/typescript-definitive-guide/'
        : '/',
    pluginOptions: {
        svgSprite: {
            /*
             * The directory containing your SVG files.
             */
            dir: 'src/assets/icons/svg',
            /*
             * The reqex that will be used for the Webpack rule.
             */
            test: /\.(svg)(\?.*)?$/,
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            loaderOptions: {
                extract: true,
                spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
            },
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            pluginOptions: {
                plainSprite: true
            }
        }
    },

    chainWebpack: config => {
        config.module
              .rule( 'svg-sprite' )
              .use( 'svgo-loader' )
              .loader( 'svgo-loader' );

        config.plugin( 'define' ).tap( v => {
            return v;
        } );
    },

    devServer: {
        host: '192.168.0.226',
        port: 1234,
        before ( app ) {
            const fs = require( 'fs' );
            const path = require( 'path' );
            //
            // app.get( '/book/contents', async function ( req, res ) {
            //     const CONTENTS_PATH = path.join( process.cwd(), 'public', 'book', 'contents.json' );
            //     let contents = await fs.promises.readFile( CONTENTS_PATH );
            //
            //     res.json( contents );
            // } );
        }
    }
};
