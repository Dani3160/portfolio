# Portfolio - Dani Ramdani

Portfolio website yang dibangun menggunakan Next.js 16 dengan TypeScript.

## 🚀 Fitur

- ✨ Modern UI dengan animasi yang halus
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- ⚡ Fast & Optimized dengan Next.js
- 🎨 Beautiful Design dengan CSS Custom Properties
- 🖼️ Portfolio Gallery dengan Modal Preview
- 📧 Contact Section dengan Social Links

## 🛠️ Teknologi yang Digunakan

- **Next.js 16** - React Framework
- **TypeScript** - Type Safety
- **React 19** - UI Library
- **CSS Custom Properties** - Styling
- **Next.js Image Optimization** - Optimized Images

## 📦 Instalasi

1. Clone repository atau download project
2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka browser dan kunjungi [http://localhost:3000](http://localhost:3000)

## 🏗️ Build untuk Production

```bash
npm run build
npm start
```

## 📁 Struktur Project

```
portfolio/
├── public/                 # Static files (images, etc)
│   ├── *.png             # Portfolio images
│   └── myphoto.JPG       # Profile photo
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Portfolio.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── ScrollToTop.tsx
│       └── PortfolioModal.tsx
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 📝 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## 🎨 Customization

Anda dapat mengubah konten portfolio dengan mengedit:

1. **Hero Section**: `src/components/Hero.tsx`
2. **About Section**: `src/components/About.tsx`
3. **Experience**: `src/components/Experience.tsx` - Edit array `experiences`
4. **Skills**: `src/components/Skills.tsx` - Edit array `skillCategories`
5. **Portfolio**: `src/components/Portfolio.tsx` - Edit array `portfolioItems`
6. **Contact**: `src/components/Contact.tsx`
7. **Styling**: `src/app/globals.css`

## 📸 Menambahkan Portfolio Item

Edit file `src/components/Portfolio.tsx` dan tambahkan item baru ke array `portfolioItems`:

```typescript
{
  id: '10',
  title: 'Project Title',
  description: 'Project description',
  image: '/project-image.png', // Pastikan file ada di folder public/
  tags: ['React', 'Next.js', 'TypeScript'],
}
```

Pastikan file gambar portfolio berada di folder `public/`.

## 🌐 Deployment

Anda dapat deploy portfolio ini ke berbagai platform:

- **Vercel** (Recommended untuk Next.js)
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**

Untuk Vercel:

```bash
npm install -g vercel
vercel
```

## 📄 License

ISC

## 👤 Author

**Dani Ramdani**
- Email: daniramdani121201@gmail.com
- WhatsApp: +62 895-6076-29222

---

Made with ❤️ using Next.js

