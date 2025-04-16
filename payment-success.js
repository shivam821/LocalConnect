// Ensure Supabase library is loaded before this script
const SUPABASE_URL = 'https://achhhqlsyyjcarbjqwvn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaGhocWxzeXlqY2FyYmpxd3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzU1ODYsImV4cCI6MjA1ODExMTU4Nn0.rQ0GDZlSSDXoN5tKvq2W3gpxl9F-wjvRfEnvW_k5ryg';

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.addEventListener('DOMContentLoaded', async () => {
    const formDataRaw = localStorage.getItem('pendingServiceForm');
    if (!formDataRaw) {
        alert('No service form found to submit.');
        return;
    }

    const formData = JSON.parse(formDataRaw);

    // Insert into Supabase
    const { data, error } = await supabase
        .from('service_providers')
        .insert([formData]);

    if (error) {
        console.error('Error inserting data:', error);
        alert('There was an error submitting your service. Please try again.');
    } else {
        alert('Service listed successfully!');
        localStorage.removeItem('pendingServiceForm');
    }
});