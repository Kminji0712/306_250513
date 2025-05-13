/*
  <li><a href="" class="active">1</a></li>
  <li><a href="">2</a></li>
  <li><a href="">3</a></li>
*/
// 선택
let rowsPerPage = 10; // 한 페이지당 보여줄 행(row)개수

// 테이블 모든 행 가져오기
let rows = document.querySelectorAll('#my-table tbody tr')
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage); // 총 필요한 페이지수 계산

// 페이지 번호를 추가할 ul 선택
let numbers = document.querySelector('#numbers');

// 1페이지부터 마지막 페이지까지 번호 전부 만들어서 넣기
for(let i = 1; i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
}

// 모든 페이지 번호 가져오기
let numberBtn = numbers.querySelectorAll('a');

// a클릭 시 이동하는 이벤트
numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', function(e){
    e.preventDefault(); // 링크 클릭 시 화면 이동하기
    displayRow(idx) // 해당 페이지에 맞는 행 보여주기
  })
});

// 실제로 행을 화면에 표시
function displayRow(idx){
  let start = idx * rowsPerPage; // 시작행 번호

  /* 0페이지 > 1~10번행, 2페이지 > 11~20번행 */
  let end = start + rowsPerPage; // 끝행 번호
  let rowsArray = Array.from(rows)
  console.log(rowsArray)
  // 모든 행 전부 안 보이게
  for(let ra of rowsArray){
    ra.style.display = 'none'
  }
  // 해당하는 행만 보여주기
  let newRows = rowsArray.slice(start, end);
  for(let nr of newRows){
    nr.style.display = ''
  }
  // 모든 번호에서 active클래스 제거
  for(let nb of numberBtn){
    nb.classList.remove('active')
  }
  // 현재 선택한 페이지 번호만 클래스 추가
  numberBtn[idx].classList.add('active')
}
displayRow(0);

/* header */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const logoImg = document.querySelector("#headerLogo");
  const search = document.querySelector(".search");
  // 헤더 색상 변경
  header.classList.add("on");
  logoImg.setAttribute("src", "image/logo01_c.png");
  search.classList.add("searchColor");
});