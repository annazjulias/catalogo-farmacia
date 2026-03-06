# 💄 Farmácia Bella — Semana da Maquiagem

## Estrutura do projeto

```
farmacia-bella/
├── index.html              ← Página principal (só HTML semântico)
├── data/
│   └── products.json       ← ✏️  EDITE AQUI para adicionar/remover produtos
├── css/
│   ├── variables.css       ← ✏️  Cores, fontes, espaçamentos — personalize aqui
│   ├── layout.css          ← Estrutura geral, nav, hero, footer
│   └── components.css      ← Cards, botões, filtros, banners
├── js/
│   ├── app.js              ← Navegação entre abas e função de compartilhar
│   ├── catalog.js          ← Lê o JSON e renderiza os cards no grid
│   └── filter.js           ← Filtragem por categoria (botões de filtro)
└── assets/
    └── images/             ← Coloque as fotos dos produtos aqui
```

---

## Como adicionar um produto

Abra `data/products.json` e adicione um objeto seguindo o modelo:

```json
{
  "id": 31,
  "name": "Nome do Produto",
  "category": "batom",
  "categoryLabel": "Batom",
  "emoji": "💄",
  "desc": "Descrição curta do produto.",
  "price": 29.90,
  "oldPrice": 39.90,
  "badge": "-25%",
  "featured": false
}
```

### Campos explicados

| Campo           | Tipo      | Descrição                                              |
|-----------------|-----------|--------------------------------------------------------|
| `id`            | number    | ID único (incremente sempre)                           |
| `name`          | string    | Nome do produto                                        |
| `category`      | string    | Categoria para filtro (ver tabela abaixo)              |
| `categoryLabel` | string    | Texto exibido no card                                  |
| `emoji`         | string    | Emoji ou caminho para imagem                           |
| `desc`          | string    | Descrição curta (1–2 linhas)                           |
| `price`         | number    | Preço atual (sem R$)                                   |
| `oldPrice`      | number/null | Preço antigo (null = sem riscado)                   |
| `badge`         | string/null | Etiqueta no canto "-30%", "Novo", "Kit" (null = sem) |
| `featured`      | boolean   | true = card grande em destaque (use apenas 1)          |

### Categorias disponíveis

| `category`    | Filtro exibido     |
|---------------|--------------------|
| `batom`       | 💄 Batom           |
| `base`        | ✨ Base             |
| `olhos`       | 👁 Olhos            |
| `blush`       | 🌸 Blush            |
| `esmalte`     | 💅 Esmalte          |
| `iluminador`  | 🌟 Iluminador       |
| `acessorios`  | 🖌️ Acessórios       |

> Para adicionar uma nova categoria, inclua no JSON e adicione um `<div class="cat-tag">` no `index.html` com o `data-filter` correspondente.

---

## Como usar imagem no lugar do emoji

No campo `emoji`, coloque o caminho da imagem:
```json
"emoji": "<img src='assets/images/base.webp' style='width:100%;height:100%;object-fit:cover'>"
```

---

## Personalizar cores

Abra `css/variables.css` e altere as variáveis:

```css
--burg:  #C0001A;   /* cor principal (vermelho) */
--deep:  #7A0010;   /* cor escura */
--blush: #FDDADA;   /* cor clara de fundo */
```

---

## Como rodar localmente

Por segurança, navegadores bloqueiam `fetch()` de arquivos locais.
Use um servidor local simples:

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Depois acesse: http://localhost:8080

---

## Alterar número do WhatsApp

Em `js/catalog.js`, linha 7:
```js
const WHATSAPP_NUMBER = '5511999999999'; // ← seu número aqui (só dígitos)
```

E atualize os links `href` no `index.html` nas seções de CTA.
