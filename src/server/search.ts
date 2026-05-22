import { createServerFn } from "@tanstack/react-start";

export const searchAnime = createServerFn()
  .inputValidator((search: string) => search)
  .handler(async({data}) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${data}`);
    const dataFromApi = await res.json();
    return dataFromApi;
  });

export const searchAnimeById = createServerFn()
  .inputValidator((animeId: string) => animeId)
  .handler(async({data}) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${data}`);
    const dataFromApi = await res.json();
    return dataFromApi;
  })