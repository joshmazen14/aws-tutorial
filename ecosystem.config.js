module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "aws_tutorial",
      script    : "server.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "node",
      host : "ec2-35-165-230-174.us-west-2.compute.amazonaws.com",
      ref  : "origin/master",
      repo : "git@github.com:joshmazen14/aws-tutorial.git",
      path : "/var/www/production",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production",
      "key": "/Users/joshmazen/.ssh/Tutorial.pem"
    }
  }
}
