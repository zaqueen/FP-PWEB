<template>
  <div class="hero min-h-screen" style="background-image: url(https://img.freepik.com/free-photo/chat-message-yellow-speech-bubble-icon-notification-button-talk-dialog-symbol-conversation-button-icon-symbol-background-3d-illustration_56104-2068.jpg?w=826&t=st=1701980747~exp=1701981347~hmac=4dd88ee3a251f21baca814df7d39fb2deeebc9e55eb08a233a4c84fe58c69fe7); background-size: cover;">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content" style="padding-top: 40vh;"> 
      <div class="max-w-md ml-12"> 
        <h1 class="mb-7 text-7xl font-bold text-white">Welcome to Our Website</h1>
        <router-link to="/Competitions" class="btn bg-green-900 text-white px-4 py-2 rounded-full">Daftar Euy</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>
