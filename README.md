# Sistema de Cadastro e Edição de Entregas

Este projeto é um sistema web para o cadastro e edição de entregas, permitindo gerenciar informações de entrega para destinos na Terra e em Marte.

## Funcionalidades

- **Cadastro de Entregas**: Permite cadastrar novas entregas com informações como destino, nome do destinatário, produto, data de envio, endereço e observações.
- **Edição de Endereços**: Permite editar as informações de entregas cadastradas e excluir entregas existentes.
- **Responsividade**: O layout é responsivo, incluindo um menu de navegação que se adapta a diferentes tamanhos de tela com um menu hamburger.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Para roteamento das páginas de cadastro e edição.
- **Local Storage**: Para armazenamento persistente dos dados das entregas no navegador.
- **CSS**: Para estilização da interface.

## Estrutura de Componentes

### `App.jsx`
Responsável por definir as rotas e exibir os componentes `Home` e `EditAddress`.

### `Home.jsx`
Componente para o cadastro de novas entregas.

### `EditAddress.jsx`
Componente para edição e exclusão de entregas existentes.

## Estilização

- **global.css**: Estilos globais.
- **header.css**: Estilos para o cabeçalho e menu de navegação.
- **home.css**: Estilos da pagina home.
- **editAddress.css**: Estilos da pagina de editar cadastro.
- **colors.css**: Cores utilizadas na aplicação.
- **components.css**: Componentes reutilizáveis.
- **typography.css**: Tipografias.
- **form.css**: Estilos para os formulários de cadastro e edição.

## Funcionalidades dos Formulários

### Cadastro de Entregas

- **Nome do Destinatário**: Campo de texto obrigatório.
- **Produto**: Campo de texto obrigatório.
- **Data de Envio**: Campo de data obrigatório.
- **Destino**: Seleciona entre Terra e Marte.
- **Endereço de Destino**: Campo de texto para Terra ou campo numérico para Marte.
- **Observações**: Campo de texto com até 5 linhas.

### Edição de Endereços

- **Buscar por Nome do Destinatário**: Busca e carrega os dados para edição.
- **Atualizar Dados**: Permite atualizar as informações da entrega.
- **Excluir Entrega**: Permite excluir a entrega do sistema.

