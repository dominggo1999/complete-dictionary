## Minimal monorepo MERN stack boilerplate

### Development 
  - Start backend and frontend concurrently ```npm start```
  - Start backend : ```npm run server:dev```
  - Start frontend : ```npm run client:dev```

### Deployment
  - Client\
     [![Deploy with Vercel](https://github.com/dominggo1999/complete-dictionary/tree/master/client&env=VITE_APP_BACKEND_URL)\
     or\
     [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/dominggo1999/complete-dictionary) 
  - Backend\
    [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/dominggo1999/complete-dictionary)\
    or\
    [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dominggo1999/complete-dictionary/tree/master/client)   

### Environment variables
- Client 
  - ```BACKEND_URL=YOUR_BACKEND_URL```

### Stack
  - Client 
    - Vite
    - React 
    - React router dom
    - Twin Macro
    - Styled Components
    - Zustand
    - Immer
  - Backend
    - Express
