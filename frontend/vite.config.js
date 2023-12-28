import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // specify the loader for JSX files with a '.js' extension
    jsx: 'react-jsx',
  },
})
