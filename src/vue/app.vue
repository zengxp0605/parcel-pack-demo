
<template>
    <div id="vue">
        <h1> Hello 33, {{ framework }}!!!</h1>
    </div>
</template>

<script>
export default {
  data() {
    console.log("store2222---: ", this.$store);
    return { framework: "Vue" };
  }
};
</script>

<style lang="scss" scope>
#vue {
  h1 {
    color: #05ede1;
  }
}
</style>


