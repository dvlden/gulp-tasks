export default {
    root: {
        src: './src/',
        dest: './dist/'
    },

    tasks: {
        styles: {
            paths: {
                src: 'styles',
                dest: ''
            },
            extensions: ['sass', 'scss', 'css'],

            addons: {
                sass: {
                    outputStyle: 'expanded',
                    precision: 4
                },

                nano: {
                    discardComments: { removeAll: true },
                    discardUnused: false,
                    reduceIdents: false,
                    zindex: false
                },

                prefixer: {
                    browsers: ['last 3 version']
                }
            }
        },

        scripts: {
            paths: {
                src: 'scripts',
                dest: ''
            },
            extensions: ['js', ''],
            entry: ['app.js'],

            addons: {
                babelify: {
                    presets: ['env'],
                    plugins: ['add-module-exports']
                },

                browserify: {
                    debug: false
                }
            }
        },

        images: {
            paths: {
                src: 'images',
                dest: ''
            },
            extensions: ['jpg', 'png', 'svg'],

            addons: {
                imagemin: {}
            }
        },

        server: {
            browserSync: {
                // proxy: 'project.dev',
                server: './',
                port: 5555,
                logPrefix: 'dvL',
                scrollProportionally: true,
                scrollThrottle: 60,
                reloadDelay: 200,
                notify: false
            }
        }
    }
}
