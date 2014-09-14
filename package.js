/* Information about this package */
Package.describe({
  summary: "Ganymed unstyled button component",
  version: "0.0.1",
  name: "ganymed:button-unstyled",
  git: "https://github.com/lampe/ganymed-button-unstyled",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.imply('templating');
  api.use("ganymed:base");
  api.addFiles(['button.css'], 'client');
});
