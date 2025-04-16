// Ensure Supabase library is loaded before this script
const SUPABASE_URL = 'https://achhhqlsyyjcarbjqwvn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaGhocWxzeXlqY2FyYmpxd3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzU1ODYsImV4cCI6MjA1ODExMTU4Nn0.rQ0GDZlSSDXoN5tKvq2W3gpxl9F-wjvRfEnvW_k5ryg';

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function insertData() {
    const formData = JSON.parse(localStorage.getItem('pendingFormData'));

    if (!formData) {
        console.log('No data found');
        return;
    }

    const { data, error } = await supabase.from('service_providers').insert([formData]);

    if (error) {
        console.error('Error inserting:', error.message);
    } else {
        console.log('Inserted:', data);
        localStorage.removeItem('pendingFormData');
    }
}

insertData();