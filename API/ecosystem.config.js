module.exports = {
  apps: [
    {
      name: 'burger-react',
      script: 'index.js',
      watch: 'index.js',
      env: {
        PROD: true,
        PORT: 2124,
      },
    },
  ],
};
