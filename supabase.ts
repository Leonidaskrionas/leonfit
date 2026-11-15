
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';
import 'expo-sqlite/localStorage/install';

const supabaseUrl = 'https://klsgtcjpmzraeothmkaj.supabase.co';
const supabaseKey = 'sb_publishable_tPAowtgwUG9YJajIlnnaZw_msFnqgdQ';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      storage: Platform.OS === 'web'
        ? undefined
        : globalThis.localStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
