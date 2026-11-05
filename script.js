const whatsapp = (message) => `https://wa.me/5569992511246?text=${encodeURIComponent(message)}`;
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsapp('Olá, JB! Vim pelo site e gostaria de solicitar um orçamento para serviços de engenharia e segurança do trabalho.'); });
document.querySelectorAll('[data-service]').forEach(link => { link.href = whatsapp(`Olá, JB! Vim pelo site e gostaria de saber mais sobre ${link.dataset.service}. Podemos conversar sobre um orçamento?`); });
document.getElementById('year').textContent = new Date().getFullYear();
