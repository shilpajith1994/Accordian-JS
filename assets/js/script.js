
var tab = document.querySelectorAll(".accordian")
var para = document.querySelectorAll(".para")
var array_tab = Array.from(tab)

array_tab.forEach(function(tab, index) {

 tab.addEventListener('click', function() {
     if (para[index].classList.contains('active')) {
     para[index].classList.toggle('active')
     tab.classList.toggle('active')
         }
     else { removeActiveClasses()
        para[index].classList.add('active')
        tab.classList.add('active')
     }
    })
})
function removeActiveClasses() {
    array_tab.forEach(function(tab, index){
        tab.classList.remove('hide')
        para[index].classList.remove('active')
    })
}
























