var allDeptFiles = [];

for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
        allDeptFiles.push(file);
    }
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths:{
    'nodemodule': './node_modules/*/*',
    'mocha': './node_modules/mocha/mocha',
    'chai': './node_modules/chai/chai',
    'sinon': './node_modules/sinon/pkg/sinon'
  },

  // dynamically load all test files
  deps: allDeptFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
