import { useUser } from '@clerk/nextjs';
import { supabase } from '../lib/supabaseClient';

export default function SomePage() {
  const { user, isLoaded } = useUser();

  if (isLoaded && user) {
    const checkAndSaveUser = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_user_id', user.id)
        .single();

      if (!data && !error) {
        await supabase.from('users').insert([
          {
            clerk_user_id: user.id,
            email: user.emailAddress,
            first_name: user.firstName,
            last_name: user.lastName,
          },
        ]);
      }
    };

    checkAndSaveUser();
  }

  return (
    <div>
      {/* แสดงเนื้อหาผู้ใช้ */}
      <h1>Welcome, {user?.firstName}</h1>
    </div>
  );
}
