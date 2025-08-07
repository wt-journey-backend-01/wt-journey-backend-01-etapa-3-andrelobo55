const express = require('express');
const app = express();
const PORT = 3000;
const agentesRoutes = require("./routes/agentesRoutes");
const casosRoutes = require("./routes/casosRoutes");
const setupSwagger = require('./docs/swagger');

app.use(express.json());
app.use("/agentes", agentesRoutes);
app.use("/casos", casosRoutes);
setupSwagger(app);

app.use((req, res, next) => {
    res.status(404).json({ message: "Rota não encontrada." });
});

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em http://localhost:${PORT}`);
});