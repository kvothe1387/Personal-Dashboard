fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=lego")
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author').textContent = `By: ${data.user.name}`
  })
  .catch(err => {
    // Use a default background image
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1657210489279-60a5a69d79df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTg5NDk2MTV8&ixlib=rb-4.1.0&q=80&w=1080)`
  })

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then(res => {
    if (!res.ok) {
      throw Error("Something went wrong")
    }
    return res.json()
  })
  .then(data => {
    document.getElementById('crypto-top').innerHTML = `
      <img src=${data.image.small} />
      <span>${data.name}</span>
    `
    document.getElementById("crypto").innerHTML += `
            <p>🎯 Current: $${data.market_data.current_price.usd}</p>
            <p>👆 High: $${data.market_data.high_24h.usd}</p>
            <p>👇 Low: $${data.market_data.low_24h.usd}</p>
        `

  })
  .catch(err => console.error(err))

