# React Formik Validation
## About
This an React Formik Validation Task. Built using React, Tailwind CSS and mock api.

- [Live Preview](https://react-formik-validation-selvan.netlify.app/)

## Run
Step 1:
```
npm install
```
Step 2: Create your api from [mockapi.io](https://mockapi.io/). Create your Books Schema in this below format.
```
id: Object ID
createdAt: Date
title: String
author: Child Resource
ISBN: Number
publication: String
```
Step 3: Create your Author Schema in this below format.
```
id: Object ID
createdAt: Date
name: String
birthDate: String
biography: String
```
Step 4: Refer this [Link](https://github.com/mockapi-io/docs/wiki/Quick-start-guide#relations-between-resources) and make a relation between two resources i.e. `books` and `author` <br/> <br/>
Step 5: Create .env file
```
.env.development.local
```
Step 6: Name the key and value in your .env file as
```
VITE_API_URLL=<API endpoint>
```
Step 7: Add the `.env.development.local` in `.gitignore` file <br/> <br/>
Step 8:
```
npm run dev
```
