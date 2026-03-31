const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()
  // console.log(xhr); >> isko open krne par agar response mai value dikh gyii too iska matlab hai
  // ki api ne value update kr di hai , only fast api aisa kr sakti hai jaise ki ye dog wali api..
  // slow api bhii value update kr sakti hain lekin usse phele hmlog usko open krke dekh sakte hain usme 
  // ki value aayi hai ki nhii  
  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    image.src = xhr.response.message
    console.log(xhr);
  })

  // xhr.onload = () => {
  //   image.src = xhr.response.message
  //   console.log(xhr)
  // }

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})

// Page load
//  ↓
// Button click
//  ↓
// XHR object create
//  ↓
// Response type set
//  ↓
// Load event register
//  ↓
// Request open
//  ↓
// Request send
//  ↓
// Server response
//  ↓
// load event fire
//  ↓
// image.src set
//  ↓
// Image render
