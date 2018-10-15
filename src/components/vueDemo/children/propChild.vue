<template>
    <div>
        <h3>{{name}}</h3>
        <h4>{{fullName.firstName}}</h4>
    </div>
</template>
<script>
export default {
  name: "PropChild",
  data() {
    return {
    };
  },
  props: {
    name: {
      type: String,
      default: "Hello World!"
    },
    fullName: {
      validator: function(value){
         return value.firstName + value.lastName;
      },
    },
  },
  methods: {
  }
};
</script>

