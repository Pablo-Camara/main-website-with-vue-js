# blog

current url: http://pablocamara.lovestoblog.com/

----

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### .htaccess file to work with vue router

```sh
<IfModule mod_rewrite.c>
  RewriteEngine On

  # Redirect Trailing Slashes If Not A Folder
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.+)/$ $1 [R=301,L]

  # Ensure the request is not for an existing file or directory
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # Redirect all other requests to index.html
  RewriteRule ^ index.html [QSA,L]
</IfModule>

# Serve correct MIME types for modern files
<IfModule mod_headers.c>
  Header set Cache-Control "max-age=3600, public"
</IfModule>
```
