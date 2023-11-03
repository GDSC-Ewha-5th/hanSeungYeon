// 태그

const input = document.querySelector('.input');

input.addEventListener('keypress', addTag);

let tagArray = [];

function addTag(event) {
  if (event.key === 'Enter') {
   
    //중복 태그 제외
    const inputValue = input.value;
    if (tagArray.includes(inputValue)) {
      input.value = '';
      return;
    }

    //새 태그
    const newTag = document.createElement('span');
    newTag.className = 'tag';
    newTag.innerText = inputValue;

    document.body.insertBefore(newTag, input);

    tagArray.push(inputValue);
    input.value = '';

    //누르면 사라지게 
    newTag.addEventListener('click', () => {
      newTag.remove();

      const index = tagArray.indexOf(inputValue);
      if (index !== -1) {
        tagArray.splice(index, 1);
      }
    });
  }
}