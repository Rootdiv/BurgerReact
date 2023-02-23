module.exports = {
  apps: [
    {
      name: 'burger-react',
      script: 'index.js',
      watch: '.',
      env: {
        HTTP: 'https',
        PORT: 2124,
      },
    },
  ],
};
