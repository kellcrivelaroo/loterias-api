import { createAll } from '../http/controllers/register-all.js';
import scheduler from 'node-schedule'

export const schedule = () => {
  let skipCreate = false

  const nightRule = new scheduler.RecurrenceRule()
  // nightRule.tz = 'Etc/UTC'
  nightRule.hour = [20, 21, 22, 23]
  nightRule.minute = [new scheduler.Range(0, 59, 15)]

  scheduler.scheduleJob(nightRule, async() => {
    if (!skipCreate) {
      const { response } = await createAll()

      const results = Object.values(response)

      skipCreate = results.every(res => res.status === 201) || results.every(res => res.status === 409)
    }
  });

  const morningRule = new scheduler.RecurrenceRule()
  // morningRule.tz = 'Etc/UTC'
  morningRule.hour = [6, 10]
  morningRule.minute = [0, 30]

  scheduler.scheduleJob(morningRule, async() => {
    if (!skipCreate) {
      const { response } = await createAll()

      const results = Object.values(response)

      skipCreate = results.every(res => res.status === 201) || results.every(res => res.status === 409)
    }
  });

  const resetRule = new scheduler.RecurrenceRule()
  // resetRule.tz = 'Etc/UTC'
  resetRule.hour = [12, 18]
  resetRule.minute = [0, 30]

  scheduler.scheduleJob(resetRule, () => {
    skipCreate = false
  })
}