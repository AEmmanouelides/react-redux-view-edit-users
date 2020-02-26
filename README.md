## React/Redux Coding Exercise - View/Edit Users

This project was generated initially with the [Create React App] - Getting Started tool. (https://github.com/facebookincubator/create-react-app). 

For the implementation needs, more packages were installed such as: 
 
Typescript, Redux, Axios, React-Router, Reactstrap, Lodash, etc...

## About the App

The coding exercise was implemented with [REACT], [REDUX] and [TYPESCRIPT].

It describes an end to end React/Redux flow.

On launching the application, the user will reach the home page.

From there, the user can be redirected to the real content of the site. 

The Home Page contains 3 links/sections:
- Users 
- Events
- Settings

For demo purposes, [Events] page is `disabled` and [Settings] page redirects to a custom `404 - Not Found Page`. 

When the user enters the [Users] Page, we will dispatch an action in order to get the users information (Mock Data) using AXIOS request.

This information will be listed per user in cards. 

Each card will contain the following details of the user: Name, Email, City, Phone, Website, Company Name.

Double clicking on each box will launch a modal that will allow the user to edit the information.

Once the modal is closed, the new details should be reflected in the cards.

[****NOTES****] 
- The application is responsive.
- Reactstrap was used for Bootstrap components. 
- On Edit Modal, form validations were set.

## Running the App

From the root folder, install all the needed packages with:

```bash
`npm i`
```

Run the application on its own with the command:

```bash
`npm start`
```

The application will run on port 3000.

`Screenshots` of the running App can be found at `/screenshots`
