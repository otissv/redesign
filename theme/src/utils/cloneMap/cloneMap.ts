type CloneMap = <K, V>(map: Map<K, V>) => Map<K, V>
export const cloneMap: CloneMap = map => new Map(map)
