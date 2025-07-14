const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

// Exibir mensagem de sucesso ao enviar o formulário de contato
const contactForm = document.querySelector('.form');
const successMessage = document.getElementById('success-message');
if (contactForm && successMessage) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    contactForm.reset();
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 4000);
  });
}

// Modal de imagem ampliada para projetos
const mainImg = document.getElementById('main-inventory-img');
const imageModal = document.getElementById('image-modal');
const closeModal = document.getElementById('close-modal');
if (mainImg && imageModal && closeModal) {
  mainImg.addEventListener('click', function() {
    imageModal.style.display = 'flex';
  });
  closeModal.addEventListener('click', function() {
    imageModal.style.display = 'none';
  });
  imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
      imageModal.style.display = 'none';
    }
  });
}

// Modal de detalhes do projeto (primeiro Leia mais)
const openInventoryModal = document.getElementById('open-inventory-modal');
const projectDetailsModal = document.getElementById('project-details-modal');
const closeDetailsModal = document.getElementById('close-details-modal');
if (openInventoryModal && projectDetailsModal && closeDetailsModal) {
  openInventoryModal.addEventListener('click', function(e) {
    e.preventDefault();
    projectDetailsModal.style.display = 'flex';
  });
  closeDetailsModal.addEventListener('click', function() {
    projectDetailsModal.style.display = 'none';
  });
  projectDetailsModal.addEventListener('click', function(e) {
    if (e.target === projectDetailsModal) {
      projectDetailsModal.style.display = 'none';
    }
  });
}

// Modal de imagem ampliada para OrganiGest
const organigestImg = document.getElementById('organigest-img');
const organigestModal = document.getElementById('organigest-modal');
const closeOrganigestModal = document.getElementById('close-organigest-modal');
if (organigestImg && organigestModal && closeOrganigestModal) {
  organigestImg.addEventListener('click', function() {
    organigestModal.style.display = 'flex';
  });
  closeOrganigestModal.addEventListener('click', function() {
    organigestModal.style.display = 'none';
  });
  organigestModal.addEventListener('click', function(e) {
    if (e.target === organigestModal) {
      organigestModal.style.display = 'none';
    }
  });
}

// Modal de detalhes do OrganiGest (segundo Leia mais)
const openOrganigestDetails = document.getElementById('open-organigest-details');
const organigestDetailsModal = document.getElementById('organigest-details-modal');
const closeOrganigestDetails = document.getElementById('close-organigest-details');
if (openOrganigestDetails && organigestDetailsModal && closeOrganigestDetails) {
  openOrganigestDetails.addEventListener('click', function(e) {
    e.preventDefault();
    organigestDetailsModal.style.display = 'flex';
  });
  closeOrganigestDetails.addEventListener('click', function() {
    organigestDetailsModal.style.display = 'none';
  });
  organigestDetailsModal.addEventListener('click', function(e) {
    if (e.target === organigestDetailsModal) {
      organigestDetailsModal.style.display = 'none';
    }
  });
}

// Modal de detalhes do PulseMind (terceiro Leia mais)
const openPulsemindDetails = document.getElementById('open-pulsemind-details');
const pulsemindDetailsModal = document.getElementById('pulsemind-details-modal');
const closePulsemindDetails = document.getElementById('close-pulsemind-details');
if (openPulsemindDetails && pulsemindDetailsModal && closePulsemindDetails) {
  openPulsemindDetails.addEventListener('click', function(e) {
    e.preventDefault();
    pulsemindDetailsModal.style.display = 'flex';
  });
  closePulsemindDetails.addEventListener('click', function() {
    pulsemindDetailsModal.style.display = 'none';
  });
  pulsemindDetailsModal.addEventListener('click', function(e) {
    if (e.target === pulsemindDetailsModal) {
      pulsemindDetailsModal.style.display = 'none';
    }
  });
}

// Modal de imagem ampliada para PulseMind
const pulsemindImg = document.getElementById('pulsemind-img');
const pulsemindModal = document.getElementById('pulsemind-modal');
const closePulsemindModal = document.getElementById('close-pulsemind-modal');
if (pulsemindImg && pulsemindModal && closePulsemindModal) {
  pulsemindImg.addEventListener('click', function() {
    pulsemindModal.style.display = 'flex';
  });
  closePulsemindModal.addEventListener('click', function() {
    pulsemindModal.style.display = 'none';
  });
  pulsemindModal.addEventListener('click', function(e) {
    if (e.target === pulsemindModal) {
      pulsemindModal.style.display = 'none';
    }
  });
}
