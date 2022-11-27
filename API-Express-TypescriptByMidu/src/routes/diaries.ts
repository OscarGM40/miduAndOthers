import express, { Response } from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils/utils'

const router = express.Router()

router.get('/', (_req, res: Response) => {
  res.send(diaryServices.getEntries())
})

router.get('/:id', (req, res: Response) => {
  const diary = diaryServices.findById(Number(req.params.id))
  if (diary !== null) {
    res.send(diary)
  } else {
    res.sendStatus(404)
  }
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiaryEntry(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json(err.message)
    }
  }
})

export default router
