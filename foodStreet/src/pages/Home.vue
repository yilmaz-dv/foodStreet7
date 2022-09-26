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
          <div class="col-md-4">
            <div class="food-area">
              <div class="card" style="width: 18rem;">
                <img src="http://127.0.0.1:8887/mexican-hamburger.jpg" class="card-img-top" alt="Alternative Text">
                <div class="card-body">
                  <h5 class="card-title">Mexican Hamburger</h5>
                  <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div class="row justify-content-between">
                    <div class="w-auto">
                      <span class="price-info">$ 12.98 </span><small class="text-muted"> /with chips</small>
                    </div>
                    <div class="w-auto">
                      <a href="#" class="btn btn-primary btn-sm"><font-awesome-icon icon="cart-plus"></font-awesome-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-4">
            <div class="food-area">
              <div class="card" style="width: 18rem;">
                <img src="http://127.0.0.1:8887/mexican-hamburger.jpg" class="card-img-top" alt="Alternative Text">
                <div class="card-body">
                  <h5 class="card-title">Mexican Hamburger</h5>
                  <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div class="row justify-content-between">
                    <div class="w-auto">
                      <span class="price-info">$ 12.98 </span><small class="text-muted"> /with chips</small>
                    </div>
                    <div class="w-auto">
                      <a href="#" class="btn btn-primary btn-sm"><font-awesome-icon icon="cart-plus"></font-awesome-icon></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-4">
            <div class="food-area">
              <div class="card" style="width: 18rem;">
                <img src="http://127.0.0.1:8887/mexican-hamburger.jpg" class="card-img-top" alt="Alternative Text">
                <div class="card-body">
                  <h5 class="card-title">Mexican Hamburger</h5>
                  <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div class="row justify-content-between">
                    <div class="w-auto">
                      <span class="price-info">$ 12.98 </span><small class="text-muted"> /with chips</small>
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
            <img class="order-img" src="http://127.0.0.1:8887/mexican-hamburger.jpg" alt="">
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
</style>
