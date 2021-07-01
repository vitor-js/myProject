module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "myProject",
  define: {
    timeistamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
