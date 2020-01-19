(function() {
  console.log('home')

  let pos = document.querySelectorAll('.contain-child');
  console.log(pos)
  
  pos.forEach(item => {
    item.addEventListener('click', e => {
      console.log(e)
      e.stopPropagation()
    })
  })
})()
