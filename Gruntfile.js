module.exports = function(grunt) {
    
    grunt.initConfig({
        clean:  {
            build:  ['./build']
        },
        imagemin:   {
            png:    {
                options:    {
                    optimizationLevel:  7
                },
                files:  [{
                    expand: true,
                    cwd:    './img/',
                    src:    ['**/*.png'],
                    dest:   './build/img/',
                    ext:    '.png'
                }]
            },
             jpg:    {
                 options:   {
                     progressive:   true
                },
                files:  [{
                    expand: true,
                    cwd:    './img/',
                    src:    ['**/*.jpg'],
                    dest:   './build/img/',
                    ext:    '.jpg'
                }]
            }
        },
        autoprefixer:   {
            build: {
                files:    [{
                    expand: 'true',
                    cwd:    './css/',
                    src:    ['**/*.css'],
                    dest:   './build/css/',
                }]
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    
    grunt.registerTask('default', ['clean:build','imagemin', 'autoprefixer:build']);
};