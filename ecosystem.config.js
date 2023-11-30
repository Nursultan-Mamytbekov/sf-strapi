module.exports = {
  apps: [
    {
      name: "sf-strapi",
      exec_mode: "cluster",
      instances: "max",
      script: "yarn",
      args: "start",
    },
  ],
};
