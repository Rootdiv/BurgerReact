module.exports = {
  apps: [
    {
      name: 'burger-react',
      script: 'index.js',
      watch: 'index.js',
      env: {
        HTTP: 'https',
        PORT: 2124,
      },
    },
  ],
};
