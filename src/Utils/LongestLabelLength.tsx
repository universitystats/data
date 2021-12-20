export const longestLabelLength = (data: any[], field: string ): number => {
    return (data
        .map(c => c[field])
    .reduce((acc, cur) => (cur.length > acc ? cur.length : acc), 0))
}