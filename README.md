# Testing Next.js


This is a standard Next.js app deployed to

* Netlify: [https://thorsten-testing-nextjs.netlify.app/](https://thorsten-testing-nextjs.netlify.app/)
* Vercel: [https://testing-nextjs-inky.vercel.app/](https://testing-nextjs-inky.vercel.app/)

**On Netlify, pre-fetching doesn't work. Every click on a link causes a full page reload.** See here:

https://github.com/mrnugget/testing-nextjs/assets/1185253/9042e4aa-ab6b-4035-8d22-88227cbeb8dd

But when I run the production build locally with `npm run build && npm run start` it works. When deployed to Vercel it works too.

Why?
