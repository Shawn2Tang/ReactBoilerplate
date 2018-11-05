// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['requirejs', 'mocha', 'chai', "karma-typescript"],

    plugins: [
        require('karma-mocha'),
        require('karma-chai'),
        require('karma-requirejs'),
        require('karma-typescript'),
        require('karma-chrome-launcher'),
        require('karma-phantomjs-launcher'),
        require('karma-mocha-reporter'),
        require('karma-coverage'),
        require('karma-htmlfile-reporter') // crashing w/ strange socket error
    ],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'src/Scripts/**/*.ts', included: false, watched: true, served: true },
      'configs/test-main.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.ts": ["karma-typescript"],
      'src/**/*.js': 'coverage'
    },

    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', "karma-typescript", 'mocha', 'coverage'], //

    coverageReporter: {
      reporters: [
          {'type': 'text'},
          {'type': 'html', dir: 'coverage'},
          {'type': 'lcov'}
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    noResolve: true,

    karmaTypescriptConfig: {
      compilerOptions: {
        "module": "amd",
        "moduleResolution": "node",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "experimentalDecorators": true,
        "noEmitHelpers": true
      },
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  });
};
