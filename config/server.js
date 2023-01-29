module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "https://cms-strapi-longriver.azurewebsites.net",
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin:{
    url: "https://ashy-desert-0929ade1e.2.azurestaticapps.net"
  }
});
