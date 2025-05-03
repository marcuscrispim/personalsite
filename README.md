# Personal Website Template - Mechanical Engineering Student

Este README fornece orientações de uso para o template de site pessoal estático de um estudante de engenharia mecânica. Inclui instruções para publicar o site no GitHub Pages e dicas de como modificar o conteúdo (posts do blog, resenhas, projetos etc.) de acordo com suas necessidades.

## Estrutura do Projeto

- **HTML:** O projeto possui páginas separadas para cada seção do site (`index.html`, `blog.html`, `book-reviews.html`, `professional-life.html`, `portfolio.html`, `about.html` e `contact.html`). Cada página já vem com conteúdo de exemplo em inglês, que você pode substituir pelo seu próprio conteúdo.
- **CSS:** Os estilos estão definidos em `css/style.css`. Aqui você pode alterar cores, fontes, espaçamentos e demais aparências do site. Por exemplo, para mudar a cor de destaque azul padrão, procure por `#005faf` no arquivo CSS e altere para a cor desejada.
- **JavaScript:** O arquivo `js/script.js` contém o código para funcionamento do menu mobile. Se desejar adicionar novas funcionalidades (como animações em scroll, por exemplo), este é o lugar para incluir seu código JS.
- **Imagens:** Há uma pasta `images/` prevista para armazenar suas imagens (foto de perfil, imagens dos projetos, etc.). No conteúdo de exemplo, usamos nomes genéricos (`profile.jpg`, `project1.jpg` etc.). Substitua esses arquivos pelos seus próprios, garantindo que os nomes correspondam aos utilizados no código `<img src="...">`.
- **Ícones:** Utilizamos ícones do Font Awesome através de um link CDN no `<head>` das páginas (para ícone de engrenagem no logo e ícones de LinkedIn/GitHub/email). Caso não queira usar Font Awesome, você pode remover o link e os `<i class="fas ...">` no HTML, ou substituir por imagens/ícones próprios.

## Publicação no GitHub Pages

Você pode publicar este site gratuitamente usando o **GitHub Pages**. Siga os passos abaixo:

1. **Crie um repositório no GitHub:** crie um novo repositório no seu GitHub (público ou privado). Você pode nomeá-lo como quiser, por exemplo, `meu-site` (ou usar o formato `username.github.io` para um site pessoal).
2. **Envie os arquivos do site para o repositório:** faça upload de todos os arquivos e pastas do template (HTML, CSS, JS, imagens e o README) para o repositório. Certifique-se de manter a estrutura de diretórios.
3. **Habilite o GitHub Pages:** no GitHub, acesse a aba **Settings** do repositório. Role até a seção **Pages** (ou **GitHub Pages**). Em "Branch", selecione a branch principal (geralmente `main` ou `master`) e o diretório root (`/ (root)`), então clique em **Save**. 
4. **URL do site:** após alguns segundos, o GitHub Pages irá gerar a página. A URL será algo como:
   - `https://seu-usuario.github.io/nome-do-repositorio/` (se for um repositório comum), 
   - *ou* `https://seu-usuario.github.io/` (se o repositório tiver nome `seu-usuario.github.io` especificamente).
5. Acesse a URL fornecida para ver seu site online. Sempre que fizer alterações nos arquivos e enviar um commit, o GitHub Pages atualizará o site automaticamente após alguns instantes.

