<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-7">
            <div>
              <h3>Wellcome to FoodStreet7</h3>
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group input-group-sm mb-3">
              <input placeholder="Search" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-md-4" v-for="(item) in getAllHamburgers" :key="item.Id">
            <div class="food-area">
              <div class="card" style="width: 18rem;">
                <img :src="item.imgSrc" class="card-img-top" alt="Alternative Text">
                <div class="card-body">
                  <h5 class="card-title">{{item.burgerName}}</h5>
                  <p class="card-text text-muted">{{item.explanation}}</p>
                  <div class="row justify-content-between">
                    <div class="w-auto">
                      <span class="price-info">$ {{item.price}} </span><small class="text-muted"> {{item.extra}}</small>
                    </div>
                    <div class="w-auto">
                      <button @click="addCart(item.Id, item.burgerName, item.price, item.discount, item.imgSrc)" class="btn btn-primary btn-sm"><font-awesome-icon icon="cart-plus"></font-awesome-icon></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-md-3 order-area">
        <div class="title">
          <h4>Current Order</h4>
        </div>
        <div v-for="(item) in cart" :key="item.Id" class="row justify-content-between mb-2">
          <div class="col-md-4">
            <img class="order-img" :src=item.imgSrc alt="">
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="px-0 mb-2">{{item.burgerName}}</div>
              <div class="row justify-content-between align-items-center px-0"><span class="w-auto">$ {{item.price}}</span>
                <span class="w-auto">
                  <span @click="removeCart(item.Id, item.burgerName, item.price, item.discount)" class="btn remove-cart">-</span>
                  <span class="product-count ms-2 me-2 disabled">{{item.burgerCount}}X</span>
                  <span @click="addCart(item.Id, item.burgerName, item.price, item.discount, item.imgSrc)" class="btn add-cart">+</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="total-price-area py-4 px-3">
          <div class="subtotal">
            <div class="row justify-content-between"><span class="w-auto">Subtotal</span><span class="w-auto">${{this.subTotal}}</span></div>
            <div class="row justify-content-between"><span class="w-auto">Discount</span><span class="w-auto">${{this.discount}}</span></div>
          </div>
          <br>
          <div class="total">
            <div class="row justify-content-between mt-4"><span class="w-auto">Total</span><span class="w-auto price-total">${{this.total}}</span></div>
          </div>
        </div>
        <router-link @click="calculate()" tag="button" to="/Payment" class="btn btn-primary mt-4 w-100">Continue To Payment</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  setup() {
      return {
        cart: [],
        subTotal: 0,
        discount: 0,
        total: 0,
    }
  },
  computed: {
    getAllHamburgers(){
      const hamburgers = [
        {Id: 1, burgerName: 'Mexican Hamburger', price: 12.95, discount: 0.25, imgSrc:'src/assets/images/mexican-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
        {Id: 2, burgerName: 'California Hamburger', price: 13.50, discount: 1.25, imgSrc:'src/assets/images/california-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
        {Id: 3, burgerName: 'Classic Hamburger', price: 8.0, discount: 0, imgSrc:'src/assets/images/classic-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
        {Id: 4, burgerName: 'Cheeseburger', price: 11.00, discount: 0, imgSrc:'src/assets/images/cheeseburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
        {Id: 5, burgerName: 'New york Hamburger', price: 10.15, discount: 0, imgSrc:'src/assets/images/newyork-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
        {Id: 6, burgerName: 'XL Hamburger', price: 14.20, discount: 0.50, imgSrc:'src/assets/images/xl-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.'},
      ]
      return hamburgers
    },
  },
  mounted() {
    localStorage.clear();
  },
  methods: {
    addCart(Id, burgerName, price, discount, imgSrc) {
      let cartData = {};
      this.subTotal += Math.round(price);
      this.discount += Math.round(discount*100)/100;
      this.total = Math.round(this.subTotal - this.discount);
      for(let item in this.cart){
        if(this.cart[item].Id === Id){
          this.cart[item].burgerCount++;
          this.$forceUpdate()
          return
        }
      }
      cartData = {Id: Id, burgerName: burgerName, price: price, discount: discount, imgSrc: imgSrc, burgerCount: 1}
      this.cart.push(cartData)
      this.$forceUpdate()
    },
    removeCart(Id, burgerName, price, discount){
      this.subTotal -= Math.round(price);
      this.discount -= Math.round(discount*100)/100;
      this.total = Math.round(this.subTotal - this.discount);
      for (let item in this.cart){
        if(this.cart[item].Id === Id){
          this.cart[item].burgerCount--;
        }
        if(this.cart[item].burgerCount === 0){
          this.cart.splice(item, 1)
        }
        this.$forceUpdate()
      }
    },
    calculate(){
      localStorage.setItem("subTotal", this.subTotal);
      localStorage.setItem("Total", this.total);
    }
  }
}
</script>

<style scoped>

.text-muted{
  font-size: 12px;
}
.price-info{
  color: #F46801;
  font-weight: 700;
  font-size: 1.2rem;
}
.order-area{
  padding-left: 15px;
  padding-top: 25px;
  background-color: white;
}
.order-img{
  width: 80px;
  height: 65px;
  border-radius: 5px;
}
.card{
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.product-count{
  color: #6c757d;
}
.total-price-area{
  background-color: #F8F8F8;
  border-radius: 5px;
}
.total{
  -webkit-border-radius: 0 0 8px 8px;
  -moz-border-radius: 0 0 8px 8px;
  border-radius: 0 0 8px 8px;
  border-top: 5px dotted #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.total .price-total{
  font-size: 1.2rem;
}
.total:after{
  background: #fff;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  content: "";
  height: 20px;
  left: -22px;
  position: absolute;
  top: -11px;
  width: 20px;
}
.total:before{
  background: #fff;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  content: "";
  height: 20px;
  left: 273px;
  position: absolute;
  top: -11px;
  width: 20px;
}
.subtotal{
  font-size: 13px;
}
.card-img-top{
  height: 250px;
}
.remove-cart, .add-cart{
  background: #F46801;
  color: #fff;
  padding: 0px 5px;
}
@media screen and (min-width: 767px) {
  .title{
    margin-bottom: 60px;
  }
}
</style>
