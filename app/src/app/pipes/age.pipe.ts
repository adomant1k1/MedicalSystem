import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    pure: true,
    standalone: true,
    name: 'age'
})
export class AgePipe implements PipeTransform {
    public transform(value: string): number {
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }
}