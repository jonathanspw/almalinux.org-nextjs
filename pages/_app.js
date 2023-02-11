import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/Main.module.scss'

import { useEffect } from 'react';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Component {...pageProps} />
}
