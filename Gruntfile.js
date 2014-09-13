module.exports = function(grunt) {
    
    grunt.initConfig({
        clean:  {
            build:  './build',
            dev:    ['./build/css', './build/scrips']
        },
        copy:   {
            analytics:   {
                expand: true,
                cwd:    './src/scripts/',
                src:    'analytics.js',
                dest:   './build/scripts/'    
            }
        },
        imagemin:   {
            png:    {
                options:    {
                    optimizationLevel:  7
                },
                expand: true,
                cwd:    './src/img/',
                src:    '**/*.png',
                dest:   './build/img/',
                ext:    '.png'
            },
             jpg:    {
                 options:   {
                     progressive:   true
                },
                expand: true,
                cwd:    './src/img/',
                src:    '**/*.jpg',
                dest:   './build/img/',
                ext:    '.jpg'
            }
        },
        autoprefixer:   {
            main: {
                expand: 'true',
                cwd:    './src/css/',
                src:    '**/*.css',
                dest:   './build/css/'
            }
        },
        cssmin: {
            build:  {
                options:    {
                    banner: "/* Minified by grunt */"
                },
                expand: true,
                cwd:    './build/css/',
                src:    ['*.css', '!*.min.css'],
                dest:   './build/css/'  
            }
        },
        uncss:  {
            main: {
                src:    'index.html',
                dest:   './build/css/main.css'
          }
        },
        htmlmin:    {
            index:  {
                options:    {
                    removeComments:             true,
                    collapseWhitespace:         true,
                    removeRedundantAttributes:  true,
                    useShortDoctype:            true,
                    removeAttributeQuotes:      true
                },
                files:  {
                    'index.html':   'src/html/index.html'
                }
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
    grunt.registerTask('dev', [
        'clean:dev',
        'copy:analytics',
        'autoprefixer',
        'uncss',
        'cssmin:build',
        'htmlmin:index'
    ])
    
    grunt.registerTask('default', [
        'clean:build',
        'copy:analytics',
        'imagemin',
        'autoprefixer',
        'uncss',
        'cssmin:build',
        'htmlmin:index'
    ]);
};