import { supabase } from './supabase.js';

   function toggleRoleFields() {
     const role = document.getElementById('role').value;
     document.getElementById('jobseeker-fields').classList.toggle('hidden', role !== 'jobseeker');
     document.getElementById('recruiter-fields').classList.toggle('hidden', role !== 'recruiter');
   }

   async function handleLogin() {
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     const role = document.getElementById('role').value;
     if (!email || !password) {
       alert('Please fill in all fields');
       return;
     }
     try {
       const { data, error } = await supabase.auth.signInWithPassword({ email, password });
       if (error) throw error;
       const { data: userData, error: userError } = await supabase
         .from('users')
         .select('role')
         .eq('id', data.user.id)
         .single();
       if (userError || userData.role !== role) throw new Error('Invalid role');
       localStorage.setItem('user', JSON.stringify(data.user));
       window.location.href = 'dashboard.html';
     } catch (error) {
       alert('Login failed: ' + error.message);
     }
   }

   async function handleRegister() {
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     const role = document.getElementById('role').value;
     const skills = role === 'jobseeker' ? document.getElementById('skills').value.split(',') : [];
     const company = role === 'recruiter' ? document.getElementById('company').value : '';
     if (!name || !email || !password || (role === 'jobseeker' && !skills.length) || (role === 'recruiter' && !company)) {
       alert('Please fill in all required fields');
       return;
     }
     try {
       const { data, error } = await supabase.auth.signUp({ email, password });
       if (error) throw error;
       await supabase.from('users').insert({ id: data.user.id, email, name, role, skills, company });
       localStorage.setItem('user', JSON.stringify(data.user));
       window.location.href = 'dashboard.html';
     } catch (error) {
       alert('Registration failed: ' + error.message);
     }
   }

   async function handleUpdateProfile() {
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const skills = document.getElementById('skills')?.value.split(',') || [];
     const company = document.getElementById('company')?.value || '';
     if (!name || !email) {
       alert('Please fill in all required fields');
       return;
     }
     try {
       const { data: { user } } = await supabase.auth.getUser();
       const { error } = await supabase
         .from('users')
         .update({ name, email, skills, company })
         .eq('id', user.id);
       if (error) throw error;
       alert('Profile updated successfully');
     } catch (error) {
       alert('Update failed: ' + error.message);
     }
   }