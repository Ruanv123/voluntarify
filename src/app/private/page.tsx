import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

const SecurityPage = async () => {
  const session = await getServerSession();
  return (
    <div className="mx-auto mt-3 max-w-screen-xl">
      <h1>Security Page</h1>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      {/* @ts-ignore */}
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default SecurityPage;
