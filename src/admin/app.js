import Favicon from './extensions/favicon.ico';
import LogoAuth from './extensions/logo-auth.svg';
import LogoMenu from './extensions/logo-menu.svg';

const primaryColor = '#ffc006';

const config = {
  locales: ['ru'],
  translations: {
    ru: {
      "Auth.form.welcome.title": "Добро пожаловать!",
      "Auth.form.welcome.subtitle": "Войдите в свою учетную запись",
    },
  },
  tutorials: false,
  auth: {
    logo: LogoAuth
  },
  menu: {
    logo: LogoMenu
  },
  head: {
    favicon: Favicon
  },
  theme: {
    colors: {
      buttonPrimary500: '#FACB40FF',
      buttonPrimary600: primaryColor,
      primary600: primaryColor,
      primary700: primaryColor,
      primary200: primaryColor,
      primary100: '#fffef0',
      neutral100: '#f2f2f2'
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
