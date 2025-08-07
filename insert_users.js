```javascript
     import { createClient } from '@supabase/supabase-js';

     const supabaseUrl = 'https://gyejjsyqnsthucjzpjax.supabase.co'; // Remplacez par votre URL
     const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5ZWpqc3lxbnN0aHVjanpwamF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNDc3MzcsImV4cCI6MjA2OTgyMzczN30.q9DxnAtFRgQS09w5zT54q0vDhXC1Xf3It5UAlDwf5QM'; // Remplacez par votre clé
     const supabase = createClient(supabaseUrl, supabaseKey);

     const users = [
       { email: 'jean.mbah@example.com', name: 'Jean Mbah', role: 'jobseeker', skills: ['Python', 'Django', 'JavaScript'], company: null, password: 'password123' },
       { email: 'marie.ekoto@example.com', name: 'Marie Ekoto', role: 'jobseeker', skills: ['Civil Engineering', 'AutoCAD'], company: null, password: 'password123' },
       { email: 'info@techcam.example.com', name: 'Samuel Eto', role: 'recruiter', skills: null, company: 'TechCam Solutions', password: 'password123' },
     ];

     async function insertUsers() {
       for (const user of users) {
         const { data, error } = await supabase.auth.signUp({
           email: user.email,
           password: user.password,
           options: { data: { name: user.name, role: user.role } },
         });
         if (error) console.error(`Erreur pour ${user.email}:`, error.message);
         else {
           const { error: insertError } = await supabase.from('users').insert({
             id: data.user.id,
             email: user.email,
             name: user.name,
             role: user.role,
             skills: user.skills,
             company: user.company,
           });
           if (insertError) console.error(`Insertion échouée pour ${user.email}:`, insertError.message);
           else console.log(`Utilisateur ${user.email} inséré`);
         }
       }
     }

     insertUsers();
     ```