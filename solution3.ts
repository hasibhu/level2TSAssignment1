


const concatenateArrays<T>  =  (...arrays: T[][]) : T[] => {

    const result: T[] = [];

    for (const arr of arrays ) {
        result.push(...arr);
    }

    return result

}