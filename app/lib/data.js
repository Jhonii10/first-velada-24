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
      WHERE LOWER(playlist.titulo) LIKE LOWER(${'%' + query + '%'}) 
      ORDER BY playlist.id DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return playlist.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch playlist.');
  }
}


export async function fetchInvoicesPages(query) {
    noStore()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM playlist
    WHERE
      playlist.titulo ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of playlist.');
  }
}