*Dica:* Para mais detalhes, consulte a documentação oficial do GitHub Pages (em inglês): [GitHub Pages - Getting Started](https://docs.github.com/en/pages/getting-started-with-github-pages).

## Personalização de Conteúdo

Este template vem com conteúdo de exemplo que deve ser substituído pelas suas informações reais. Seguem algumas orientações para personalizar cada seção:

- **Home (`index.html`):** Edite o texto de boas-vindas, colocando seu nome real e uma breve descrição. Você pode ajustar a mensagem para refletir sua personalidade ou objetivos. Ex: alterar "Alex Doe" para seu nome; atualizar o texto sobre ser estudante na universidade XYZ, etc.
- **Blog (`blog.html`):** Para adicionar posts, copie a estrutura de um `<article>` existente e cole abaixo do último, ajustando o título, data e conteúdo. Mantenha uma separação (como um `<hr />`) entre os posts para organização. Caso os posts se tornem numerosos, você pode eventualmente criar páginas separadas para cada post e, na `blog.html`, listar apenas títulos e links – mas isso requer criar novos arquivos HTML para cada post.
- **Book Reviews (`book-reviews.html`):** Similar ao blog, os artigos de resenha de livros podem ser adicionados ou removidos duplicando a estrutura existente. Insira o título do livro, autor (se quiser), sua avaliação (Rating) e sua resenha. Sinta-se à vontade para usar formatação adicional (negrito, itálico) conforme necessário. Se tiver muitas resenhas, pode organizá-las por categoria ou ano, mas para início, liste-as sequencialmente.
- **Professional Life (`professional-life.html`):** Atualize as listas de Educação, Experiência e Certificações com sua trajetória. Coloque as datas corretas e descrições das suas formações, estágios, empregos, projetos de pesquisa, prêmios, etc. Você pode adicionar novas seções ou itens conforme necessário, mantendo o formato `<ul><li>...</li></ul>` para listar os eventos.
- **Portfolio (`portfolio.html`):** Substitua os exemplos de projetos pelos seus projetos reais. Para cada projeto:
  - Troque `project1.jpg`, `project2.jpg`, etc., pela imagem do seu projeto (atualize o nome do arquivo e coloque a imagem correspondente na pasta `images/`).
  - Edite o título `<h2>` e a descrição `<p>` para refletir o que você fez no projeto. Seja conciso e destaque aspectos importantes (tecnologias usadas, objetivo do projeto, resultados obtidos).
  - Opcional: ajuste o link "View Details". Por exemplo, você pode fazer esse link apontar para um repositório no GitHub ou uma página com mais detalhes do projeto. Se não quiser link nenhum, pode remover o parágrafo do link.
  - Para adicionar mais projetos, duplique a `<div class="project-card">...</div>` e edite os conteúdos. O layout acomodará automaticamente mais cartões, quebrando linha se necessário.
- **About (`about.html`):** Escreva sobre você! Substitua o texto pelos detalhes da sua história, interesses e aspirações. Inclua o nome da sua universidade, ano atual do curso, áreas de interesse em engenharia, habilidades (por exemplo, softwares que domina: SolidWorks, MATLAB, etc.), e qualquer informação adicional que queira compartilhar (hobbies relacionados, filosofia pessoal, etc.). Troque `profile.jpg` pela sua foto (mantendo o nome ou ajustando o atributo `src` conforme o nome do arquivo da sua foto).
- **Contact (`contact.html`):** Atualize as informações de contato:
  - No item de email, coloque seu endereço real no `mailto:` e no texto.
  - Atualize o link do LinkedIn e do GitHub com seus URLs de perfil.
  - O formulário de contato é opcional. Ele está configurado para abrir o cliente de email do visitante. Você pode deixar assim, ou remover o formulário e apenas fornecer os meios de contato diretos. **Importante:** Teste o formulário; alguns navegadores podem bloquear `mailto:` por razões de segurança ou exigir configurações específicas do cliente de email.
- **Footer (rodapé em todas as páginas):** O rodapé possui links para LinkedIn, GitHub e Email. Certifique-se de atualizar esses links em **todas** as páginas HTML (pode usar um editor de texto para localizar e substituir rapidamente). Caso queira adicionar alguma informação (por exemplo, telefone de contato ou um link para currículo em PDF), você pode editar o `<p>` do rodapé para incluir esses detalhes.

## Dicas Finais

- Mantenha a consistência: se alterar o estilo do menu ou do rodapé, lembre-se de replicar em todas as páginas para que o site mantenha um visual unificado.
- Teste a responsividade: redimensione a janela do navegador ou acesse pelo celular para garantir que todos os elementos estão aparecendo corretamente e que o menu hamburguer funciona.
- Personalize o tema: fique à vontade para alterar cores, adicionar seu logo pessoal, mudar fontes (por exemplo, usando [Google Fonts](https://fonts.google.com/) – basta adicionar o link no `<head>` e atualizar `font-family` no CSS).
- Segurança de informações: por ser um site público, evite colocar informações pessoais sensíveis. Recomenda-se fornecer email profissional/acadêmico em vez de pessoal, e links para perfis profissionais.
- Inspire-se em outros sites: pequenas melhorias de design podem fazer diferença. Se quiser deixar o visual mais único, você pode incluir pequenas animações CSS, adicionar uma seção de "últimos posts" na Home, integrar um feed do Twitter, etc. Lembre-se apenas de que, sem backend, funcionalidades avançadas podem exigir serviços de terceiros ou algumas configurações extras.

Esperamos que este template seja útil para criar seu site pessoal! Qualquer dúvida, consulte a comunidade ou a documentação do GitHub Pages para publicação. Boa sorte com seu site e sua carreira em engenharia mecânica!
