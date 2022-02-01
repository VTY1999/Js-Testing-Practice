const capitalizeString = (string) => {
    if(typeof string !== 'string') {
        throw new Error('this should be a string')
    }else {
        return string[0].toUpperCase() + string.slice(1)
    }
    
}

module.exports = capitalizeString