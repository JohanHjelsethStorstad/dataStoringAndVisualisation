//This function simulates a sensor for the purpose of demonstration.
//three data atributes live in the HEAP and can be accessed by returned getter.
//think of it as a singleton
const sensor = (interval) => {
    const data = {}
    const periodSin = 100000 //in ms
    const periodCos = 100000 
    const getData = () => {
        return {...data}
    }
    let dataStream = null
    const startStream = () => {
        if (dataStream) return;
        dataStream = setInterval(() => {
            data = {
                time: (data.time || 0) + interval,
                noice: Math.sin((2*Math.PI/periodSin)*data.time),
                pollution: Math.cos((2*Math.PI/periodCos)*data.time)
            }
        }, interval)
    }
    const endStream = () => {
        clearInterval(dataStream)
        dataStream = null
        data = {}
    }
    const isOn = () => !(dataStream == null)
    
    return [getData, startStream, endStream, isOn]
}

export default sensor;