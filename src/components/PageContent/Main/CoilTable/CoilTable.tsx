import Table from "../../../UIComponents/TableWindow";
import Header from "./Header";
import Row from "./Row/Row";

const CoilTable = () => {
    return (
        <Table HeaderRender={Header} RowRender={Row}/>
    )
}

export default CoilTable