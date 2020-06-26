import axios from 'axios';
import config from '../../config';
import {
  Killer, Survivor, Item, Perk,
} from './models';

export const getKiller = (id: number): Promise<{data: Killer}> => axios
  .get(`${config.endpoints.randomiserApi}/killer/${id}`);
export const getKillerWithAddons = (id: number): Promise<{data: Killer}> => axios
  .get(`${config.endpoints.randomiserApi}/killer/${id}/?expands=upgradables`);
export const getKillers = (): Promise<{data: Killer[]}> => axios
  .get(`${config.endpoints.randomiserApi}/killer`);

export const getSurvivor = (id: number): Promise<{data: Survivor}> => axios
  .get(`${config.endpoints.randomiserApi}/survivor/${id}`);
export const getSurvivors = (): Promise<{data: Survivor[]}> => axios
  .get(`${config.endpoints.randomiserApi}/survivor`);

export const getItem = (id: number): Promise<{data: Item}> => axios
  .get(`${config.endpoints.randomiserApi}/survivor/${id}`);
export const getItemWithAddons = (id: number): Promise<{data: Item}> => axios
  .get(`${config.endpoints.randomiserApi}/survivor/${id}?expands=upgradables`);
export const getItems = (): Promise<{data: Item[]}> => axios
  .get(`${config.endpoints.randomiserApi}/survivor`);

export const getSurvivorPerk = (id: number): Promise<{data: Perk[]}> => axios
  .get(`${config.endpoints.randomiserApi}/perk/survivor/${id}`);
export const getSurvivorPerks = (): Promise<{data: Perk}> => axios
  .get(`${config.endpoints.randomiserApi}/perk/survivor`);

export const getKillerPerk = (id: number): Promise<{data: Perk}> => axios
  .get(`${config.endpoints.randomiserApi}/perk/killer/${id}`);
export const getKillerPerks = (): Promise<{data: Perk[]}> => axios
  .get(`${config.endpoints.randomiserApi}/perk/killer`);
