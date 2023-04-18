import { Pipe, PipeTransform } from "@angular/core";

import { isNil, UserProfileType } from "../utils";

@Pipe({
    name: 'username',
    standalone: true,
    pure: true
})
export class UsernamePipe implements PipeTransform {
    public transform(
        profile: UserProfileType | null | any,
        format: 'short' | 'full' = 'short'
    ): string | undefined {
        if (isNil(profile)) {
            return undefined;
        }

        let username = '';

        if (format === 'short') {
            username += profile.lastname ?? '';
            username += profile.firstname ? ` ${profile.firstname.slice(0, 1)}.` : '';
            username += profile.middlename
                ? ` ${profile.middlename.slice(0, 1)}.`
                : '';
        }

        if (format === 'full') {
            username += profile.lastname ?? '';
            username += profile.firstname ? ' ' + profile.firstname : '';
            username += profile.middlename ? ' ' + profile.middlename : '';
        }

        return username;
    }
}
