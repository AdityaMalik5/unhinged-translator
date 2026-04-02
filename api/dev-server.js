import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import handler from './translate.js'

// Load .env manually
const __dirname = dirname(fileURLToPath(import.meta.url))
try {
  const envFile = readFileSync(resolve(__dirname, '..', '.env'), 'utf-8')
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIndex = trimmed.indexOf('=')
    if (eqIndex === -1) continue
    const key = trimmed.slice(0, eqIndex).trim()
    const val = trimmed.slice(eqIndex + 1).trim()
    process.env[key] = val
  }
} catch (e) {
  console.error('Warning: Could not read .env file:', e.message)
}

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  let body = ''
  for await (const chunk of req) body += chunk
  try {
    req.body = JSON.parse(body)
  } catch {
    req.body = {}
  }

  const resAdapter = {
    statusCode: 200,
    status(code) {
      this.statusCode = code
      return this
    },
    json(data) {
      res.writeHead(this.statusCode, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(data))
    },
  }

  await handler(req, resAdapter)
})

server.listen(3001, () => {
  console.log('API dev server running on http://localhost:3001')
})
