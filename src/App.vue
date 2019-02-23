<template>
  <div>
    <h1 id="hello">Hello, world!</h1>
    <img src="@/assets/box.png">
    <div id="box"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
$cc: blue;
#hello {
  color: $cc;
}

#box {
  width: 50px;
  height: 50px;
  background: $cc;
  border-radius: 5px;
  animation: fadeIn .5s linear;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
