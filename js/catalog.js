/* ═══════════════════════════════════════
   catalog.js — Carrega e renderiza produtos
   do arquivo data/products.json
═══════════════════════════════════════ */

const WHATSAPP_NUMBER = '5535997681024'; // ← Altere aqui

let allProducts = [];

/** Formata número para BRL */
function formatPrice(n) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/** Gera o HTML de um product-card */
function buildCard(p) {
  // Salva produto no window indexado pelo id para o modal acessar
  window.__products = window.__products || {};
  window.__products[p.id] = p;

  const clickAttr = `onclick="openModal(window.__products[${p.id}])" style="cursor:pointer"`;

  if (p.featured) {
    return `
      <div class="product-card featured" data-category="${p.category}" ${clickAttr}>
        <div class="product-img">${p.emoji}</div>
        <div class="product-info">
          <div class="product-cat">Destaque da semana</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-price-row">
            <div class="product-price">${formatPrice(p.price)}</div>
            ${p.oldPrice ? `<div class="product-old">${formatPrice(p.oldPrice)}</div>` : ''}
          </div>
        </div>
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      </div>`;
  }

  return `
    <div class="product-card" data-category="${p.category}" ${clickAttr}>
      <div class="product-img">${p.emoji}</div>
      <div class="product-info">
        <div class="product-cat">${p.categoryLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price-row">
          <div class="product-price">${formatPrice(p.price)}</div>
          ${p.oldPrice ? `<div class="product-old">${formatPrice(p.oldPrice)}</div>` : ''}
        </div>
      </div>
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
    </div>`;
}

/** Renderiza grid com os produtos filtrados */
function renderGrid(products) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span style="font-size:36px">🔍</span>
        <p>Nenhum produto nessa categoria no momento.</p>
      </div>`;
    return;
  }

  grid.innerHTML = products.map(buildCard).join('');
}

/** Inicializa — busca o JSON e monta a página */
async function initCatalog() {
  try {
    const res = await fetch('./data/products.json');
    allProducts = await res.json();
    renderGrid(allProducts);
  } catch (e) {
    console.error('Erro ao carregar produtos:', e);
  }
}

document.addEventListener('DOMContentLoaded', initCatalog);
