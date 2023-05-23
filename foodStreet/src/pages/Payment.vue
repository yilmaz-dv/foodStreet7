<template>
<div class="container">
  <div class="payment-area">
    <h5 class="mb-5">Payment Details</h5>
    <form class="mb-5">
      <div class="mb-3">
        <label for="InputCard" class="form-label">Credit Card</label>
        <input maxlength="19" @keydown="CheckCardNumber($event)" type="text" class="form-control" id="InputCard" placeholder="**** **** **** ****">
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="expireDate" class="form-label">Expire Date</label>
          <input type="text" class="form-control" id="expireDate" placeholder="mm/yyyy" maxlength="7">
        </div>
        <div class="col-md-6 mb-3">
          <label for="cvv" class="form-label">CVV</label>
          <input type="text" class="form-control" id="cvv" placeholder="000" maxlength="3">
        </div>
      </div>
      <div class="mb-3">
        <label for="InputPromo" class="form-label">Code</label>
        <div class="d-flex">
          <input maxlength="" type="text" class="form-control me-4" id="InputPromo" v-model="promotion" placeholder="Promotion Code">
          <button type="button" @click="applyPromo()" class="btn btn-success">Apply</button>
        </div>
      </div>
    </form>
    <div class="col-md-4 total-payment">
      <div class="row mb-2">
        <div class="payment col-md-6">Subtotal </div>
        <div class="col-md-6 text-end">{{this.subTotal}}$ </div>
      </div>
      <div class="row mb-2 pb-3 border-bottom">
        <div class="payment col-md-6">Promotion </div>
        <div class="col-md-6 text-end">{{this.promo}} </div>
      </div>
      <div class="row mt-3">
        <div class="payment col-md-6">Total Amount </div>
        <div class="col-md-6 text-end">{{this.total}}$ </div>
      </div>
      <div class="row">
        <button type="submit" class="btn btn-primary mt-5">Make Payment</button>
      </div>

    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "Payment",
  setup(){
    return{
      promotion: "",
      subTotal: 0,
      total: 0,
      promo: 0
    }
  },
  mounted() {
    this.subTotal = parseFloat(localStorage.getItem("subTotal"));
    this.total = parseFloat(localStorage.getItem("Total"));
  },
  methods: {
    CheckCardNumber(e){
      e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    },
    applyPromo(){
      this.promo = 3.5;
      if(this.promotion === "f7"){
        this.total = this.subTotal - this.promo;
      }
      this.$forceUpdate();
    }
  }
}

</script>

<style scoped>
.payment-area{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 45px 35px;
  border-radius: .35rem;
}
.payment{
  color: #999999;
}
</style>