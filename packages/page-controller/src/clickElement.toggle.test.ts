import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { PageController } from './PageController'

/**
 * Regression test for the toggle re-click bug.
 *
 * Clicking a switch used to return a generic "✅ Clicked element (…)" message
 * that echoed the element's PRE-click attributes, so after toggling a switch OFF
 * the feedback still said `aria-checked=true`. Combined with the model having to
 * interpret a bare `aria-checked=false`, this made the agent re-click the same
 * toggle indefinitely. clickElement now reports the authoritative post-click
 * ON/OFF state and the transition.
 */

function stubLayout() {
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
		configurable: true,
		get: () => 100,
	})
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
		configurable: true,
		get: () => 30,
	})
	const rect = { x: 0, y: 0, width: 100, height: 30, top: 0, left: 0, right: 100, bottom: 30 }
	const domRect: DOMRect = { ...rect, toJSON() {} }
	Element.prototype.getBoundingClientRect = () => domRect
	Element.prototype.getClientRects = () =>
		Object.assign([domRect], {
			item: (i: number) => [domRect][i] ?? null,
		}) as unknown as DOMRectList
	document.elementFromPoint = () => null
	HTMLElement.prototype.scrollIntoView = () => {}
}

/** Radix-style controlled switch: flips aria-checked + data-state on click. */
function buildSwitch(id: string, label: string, checked: boolean): HTMLElement {
	const row = document.createElement('div')
	const labelDiv = document.createElement('div')
	labelDiv.id = `${id}-label`
	labelDiv.textContent = label
	const btn = document.createElement('button')
	btn.type = 'button'
	btn.setAttribute('role', 'switch')
	btn.setAttribute('aria-checked', String(checked))
	btn.setAttribute('data-state', checked ? 'checked' : 'unchecked')
	btn.id = id
	btn.setAttribute('aria-labelledby', `${id}-label`)
	btn.addEventListener('click', () => {
		const now = btn.getAttribute('aria-checked') !== 'true'
		btn.setAttribute('aria-checked', String(now))
		btn.setAttribute('data-state', now ? 'checked' : 'unchecked')
	})
	row.appendChild(labelDiv)
	row.appendChild(btn)
	return row
}

describe('clickElement toggle feedback', () => {
	beforeAll(stubLayout)
	afterAll(() => {
		document.body.innerHTML = ''
	})

	it('reports the resulting OFF state and transition after toggling a switch off', async () => {
		document.body.innerHTML = ''
		document.body.appendChild(buildSwitch('mdSwitch', 'Render markdown', true))
		const controller = new PageController({ viewportExpansion: -1 })

		const content = await controller.updateTree()
		const line = content.split('\n').find((l) => l.includes('mdSwitch')) ?? ''
		const index = Number(/\*?\[(\d+)\]/.exec(line)?.[1])
		expect(index).toBeGreaterThanOrEqual(0)

		const result = await controller.clickElement(index)

		expect(result.success).toBe(true)
		expect(result.message).toContain('OFF (disabled)')
		expect(result.message).toContain('aria-checked=false')
		expect(result.message).toContain('from ON to OFF')
		expect(result.message).toContain('Render markdown')
		// The post-click state must reflect reality, never the stale pre-click attribute.
		expect(result.message).not.toContain('aria-checked=true')
		expect(document.getElementById('mdSwitch')?.getAttribute('aria-checked')).toBe('false')
	})

	it('still returns a generic message for non-toggle elements', async () => {
		document.body.innerHTML = ''
		const btn = document.createElement('button')
		btn.type = 'button'
		btn.textContent = 'Save'
		document.body.appendChild(btn)
		const controller = new PageController({ viewportExpansion: -1 })

		const content = await controller.updateTree()
		const index = Number(/\*?\[(\d+)\]/.exec(content)?.[1])
		const result = await controller.clickElement(index)

		expect(result.success).toBe(true)
		expect(result.message).toContain('Clicked element')
		expect(result.message).not.toContain('toggle')
	})
})
