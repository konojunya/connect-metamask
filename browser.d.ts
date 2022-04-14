/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_APP_ENV: 'development' | 'production' | 'local';
    readonly NEXT_PUBLIC_API_ORIGIN: string;
  }
}
