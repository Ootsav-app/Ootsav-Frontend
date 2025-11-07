## ⚙️ General Guidelines

- Write **clean, maintainable, and modular code**.
- Prefer **clarity over cleverness**.
- Always follow **DRY (Don’t Repeat Yourself)** and **KISS (Keep It Simple, Stupid)** principles.
- Avoid unnecessary dependencies.
- Use **functional components** and **React Hooks** (no class components).

---

## 📁 Project Structure


- Each folder contains logically grouped files.
- Each component or page should live in its own subfolder with its `.jsx` and  `.css` file.

---

## 🧩 React & Component Guidelines

- Use **arrow functions** for components.
- Always **name components in PascalCase**.
- Props should be **destructured** in the function signature.
- Use **PropTypes** for validation if TypeScript is not used.
- Each component should handle **one clear responsibility**.

Example:

```jsx
const UserCard = ({ name, avatar }) => (
  <div className="user-card">
    <img src={avatar} alt={`${name}'s avatar`} />
    <h3>{name}</h3>
  </div>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
```

---

## 🪝 Hooks & State Management

- Use `useState`, `useEffect`, `useMemo`, and `useCallback` wisely.
- Avoid unnecessary re-renders — use `React.memo` where needed.
- Extract reusable logic into **custom hooks** in `/hooks`.
- Use **Context API** for global state or small apps; consider **Redux / Zustand / Jotai** for larger apps.

---

## 🎨 Styling

- Prefer **CSS Modules** or **SCSS** for scoped styles.
- Use **Tailwind CSS** or a **design system** (like shadcn/ui, Chakra, or MUI) if appropriate.
- Class names: `kebab-case` or BEM (`component__element--modifier`).

---

## 🌐 API & Data Fetching

- Keep all API logic inside `/services` or `/api`.
- Use `fetch` or `axios` — never hardcode URLs.
- Wrap calls in `try/catch`, handle loading and error states gracefully.
- Separate **data fetching** and **UI rendering** logic.

Example:

```jsx
useEffect(() => {
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);
```

---

## 🧱 Reusability & Modularity

- Extract repetitive JSX or logic into **shared components**.
- Keep components small (<150 lines ideally).
- Avoid inline functions and styles where possible.

---

## 🧾 Comments & Documentation

- Write short, meaningful comments for complex logic.
- Use JSDoc style for functions and utilities:

```js
/**
 * Formats a date into readable text.
 * @param {Date} date
 * @returns {string}
 */
```

- Every file should begin with a one-line comment summarizing its purpose.


## ✅ Summary for Copilot

> Always produce readable, modular, and scalable React code in JavaScript.
> Follow component-based architecture, use hooks, separate logic from UI, and prioritize reusability and performance.
> Avoid inline logic, redundant states, and long files.
> Respect folder conventions and naming rules.
