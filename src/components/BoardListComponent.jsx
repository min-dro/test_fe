import { useState, useEffect } from "react";

import BoardItemComponent from "./BoardItemComponent";

import { selectBoardListApi } from "../api/boardApi";
import { useNavigate } from "react-router-dom";

function BoardListComponent() {

    const [boardList, setBoardList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        // 게시글 목록 조회 API 호출
        const selectBoardList = async () => {

            try {
                
                const response = await selectBoardListApi();

                const items = response.data;

                const trArr = items.map((item, index) => {

                    return (
                    
                        <BoardItemComponent key={ index } item={ item } />
                    );
                })

                setBoardList(trArr);

            } catch (error) {

                console.error("게시글 목록 조회용 ajax 통신 실패!!", error);
            }
        };

        selectBoardList();

    }, []);

    return (
        <div style={{ width: "80%", margin: "0 auto" }}>

            <div align="right">
                <button className="btn btn-outline-secondary btn-sm"
                        onClick={ () => { navigate("/enrollForm"); } }>
                    글작성
                </button>
            </div>

            <br />

            <table align="center" className="list-area table table-hover" style={{width: "80%"}}>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    { boardList }                
                </tbody>
            </table>
        </div>
    )
}

export default BoardListComponent;