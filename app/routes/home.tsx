import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import StateHook from "~/components/hooks/StateHook";
import EffectHook from "~/components/hooks/EffectHook";
import ContextHookNav from "~/components/hooks/ContextHookNav";
import { AuthProvider } from "~/AuthContext";
import RefHook from "~/components/hooks/RefHook";
import MemoHook from "~/components/hooks/MemoHook";
import CallbackHook from "~/components/hooks/CallbackHook";
import Parent from "~/components/liftingStateUp/Parent";
import Portals from "~/components/Portals/Portals";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Welcome />
      <StateHook />
      <EffectHook />
      <AuthProvider>
        <ContextHookNav />
      </AuthProvider>
      <RefHook />
      <MemoHook />
      <CallbackHook />
      <Parent />
      <Portals />
    </>
  );
}
