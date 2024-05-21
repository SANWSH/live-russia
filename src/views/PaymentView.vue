<template>
  <Teleport to="body">
    <Modal class="!z-[9999]">
      <div class="payments flex flex-col self-center" ref="modalContent">
        <div class="payments__inputs flex w-full">
          <div class="flex flex-col w-full">
            <small class="input__title">Игровой никнейм</small>
            <input-element
            Type="text"
            Label="Игровой никнейм"
            Placeholder="Имя"
            Name="name"
            :val="nickname"
            @update:val="$event => (nickname = $event)"
            class="!w-full"
            />
          </div>
          <div class="flex flex-col w-full">
            <small class="input__title">Сумма пополнения</small>
            <input-element
            Type="text"
            Label="Сумма пополнения"
            Placeholder="Сумма"
            Name="amount"
            :val="donate"
            @update:val="$event => (donate = $event)"
            class="!w-full"
            />
          </div>
        </div>
        <div class="payments-wrapper flex">
          <div class="flex flex-col gap-5 p-5 max-md:gap-10 max-md:p-0">
            <h3 class="font-black italic uppercase text-nowrap max-md:hidden">Внутренние платежные системы</h3>
            <div class="payments__buttons">
              <button class="buttons__item" v-for="payment in filterPayments(payments, false)" :name="payment.to" :key="payment">
                <img :src="payment.icon" alt="">
              </button>
            </div>
          </div>
          <div class="payments-divider opacity-20"></div>
          <div class="flex flex-col gap-5 p-5 max-md:gap-10 max-md:p-0">
            <h3 class="font-black italic uppercase text-nowrap max-md:text-wrap">Международные платежные системы</h3>
            <div class="payments__buttons">
              <button class="buttons__item" v-for="payment in filterPayments(payments, true)" :name="payment.to" :key="payment">
                <img :src="payment.icon" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </Teleport>
</template>

<script>
export default {

}
</script>

<style>

</style>
