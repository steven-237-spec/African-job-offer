import { supabase } from './supabase.js';

   async function loadJobs() {
     const jobList = document.getElementById('job-list');
     if (!jobList) return;
     jobList.innerHTML = '';
     try {
       const { data: jobs, error } = await supabase.from('jobs').select('*, users(name, company)');
       if (error) throw error;
       jobs.forEach(job => {
         const jobCard = document.createElement('div');
         jobCard.className = 'bg-white p-6 rounded-lg shadow-md';
         jobCard.innerHTML = `
           <h3 class="text-xl font-semibold">${job.title}</h3>
           <p class="text-gray-600">${job.users.company} - ${job.location}</p>
           <p class="text-gray-600 mt-2">${job.description}</p>
           <button onclick="applyJob('${job.id}')" class="btn-primary text-white py-2 px-4 rounded mt-4">Apply Now</button>
         `;
         jobList.appendChild(jobCard);
       });
     } catch (error) {
       console.error('Error loading jobs:', error);
     }
   }

   async function applyJob(jobId) {
     try {
       const { data: { user } } = await supabase.auth.getUser();
       const { error } = await supabase.from('applications').insert({ job_id: jobId, user_id: user.id });
       if (error) throw error;
       alert('Application submitted!');
     } catch (error) {
       alert('Application failed: ' + error.message);
     }
   }

   async function handlePostJob() {
     const title = document.getElementById('title').value;
     const category = document.getElementById('category').value;
     const description = document.getElementById('description').value;
     const location = document.getElementById('location').value;
     const company = document.getElementById('company').value;
     if (!title || !description || !location || !company) {
       alert('Please fill in all required fields');
       return;
     }
     try {
       const { data: { user } } = await supabase.auth.getUser();
       const { error } = await supabase
         .from('jobs')
         .insert({ title, category, description, location, company, posted_by: user.id });
       if (error) throw error;
       alert('Job posted successfully');
       window.location.href = 'dashboard.html';
     } catch (error) {
       alert('Job posting failed: ' + error.message);
     }
   }

   document.addEventListener('DOMContentLoaded', () => {
     loadJobs();
     const search = document.getElementById('search');
     const filter = document.getElementById('filter');
     if (search) search.addEventListener('input', loadJobs); // Add search logic later
     if (filter) filter.addEventListener('change', loadJobs); // Add filter logic later
   });