import { useNavigate } from "react-router-dom";

function BoardItemComponent(props) {

    let navigate = useNavigate();

    const item = props.item;

    return (
        <tr onClick={ () => { navigate(`/${ item.boardNo }`); } }>
            <td>{ item.boardNo }</td>
            <td>{ item.boardTitle }</td>
            <td>{ item.count }</td>
            <td>{ item.createDate.substring(0, 10) }</td>
        </tr>
    );

}

export default BoardItemComponent;