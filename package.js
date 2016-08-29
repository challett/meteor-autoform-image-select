Package.describe({
  name: 'challett:autoform-image-select',
  version: '0.0.0',
  summary: 'Single and multiple image selection widget for autoform',
  git: 'https://github.com/challett/meteor-autoform-image-select',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('ecmascript');
  api.use('templating@1.1.0');
  api.use('blaze@2.1.8');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');

  api.addFiles([
    'autoform-image-select.html',
    'autoform-image-select.js',
    'autoform-image-select.css',
  ], 'client');
});

//Package.onTest(function(api) {
//  api.use('ecmascript');
//  api.use('tinytest');
//  api.use('autoform-selectable');
//  api.mainModule('autoform-selectable-tests.js');
//});
