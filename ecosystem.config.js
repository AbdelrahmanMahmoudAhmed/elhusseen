module.exports = {
  apps: [{
    name: "AMF",
    script: './.output/server/index.mjs',
    instances: "max",
    max_memory_restart: "1G",
    error_file: "/var/log/amf/error.log",
     port: '3004',
    exec_mode: "cluster",
    env: {
      NODE_ENV: "production",
    },
    env_production: {
      NODE_ENV: "production",
    },
  },
]}
