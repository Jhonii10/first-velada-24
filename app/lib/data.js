import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPlaylist( query, currentPage,) {
    noStore()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const playlist = await sql`
      SELECT
        playlist.id,
        playlist.titulo,
        playlist.artista,
        playlist.genero
      FROM playlist
      WHERE playlist.titulo LIKE ${`%${query}%`}  -- Assuming you're filtering by title
      ORDER BY playlist.id DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return playlist.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}
