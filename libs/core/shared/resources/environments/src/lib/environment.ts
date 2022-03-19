import { InjectionToken } from "@angular/core";

export const environment = {
    baseURL: 'https://api.github.com',
};

export interface AppConfig {
    baseURL: string;
}

export const APP_CONFIG_URL = new InjectionToken<AppConfig>('multitab.config');
