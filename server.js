const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.json({
    projeto: 'Criança Feliz',
    descricao: 'Atividades Lúdicas para Gestantes',
    integrantes: [
      'Adélia Vieira dos Santos',
      'Danniele Soares de Moura'
    ],
    status: 'API funcionando ✅'
  });
});

// Rota de atividades
app.get('/atividades', (req, res) => {
  res.json({
    atividades: [
      { id: 1, nome: 'Conversa e acolhimento', fase: '1 a 3 meses' },
      { id: 2, nome: 'Música e relaxamento', fase: '4 a 6 meses' },
      { id: 3, nome: 'Preparação e vínculo', fase: '7 a 9 meses' }
    ]
  });
});

// Tratamento de erro 404
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
