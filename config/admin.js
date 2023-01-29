module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  //url: "https://ashy-desert-0929ade1e.2.azurestaticapps.net",
  //serveAdminPanel: false
});
