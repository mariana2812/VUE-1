export interface iPokemon {
    id: number
    name: string
    height: number
    weight: number
    sprites: {
        front_default: string | null
    }
    types: {
        type: { name: string }
    }[]
    stats: {
        base_stat: number
        stat: { name: string }
    }[]
}

export interface iListaPokemons {
    results: { name: string, url: string }[]
    next: string | null
}
