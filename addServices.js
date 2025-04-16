// // Ensure Supabase library is loaded before this script
// const SUPABASE_URL = 'https://achhhqlsyyjcarbjqwvn.supabase.co';
// const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaGhocWxzeXlqY2FyYmpxd3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzU1ODYsImV4cCI6MjA1ODExMTU4Nn0.rQ0GDZlSSDXoN5tKvq2W3gpxl9F-wjvRfEnvW_k5ryg';

// // Initialize Supabase
// const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// provider_name = document.getElementById('provider-name');
// provider_email = document.getElementById('email');
// provider_phone = document.getElementById('phone');
// provider_category = document.getElementById('category');
// provider_city = document.getElementById('city');
// provider_state = document.getElementById('state');
// provider_fulladdress = document.getElementById('address');
// provider_description = document.getElementById('description');
// provider_website = document.getElementById('website');
// submit_button = document.getElementById('submitButton');

// submit_button.addEventListener('click',async (event) =>{
//     event.preventDefault();
//     const {data,error} = await supabase.from('service_providers').insert([
//         {
//             service_provider_name:provider_name.value,
//             email : provider_email.value,
//             phone : provider_phone.value,
//             category : provider_category.value,
//             city : provider_city.value,
//             state : provider_state.value,
//             address : provider_fulladdress.value,
//             address : provider_fulladdress.value,
//             website : provider_website.value,
//         }
//     ]);
//     if (error) {
//         window.alert('Error while submitting.');
//         provider_name.value = "";
//         provider_email.value = "";
//         provider_phone.value = "";
//         provider_category.value = "";
//         provider_city.value = "";
//         provider_state.value = "";
//         provider_fulladdress.value = "";
//         provider_website.value = "";
//     }
//     else {
//         window.alert('Sucessfull submitted.');
//         provider_name.value = "";
//         provider_email.value = "";
//         provider_phone.value = "";
//         provider_category.value = "";
//         provider_city.value = "";
//         provider_state.value = "";
//         provider_fulladdress.value = "";
//         provider_website.value = "";
//     }
// });















// Ensure Supabase library is loaded before this script
const SUPABASE_URL = 'https://achhhqlsyyjcarbjqwvn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaGhocWxzeXlqY2FyYmpxd3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzU1ODYsImV4cCI6MjA1ODExMTU4Nn0.rQ0GDZlSSDXoN5tKvq2W3gpxl9F-wjvRfEnvW_k5ryg';

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const provider_name = document.getElementById('provider-name');
const provider_email = document.getElementById('email');
const provider_phone = document.getElementById('phone');
const provider_category = document.getElementById('category');
const provider_city = document.getElementById('city');
const provider_state = document.getElementById('state');
const provider_fulladdress = document.getElementById('address');
const provider_description = document.getElementById('description');
const provider_website = document.getElementById('website');
const submit_button = document.getElementById('submitButton');

submit_button.addEventListener('click', async (event) => {
    event.preventDefault();

    // Save form data in localStorage
    const formData = {
        service_provider_name: provider_name.value,
        email: provider_email.value,
        phone: provider_phone.value,
        category: provider_category.value,
        city: provider_city.value,
        state: provider_state.value,
        address: provider_fulladdress.value,
        description: provider_description.value,
        website: provider_website.value
    };

    localStorage.setItem('pendingFormData', JSON.stringify(formData));

    // Redirect to Razorpay payment page
    window.location.href = 'https://rzp.io/rzp/ANrbnCA';
});
