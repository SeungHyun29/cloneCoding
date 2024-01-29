// 각 프로필의 클릭 가능한 div에 고유한 식별자를 추가
const clickableDivs = document.querySelectorAll('.single-profile');

// 각 프로필에 대해 반복
clickableDivs.forEach((clickableDiv) => {
  // SVG 아이콘과 해당 프로필 링크찾기
  const rotateSVG = clickableDiv.querySelector('.svg-icon');
  const toggleUL = clickableDiv.querySelector('.profile-links');

  clickableDiv.addEventListener('click', () => {
    // 선택한 프로필만 토글
    const currentRotation = getComputedStyle(rotateSVG).getPropertyValue('transform');
    clickableDivs.forEach((div) => {
      const rotation = div.querySelector('.svg-icon');
      const links = div.querySelector('.profile-links');
      if (div === clickableDiv) {
        // 선택한 프로필이면 토글
        if (currentRotation === 'none' || currentRotation === 'matrix(1, 0, 0, 1, 0, 0)') {
          rotation.style.transform = 'rotate(180deg)';
          links.style.display = 'block';
        } else {
          rotation.style.transform = 'rotate(0deg)';
          links.style.display = 'none';
        }
      } else {
        // 선택하지 않은 프로필은 닫음
        rotation.style.transform = 'rotate(0deg)';
        links.style.display = 'none';
      }
    });
  });
});
