//Theme Logic
var light_icon = document.getElementById('light-icon');
var dark_icon = document.getElementById('dark-icon');
dark_icon.style.display='none';
light_icon.onclick=light_theme;
dark_icon.onclick=dark_theme;

var light_color='#2C3333';
var secondary_2_color='#395B64';
var secondary_1_color='#A5C9CA';
var primary_color='#E7F6F2';

//Illustration Logic
var illustrations = document.querySelectorAll('.illustration');
var informations = document.querySelectorAll('.main-info');

//Current Page Logic
//2 ways either buttons or dash
var page_next_btn = document.getElementById('next-button');
var page_prev_btn = document.getElementById('prev-button');
page_next_btn.onclick = circular_next;
page_prev_btn.onclick = circular_prev;
var circular_page=0;

var dash_pagination = document.querySelectorAll('.dash');
dash_pagination.forEach((dash,index) => {
  dash.addEventListener('click',()=>go_to(index));
});
var prev_page=0;
//Call the Function To Initialize the components
go_to(prev_page);

//Theme chnage Functionality
function dark_theme(){
  document.documentElement.style.setProperty('--primary-color', primary_color);
  document.documentElement.style.setProperty('--light-color', light_color);
  document.documentElement.style.setProperty('--secondary-1-color', secondary_1_color);
  document.documentElement.style.setProperty('--secondary-2-color', secondary_2_color);

  dark_icon.style.display='none';
  light_icon.style.display='inline';
}
function light_theme(){
  document.documentElement.style.setProperty('--light-color', primary_color);
  document.documentElement.style.setProperty('--primary-color', light_color);
  document.documentElement.style.setProperty('--secondary-1-color', secondary_2_color);
  document.documentElement.style.setProperty('--secondary-2-color', secondary_1_color);

  light_icon.style.display='none';
  dark_icon.style.display='inline';
}

//Page Change Functionality
function go_to(index){
  dash_pagination[prev_page].classList.remove('active');
  illustrations[prev_page].style.display='none';
  informations[prev_page].style.display='none';

  dash_pagination[index].classList.add('active');
  illustrations[index].style.display='block';
  if(index>prev_page)
  {
    illustrations[index].setAttribute('class','illustration left-animation');
    informations[index].setAttribute('class','main-info left-animation');
  }
  if(index<prev_page)
  {
    illustrations[index].setAttribute('class','illustration right-animation');
    informations[index].setAttribute('class','main-info right-animation');
  }
  informations[index].style.display='flex';

  prev_page=index;
  circular_page=index;
}
function circular_next(){
  circular_page = (circular_page+1)%dash_pagination.length;
  go_to(circular_page);
}
function circular_prev(){
  circular_page = (circular_page-1+dash_pagination.length)%dash_pagination.length;
  go_to(circular_page);
}