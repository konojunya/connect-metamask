/** @type {import('next').NextConfig} */

const ENV = process.env.APP_ENV || 'local';

const config = {
  poweredByHeader: false,
  env: {
    ...require(`./config/${ENV}.json`),
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
};

Object.entries(config.env).forEach(([key, value]) => {
  console.log(`\u001b[34m${key}: \u001b[36m${value}\u001b[0m`);
});

module.exports = config;
