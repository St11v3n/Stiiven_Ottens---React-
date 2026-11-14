React veebileht (React webpage)

1. Mis see veebileht on?

See on siis veebileht, mis kasutab Reacti. Veebileht ise võimaldab kasutajal teha lihtsa arvutust, valides mis numbritega arvutust teha kui ka millist tehet täpsemalt

valides operaatorit ka.



2. Milleks on see veebileht tehtud?

See on tehtud selleks, et näidata kuidas Reacti abil saab paremini ühendada Typescripti loogikat oma HTML elemenditele ühes tsx failis võrreldes sellega, et ühes Typescripti failis teha loogikat ja siis

ühes HTML failis koostada HTML elemente ning neile lisada id-d, mida on muutujatel lisatud Typescript failis.



3. Mida kasutati selle veebilehe tehes?

Kasutati Reacti, Typescripti, HTML, CSS ning ka Bootstrapi juba valmistatud klasse. React-iga sain koostada nii loogikat kui ka ühendada seda loogikat koostatud HTML elementidele App.tsx failis,

Bootstrap võimaldas mul lihtsamini kaunistada oma HTML-i osa tänu juba koostatud klassidele, mida Bootstrap pakub.





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
