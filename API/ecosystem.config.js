module.exports = {
  apps: [
    {
      name: 'burger-react',
      script: 'index.js',
      watch: 'index.js',
      env: {
        HTTPS: true,
        PORT: 2124,
      },
    },
  ],
};
