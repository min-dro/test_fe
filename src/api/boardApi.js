import axios from "axios";

const BASE_URL = "http://3.35.201.88:2026/api/boards";

// 일반게시글 목록 조회용
const selectBoardListApi = () => {

    const response = axios({
        url: `${BASE_URL}`,
        method: "get"
    });

    return response;
}

// 일반게시글 상세 조회용
const selectBoardApi = (boardNo) => {
    
    const response = axios({
        url: `${BASE_URL}/${boardNo}`,
        method: "get"
    });

    return response;
}

// 일반게시글 작성용
const insertBoardApi = (board) => {

    const response = axios({
        url : `${BASE_URL}`,
        method: "post",
        data : board
    });

    return response;
}

// 일반게시글 삭제용
const deleteBoardApi = (boardNo) => {

    const response = axios({
        url: `${BASE_URL}/${boardNo}`,
        method: "delete"
    });

    return response;
}

export { selectBoardListApi, selectBoardApi, insertBoardApi, deleteBoardApi };