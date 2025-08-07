import { supabase } from './supabase.js';

   document.addEventListener('DOMContentLoaded', async () => {
     console.log('African Job Offer loaded');
     const dashboardContent = document.getElementById('dashboard-content');
     const postJobBtn = document.getElementById('post-job-btn');
     if (dashboardContent) {
       try {
         const { data: { user } } = await supabase.auth.getUser();
         const { data: userData } = await supabase.from('users').select('name, role').eq('id', user.id).single();
         document.getElementById('welcome-message').textContent = `Welcome back, ${userData.name}!`;
         if (userData.role === 'recruiter') {
           postJobBtn.classList.remove('hidden');
           const { data: jobs } = await supabase.from('jobs').select('*').eq('posted_by', user.id);
           const userJobs = document.getElementById('user-jobs');
           jobs.forEach(job => {
             const jobCard = document.createElement('div');
             jobCard.className = 'bg-white p-6 rounded-lg shadow-md';
             jobCard.innerHTML = `<h3 class="text-xl font-semibold">${job.title}</h3><p>${job.location}</p>`;
             userJobs.appendChild(jobCard);
           });
         } else {
           const { data: applications } = await supabase.from('applications').select('jobs(title, location)').eq('user_id', user.id);
           const userJobs = document.getElementById('user-jobs');
           applications.forEach(app => {
             const jobCard = document.createElement('div');
             jobCard.className = 'bg-white p-6 rounded-lg shadow-md';
             jobCard.innerHTML = `<h3 class="text-xl font-semibold">${app.jobs.title}</h3><p>${app.jobs.location}</p>`;
             userJobs.appendChild(jobCard);
           });
         }
       } catch (error) {
         console.error('Error loading dashboard:', error);
       }
     }
   });