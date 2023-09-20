# Viajar a Sri Lanka - Frontend

## Description

'Viajar a Sri Lanka' is an application where community members can read, add, delete and update Sri Lanka places.

## Epics

- Authentication
- Acces to user places list
- Acces to place detail
- Create a place of Sri Lanka
- Delete a place of Sri Lanka
- Update a place to mark it as favorite or not

## Pages

- Homepage: where loggin in the Sri Lanka application
- NewPlacePage: where create a place
- PlacesListPage: where read a places list
- PlaceDetailPage: where read a place detail

## Routing

- Homepage: /home
- PlacesListPage: /places
- PlaceDetailPage: /places/:placeId
- NewPlacePage: /new-place

## Tech Stack

- MERN
- Typescript
- Axios
- Redux toolkit
- Vitest
- MSW
- Testing libery React
- Toastify
- Firebase / SDK
- ESLINT
- Prettier
- Husky hooks
- Github Actions
- Morgan
- Cors
- Chalk
- Helmet

## Install

With npm do:

`npm install`

## Avaiable Scripts

In the project directory, you can run:

`npm run dev`
Runs the app in the development mode.
Open http://localhost:5173/places to view it in the browser.

`npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed.

`npm run preview`
Vite preview is intended for previewing the build locally and not meant as a production server.

## Avaiable testing Scripts

`npm test`
The command knows which test suite to specify based on which value it finds corresponding to the “test”.

`npm run test:dev`
The command knows which test suite to specify based on the value it finds corresponding to "test" in watchdog mode each time a change is saved.

`npm run test:coverage`
Use this script to include a test coverage in your code

## Contributing

To contribute to the project, the PR's (pull requests) must be accepted by the creator of the repository.
They are always welcome to fix bugs, errors, or make modifications that improve the application
