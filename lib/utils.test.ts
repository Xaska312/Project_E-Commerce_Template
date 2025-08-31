import { describe, it } from "node:test"
import assert from "node:assert"

import { cn } from "./utils.ts"

describe("cn", () => {
  it("combines classes", () => {
    const result = cn("foo", "bar")
    assert.strictEqual(result, "foo bar")
  })

  it("filters falsy values", () => {
    const result = cn("foo", false && "bar", undefined, null, "baz")
    assert.strictEqual(result, "foo baz")
  })

  it("merges tailwind classes", () => {
    const result = cn("p-2", "p-4")
    assert.strictEqual(result, "p-4")
  })
})

