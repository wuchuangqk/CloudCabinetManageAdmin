/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * 请求地址
   */
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}