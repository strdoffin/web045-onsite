// src/app/sign-up/[[...sign-up]]/page.jsx
import { SignUp, useSignUp } from "@clerk/nextjs";
import { useEffect } from "react";
import { supabase } from "../../../lib/supabase"; // เชื่อมต่อกับ Supabase

export default function Page() {
  const { user, isLoaded, signUp } = useSignUp(); // ดึง user จาก Clerk

  // เมื่อการสมัครสมาชิกสำเร็จ
  useEffect(() => {
    if (user && isLoaded) {
      const { id: user_id, email } = user;

      // บันทึกข้อมูลลงใน Supabase
      const saveUserToSupabase = async () => {
        try {
          const { data, error } = await supabase
            .from("users")  // ตาราง users ที่บันทึกข้อมูลผู้ใช้
            .upsert([
              {
                user_id: user_id,  // UUID ของผู้ใช้จาก Clerk
                email: email,       // email จาก Clerk
              },
            ]);

          if (error) {
            console.error("Error saving user to Supabase:", error.message);
          } else {
            console.log("User saved to Supabase successfully:", data);
          }
        } catch (err) {
          console.error("Error during Supabase operation:", err.message);
        }
      };

      saveUserToSupabase();
    }
  }, [user, isLoaded]); // เมื่อ user หรือ isLoaded เปลี่ยนแปลงให้ทำงาน

  return (
    <div className="flex justify-center p-5">
      <SignUp />
    </div>
  );
}
