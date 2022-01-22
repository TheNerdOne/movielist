<template>
  <div class="d-flex justify-content-between p-2 bg-light-e2 rounded">
    <div class="d-flex align-items-center">
      <div class="mr-3">Search by release date:</div>
      <DatePicker
        id="datePicker"
        v-model="inputVal"
        format="YYYY-MM-DD"
        display-format="YYYY/MM/DD"
        clearable
        locale="en"
        range
        auto-submit
        @change="change"
      ></DatePicker>
    </div>
    <div class="searchBtn text-white btn badge-pill px-4" @click="log">
      Search
    </div>
  </div>
</template>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";

export default {
  components: { DatePicker: VuePersianDatetimePicker },
  props: {},
  data(){
    return{
      inputVal:null
    }
  },
  methods: {
    log() {
      this.$emit("DateFilter", this.inputVal);
    },
    change() {
      this.$emit('change',this.inputVal)
    }
  },
};
</script>

<style scoped>
::v-deep .vpd-icon-btn {
  display: none;
}
::v-deep .vpd-input-group .vpd-clear-btn {
  right: 0;
  left: unset !important;
  line-height: 38px !important;
}
::v-deep .vpd-input-group input {
  border-right: 1px solid #dadada !important;
}
#datePicker {
  width: 250px ;
}
.bg-light-e2 {
  background-color: #e2e2e2;
}
.searchBtn {
  background-color: #549df2;
}
</style>
