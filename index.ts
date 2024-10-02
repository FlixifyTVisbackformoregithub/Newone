import express from 'express';
import { proxyRequest } from './proxy';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Frontend HTML
app.use(express.static('public'));

// Proxy endpoint
app.all('/proxy/*', proxyRequest);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
