# next-auth-nest-custom-provider

Nextjs with next-auth connect with custom OIDC provider running in NestJs

This is just a proof of concept of how to connect nextJs app with a OIDC provider in NestJS.

Many thanks to this [https://github.com/adrianbrs/nest-oidc-provider](https://github.com/adrianbrs/nest-oidc-provider) repo for providing the OIDC implementation in Nestjs.

# How to start

1. `npm i && npm run dev` in `next-app` dir
2. `yarn && npm run start:dev` in `nestjs-oidc-provider` dir
3. Go to localhost:3000 and try logging in, it should take you to the nestjs one