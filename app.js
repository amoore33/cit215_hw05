var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

let popUp = document.createElement("div");
popUp.className = "popUp";
popUp.style.display = "none";
popUp.addEventListener("click", function() {
    popUp.style.display = "none";
    popUp.innerHTML = "";
});
document.body.appendChild(popUp);

for (let i = 0; i < products.length; i++) {
    let ele = document.createElement("div");
    ele.className = "product";

    let img = document.createElement("img");
    img.src = products[i].image;
    ele.appendChild(img);

    ele.innerHTML += `<p>Name: ${products[i].name}</p><p>Price: \$${products[i].price}</p>`;

    ele.addEventListener("mouseenter", function () {
        ele.style.borderColor = products[i].color;
    });
    ele.addEventListener("mouseleave", function () {
        ele.style.borderColor = "black";
    });

    ele.addEventListener("click", function () {
        popUp.innerHTML = ele.innerHTML;
        popUp.style.display = "flex";
    });

    document.body.appendChild(ele);
}