<div align="center">
  <img src="https://raw.githubusercontent.com/SM8UTI/TSFlow-UI/main/public/logo.png" alt="TSFlow UI Logo" width="120" />
</div>

# TSFlow UI

Welcome to **TSFlow UI**, a beautiful, customizable React/Next.js component library built with Tailwind CSS v4 and Framer Motion.

This library provides premium layout templates and animated components that you can import directly into your App.

**NPM Package**: [https://www.npmjs.com/package/tsflow-ui](https://www.npmjs.com/package/tsflow-ui)  
**GitHub Repository**: [https://github.com/SM8UTI/TSFlow-UI](https://github.com/SM8UTI/TSFlow-UI)

---

## 1. Installation

Install `tsflow-ui` alongside its required peer dependencies (React, Framer Motion, and Tailwind CSS v4):

```bash
npm install tsflow-ui framer-motion
```

_(Assuming your project is already set up with React and Tailwind CSS v4. If you don't have Tailwind yet, install `@tailwindcss/postcss` and `tailwindcss` as well)._

## 2. Global CSS Configuration

To unlock our premium stylings, you must import our library's stylesheet into your application's root CSS file. We officially support both Next.js and standard React.js (Vite/CRA) setups!

### For Next.js (App Router)

Open your `app/globals.css` file and add the following at the top:

```css
@import "tsflow-ui/dist/index.css";
@import "tailwindcss";

/* Override the default TSFlow UI Colors to your brand colors */
@theme {
  --color-brand-primary: #YourHexColor; /* e.g. #3B82F6 */
  --color-brand-secondary: #YourHexColor; /* e.g. #60A5FA */
  --color-brand-accent-1: #YourHexColor; /* e.g. #93C5FD */
  --color-brand-accent-2: #YourHexColor; /* e.g. #BFDBFE */
}
```

### For React.js (Vite / Create React App)

Open your root CSS file (usually `src/index.css` or `src/App.css`) and add the same block at the top:

```css
@import "tsflow-ui/dist/index.css";
@import "tailwindcss";

/* Override the default TSFlow UI Colors to your brand colors */
@theme {
  --color-brand-primary: #YourHexColor; /* e.g. #FF4E02 */
  --color-brand-secondary: #YourHexColor; /* e.g. #FFC603 */
  --color-brand-accent-1: #YourHexColor; /* e.g. #FFB405 */
  --color-brand-accent-2: #YourHexColor; /* e.g. #FFA705 */
}
```

By defining those four `--color-brand-*` variables inside `@theme`, **all TSFlow UI components you import will instantly adapt to match your app's exact color scheme.**

## 3. Using Components

Now you can import and use any component directly from the package anywhere in your application! For example, rendering the animated Frequently Asked Questions section:

### Next.js Example (`app/page.tsx`):

```tsx
import { FAQLayout1 } from "tsflow-ui";

const myQuestions = [
  {
    question: "Does it work in Next.js?",
    answer: "Yes, it fully supports the entire Next.js ecosystem!",
  },
];

export default function Home() {
  return (
    <main className="p-10">
      <FAQLayout1 title="Common Questions" items={myQuestions} />
    </main>
  );
}
```

### React.js Example (`src/App.tsx`):

```tsx
import { FAQLayout1 } from "tsflow-ui";

const myQuestions = [
  {
    question: "Does it work in React + Vite?",
    answer: "Yes, just import it like any other React component!",
  },
];

export default function App() {
  return (
    <div className="p-10">
      <FAQLayout1 title="Common Questions" items={myQuestions} />
    </div>
  );
}
```

## Contributing

Feedback and contributions are welcome!

## Author

**Sanat** (SM8UTI)

- GitHub: [https://github.com/SM8UTI](https://github.com/SM8UTI)
- Project Repository: [https://github.com/SM8UTI/TSFlow-UI](https://github.com/SM8UTI/TSFlow-UI)
