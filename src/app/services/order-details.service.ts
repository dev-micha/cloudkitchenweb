import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://www.myhealthybreakfast.in/images/snacks/grilled-paneer-corn-sandwich.jpg"
    },
    {
      id:2,
      foodName:"Veggie Surpreme",
      foodDetails:"Onion, Green Capsicum, Mushroom, Black olives, sweet corn, Red Paprika topped with cheese",
      foodPrice:369,
      foodImg:"http://cdn.shopify.com/s/files/1/1718/7795/articles/Veggie_Supreme.jpg"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"A unique and tasty street-style burger recipe made with paneer cubes with bhaji masala.",
      foodPrice:149,
      foodImg:"http://www.sawadindiaka.in/wp-content/uploads/2021/05/7132f972-c0ac-400a-afa3-6e811c93bd48-1.jpg"
    },
    {
      id:4,
      foodName:"Paneer Burger",
      foodDetails:"Chickpeas Naan Wrap, a delicious wrap made from Naan bread and chickpeas masala.",
      foodPrice:149,
      foodImg:"https://www.countryrange.co.uk/wp-content/uploads/2019/09/Chicken-Tikka-Masala-Naan-Wrap.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides an ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://product-assets.faasos.io/production/product/image_1671099855627_Indulgence_Brownie_2_.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheescake Ice Cream",
      foodDetails:"Homemade cheesecake ice cream with oreos stirred in - not much is better!",
      foodPrice:219,
      foodImg:"https://www.the-girl-who-ate-everything.com/wp-content/uploads/blogger/_A39cgxoHN64/Spk75M9EnbI/AAAAAAAADvg/aScnJ1FBy2o/s1600/IMG_3318.JPG"
    }
  ]

}



