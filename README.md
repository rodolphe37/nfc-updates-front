
# Administration template - React JS

  

-  **Front end administration made with React, Material UI Hooks, React Hooks and React-Admin**

  
---  

## Quick Links


[Demo](#demo)

-  [Movie](#movie-demo)

[Tech Stack](#tech-stack)

[Dev dependencies](#Dev-dependencies)

[Current components on this template](#Current-components-on-this-template)

[Author](#author)

[License](#license)

[Start Project](#Start-project)

---
## Demo
---
### Movie Demo

![!Demogif](movieDemo.gif)

---
 

## Tech Stack

 **You must have at minimun these versions for greats performances and good compatibility**

 **Version of Node js**
-    v8.16.2 minimun

| Tech used | LINKS |
| ------ | ------ |
| **React** (V-16.12.0) | [https://github.com/facebook/react] |
| **React-Admin** (V-3.0.2) | [https://marmelab.com/react-admin/] |
| **Material-ui** (V-4.7.1) | [https://material-ui.com/] |
| **chart.js** (V-2.9.3) | [https://www.chartjs.org/] | 
| **react-chartjs-2** (V-2.8.0) | [https://jerairrest.github.io/react-chartjs-2/] |
| **classnames** (V-2.2.6) | [https://www.npmjs.com/package/classnames] |
| **clsx** (V-1.0.4) | [https://www.npmjs.com/package/clsx] |
| **react-redux** (V-7.1.3) | [https://redux.js.org/] |
| **recompose** (V-0.30.0) | [https://github.com/acdlite/recompose] |
| **validator** (V-12.1.0) | [https://www.npmjs.com/package/validator] |
| **web-pack** (V-1.0.0) | [https://webpack.js.org/] |
---

### Dev Dependencies

- [eslint V6.6.0](https://eslint.org/)
		
		- "eslint-config-airbnb": "^18.0.1",
		- "eslint-plugin-import": "^2.18.2",
		- "eslint-plugin-jsx-a11y": "^6.2.3",
		- "eslint-plugin-react": "^7.17.0",
		- "eslint-plugin-react-hooks": "^1.7.0"

- Create-react-app with highly complex frontend structure

---  

### Full React admin Template

  - Fully complete fonctional theme for React


---

### Current components on this template

| Components | Description |
| ------ | ------ |
| **authProvider** | Login connexion |
| **dataProvider** | Connexion to the API |
| **users** | Pagination, UserList, UserCreate and UserTitle |
| **userEdit** | Edition of users |  
| **Administrateur** | Resources from React-admin |
| **PersistentDrawerRight** | Side panel for user edition |
| **ModalPage** | Modal to changing password |
| **ChoosePassword** | content of the Modal to create a new password |
| **Dashboard** | complete dashboard with 'chart.js' Graph fully personnalisable |
| **DeleteButtonWithConfirmation** | Modal to enter the name of the user you want to delete |
| **NotFound** | 404 error page |

---

  

## Author

  

- Rodolphe Augusto - Dylan Belouis

  

---

  

## License

  

- MIT.

  

---

  

## Start project

### Warning ! 
***this administration template works with a Backend that you can download or clone at this address***
[Backend for this administration template](https://github.com/WildCodeSchool/nfc-updates-back.git)
---

- Clone or download this repo https://github.com/WildCodeSchool/nfc-updates-front.git

- Create ".env" file  on your app's root and name it ".env.local" : 
- put it in this file :
-  ``` REACT_APP_API_URL=http://localhost:5000  ```  => This is a Backend localhost Url

- Do in the console :

-  ``` $ cd client```

-  ```  $ npm i``` or ``` $ npm install ```

to install the dependencies and

-  ``` $ npm start```

to start project.

  

enjoy!!!