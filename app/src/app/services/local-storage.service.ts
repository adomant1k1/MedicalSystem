import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    private prefix = 'medIS';

    constructor() {}

    private getKeyName(name: string): string {
        return name ? this.prefix + name : '';
    }

    public setPrefixName(name: string): void {
        this.prefix = name;
    }

    public setItem(key: string, value: string): void {
        localStorage.setItem(this.getKeyName(key), value);
    }

    public getItem(key: string): string {
        return localStorage.getItem(this.getKeyName(key)) ?? '';
    }

    public isExistKey(key: string): boolean {
        return !!localStorage.getItem(this.getKeyName(key));
    }

    public removeItem(key: string): void {
        localStorage.removeItem(this.getKeyName(key));
    }

    public clear(): void {
        localStorage.clear();
    }
}