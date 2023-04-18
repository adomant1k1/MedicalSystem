import { isNil } from "./type-guards";

export abstract class Path {
    public static join(...args: (string | null | undefined)[]): string {
        return (
            args
                // eslint-disable-next-line unicorn/no-array-reduce
                .reduce<string>((acc, p, idx) => {
                    if (isNil(p)) {
                        return acc;
                    }

                    if (idx !== 0 && p.slice(0, 1) === '/') {
                        p = p.slice(1);
                    }

                    if (p.slice(-1) !== '/') {
                        p = p + '/';
                    }

                    return (acc += p);
                }, '')
                .slice(0, -1)
        );
    }
}