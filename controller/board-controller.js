const BoardService = require('../services/board-service')

// GET
exports.getSuggest = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        let rows = await BoardService.getSuggest()
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.getSuggestById = async (req, res, next) => {
    console.log("path : "+req.path);

    try {
        let rows = await BoardService.getSuggestById(req.query.data);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.getSuggestByUserId = async (req, res, next) => {
    console.log("path : "+req.path);
    console.log("created_by: " + req.query.data);
    
    try {
        let rows = await BoardService.getSuggestByUserId(req.query.data);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.getParty = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        let rows = await BoardService.getParty(req.query.data);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.getHobby = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        let rows = await BoardService.getParty(req.query.data);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.getUser = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        console.log("id : "+ req.query.data);
        let rows = await BoardService.getUser(req.query.data);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.getFriend = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        console.log("id : "+ req.query.data);
        let rows = await BoardService.getFriend(req.query.data);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.getTitle = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        console.log("attractive : "+ req.query.data);
        let rows = await BoardService.getTitle(req.query.data);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.getChatting = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        console.log("suggest_id : "+ req.query.data);
        let rows = await BoardService.getChatting(req.query.data);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
// POST
exports.postUser = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        let rows = await BoardService.postUser( req.body.name, req.body.image, req.body.hobby_id,req.body.attractive);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.postSuggest = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        let rows = await BoardService.postSuggest(req.body.startTime,req.body.endTime, req.body.created_by,req.body.title, req.body.content, req.body.location,req.body.capacity,req.body.current,req.body.hobby_id);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.postParty = async (req, res, next) => {
    console.log("path : "+req.path);
    try {
        let rows = await BoardService.postParty(req.body.user_id, req.body.suggest_1_id,req.body.suggest_2_id,req.body.suggest_3_id,req.body.suggest_4_id,req.body.suggest_5_id);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}

// PUT
exports.putUser = async (req, res, next) => {

    console.log("id  : "+ req.params.id);

    try {
        let rows = await BoardService.putUser( req.params.id, req.body.name, req.body.image, req.body.hobby_id, req.body.attractive);
        console.log("path : "+req.path);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.putSuggest = async (req, res, next) => {
    try {
        let rows = await BoardService.putSuggest(req.params.id, req.body.startTime,req.body.endTime, req.body.created_by,req.body.title, req.body.content, req.body.location,req.body.capacity,req.body.current,req.body.hobby_id);
        console.log("path : "+req.path);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.putParty = async (req, res, next) => {
    try {
        console.log("user_id: " + req.params.user_id);
        let rows = await BoardService.putParty(req.params.user_id, req.body.suggest_1_id,req.body.suggest_2_id,req.body.suggest_3_id,req.body.suggest_4_id,req.body.suggest_5_id);
        console.log("path : "+req.path);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}

// DELETE
exports.deleteUser = async (req, res, next) => {
    console.log("id : "+ req.params.id);
    try {
        let rows = await BoardService.deleteUser(req.params.id);
        console.log("path : "+req.path);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.deleteSuggest = async (req, res, next) => {
    console.log("id : "+ req.params.id);
    try {
        let rows = await BoardService.deleteSuggest(req.params.id);
        console.log("path : "+req.path);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.deleteParty = async (req, res, next) => {
    console.log("id : "+ req.params.id);
    try {
        let rows = await BoardService.deleteParty(req.params.id);
        console.log("path : "+req.path);
        console.log(rows);
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
    }
}
