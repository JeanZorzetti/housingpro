import { Ratelimit } from '@upstash/ratelimit'
import { getRedis } from './redis'

// 5 requests per IP per 10 minutes for the contact form
export function getContactRatelimit() {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(5, '10 m'),
    prefix: 'housing:contact',
    analytics: true,
  })
}
