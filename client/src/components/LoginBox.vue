<template>
    <div class="row row-scoped">
    <div class="col s12 m10">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Login</span>
          <p>Please enter your login credentials.</p>
        </div>
        <div class="row">
        <div class="input-field col s6">
          <input id="email" type="text" class="validate">
          <label class="active" for="email">Email</label>
        </div>
        <div class="input-field col s6">
          <input id="password" type="password" class="validate">
          <label class="active" for="password">Last Name</label>
        </div>
      </div>
        <div class="card-action">
          <a class="waves-effect waves-light btn">Submit</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginBox',
};
</script>
<style scoped>
.row-scoped {
  justify-content: center;
  display: flex;
  margin: 40px auto;
}
</style>
