/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'shared':                     'app/shared',
    'menu-grid':                  'app/menu-grid',
    'characters':                 'app/characters',
    'edit-character':             'app/edit-character',
    'character-model':            'app/character-model'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // ------------ [CUSTOM PACKAGES] ------------
  var customPackageNames = [
      'shared',
      'characters',
      'character-model',
      'menu-grid',
      'edit-character'
  ];
  // Add to packages and set properties:
  function customPackIndex(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Execute customPackIndex for each item in customPackageNames
  customPackageNames.forEach(customPackIndex);

  // -------------------------------------------
  var config = {
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
