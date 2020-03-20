all_resize();
window.addEventListener('resize', all_resize);

function all_resize() 
{
  // Ширина изображения
  let width_image = document.getElementById('story-img').clientWidth;
  
  // Высота изображения
  let height_image = width_image / 1.125;
  
  // Изменение высоты изображения в зависимости от его ширины
  document.getElementById('story-img').style.height = height_image + 'px';
  
  document.getElementById('portfolio-img-1').style.height = document.getElementById('portfolio-img-1').clientWidth + 'px';
  document.getElementById('portfolio-img-2').style.height = document.getElementById('portfolio-img-2').clientWidth + 'px';
  document.getElementById('portfolio-img-3').style.height = document.getElementById('portfolio-img-3').clientWidth + 'px';
  document.getElementById('portfolio-img-4').style.height = document.getElementById('portfolio-img-4').clientWidth + 'px';
  
  // Ширина экрана
  let window_size = document.documentElement.clientWidth;
  
  // В случае, если размер экрана меньше или равен 900 px - удаляются классы bootstrap, иначе - добавляются
  if (window_size <= 900)
  {
    $('#story-img').removeClass("col");
    $('#about-text').removeClass("col");
    $('#about-content').removeClass("row");
  }else
  {
    $('#story-img').addClass("col");
    $('#about-text').addClass("col");
    $('#about-content').addClass("row");
  }
  
  if (window_size <= 850)
  {
    $('.contact-content-text').removeClass("col");
    $('.contact-content').removeClass("row");
  }else
  {
    $('.contact-content-text').addClass("col");
    $('.contact-content').addClass("row");
  }
  
  if (window_size <= 780)
  {
    $('#menu-list').removeClass("row");
    $('#menu-list-left').removeClass("col");
    $('#menu-list-right').removeClass("col");
  }else
  {
    $('#menu-list').addClass("row");
    $('#menu-list-left').addClass("col");
    $('#menu-list-right').addClass("col");
  }
  
  let winHeight = $(window).height();
  
  let target_cost = $('.menu-item');
  let targetPos_cost = target_cost.offset().top;
  let scrollToElem_cost = targetPos_cost - winHeight;
  
  let target_story = $('#About');
  let targetPos_story = target_story.offset().top;
  let scrollToElem_story = targetPos_story - winHeight;
  
  let target_recipes = $('#Recipes');
  let targetPos_recipes = target_recipes.offset().top;
  let scrollToElem_recipes = targetPos_recipes - winHeight;
  
  let target_main_text = $('.main-text');
  let targetPos_main_text = target_main_text.offset().top;
  let scrollToElem_main_text = targetPos_main_text - winHeight;
  
  // Событие сработает когда пользователь доскроллит до элемента с классом menu-item
  
  $(window).scroll(function()
  {
    let winScrollTop = $(this).scrollTop();
    
    if (winScrollTop > scrollToElem_cost)
    {
      $('span').addClass("animated zoomIn");
    }
    
    if (winScrollTop > scrollToElem_story)
    {
      $('.about-text').addClass("animated fadeInRight");
    }
    
    if (winScrollTop > scrollToElem_recipes)
    {
      $('.content-text').addClass("animated zoomIn");
    }
    
    if (winScrollTop > scrollToElem_main_text)
    {
      $('#main-text').addClass("animated pulse");
    }
  });
};


// События для главного меню
  
let sidebarBox = document.querySelector('#menu-box');
let sidebarBtn = document.querySelector('#menu-btn');

sidebarBtn.addEventListener('click', function(event) 
{
  if (this.classList.contains('active')) 
  {
    this.classList.remove('active');
    sidebarBox.classList.remove('active');
  }else 
  {
    this.classList.add('active');
    sidebarBox.classList.add('active');
  }
});

window.addEventListener('keydown', function(event) 
{
  if (sidebarBox.classList.contains('active') && event.keyCode === 27) 
  {
    sidebarBtn.classList.remove('active');
    sidebarBox.classList.remove('active');
  }
});
