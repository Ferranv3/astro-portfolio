# Astro Portfolio
![Build Status](https://github.com/Ferranv3/astro-portfolio/actions/workflows/frontend-ci.yml/badge.svg?branch=main)

Modern portfolio with Project Section, CV Section, Paginated Blog, RSS Feed, SEO Friendly, Visual themes and Responsive Desing for Astro framework. See deployed at [Ferran portfolio](https://www.ferranv3.com/)

## ScreenShots
![screenshotDesktop](/public/screenshotDesktop.png)
![screenshotMenuMobile](/public/screenshotMenuMobile.png)
![screenshotMobile](/public/screenshotMobile.png)

## Tech Stack

- [Astro](https://astro.build)
- [React](https://es.react.dev/)
- [Tailwindcss](https://tailwindcss.com/)

## Cómo probar los idiomas en Windows

1. Instala las dependencias y levanta el servidor de desarrollo si aún no lo has hecho:
   ```bash
   npm install
   npm run dev
   ```
   Astro abrirá la página automáticamente en tu navegador predeterminado (normalmente Chrome) en `http://localhost:4321`.
2. Para probar la versión en español en **Chrome**:
   - Abre una nueva pestaña y ve a `chrome://settings/languages`.
   - En la sección "Idiomas preferidos", añade **Español** y arrástralo por encima de **English**.
   - Recarga la pestaña de `localhost:4321`; deberías ser redirigido a `/es/`.
   - Cuando termines, vuelve a colocar **English** en primer lugar para recuperar el comportamiento original.
3. Para probar en **Microsoft Edge**:
   - Abre `edge://settings/languages`.
   - Añade **Español** y muévelo al primer lugar de la lista.
   - Recarga la pestaña de `localhost:4321` para ver la versión en español.
   - Restaura **English** como primer idioma cuando quieras volver al contenido en inglés.
4. Si quieres comprobar la página en inglés sin cambiar la configuración del navegador, puedes abrir una ventana de incógnito/privada o añadir `/en/` a la URL manualmente (`http://localhost:4321/en/`).

> Consejo: los cambios de idioma en el navegador afectan a todos los sitios, así que recuerda revertirlos después de hacer las pruebas.

## License

This website have copyright. All rights reserved to Ferran Hernandez.