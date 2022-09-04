import { Get } from 'common/adapters/http';

export const searchPeople = (search: string) => Get('/people', { params: { search } });
