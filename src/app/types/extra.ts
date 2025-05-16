import { Axios } from 'axios';
import * as API from '@/app/providers/stores/config/config.ts';

export type TypeExtra = {
   client: Axios;
   API: typeof API;
};
