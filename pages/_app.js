import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/Main.module.scss'

import { useEffect } from 'react';

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import fr from "../lang/fr.json";
import es from "../lang/es.json";

const messages = {
  en,
  es,
  fr
};

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
