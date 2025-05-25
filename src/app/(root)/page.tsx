import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log("Session:", session);

  return (
    <main className="pt-20">
      <div>
        <h1 className="h1-bold">Hello</h1>
        <Button
          onClick={async () => {
            "use server";
            await signOut({ redirectTo: ROUTES.SIGN_IN });
          }}
        >
          Sign Out
        </Button>
      </div>
    </main>
  );
}
