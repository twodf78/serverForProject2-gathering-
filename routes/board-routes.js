const { application } = require('express')
var express = require('express')
var router = express.Router()
const BoardController = require('../controller/board-controller')

router.get('/get/suggest', BoardController.getSuggest)
router.get('/get/party', BoardController.getParty)
router.get('/get/user', BoardController.getUser)
router.get('/get/suggest/id', BoardController.getSuggestById)
router.get('/get/suggest/created_by', BoardController.getSuggestByUserId)
router.get('/get/friend', BoardController.getFriend)
router.get('/get/hobby', BoardController.getHobby)
router.get('/get/title', BoardController.getTitle)
router.get('/get/chatting', BoardController.getChatting)

router.post('/post/user', BoardController.postUser)
router.post('/post/suggest', BoardController.postSuggest)
router.post('/post/party', BoardController.postParty)

router.put('/put/user/:id', BoardController.putUser)
router.put('/put/suggest/:id', BoardController.putSuggest)
router.put('/put/party/:user_id', BoardController.putParty)

router.delete('/delete/user', BoardController.deleteUser)
router.delete('/delete/suggest', BoardController.deleteSuggest)
router.delete('/delete/party', BoardController.deleteParty)

// router.get('/', BoardController.getBoards)
// router.post('/', BoardController.insertBoard)
// router.patch('/:boardId', BoardController.updateBoard)
// router.delete('/:boardId', BoardController.deleteBoard)
// router.get('/:boardId/comment', BoardController.getComments)
// router.post('/:boardId/comment', BoardController.insertComment)
// router.patch('/:boardId/comment/:commentId', BoardController.updateComment)
// router.delete('/:boardId/comment/:commentId', BoardController.deleteComment)

module.exports = router