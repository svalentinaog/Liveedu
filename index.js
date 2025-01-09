import jsonServer from 'json-server';
const { create, router, defaults } = jsonServer;

const server = create();
const routerInstance = router("./src/models/api/db.json");
const middlewares = defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(routerInstance);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});