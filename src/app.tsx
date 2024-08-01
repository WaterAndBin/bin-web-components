import { h, tag, signal, Component } from 'omi'
import viteLogo from '/vite.svg'
import css from "./app.css?raw"
import { tailwind } from './tailwind'

const count = signal(0)

@tag('my-app')
export default class extends Component {
  static css = [tailwind, css]
  
  render() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo inline-block !h-40" alt="Vite logo" />
          </a>
          <a href="http://omijs.org" target="_blank">
            <img src="https://omi.cdn-go.cn/s/latest/omi.svg" class="logo omi inline-block !h-40" alt="Omi logo" />
          </a>
        </div>
        <h1 class="text-6xl">Vite + Omi</h1>
        <div class="card">
          <button onClick={() => count.value += 1 }>
            count is {count.value}
          </button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </div>
        <p class="read-the-docs">
          Click on the Vite and Omi logos to learn more
        </p>
      </>
    )
  }
}

