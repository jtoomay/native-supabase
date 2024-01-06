import React, { useEffect, useState } from "react"
import supabase from "../lib/supabase"
import { Session } from "@supabase/supabase-js"
import { create } from "zustand"
import { useRouter } from "expo-router"

// typedef
interface UseSessionStore {
  session: Session | null
  setSession: (session: Session | null) => void
}

// This is like the createContext for zustand
const useSessionStore = create<UseSessionStore>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}))

export function useSupabaseAuth() {
  const { setSession } = useSessionStore()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
}

export default useSessionStore
