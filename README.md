# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Built using:

- Figma (for idea design)
- Vite
- React
- Tailwind
- CSS Modules
- React Hook Form
- Framer Motion
- JSON Server (for mock API)
- React Query
- Html5-QRCode

### Todo:
- Handle pagination for books list
- For general information section, check if each row has undefined values, since some may not have information
- Check if Google Books API has unique identifications for authors and categories

### Issues:
- Uploading an image of a book barcode seems to have issues. Scanning via camera works (EAN 13). Probably related to camera quality.
- Animations seem laggy on Chrome.