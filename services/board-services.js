const pool = require('../database/pool')
const BoardQuery = require('../queries/board-query')

//GET
exports.getSuggest = async () => {
    try {
        let data = await pool.query(BoardQuery.getSuggest)
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.getSuggestById = async (suggest_id) => {
    try {
        let data = await pool.query(BoardQuery.getSuggestById, [suggest_id])
        console.log("service / getSuggestById : "+ data);
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.getSuggestByUserId = async (created_by) => {
    try {
        let data = await pool.query(BoardQuery.getSuggestByUserId, [created_by])
        console.log("service / getSuggestByUserId : "+ data[0]);
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.getParty = async (user_id) => {
    try {
        let data = await pool.query(BoardQuery.getParty, [user_id])
        console.log("service / getParty : "+ data[0]);
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.getHobby = async (name) => {
    try {
        let data = await pool.query(BoardQuery.getHobby, [name])
        console.log("service / getHobby : "+ data);
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.getUser = async (id) => {
    try {
        let data = await pool.query(BoardQuery.getUser, [id])
        console.log("service / getUser : "+ data);
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.getFriend = async (user_id) => {
    try {
        let data = await pool.query(BoardQuery.getFriend, [user_id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.getTitle= async (attractive) => {
    try {
        let data = await pool.query(BoardQuery.getTitle, [attractive])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.getChatting= async (suggest_id) => {
    try {
        let data = await pool.query(BoardQuery.getChatting, [suggest_id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
//POST
exports.postUser = async (id, name ,image,hobby_id,attractive) => {
    try {
        console.log("service / postUser: "+ id, name ,image,hobby_id,attractive);
        let data = await pool.query(BoardQuery.postUser, [id, name ,image,hobby_id,attractive])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.postSuggest = async (startTime, endTime,created_by,title,content,location,capacity,current,hobby_id) => {
    try {
        console.log("service / postSuggest : "+ startTime, endTime,created_by,title,content,location,capacity,current,hobby_id);
        let data = await pool.query(BoardQuery.postSuggest, [startTime, endTime,created_by,title,content,location,capacity,current,hobby_id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.postParty = async (user_id ,suggest_1_id,suggest_2_id,suggest_3_id,suggest_4_id,suggest_5_id) => {
    try {
        console.log("service / postParty: "+ user_id ,suggest_1_id,suggest_2_id,suggest_3_id,suggest_4_id,suggest_5_id);
        let data = await pool.query(BoardQuery.postParty, [user_id ,suggest_1_id,suggest_2_id,suggest_3_id,suggest_4_id,suggest_5_id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

//PUT
exports.putUser = async (id,name ,image,hobby_id,attractive) => {
    try {
        console.log("service / putUser : "+ ( name ,image,hobby_id,attractive,id));
        let data = await pool.query(BoardQuery.putUser, [name ,image,hobby_id,attractive,id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }

}
exports.putSuggest = async (id, startTime, endTime,created_by,title,content,location,capacity,current,hobby_id) => {
    try {
        console.log("service / putSuggest : "+ startTime, endTime,created_by,title,content,location,capacity,current,hobby_id,id);
        let data = await pool.query(BoardQuery.putSuggest, [ startTime, endTime,created_by,title,content,location,capacity,current,hobby_id,id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.putParty = async (user_id ,suggest_1_id,suggest_2_id,suggest_3_id,suggest_4_id,suggest_5_id) => {
    try {
        console.log("service / putParty: "+ suggest_1_id,suggest_2_id,suggest_3_id,suggest_4_id,suggest_5_id,user_id);
        let data = await pool.query(BoardQuery.putParty, [suggest_1_id,suggest_2_id,suggest_3_id,suggest_4_id,suggest_5_id,user_id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}


exports.deleteUser = async (id) => {
    try {
        console.log("service /deleteUser: "+ id);
        let data = await pool.query(BoardQuery.deleteUser, [id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.deleteSuggest = async (id) => {
    try {
        console.log("service / deleteSuggest: "+ id);
        let data = await pool.query(BoardQuery.deleteSuggest, [id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
exports.deleteParty = async (user_id) => {
    try {
        console.log("service / deleteParty: "+ id);
        let data = await pool.query(BoardQuery.deleteParty, [user_id])
        return data[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
// 생략...

// exports.deleteComment = async (boardId, commentId) => {
//     let conn = await pool.getConnection()
//     try {
//         await conn.beginTransaction()

//         let del = await conn.query(BoardQuery.deleteComment, [commentId])
//         if (del[0].affectedRows == 1) {
//             let upd = await conn.query(BoardQuery.minusCommentCnt, [boardId])
//         }
//         await conn.commit()

//         return del[0]
//     } catch (err) {
//         conn.rollback()
//         console.log(err)
//         throw Error(err)
//     } finally {
//         conn.release()
//     }
// }