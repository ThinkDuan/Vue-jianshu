<template>
    <div>
        <prop-child :name="propChildName" :full-name="fullName"></prop-child>
    </div>
</template>
<script>
import PropChild from "./children/propChild";
export default {
  components: {
    PropChild
  },
  data() {
    return {
      propChildName: "李白",
      fullName: {
        firstName: "Tom",
        lastName: "Jerry"
      }
    };
  }
};
</script>

