import { useState, useCallback } from 'react'

const DAILY_LIMIT = 5
const STORAGE_KEY = 'unhinged_usage'

function getToday() {
  return new Date().toISOString().split('T')[0]
}

function getUsage() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (stored && stored.date === getToday()) {
      return stored.count
    }
  } catch {}
  return 0
}

function setUsage(count) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ date: getToday(), count })
  )
}

export function useTranslationLimit() {
  const [count, setCount] = useState(getUsage)

  const remaining = Math.max(0, DAILY_LIMIT - count)
  const isLimited = count >= DAILY_LIMIT

  const increment = useCallback(() => {
    const newCount = getUsage() + 1
    setUsage(newCount)
    setCount(newCount)
    return newCount <= DAILY_LIMIT
  }, [])

  return { count, remaining, isLimited, increment, limit: DAILY_LIMIT }
}
