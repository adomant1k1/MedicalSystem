export type Replace<
    T,
    K extends keyof T,
    N extends Partial<Record<K, any>>
    > = Omit<T, K> & N;
