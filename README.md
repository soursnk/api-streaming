# 🎬 API Streaming

API desenvolvida com **Node.js + Express + MongoDB (Mongoose)** com foco em modelagem de dados, boas práticas de consulta e uso de aggregation.

---

## 👩‍💻 Alunas
Nycolle Khetlem, Manuela Figueira, Katarine Meira, Samily Sena e Luana Magalhães

---

## 📋 Sobre o Projeto
A aplicação permite cadastro de usuários, cadastro de vídeos, histórico de visualização, sistema de avaliação e ranking de conteúdos mais assistidos.

---

## ⚙️ Funcionalidades

**Usuários:** nome, email, data de criação e lista de perfis (ex: infantil, adulto).

**Vídeos:** título, categoria, duração em minutos, número de visualizações, nota média e data de cadastro.

**Histórico de Visualização:** ID do usuário, ID do vídeo, data de visualização, progresso em % e avaliação opcional de 1 a 5.

---

## 📐 Regras de Negócio
Ao registrar uma visualização, o contador é incrementado automaticamente. Caso o usuário avalie o vídeo, a nota média é recalculada. O sistema permite listar os 10 vídeos mais assistidos, listar vídeos por categoria e buscar o histórico de um usuário.

---

## 🛠️ Tecnologias
Node.js, Express, MongoDB, Mongoose, dotenv e Nodemon.

---

## 🚀 Como Rodar

1. Clone o repositório e rode `npm install`
2. Crie o `.env`
3. Rode `npm run dev`

---

## ✅ Requisitos Técnicos
Uso de Mongoose, operadores `$inc`, `$group`, `$sort` e `$lookup`, pelo menos 2 índices definidos manualmente, variáveis de ambiente e estrutura organizada de pastas.

