import Diagram from "../Diagram/Diagram";

const CostsDiagram = (props) => {

    const diagramDataSets = [
        {label: 'Jan', value: 0, id: Math.random().toString()},
        {label: 'Feb', value: 0, id: Math.random().toString()},
        {label: 'Mar', value: 0, id: Math.random().toString()},
        {label: 'Apr', value: 0, id: Math.random().toString()},
        {label: 'May', value: 0, id: Math.random().toString()},
        {label: 'Jun', value: 0, id: Math.random().toString()},
        {label: 'Jul', value: 0, id: Math.random().toString()},
        {label: 'Aug', value: 0, id: Math.random().toString()},
        {label: 'Sep', value: 0, id: Math.random().toString()},
        {label: 'Oct', value: 0, id: Math.random().toString()},
        {label: 'Nov', value: 0, id: Math.random().toString()},
        {label: 'Dec', value: 0, id: Math.random().toString()},
    ];

    for (const cost of props.costs) {
    const costMonth = cost.date.getMonth();
    diagramDataSets[costMonth].value += cost.amount;
    }
    return <Diagram dataSets={diagramDataSets}/>
}

export default CostsDiagram;