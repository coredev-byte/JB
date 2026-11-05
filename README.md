# JB Serviços

Site institucional de Engenharia e Segurança do Trabalho. HTML, CSS e JavaScript, com GSAP 3.13.0 e ScrollTrigger para animações. Bibliotecas versionadas em `assets/vendor/`, servidas pelo próprio site.

## Executar localmente

```sh
python3 -m http.server 8080
```

Abra http://localhost:8080. Publicação na Vercel a partir da branch `main`, sem etapa de build.

## Conteúdo

- `index.html`: serviços, contatos, metadados e dados estruturados.
- `style.css`: layout responsivo, identidade visual e acessibilidade.
- `script.js`: mensagens contextuais do WhatsApp.
- `assets/jb-logo.jpg`: marca fornecida pelo cliente.

Telefone: +55 69 99251-1246. E-mail: eng.jefblendon@gmail.com.
As cenas de inspeção e equipamentos são imagens ilustrativas geradas por IA; não representam equipe, instalações ou trabalhos realizados pela JB.

## Animações

Entrada em sequência, transição da imagem principal, revelação das seções por rolagem e barra de progresso com GSAP/ScrollTrigger. Interações de links e abertura de serviços em CSS. Respeita `prefers-reduced-motion`, inclusive alterações durante a navegação. Todo o conteúdo e os contatos continuam acessíveis sem JavaScript ou caso as bibliotecas não carreguem. Referência da licença em `assets/vendor/GSAP-LICENSE.txt`.

## Imagens

`assets/inspecao.webp` e `assets/prevencao.webp`: ilustrações geradas para o projeto e identificadas na interface. Servidas localmente em WebP; imagem principal prioritária e imagem secundária com carregamento sob demanda.
