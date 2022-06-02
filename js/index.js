const like = document.querySelector("#like");
const likeCount = document.querySelector("#likeCount")
const price = document.querySelector("#price")

let count = 0
let priceCount = 200

like.addEventListener("click", () => {
    likeCount.innerHTML = count+1
    price.innerHTML = priceCount + 50
    // update variables
    count += 1
    priceCount += 50
})
