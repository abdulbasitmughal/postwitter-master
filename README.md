# Postwitter

Postwitter is simple twitter like application which allows user following actions.
- Login
- Signup
- Post message
- View all feeds paginated
- All signup users
- All posts by selected users

## Live Demo

REST API's has been deployed on this link:
https://postwitter-api.herokuapp.com/

And its running interfaces are available at:
https://postwitter-portal.herokuapp.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Architecture

Each component/page is lazy loaded and fully reused components which boost project load time by downloading only meaning required page data.

`/app`
- `/core`   [Incudes auth, guards, components which used only once in application]
- `/shared` [Includes resuable code pieces and user data store, which never modified by repetidly used in whole application

- `/pages`
- `/pages/home` [home page component is responsible for Post creation and All post listing]
- `/pages/login` [login form including service]
- `/pages/signup` [user registration form including service]
- `/pages/user-posts` [selected individual user own post listing and selected user profile ]
- `/pages/users` [All users exist across the portal with option to select anyone to see its posts]