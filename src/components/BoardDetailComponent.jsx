import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { selectBoardApi, deleteBoardApi } from "../api/boardApi";

function BoardDetailComponent() {

    const boardNo = useParams().boardNo;

    let navigate = useNavigate();

    const [board, setBoard] = useState({
                                boardNo: "",
                                boardTitle: "",
                                boardContent: "",
                                createDate: ""
                            });

    useEffect(() => {

        const selectBoard = async () => {
            
            try {

                const response = await selectBoardApi(boardNo);

                if(response.data != "") {
                    // > 조회된 내용이 있다면
                    setBoard(response.data);
                } else {
                    // > 조회된 내용이 없다면
                    alert("이미 삭제되거나 없는 게시글입니다.");
                }
                
            } catch(error) {

                console.log("일반게시글 상세조회용 ajax 통신 실패!"  + error);
            }

        };

        selectBoard();

    }, []);

    const deleteBoard = async () => {

        try {

            const response = await deleteBoardApi(boardNo);

            if(response.data == "success") {

                alert("게시글 삭제에 성공했습니다.");

                navigate("/");
            
            } else {

                alert("게시글 삭제에 실패했습니다.");
            }

        } catch(error) {

            console.log("게시글 삭제용 ajax 통신 실패" + error);
        }

    }

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th width="130">제목</th>
                        <td colSpan="3">
                            { board.boardTitle }
                        </td>
                    </tr>
                    <tr>
                        <th width="130">작성일</th>
                        <td>{ board.createDate.substring(0, 10) }</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan="3">
                            <p style={ {height : "200px"} }>
                                { board.boardContent }
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <br /><br />

            <div align="center">
                <button className="btn btn-outline-secondary btn-sm"
                        onClick={ () => { navigate("/") }}>
                    목록으로
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-outline-danger btn-sm"
                        onClick={ deleteBoard }>
                    삭제하기
                </button>
            </div>

        </div>
    );

}

export default BoardDetailComponent;