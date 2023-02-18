const convertWeight = (weight, type) => {
    if (type === 'kg') {
        let kg = weight / 2.2046;
        return kg.toFixed(2) + ' kg'
    }
    if (type === 'lbs') {
        let lb = weight * 2.2046
        return lb.toFixed(2) + ' lbs'
    }
}

export { convertWeight };