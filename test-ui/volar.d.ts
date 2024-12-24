import type { defineComponent } from 'vue';

declare module 'vue' {
  export interface GlobalComponents {
    YButton:ReturnType<typeof defineComponent>;
  }
}
export {}
