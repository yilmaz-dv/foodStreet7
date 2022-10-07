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
                      <a href="#" class="btn btn-primary btn-sm"><font-awesome-icon icon="cart-plus"></font-awesome-icon></a>
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
        <br>
        <div class="row justify-content-between">
          <div class="col-md-4">
            <img class="order-img" src="" alt="">
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="px-0 mb-2">Mexican Hamburger</div>
              <div class="row justify-content-between align-items-center px-0"><span class="w-auto">$12.98</span>
                <span class="w-auto">
                  <button class="btn btn-primary px-1 py-0 btn-sm">-</button>
                  <span class="product-count ms-2 me-2 disabled">1</span>
                  <button class="btn btn-primary px-1 py-0 btn-sm">+</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <div class="total-price-area py-4 px-3">
          <div class="subtotal">
            <div class="row justify-content-between"><span class="w-auto">Subtotal</span><span class="w-auto">$12.98</span></div>
            <div class="row justify-content-between"><span class="w-auto">Discount</span><span class="w-auto">$1.98</span></div>
          </div>
          <br>
          <div class="total">
            <div class="row justify-content-between mt-3"><span class="w-auto">Total</span><span class="w-auto price-total">$11.0</span></div>
          </div>
        </div>
        <button class="btn btn-primary mt-4 w-100">Continue To Payment</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    getAllHamburgers(){
      const hamburgers = [
        {Id: 1, burgerName: 'Mexican Hamburger', price: 12.98, discount: 0.24, imgSrc:'src/assets/images/mexican-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.', extra: '/with chips'},
        {Id: 2, burgerName: 'California Hamburger', price: 13.50, discount: 1.2, imgSrc:'src/assets/images/california-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.', extra: '/with chips'},
        {Id: 3, burgerName: 'Classic Hamburger', price: 7.70, discount: 0.35, imgSrc:'src/assets/images/classic-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.', extra: ''},
        {Id: 4, burgerName: 'Cheeseburger', price: 11.00, discount: 0, imgSrc:'src/assets/images/cheeseburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.', extra: '/with chips'},
        {Id: 5, burgerName: 'New york Hamburger', price: 10.15, discount: 0, imgSrc:'src/assets/images/newyork-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.', extra: '/with chips'},
        {Id: 6, burgerName: 'XL Hamburger', price: 14.20, discount: 0.50, imgSrc:'src/assets/images/xl-hamburger.jpg', explanation: 'Some quick example text to build on the card title and make up the bulk of the cards content.', extra: '/with chips'},
      ]
      return hamburgers
    }
  }
}
</script>

<style scoped>
.container, .food-area{
  margin-top: 4em;
}
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
  height: 50px;
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
</style>
