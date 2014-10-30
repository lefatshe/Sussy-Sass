// eNCA gruntfile
// Aptil 2011 
// front-end project configuration - comment file


module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify'); // load ugligy plugin
  grunt.loadNpmTasks('grunt-contrib-watch'); // load watch plugin
  grunt.loadNpmTasks('grunt-contrib-compass'); // load compass plugin
 
grunt.initConfig({ // initiate - create object 

  uglify: { 
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'js/script.js': ['components/js/script.js', 'components/js/mobile.js']
      } // files
    } // my_target
  }, // uglify

  compass:{
      dev: {
        options: {
          config: 'config.rb' // root dir file confiqures compass
        } // options
      } // dev
  }, // compass

  watch:{
    options: {livereload: true}, // reload browser task
      script :{  
        files: ['components/js/*.js'],
        tasks: ['uglify']
    }, // scripts

    sass: {
      files: ['components/sass/*.scss'],
      tasks: ['compass:dev']
    }, // sass

      html:{ // live preview task
        files:['*.html'],
      } // html
  } // watch

}) // initConfig

  // register plugin default - runs automatically
  grunt.registerTask('default', 'watch');  
} // exports





