
<template>
    <div id="vue">
        <h1> Hello 22, {{ framework }}!!!</h1>
    </div>
</template>

<script>
export default {
  data() {
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


