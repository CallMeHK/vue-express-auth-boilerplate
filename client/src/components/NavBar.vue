<template>
    <nav class="light-blue accent-3">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/welcome">Welcome</router-link></li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
};
</script>
