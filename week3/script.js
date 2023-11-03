// 드롭다운
// 버튼과 드롭다운 내용 요소를 가져옴
const button = document.querySelector('.dropdown-btn');
const subMenu = document.querySelector('.sub-menu');
const arrowIcon = button.querySelector('.material-symbols-outlined');
const subMenuLinks = subMenu.querySelectorAll('a');
const dropdownToday = button.querySelector('.dropdown-today');

// 이전에 선택한 항목을 저장하는 변수
let previousSelection = '오늘';

// arrow_drop_down 아이콘을 클릭하여 전체 버튼 옵션을 토글
arrowIcon.addEventListener('click', function(event){
  event.stopPropagation(); // 이벤트 전파 방지

  // 드롭다운 내용이 보이면 숨김, 숨겨져 있으면 보이게 함
  if (subMenu.style.display === 'block') {
    subMenu.style.display = 'none';
  } else {
    subMenu.style.display = 'block';
  }
});

// 드롭다운 메뉴 항목을 클릭했을 때 해당 버튼의 텍스트를 변경하고 드롭다운을 닫음
subMenuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    const selectedText = event.target.textContent;
    dropdownToday.textContent = selectedText;
    subMenu.style.display = 'none';

    // 선택된 항목 텍스트를 초록색으로 표시
    dropdownToday.style.color = 'green';

    // 이전에 선택한 항목을 원래 색으로 복원
    subMenuLinks.forEach(item => {
      if (item.textContent === previousSelection) {
        item.style.color = '';
      }
    });

    // 이전에 선택한 항목을 업데이트
    previousSelection = selectedText;
  });
});

// 문서의 다른 영역을 클릭했을 때 드롭다운을 닫도록 이벤트 핸들러를 등록
document.addEventListener('click', function(event) {
  if (event.target !== button && event.target !== subMenu) {
    subMenu.style.display = 'none';
  }
});

