Package.describe({
  name: 'dferber:ti',
  version: '1.0.0',
  summary: 'Use `ti` instead of writing `Template.instance`.',
  git: 'https://github.com/dferber90/meteor-ti',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.1');
  api.use('templating');
  api.addFiles('ti.js', 'client');
  api.export('ti', 'client');
});