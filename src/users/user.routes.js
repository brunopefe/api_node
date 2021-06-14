const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ status: 'lista usuarios' })
})

router.post('/', (req, res) => {
    res.json({ status: 'cria usuario' })
})

router.get('/:id', (req, res) => {
    res.json({ status: 'busca usuario id' })
})

router.put('/:id', (req, res) => {
    res.json({ status: 'edita usuario' })
})

router.delete('/:id', (req, res) => {
    res.json({ status: 'deleta usuario' })
})

module.exports = router