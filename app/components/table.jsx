

import { fetchFilteredPlaylist } from '@/app/lib/data';
import { TrashIcon } from '@heroicons/react/24/solid';

export default async function PlaylistTable({ query, currentPage,}){

  const playlists = await fetchFilteredPlaylist(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg  md:bg-gray-50 bg-black  p-2 md:pt-0">
          <div className="md:hidden">
            {playlists?.map((play) => (
              <div
                key={play.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center text-black">
                      <p>{play.titulo}</p>
                    </div>
                    <p className="text-sm text-gray-500">{play.artista}</p>
                  </div>
                  <div className='text-black'>
                    {play.genero}
                  </div>
                 
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                 
                  <div className="flex justify-end gap-2 text-black">
                    {play.id}
                  </div>
                  <div className="flex justify-end gap-2 text-black">
                  <button className="rounded-md border p-2 hover:bg-gray-100" >
                    <span className="sr-only">Delete</span>
                    <TrashIcon className="w-5" color='red' />
                </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Artista
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Genero
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {playlists?.map((play) => (
                <tr
                  key={play.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                 <td className="whitespace-nowrap px-3 py-3">
                    {play.id}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{play.titulo}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {play.artista}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {play.genero}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <div className="flex justify-end gap-2 text-black">
                  <button className="rounded-md border p-2 hover:bg-gray-100" >
                    <span className="sr-only">Delete</span>
                    <TrashIcon className="w-5 " color='red' />
                </button>
                  </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}