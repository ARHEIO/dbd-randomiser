import axios from 'axios';
import { GeneratedKiller, GeneratedSurvivor } from './models';
import config from '../../config';

export const generateKiller = (): Promise<{data: GeneratedKiller}> => axios.get(`${config.endpoints.randomiserApi}/loadout?q=killer`);

export const generateSurvivor = (): Promise<{data: GeneratedSurvivor}> => axios.get(`${config.endpoints.randomiserApi}/loadout?q=survivor`);
