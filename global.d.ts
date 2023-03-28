declare interface datajson {
    groups: {
        title: string
        content: string[]
    }[]
}

export type getGroupList = () => Promise<datajson>
