let mix = require('laravel-mix');
mix.js('assets/src/app.js', 'assets/dist').vue();
mix.postCss('assets/src/app.css', 'assets/dist', [require("tailwindcss"),]);
