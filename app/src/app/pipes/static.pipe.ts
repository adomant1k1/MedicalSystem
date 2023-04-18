import { Pipe, PipeTransform} from "@angular/core";

import { Path } from "../utils";

@Pipe({
    pure: true,
    standalone: true,
    name: 'static'
})
export class StaticPipe implements PipeTransform {
    private readonly config = '/assets/';

    public transform(value: string): string {
        return Path.join(this.config, value);
    }
}