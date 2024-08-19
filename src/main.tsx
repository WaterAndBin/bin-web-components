import { render, h } from "omi";
import "./app.tsx";
import tailwindStyle from "./tailwind.css?inline";

render(<my-app />, document.getElementById("app")!);
