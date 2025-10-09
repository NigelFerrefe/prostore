'use server';

import { cookies } from 'next/headers';
import { randomUUID } from 'crypto';

export async function ensureCartSession() {
  const cookieStore = await cookies();
  let sessionCartId = cookieStore.get('sessionCartId')?.value;

  if (!sessionCartId) {
    sessionCartId = randomUUID();
    cookieStore.set('sessionCartId', sessionCartId);
  }

  return sessionCartId;
}
