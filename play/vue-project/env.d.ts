/// <reference types="vite/client" />

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    YButton: String
  }
}

declare interface Window {
  webStorage: any
}
