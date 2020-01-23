(function() {
  console.log('home')

  let pos = document.querySelectorAll('.contain-child');
  let myModel = document.querySelector('#my-model');
  let myVideo = document.querySelector('#my-video');
  let myBox = document.querySelector('#my-box');
  // let close = document.querySelector('#close');


  let obj = [
    {
      index: 0,
      list: [
        '../../assets/video/one.mp4',
        '../../assets/video/two.mp4',
      ],
      x: '3',
      y: '1',
    },
    {
      index: 0,
      list: [
        '../../assets/video/one.mp4',
        '../../assets/video/two.mp4',
      ],
      x: '3.2',
      y: '1.2',
    },
    {
      index: 0,
      list: [
        '../../assets/video/one.mp4',
        '../../assets/video/two.mp4',
      ],
      x: '3.8',
      y: '2',
    },
    {
      index: 0,
      list: [
        '../../assets/video/one.mp4',
        '../../assets/video/two.mp4',
      ],
      x: '4.5',
      y: '2.3',
    },
    {
      index: 0,
      list: [
        '../../assets/video/one.mp4',
        '../../assets/video/two.mp4',
      ],
      x: '3.3',
      y: '2.3',
    }
  ]

  myModel.addEventListener('click', e => {
    e.stopPropagation()
    myModel.className = 'model'
    myVideo.pause()
  })

  function showVideoModel(index) {
    let src = obj[index].list[obj[index].index]
    myBox.style.top = obj[index].y + 'rem'
    myBox.style.left = obj[index].x + 'rem'
    myModel.className = 'model active'
    myVideo.setAttribute('src', src)
    obj[index].index === 0 ? obj[index].index = 1: obj[index].index = 0
  }
  
  // myVideo.addEventListener('ended', e => {
  //   myModel.className = 'model'
  // })

  // close.addEventListener('click', e => {
  //   console.log('close')
  //   // app.exit()
  // })

  pos.forEach((item, index) => {
    item.addEventListener('click', e => {
      e.stopPropagation()
      showVideoModel(index)
    })
  })
})()
