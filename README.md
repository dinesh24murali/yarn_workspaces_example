# yarn_workspaces_example

This is a mono repo containing a ReactJS, [NestJS](https://docs.nestjs.com/), and Typescript projects to demonstrate yarn workspaces

## Project structure

- The 3 projects are present under the `packages` directory
- The choises package (`packages/choices`) is shared between the ReactJS, and NestJS projects
- You need to build the choices project when ever you change anything to it so that both backend and frontend will be able to access the updated code

## How to run the project

1. From the root of the repo. Run `yarn install`. This command will run `yarn install` on all the projects (`frontend`, `backend`, and `choices`)
2. In the `backend` and `frontend` packages there will be a file called `.env.sample`. Take copy of this file and rename them to `.env` under the same package. Do this both in the backend and frontend packages.
3. From the root of the application you can run the following command to interact with the application:
Run the frontend
```
yarn web-start
```
Run the backend
```
yarn app-start
```
Run the choices project in dev mode. This continue to watch for changes in the choices project and build the project as soon as something changes
```
yarn choices dev
```
Run eslint in the backend
```
yarn server:lint
```
Run testcases in the backend
```
yarn backend test
```
Run testcases in the frontend
```
yarn frontend test
```
4. For the develop mean workflow you need to run the backend, and frontend in individual terminals. If you are changing any files in choices package then run choices package in a seperate terminal as well


## Reference:

https://reactjs.org/

https://nestjs.com/

https://classic.yarnpkg.com/lang/en/docs/workspaces/

https://github.com/lerna/lerna

https://nx.dev/
