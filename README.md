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

To unlock our premium stylings and allow your UI to automatically inherit your branding, you must import our library's stylesheet into your Next.js or React application's root CSS file (e.g., `app/globals.css` or `src/index.css`).

Open your root css file and add the following at the top:

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

By defining those four `--color-brand-*` variables inside `@theme`, **all TSFlow UI components you import will instantly adapt to match your app's exact color scheme.**

## 3. Using Components

Now you can import and use any component directly from the package! For example, rendering the animated Frequently Asked Questions section:

```tsx
import { FAQLayout1 } from "tsflow-ui";

const myQuestions = [
  {
    question: "Is this easy to use?",
    answer: "Yes, just import it and you are ready to go!",
  },
];

export default function MyPage() {
  return (
    <main className="p-10">
      <FAQLayout1
        title="Common Questions"
        items={myQuestions}
        /* The component will automatically use the brand color overrides you defined in your CSS! */
      />
    </main>
  );
}
```

## Contributing

Feedback and contributions are welcome!
