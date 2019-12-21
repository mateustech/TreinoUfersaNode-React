const app = require('./server');
const routes = require('./routes');
const config = require('./Config/geral');

app.use(routes);
app.listen(config.PORT, () => {
    console.log(`APi rodando na porta ${config.PORT}`);
});