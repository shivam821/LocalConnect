// Ensure Supabase library is loaded before this script
const SUPABASE_URL = 'https://achhhqlsyyjcarbjqwvn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaGhocWxzeXlqY2FyYmpxd3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzU1ODYsImV4cCI6MjA1ODExMTU4Nn0.rQ0GDZlSSDXoN5tKvq2W3gpxl9F-wjvRfEnvW_k5ryg';

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.querySelector('#search-input').addEventListener('input', filterList);

function filterList(){
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase(); // Use `value` here
    const listItems = document.querySelectorAll('.list-group-item'); // Use `.list-group-item` class
    
    listItems.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter)) {
            item.style.display = ""; // Show the item
        } else {
            item.style.display = "none"; // Hide the item
        }
    });
}

async function fetchServiceProviders() {
    try {
        const { data, error } = await supabase.from("service_providers").select("*");
        
        if (error) {
            throw error;
        }

        const serviceList = document.getElementById("service-list");
        serviceList.innerHTML = ""; // Clear existing content

        data.forEach(provider => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item", "p-3");

            listItem.innerHTML = `
                <h4>${provider.service_provider_name}</h4>
                <p><strong>Category:</strong> ${provider.category}</p>
                <p><strong>Phone:</strong> ${provider.phone}</p>
                <p><strong>Address:</strong> ${provider.address}</p>
            `;

            serviceList.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error fetching service providers:", error.message);
    }
}

// Fetch data when the page loads
fetchServiceProviders();