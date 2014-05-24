module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            deploy: {
                options: {
                    port: 9001,
                    base: 'deploy',
                    keepalive: true,
                    debug: true
                }
            },
            debug: {
                options: {
                    port: 9002,
                    keepalive: true,
                    debug: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', 'connect:debug');
};