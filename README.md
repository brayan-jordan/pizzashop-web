# Pizza Shop WEB

Desenvolvi uma aplicação front-end que permite o controle eficiente dos pedidos em uma pizzaria, fornecendo relatórios abrangentes sobre as transações, o desempenho dos itens do cardápio e outras métricas de receita.

### Vídeos

![Vídeo simples da aplicação](https://raw.githubusercontent.com/brayan-jordan/pizzashop-web/master/docs/hero.gif)

Vídeo simples da aplicação, já que o markdown só suporta arquivos no formato .gif. Para assistir ao vídeo em melhor resolução, [clique aqui](https://www.youtube.com/watch?v=oUp1l8ZdBhg).

## Conceitos / ferramentas

- [Radix UI](https://www.radix-ui.com/): Biblioteca utilizada para importar componentes acessíveis e pré-estilizados, proporcionando uma experiência de desenvolvimento mais eficiente e acessível.
- [Tailwind CSS](https://tailwindcss.com/): Biblioteca utilizada para estilização dos componentes utilizando classes pré-definidas.
- [Testing Library](https://testing-library.com/): Utilizei essa biblioteca para criar testes unitários no front-end, garantindo a integridade e funcionalidade de cada componente da interface de usuário.
- [Playwright](https://playwright.dev/): Utilizei essa ferramenta incrível da Microsoft para criar testes end-to-end (simulando interações dos usuários), garantindo que a aplicação funcione corretamente em diferentes navegadores e dispositivos.
- [React Query](https://tanstack.com/query/latest/docs/framework/react/overview): Utilizei essa biblioteca para gerenciar o estado da aplicação, garantindo que os dados sejam atualizados de forma eficiente e consistente.
- [Recharts](https://recharts.org/en-US/): Utilizei essa biblioteca para criar gráficos interativos e responsivos, fornecendo uma visualização clara e eficaz das métricas.

## Iniciar aplicação localmente

1. Instalar as dependências do projeto:

   ```bash
   npm install
   ```

2. Copiar váriaveis de ambiente:

   ```bash
   copy .env.example .env
   ```

3. Iniciar a aplicação com dados fictícios:

   ```bash
   npm run dev:test
   ```

4. Iniciar a aplicação com dados de desenvovimento (necessário subir localmente projeto [back-end](https://github.com/brayan-jordan/pizzashop-web)):

   ```bash
   npm run dev
   ```

5. Executar testes unitários

   ```bash
   npm run test
   ```

6. Executar testes end-to-end

   ```bash
   npm run test:e2e
   ```
