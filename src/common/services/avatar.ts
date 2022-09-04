const host = 'https://starwars-visualguide.com/assets/img/characters';

export const getAvatarUrlFromId = (id: number) => `${host}/${id}.jpg`;
