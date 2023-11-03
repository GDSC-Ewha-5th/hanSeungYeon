
// modal.js
function resetDropdown() {
   const dropdowns = document.querySelectorAll('.top-second-left .dropdown');
   dropdowns.forEach(dropdown => {
     dropdown.classList.remove('open');
   });
}

import { useScrollLock } from './scroll-lock.js'; // scroll-lock.js 파일을 import

export function useModal() {
  const cardContainer = document.querySelector('.container');

  cardContainer.addEventListener('click', (event) => {
    let target = event.target;

    // 카드를 클릭한 경우 또는 카드 모달 내부 요소를 클릭한 경우에는 모달을 열지 않음
    while (target && !target.classList.contains('card')) {
      target = target.parentNode;
    }

    if (!target || target.classList.contains('card__modal')) {
      return;
    }

    resetDropdown();

    // 모달 생성
    const modalBg = document.createElement('div');
    const modalCard = document.createElement('article');
    const modalCloseBtn = document.createElement('button');

    modalBg.classList.add('card__modal-bg');
    modalCard.innerHTML = target.innerHTML;
    modalCard.classList.add('card', 'card__modal');
    modalCloseBtn.innerText = 'X';
    modalCloseBtn.classList.add('card__modal-close-btn');

    modalBg.appendChild(modalCard);
    document.body.appendChild(modalBg);
    modalCard.appendChild(modalCloseBtn);

    // 모달이 열렸을 때 스크롤 비활성화
    useScrollLock(); // scroll-lock.js의 함수를 사용하여 스크롤 비활성화

    modalCloseBtn.addEventListener('click', () => {
      modalBg.remove();
      // 모달이 닫힐 때 스크롤 활성화
      useScrollLock(false); // scroll-lock.js의 함수를 사용하여 스크롤 활성화
    });
  });
}


export function useScrollLock(lock = true) {
  const body = document.body;
  if (lock) {
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
  } else {
    body.style.overflow = 'auto';
    body.style.position = 'static';
  }
}
