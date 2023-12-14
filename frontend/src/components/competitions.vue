<script setup>
  import { ref } from 'vue';
  import router from '../router';

  // Deklarasi variabel data formulir
  const name = ref(null);
  const email = ref(null);
  const school = ref(null);
  const status = ref(null);
  const registrationDate = ref(null);

  // Deklarasi fungsi register
  const register = async (e) => {
    e.preventDefault();

    const req = await fetch("http://localhost:3000/admin/collections/competitions?limit=10/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name.value,
		email: email.value,
        school: school.value,
        status: status.value,
        registrationDate: registrationDate.value,
      })
    });

    const data = await req.json();
    console.log(data);

    if (req.ok) {
      router.push('/success');
    } else {
      registerError.value = true;
    }
  }
</script>

<template>
  <div>
    <h1>Formulir Pendaftaran Lomba</h1>
    <form @submit.prevent="register" class="space-y-4">
      <p v-if="registerError" class="text-red-500">Gagal mendaftar. Silakan coba lagi.</p>
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 text-white">Nama:</label>
        <input
          id="name"
          type="text"
          v-model="name"
          class="mt-1 p-2 w-full border rounded-md"
          placeholder="Nama"
          required
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 text-white">Email:</label>
        <input
          id="email"
          type="email"
          v-model="email"
          class="mt-1 p-2 w-full border rounded-md"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label for="school" class="block text-sm font-medium text-gray-700 text-white">Asal Sekolah:</label>
        <input
          id="school"
          type="text"
          v-model="school"
          class="mt-1 p-2 w-full border rounded-md"
          placeholder="Asal Sekolah"
          required
        />
      </div>
      <div>
        <label for="status" class="block text-sm font-medium text-gray-700 text-white">Status:</label>
        <input
          id="status"
          type="text"
          v-model="status"
          class="mt-1 p-2 w-full border rounded-md"
          placeholder="Status"
          required
        />
      </div>
      <div>
        <label for="registrationDate" class="block text-sm font-medium text-gray-700 text-white">Tanggal Pendaftaran:</label>
        <input
          id="registrationDate"
          type="date"
          v-model="registrationDate"
          class="mt-1 p-2 w-full border rounded-md"
          placeholder="Tanggal Pendaftaran"
          required
        />
      </div>
      <button type="submit" class="w-full bg-green-900 text-white p-2 rounded-md">Daftar</button>
    </form>
  </div>
</template>


