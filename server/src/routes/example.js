import { Router } from 'express';

const router = Router();

const testData = [
  {id: '1', foo: 'a', bar: 'b'},
  {id: '2', foo: 'c', bar: 'd'}
]

router.get('/', (req, res) => {
  return res.json(testData);
});

router.get('/:id', (req, res) => {
  const data = testData.find(d => d.id === req.params.id);
  return res.json(data);
});

export default router;
