'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addPlay(prevState, formData) {
    
        const title = formData.get('title');
        const artist = formData.get('artist');
        const gender = formData.get('gender');

        if (!title || !artist || !gender) {
            return {
              errors: ['Missing Fields. Failed to add music.'],
              message: 'Missing Fields. Failed to add music.',
            };
          }

        try {
            await sql`
            INSERT INTO playlist (titulo, artista, genero)
            VALUES (${title}, ${artist}, ${gender})
          `;
          } catch (error) {
            return {message:'Database Error: Failed to Create Invoice.'}
          }

          revalidatePath('/playlist');
          redirect('/playlist');
}


export async function deletePlay(id) {

    try {
      await sql`DELETE FROM playlist WHERE id = ${id}`;
        revalidatePath('/dashboard/invoices');
    ;
    } catch (error) {
      return {mesage:'Database Error: Failed to delete Invoice.'}
    }
    
    
  }