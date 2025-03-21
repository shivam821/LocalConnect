// Ensure Supabase library is loaded before this script
const SUPABASE_URL = 'https://achhhqlsyyjcarbjqwvn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaGhocWxzeXlqY2FyYmpxd3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzU1ODYsImV4cCI6MjA1ODExMTU4Nn0.rQ0GDZlSSDXoN5tKvq2W3gpxl9F-wjvRfEnvW_k5ryg';

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', async (event)=>{
    event.preventDefault();
    console.log(name1.value);
    console.log(email.value);
    console.log(message.value);

    const {data,error} = await supabase.from("contact_us").insert([{
        name : name1.value,
        email : email.value,
        message : message.value
    }]); 

    if (error) {
        window.alert('Error in submitting');
        name1.value = "";
        email.value = "";
        message.value = "";
    }
    else {
        window.alert('Sucessfully submitted');
        name1.value = "";
        email.value = "";
        message.value = "";
    }
});