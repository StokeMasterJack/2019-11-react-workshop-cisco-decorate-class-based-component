import {DependencyList, useEffect} from 'react';

export type Op<T> = () => Promise<T>;
export type OnSuccess<T> = (date: T) => void;

export function useAsync<T>({op, onSuccess, deps}: { op: Op<T>, onSuccess: OnSuccess<T>, deps?: DependencyList }) {

    useEffect(() => {
        const doOp = async () => {
            const data: T = await op();
            onSuccess(data);
        };
        doOp();

        //eslint-disable-next-line
    }, deps);
}

