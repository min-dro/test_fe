import { useState } from "react";

import { insertBoardApi } from "../api/boardApi";
import { useNavigate } from "react-router-dom";

function BoardEnrollFormComponent() {

    let navigate = useNavigate();

    const [board, setBoard] = useState({boardTitle : "",
                                        boardContent : ""
                                        });
                                        
    const handleChange = e => {

        const newBoard = {...board};

        newBoard[e.target.name] = e.target.value;

        setBoard(newBoard);
    }    

    const insertBoard = async e => {

        e.preventDefault();

        try {

            const response = await insertBoardApi(board);

            if(response.data == "success") {

                alert("게시글 작성에 성공했습니다.");
                navigate("/");

            } else {

                alert("게시글 작성에 실패했습니다.");
            }

        } catch(error) {

            console.log("게시글 작성용 ajax 통신 실패!!" + error);
        }
    }

    return(
        <div>
            <h2 align="center">익명게시글 작성</h2>

            <br /><br />

            <form action="">
                <table className="form table">
                    <tbody>
                        <tr>
                            <th width="130">제목</th>
                            <td>
                                <input type="text" name="boardTitle" value={ board.boardTitle }
                                                                     onChange={ handleChange } />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea name="boardContent" value={ board.boardContent }
                                                              onChange={ handleChange }></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div align="center">
                    <button type="submit" className="btn btn-outline-primary btn-sm"
                                          onClick={ insertBoard }>
                        작성하기
                    </button>
                    &nbsp;&nbsp;
                    <button type="reset" className="btn btn-outline-secondary btn-sm"
                                         onClick={ () => {
                                            setBoard({boardTitle : "",
                                                      boardContent : ""});
                                         } }>
                        초기화
                    </button>
                </div>

            </form>
        </div>
    );
}

export default BoardEnrollFormComponent;