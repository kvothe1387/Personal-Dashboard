fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=lego")
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author').textContent = `By: ${data.user.name}`
  })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1657210489279-60a5a69d79df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTg5NDk2MTV8&ixlib=rb-4.1.0&q=80&w=1080)`
  })