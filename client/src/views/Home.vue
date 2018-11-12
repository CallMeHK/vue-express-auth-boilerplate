<template>
  <div class="home">
    <div class="container">
      <LoginBox></LoginBox>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginBox from '@/components/LoginBox.vue';

export default {
  name: 'home',
  components: {
    LoginBox: LoginBox,
  },
};
</script>
