import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createMark = async (mark) => {
    const {data} = await $authHost.post('api/mark', mark)
    return data
}

export const fetchMarks = async () => {
    const {data} = await $host.get('api/mark')
    return data
}

export const createAuto = async (auto) => {
    const {data} = await $authHost.post('api/auto', auto)
    return data
}

export const fetchAutos = async (typeId, markId, page, limit= 5) => {
    const {data} = await $host.get('api/auto', {params: {
        typeId, markId, page, limit
    }})
    return data
}

export const fetchOneAuto = async (id) => {
    const {data} = await $host.get('api/auto/' + id)
    return data
}