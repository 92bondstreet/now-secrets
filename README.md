# now-secrets

❯ Generate now secrets from .env file

![Photo by @tinaflour](https://source.unsplash.com/BcjdbyKWquw/800x600)

## 🐣 Introduction

If you are - like me - a [Zeit deployment](https://zeit.co/now) addict, you have already played with [environment variables and secrets](https://zeit.co/docs/v2/deployments/environment-variables-and-secrets/).

The idea is clear: **avoid to deploy env files**.

Efficient but could be redundant and painful to maintain 3 files (the `.env` file, the `now-secrets.json` and the `now.json`)

`now-secrets` will automagically:

* generate the `now-secrets.json` file from an env file
* update the `now.json` file with the `env` key


## 🏗️ Installation

```sh
❯ yarn global add git@github.com:92bondstreet/now-secrets.git
```

## 🕹️ Usage

```sh
❯ now-secrets
❯ now-secrets .env.production
```

## 📱 Features

- [X] 🤐 generate `now-secrets.json` file from `.env.*` file
- [X] 📁 update `now.json` with `env` key and secrets

## 🌱 Inspiration - deep dive reading

* [now secrets example](https://github.com/zeit/now-env/tree/master/examples/secrets)
* [Environment Variables and Secrets](https://zeit.co/docs/v2/deployments/environment-variables-and-secrets)
