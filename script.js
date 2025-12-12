// Minimal JS: year, simple fetch for live stats (optional), and small UI niceties.


document.getElementById('year').textContent = new Date().getFullYear();


// Optional: Fetch and display live stats in the console (you can adapt to show on the page)
async function fetchStats(){
try{
// Replace with your API endpoint if you have one
const res = await fetch('/api/stats.json');
if(!res.ok) return;
const data = await res.json();
console.log('Live stats:', data);
// Example: show stats in title
if(data.servers && data.users){
document.title = `Counting Bot — ${data.servers} servers • ${data.users} users`;
}
}catch(e){
// ignore network errors
}
}


// Try fetching every 30s (non-blocking)
setInterval(fetchStats, 30000);
fetchStats();
